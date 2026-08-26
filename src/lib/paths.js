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

const BASE = (typeof import.meta !== 'undefined' && import.meta.env?.BASE_URL) || '/';
const ROOT = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE;

/** Resolve a root-absolute site path against the deploy base. */
export function path(p) {
  if (typeof p !== 'string' || !p.startsWith('/')) return p;
  return `${ROOT}${p}`;
}

export { BASE };
