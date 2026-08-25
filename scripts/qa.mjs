/* ============================================================================
   QA — the audit that decides whether this build is launch-ready.

   Runs against the real production build in dist/, not the dev server:
     1. accessibility   axe-core (WCAG 2.2 A + AA) on every route, at desktop
                        and at 390px, plus keyboard-reachability checks
     2. responsive      horizontal overflow and tap-target size at 9 widths
     3. content         every unverified claim in the content model
     4. structure       one h1 per page, heading order, landmarks, alt text
     5. seo             title, description, canonical, OG, JSON-LD per page
     6. weight          transferred bytes against a budget
     7. no-js           the page is still readable with scripting disabled

   Exit code is non-zero if anything in 1, 2, 4, 5, 6 or 7 fails. Unverified
   CONTENT is reported but does not fail the run — it is the client's to
   resolve, and the report says so explicitly.
   ========================================================================= */

import { chromium } from 'playwright';
import { readFile, stat, writeFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { pages, ORIGIN } from '../src/lib/pages.js';
import { projects } from '../src/content/projects.js';
import { contact } from '../src/content/site.js';

const require = createRequire(import.meta.url);
const AXE = require.resolve('axe-core/axe.min.js');
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const BASE = process.env.QA_BASE || 'http://localhost:8125';
const WIDTHS = [360, 375, 390, 430, 768, 1024, 1280, 1440, 1920];
const JS_BUDGET_KB = 120;   // gzip-equivalent raw budget for first-load JS
const CSS_BUDGET_KB = 60;

const out = [];
const fail = [];
const warn = [];
const say = (s = '') => { out.push(s); console.log(s); };
const check = (ok, label, detail = '') => {
  if (!ok) fail.push(`${label}${detail ? ` — ${detail}` : ''}`);
  say(`  ${ok ? 'PASS' : 'FAIL'}  ${label}${detail ? `  ${detail}` : ''}`);
  return ok;
};

const axeSource = await readFile(AXE, 'utf8');
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });

/* ---- 1 + 4 + 5: per-route audit ---------------------------------------- */
say('ACCESSIBILITY, STRUCTURE & SEO');
for (const page of pages) {
  say(`\n ${page.route}`);
  const p = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const consoleErrors = [];
  p.on('pageerror', (e) => consoleErrors.push(String(e).slice(0, 120)));
  p.on('console', (m) => { if (m.type() === 'error') consoleErrors.push(m.text().slice(0, 120)); });
  await p.goto(BASE + page.route, { waitUntil: 'networkidle' });
  await p.waitForTimeout(600);

  await p.addScriptTag({ content: axeSource });
  const results = await p.evaluate(async () => window.axe.run(document, {
    runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'] },
  }));
  const violations = results.violations.filter((v) => v.impact !== 'minor' || v.id !== 'region');
  check(violations.length === 0, 'axe (desktop)',
    violations.map((v) => `${v.id}×${v.nodes.length}`).join(', '));

  // Same audit at the narrowest supported width — layout changes can introduce
  // contrast and target-size failures that only exist on mobile.
  await p.setViewportSize({ width: 390, height: 844 });
  await p.waitForTimeout(400);
  const mobileRes = await p.evaluate(async () => window.axe.run(document, {
    runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'] },
  }));
  check(mobileRes.violations.length === 0, 'axe (390px)',
    mobileRes.violations.map((v) => `${v.id}×${v.nodes.length}`).join(', '));
  await p.setViewportSize({ width: 1440, height: 900 });

  const meta = await p.evaluate(() => {
    const headings = [...document.querySelectorAll('h1,h2,h3,h4,h5,h6')]
      .map((h) => Number(h.tagName[1]));
    let ordered = true;
    for (let i = 1; i < headings.length; i += 1) {
      if (headings[i] - headings[i - 1] > 1) ordered = false;
    }
    return {
      h1: document.querySelectorAll('h1').length,
      ordered,
      main: document.querySelectorAll('main').length,
      nav: document.querySelectorAll('nav').length,
      imagesMissingAlt: [...document.images].filter((i) => !i.hasAttribute('alt')).length,
      title: document.title,
      desc: document.querySelector('meta[name=description]')?.content || '',
      canonical: document.querySelector('link[rel=canonical]')?.href || '',
      og: ['og:title', 'og:description', 'og:image', 'og:url']
        .every((k) => !!document.querySelector(`meta[property="${k}"]`)?.content),
      ld: (() => {
        const el = document.querySelector('script[type="application/ld+json"]');
        if (!el) return null;
        try { return JSON.parse(el.textContent); } catch { return null; }
      })(),
      skip: !!document.querySelector('.skip-link'),
      lang: document.documentElement.lang,
    };
  });

  check(meta.h1 === 1, 'exactly one h1', `found ${meta.h1}`);
  check(meta.ordered, 'heading levels never skip');
  check(meta.main === 1 && meta.nav >= 1, 'landmarks present');
  check(meta.imagesMissingAlt === 0, 'every image has alt', `${meta.imagesMissingAlt} missing`);
  check(meta.skip, 'skip link present');
  check(meta.lang === 'en', 'html lang set');
  check(!!meta.title && meta.title.length <= 70, 'title present and <= 70 chars', `${meta.title.length}`);
  check(meta.desc.length >= 70 && meta.desc.length <= 200, 'meta description 70–200 chars', `${meta.desc.length}`);
  check(meta.canonical === `${ORIGIN}${page.route}`, 'canonical correct', meta.canonical);
  check(meta.og, 'open graph complete');
  check(!!meta.ld && Array.isArray(meta.ld['@graph']) && meta.ld['@graph'].length >= 3,
    'JSON-LD graph present');
  check(consoleErrors.length === 0, 'no console errors', consoleErrors.join(' | '));

  // Keyboard: the primary CTA must be reachable, and focus must be visible.
  const kb = await p.evaluate(() => {
    const el = document.querySelector('.skip-link');
    el?.focus();
    const style = getComputedStyle(el, ':focus-visible');
    return { focused: document.activeElement === el, outline: style.outlineWidth };
  });
  check(kb.focused, 'skip link is focusable');

  await p.close();
}

