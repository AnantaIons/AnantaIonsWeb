/* Bundles the whole site into ONE self-contained .html file — every page,
   every style, the typeface and the logo inlined. No server, no network, no
   build: open it from a file:// URL, email it, or drop it on any host.

   Output: dist-preview/ananta-ions.html
   Run:    npm run single */

import { build } from 'vite';
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const TMP = resolve(ROOT, '.preview-tmp');
const OUT_DIR = resolve(ROOT, 'dist-preview');
const OUT = resolve(OUT_DIR, 'ananta-ions.html');

const dataUri = async (path, mime) =>
  `data:${mime};base64,${(await readFile(resolve(ROOT, path))).toString('base64')}`;

console.log('single-file: building');
await build({
  root: ROOT,
  logLevel: 'warn',
  build: {
    outDir: TMP,
    emptyOutDir: true,
    cssCodeSplit: false,
    assetsInlineLimit: 100_000_000,   // inline every asset the bundler sees
    rollupOptions: {
      input: resolve(ROOT, 'preview.html'),
      output: { inlineDynamicImports: true, entryFileNames: 'app.js', assetFileNames: '[name][extname]' },
    },
  },
});

const { readdir } = await import('node:fs/promises');
const emitted = await readdir(TMP);
const pick = (ext) => {
  const name = emitted.find((f) => f.endsWith(ext));
  if (!name) throw new Error(`single-file: the build emitted no ${ext} file`);
  return readFile(resolve(TMP, name), 'utf8');
};
let css = await pick('.css');
let js = await pick('.js');

// Inline the typeface and the mark so the file has no external references.
const latin = await dataUri('public/fonts/inter-latin-var.woff2', 'font/woff2');
const logo = await dataUri('public/logo.png', 'image/png');

/* The stylesheet references fonts relative to itself ("../fonts/…"), so
   substituting only "/fonts/…" left the "../" in front of the data URI and the
   face never loaded. Match the whole url(), whatever prefix it carries. */
css = css.replace(
  /url\(['"]?[^'")]*inter-latin-var\.woff2['"]?\)/g,
  `url(${latin})`,
);
js = js.replaceAll('"/logo.png"', JSON.stringify(logo));

/* This substitution has broken silently once already, when the stylesheet
   moved to relative font paths and the old replace left "../" in front of the
   data URI. Fail the build rather than ship a file whose type falls back. */
if (!css.includes('url(data:font/woff2') || /url\([^)]*\.\.data:/.test(css)) {
  throw new Error('single-file: the font was not inlined cleanly — check the url() rewrite');
}

const html = `<title>ANANTA IONS</title>
<meta name="color-scheme" content="dark">
<style>
${css}
/* The single-file build has no document chrome of its own — the page below is
   the site exactly as it is served. */
html, body { background: var(--surface-base); }
</style>
<div id="root">
  <noscript>
    <h1>ANANTA IONS</h1>
    <p>Engineering intelligence between silicon and the real world. We engineer
    electronics, embedded systems, firmware, connectivity and intelligent products
    — from architecture and prototype to real-world deployment.</p>
    <p>This single-file preview needs JavaScript. The deployed site does not: it is
    prerendered, and every page is readable without it. To reach an engineer:
    <a href="mailto:ananta.ions@outlook.com">ananta.ions@outlook.com</a></p>
  </noscript>
</div>
<script type="module">
${js}
</script>
`;

await mkdir(OUT_DIR, { recursive: true });
await writeFile(OUT, html, 'utf8');
await rm(TMP, { recursive: true, force: true });
console.log(`single-file: ${OUT}  ${(Buffer.byteLength(html) / 1024 / 1024).toFixed(2)} MB`);
