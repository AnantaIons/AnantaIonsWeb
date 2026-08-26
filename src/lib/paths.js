/* Every internal URL on the site goes through here.

   The site is authored with root-absolute paths ("/projects/"), which is what
   you want at a domain root. Served from a subdirectory — a GitHub Pages
   project site at /AnantaIonsWeb/, a staging prefix — those paths point at the
   wrong place and the page loads with no styles, no fonts and dead navigation.

   Vite exposes the deploy prefix as import.meta.env.BASE_URL, set from
   BASE_PATH at build time and identical in the browser bundle and the
   prerender pass, so a link resolves the same before and after hydration.
   Default is "/", so a domain-root deploy behaves exactly as before.

   Fonts are the one exception: their CSS url() is written relative to the
   emitted stylesheet ("../fonts/…"), which lands correctly at any base
   without needing this. */

/* Two ways in, because this module is loaded from two kinds of process.
   Vite defines import.meta.env.BASE_URL in the browser bundle and in the
   prerender pass. The plain-Node build scripts (pages.mjs, sitemap.mjs) are
   not processed by Vite at all, so there import.meta.env is undefined and the
   prefix has to come from BASE_PATH directly — without this, anything those
   scripts emit into the page shell (the JSON-LD graph) quietly loses the
   prefix while every link rendered through the bundle keeps it. */
const BASE =
  (typeof import.meta !== 'undefined' && import.meta.env?.BASE_URL) ||
  (typeof process !== 'undefined' && process.env && process.env.BASE_PATH) ||
  '/';
const ROOT = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE;

/** Resolve a root-absolute site path against the deploy base. */
export function path(p) {
  if (typeof p !== 'string' || !p.startsWith('/')) return p;
  return `${ROOT}${p}`;
}

export { BASE };
