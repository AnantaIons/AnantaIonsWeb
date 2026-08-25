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
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
  .replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const html = (page) => {
  const url = `${ORIGIN}${page.route}`;
  const graph = JSON.stringify(graphFor(page, { capabilities }), null, 2)
    .replace(/</g, '\\u003c');
  const depth = page.route === '/' ? '' : '../'.repeat(page.route.split('/').filter(Boolean).length);
  return `<!doctype html>
<html lang="en" class="no-js" data-page="${page.key}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.description)}">
<link rel="canonical" href="${url}">
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

<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/logo.png">

<link rel="preload" href="/fonts/inter-latin-var.woff2" as="font" type="font/woff2" crossorigin>

<script type="application/ld+json">
${graph}
</script>
</head>
<body>
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
