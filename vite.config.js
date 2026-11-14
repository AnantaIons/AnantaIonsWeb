import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { pages } from './src/lib/pages.js';

/* Multi-page build: every route is a real HTML document with its own <head>,
   so metadata and structured data are per-page and the prerender step has a
   file to write into. No client-side router, no runtime transform. */

/* BASE_PATH is the deploy prefix: "/" for a domain root (the default), or
   "/AnantaIonsWeb/" for a GitHub Pages project site. Vite surfaces it to the
   app as import.meta.env.BASE_URL, which src/lib/paths.js resolves links
   against — identically in the browser bundle and the prerender pass. */
const BASE_PATH = process.env.BASE_PATH || '/';

export default defineConfig({
  appType: 'mpa',
  base: BASE_PATH,
  /* Preact through the compat layer. The site's interactivity is a disclosure
     menu, a tab list, a filter and a form — that does not justify 49 kB gzip
     of framework. Same API, same hooks, same JSX; roughly a quarter of the
     bytes on the critical path. */
  resolve: {
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat',
      'react-dom/client': 'preact/compat/client',
      'react-dom/server': 'preact/compat/server',
      'react/jsx-runtime': 'preact/jsx-runtime',
    },
  },
  build: {
    target: 'es2020',
    cssTarget: 'chrome100',
    modulePreload: { polyfill: false },
    assetsInlineLimit: 2048,
    rollupOptions: {
      input: Object.fromEntries(pages.map((p) => [p.key, resolve(import.meta.dirname, p.file)])),
    },
  },
  plugins: [react()],
});
