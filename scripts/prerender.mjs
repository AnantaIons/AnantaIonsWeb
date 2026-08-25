/* Prerender: renders every page to static HTML at build time.

   This is what makes the site legible to a crawler, an AI agent, or a visitor
   whose JavaScript never arrives — the content is in the document, not
   assembled after load. It also removes React from the critical rendering
   path, so the largest contentful paint is plain HTML and CSS.

   The client then hydrates the same markup. */

import { build } from 'vite';
import { readFile, writeFile, rm } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { pages } from '../src/lib/pages.js';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SSR_OUT = resolve(ROOT, '.ssr-tmp');

console.log('prerender: building server bundle');
await build({
  root: ROOT,
  logLevel: 'warn',
  build: {
    ssr: resolve(ROOT, 'src/entry-server.jsx'),
    outDir: SSR_OUT,
    emptyOutDir: true,
    rollupOptions: { output: { entryFileNames: 'entry-server.js' } },
  },
});

const { render } = await import(pathToFileURL(resolve(SSR_OUT, 'entry-server.js')).href);

let injected = 0;
for (const page of pages) {
  const file = resolve(ROOT, 'dist', page.file);
  const shell = await readFile(file, 'utf8');
  if (!shell.includes('<!--app-->')) {
    throw new Error(`prerender: no <!--app--> marker in ${page.file}`);
  }
  const markup = render(page.component);
  await writeFile(file, shell.replace('<!--app-->', markup), 'utf8');
  injected += 1;
  console.log(`prerender: ${page.file}  ${(markup.length / 1024).toFixed(1)} kB of HTML`);
}

await rm(SSR_OUT, { recursive: true, force: true });
console.log(`prerender: ${injected} pages rendered`);
