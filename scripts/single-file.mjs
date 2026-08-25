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
const latinExt = await dataUri('public/fonts/inter-latin-ext-var.woff2', 'font/woff2');
const logo = await dataUri('public/logo.png', 'image/png');

css = css
  .replaceAll('/fonts/inter-latin-var.woff2', latin)
  .replaceAll('/fonts/inter-latin-ext-var.woff2', latinExt);
js = js.replaceAll('"/logo.png"', JSON.stringify(logo));

const html = `<title>ANANTA IONS</title>
<meta name="color-scheme" content="dark">
<style>
${css}
/* The single-file build has no document chrome of its own — the page below is
   the site exactly as it is served. */
html, body { background: var(--surface-base); }
</style>
<div id="root"></div>
<script type="module">
${js}
</script>
`;

await mkdir(OUT_DIR, { recursive: true });
await writeFile(OUT, html, 'utf8');
await rm(TMP, { recursive: true, force: true });
console.log(`single-file: ${OUT}  ${(Buffer.byteLength(html) / 1024 / 1024).toFixed(2)} MB`);
