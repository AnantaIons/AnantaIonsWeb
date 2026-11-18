/* Generates the per-page HTML entries from src/lib/pages.js, so <head>
   metadata, canonicals, Open Graph and JSON-LD cannot drift between pages.
   Runs before `vite build`. */

import { mkdir, writeFile } from 'node:fs/promises';
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { pages, ORIGIN } from '../src/lib/pages.js';
import { graphFor } from '../src/lib/schema.js';
import { capabilities } from '../src/content/capabilities.js';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
/* Must match vite.config.js — these <head> links are written by hand, so Vite
   does not get a chance to prefix them. */
const BASE = process.env.BASE_PATH || '/';
/* A preview deployment is reachable by anyone with the link — GitHub Pages on
   a public repo cannot be otherwise — but it should not be discoverable.
   Until INDEXABLE=true, every page asks search engines to stay away and
   robots.txt disallows everything. Flip it for the real launch, once the
   placeholder projects are replaced and the intake form submits. */
const INDEXABLE = process.env.INDEXABLE === 'true';
/* Time-of-day and season colour script, inlined so it runs before first paint. */
const SKY = readFileSync(resolve(ROOT, 'scripts/sky.js'), 'utf8')
  .replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|\s)\/\/.*$/gm, '').replace(/\n\s*/g, ' ').trim();
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
<html lang="en" class="no-js" data-page="${page.key}"${page.props ? ` data-props='${JSON.stringify(page.props).replace(/'/g, "&#39;")}'` : ''}>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.description)}">
<link rel="canonical" href="${url}">${!INDEXABLE || page.indexable === false ? '\n<meta name="robots" content="noindex, nofollow">' : ''}
<meta name="theme-color" content="#000000">
<meta name="color-scheme" content="light dark">
<script>${SKY}</script>

<meta property="og:type" content="website">
<meta property="og:site_name" content="ANANTA IONS">
<meta property="og:title" content="${esc(page.title)}">
<meta property="og:description" content="${esc(page.description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${ORIGIN}${asset('/og-image.png')}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="ANANTA IONS — electronics, firmware and LED display systems from Jaipur.">
<meta property="og:locale" content="en">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(page.title)}">
<meta name="twitter:description" content="${esc(page.description)}">
<meta name="twitter:image" content="${ORIGIN}${asset('/og-image.png')}">

<link rel="icon" href="${asset('/favicon.svg')}" type="image/svg+xml">
<link rel="apple-touch-icon" href="${asset('/logo.png')}">

<link rel="preload" href="${asset('/fonts/manrope-latin-var.woff2')}" as="font" type="font/woff2" crossorigin>

<script type="application/ld+json">
${graph}
</script>
</head>
<body>
<div id="root"><!--app--></div>
<script type="module" src="${depth}src/entries/${page.entry || page.key}.jsx"></script>
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
