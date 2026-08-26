/* Generates the per-page HTML entries from src/lib/pages.js, so <head>
   metadata, canonicals, Open Graph and JSON-LD cannot drift between pages.
   Runs before `vite build`. */

import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { pages, ORIGIN } from '../src/lib/pages.js';
import { graphFor } from '../src/lib/schema.js';
import { capabilities } from '../src/content/capabilities.js';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
/* Must match vite.config.js — these <head> links are written by hand, so Vite
   does not get a chance to prefix them. */
const BASE = process.env.BASE_PATH || '/';
const asset = (p) => `${BASE.replace(/\/$/, '')}${p}`;
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
  .replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const html = (page) => {
  const url = `${ORIGIN}${asset(page.route)}`;
  const graph = JSON.stringify(graphFor(page, { capabilities }), null, 2)
    .replace(/</g, '\\u003c');
  /* Depth of the emitted file, not of the route: 404.html sits at the root
     even though its route has a segment. */
  const depth = '../'.repeat(page.file.split('/').length - 1);
  return `<!doctype html>
<html lang="en" class="no-js" data-page="${page.key}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.description)}">
<link rel="canonical" href="${url}">${page.indexable === false ? '\n<meta name="robots" content="noindex">' : ''}
<meta name="theme-color" content="#050505">
<meta name="color-scheme" content="dark">

<meta property="og:type" content="website">
<meta property="og:site_name" content="ANANTA IONS">
<meta property="og:title" content="${esc(page.title)}">
<meta property="og:description" content="${esc(page.description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${ORIGIN}/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="ANANTA IONS — engineering intelligence between silicon and the real world.">
<meta property="og:locale" content="en">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(page.title)}">
<meta name="twitter:description" content="${esc(page.description)}">
<meta name="twitter:image" content="${ORIGIN}/og-image.png">

<link rel="icon" href="${asset('/favicon.svg')}" type="image/svg+xml">
<link rel="apple-touch-icon" href="${asset('/logo.png')}">

<link rel="preload" href="${asset('/fonts/inter-latin-var.woff2')}" as="font" type="font/woff2" crossorigin>

<script type="application/ld+json">
${graph}
</script>
</head>
<body>
<script>
/* Brand intro. Runs before the rest of the body parses, so the mark is on
   screen immediately rather than after the bundle arrives — a loader that
   appears late is worse than no loader.

   Deliberately narrow: one rotation, back where it started, then out. It
   plays once per session (every page here is a real document, so playing it
   on each navigation would be a tax, not a flourish), never when the visitor
   asks for reduced motion, and never without JavaScript — the page is
   prerendered and already readable underneath. */
(function () {
  try {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (sessionStorage.getItem('ai-intro')) return;
    sessionStorage.setItem('ai-intro', '1');
  } catch (e) { /* storage blocked: play it, it is only a second */ }
  var el = document.createElement('div');
  el.className = 'brand-load';
  el.setAttribute('aria-hidden', 'true');
  el.innerHTML = '<img src="' + ${JSON.stringify(asset('/logo.png'))} + '" width="76" height="76" alt="" decoding="sync">';
  document.body.appendChild(el);
  setTimeout(function () {
    el.classList.add('is-out');
    setTimeout(function () { el.remove(); }, 420);
  }, 920);
})();
</script>
<div id="root"><!--app--></div>
<script type="module" src="${depth}src/entries/${page.key}.jsx"></script>
</body>
</html>
`;
};

for (const page of pages) {
  const out = resolve(ROOT, page.file);
  await mkdir(dirname(out), { recursive: true });
  await writeFile(out, html(page), 'utf8');
  console.log(`page  ${page.file}`);
}