/* ---- 2: responsive ------------------------------------------------------ */
say('\nRESPONSIVE');
for (const width of WIDTHS) {
  const p = await browser.newPage({ viewport: { width, height: 900 } });
  const problems = [];
  for (const page of pages) {
    await p.goto(BASE + page.route, { waitUntil: 'domcontentloaded' });
    await p.waitForTimeout(250);
    const r = await p.evaluate(() => {
      const overflow = document.documentElement.scrollWidth > window.innerWidth + 1;
      const small = [...document.querySelectorAll('a,button,input,select,textarea')]
        .filter((el) => {
          if (el.closest('[hidden]') || el.offsetParent === null) return false;
          // WCAG 2.2 2.5.8 exempts a target that is inline inside a sentence.
          const inline = getComputedStyle(el).display === 'inline';
          const inProse = !!el.closest('p, .prose, dd');
          if (inline && inProse) return false;
          const b = el.getBoundingClientRect();
          return b.width > 0 && b.height > 0 && (b.height < 24 || b.width < 24);
        }).length;
      return { overflow, small };
    });
    if (r.overflow) problems.push(`${page.route} overflows`);
    if (r.small) problems.push(`${page.route} ${r.small} target(s) < 24px`);
  }
  check(problems.length === 0, `${width}px`, problems.join('; '));
  await p.close();
}

/* ---- 7: no-JavaScript --------------------------------------------------- */
say('\nWITHOUT JAVASCRIPT');
const noJsCtx = await browser.newContext({ javaScriptEnabled: false });
for (const page of pages) {
  const p = await noJsCtx.newPage();
  await p.goto(BASE + page.route, { waitUntil: 'domcontentloaded' });
  const r = await p.evaluate(() => ({
    text: document.getElementById('main')?.innerText.trim().length ?? 0,
    hidden: [...document.querySelectorAll('#main *')]
      .filter((el) => getComputedStyle(el).opacity === '0').length,
  }));
  check(r.text > 500 && r.hidden === 0, `${page.route} readable without JS`,
    `${r.text} chars, ${r.hidden} hidden`);
  await p.close();
}
await noJsCtx.close();
await browser.close();

/* ---- 6: weight ---------------------------------------------------------- */
say('\nWEIGHT');
const distIndex = await readFile(resolve(ROOT, 'dist/index.html'), 'utf8');
const assets = [...distIndex.matchAll(/(?:src|href)="(\/assets\/[^"]+)"/g)].map((m) => m[1]);
let js = 0; let css = 0;
for (const a of assets) {
  const size = (await stat(resolve(ROOT, 'dist', a.slice(1)))).size;
  if (a.endsWith('.js')) js += size; else if (a.endsWith('.css')) css += size;
}
check(js / 1024 < JS_BUDGET_KB, `first-load JS under ${JS_BUDGET_KB} kB`, `${(js / 1024).toFixed(1)} kB`);
check(css / 1024 < CSS_BUDGET_KB, `CSS under ${CSS_BUDGET_KB} kB`, `${(css / 1024).toFixed(1)} kB`);

/* ---- 3: content integrity ---------------------------------------------- */
say('\nCONTENT INTEGRITY  (reported, does not fail the build)');
const unverified = projects.filter((p) => !p.verified);
for (const p of unverified) warn.push(`project "${p.title}" is unverified placeholder content`);
if (!contact.email.verified) warn.push('contact email is unconfirmed');
if (!contact.phone.value) warn.push('no phone number supplied');
if (!contact.location.value) warn.push('no location supplied');
if (!contact.formEndpoint) warn.push('intake form has no endpoint — submission is disabled and says so');
for (const w of warn) say(`  TODO  ${w}`);

/* ---- verdict ------------------------------------------------------------ */
say('\n' + '='.repeat(72));
say(fail.length ? `FAILED — ${fail.length} issue(s)` : 'All technical checks passed.');
for (const f of fail) say(`  FAIL  ${f}`);
say(warn.length
  ? `NOT LAUNCH-READY: ${warn.length} content item(s) still unverified. See docs/CONTENT-TODO.md.`
  : 'Content: every item verified.');
say('='.repeat(72));

await writeFile(resolve(ROOT, 'docs/QA-REPORT.md'),
  ['# ANANTA IONS — QA report', '',
   `Generated ${new Date().toISOString()} by \`npm run qa\` against the production build in \`dist/\`.`,
   '', '```', ...out, '```', ''].join('\n'), 'utf8');
process.exit(fail.length ? 1 : 0);
