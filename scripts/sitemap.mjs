/* sitemap.xml + robots.txt, generated from the page registry so they cannot
   fall out of step with the routes that actually exist. */

import { writeFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { pages, ORIGIN } from '../src/lib/pages.js';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const today = new Date().toISOString().slice(0, 10);
const BASE = process.env.BASE_PATH || '/';
const at = (route) => `${ORIGIN}${BASE.replace(/\/$/, '')}${route}`;

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...pages.filter((p) => p.indexable !== false).map((p) => [
    '  <url>',
    `    <loc>${at(p.route)}</loc>`,
    `    <lastmod>${today}</lastmod>`,
    `    <priority>${p.priority}</priority>`,
    '  </url>',
  ].join('\n')),
  '</urlset>',
  '',
].join('\n');

const INDEXABLE = process.env.INDEXABLE === 'true';
const robots = INDEXABLE
  ? `# ANANTA IONS
User-agent: *
Allow: /

Sitemap: ${at('/sitemap.xml')}
`
  : `# ANANTA IONS — preview deployment, not for indexing.
# Set INDEXABLE=true at build time to open this up for the real launch.
User-agent: *
Disallow: /
`;

await writeFile(resolve(ROOT, 'dist/sitemap.xml'), xml, 'utf8');
await writeFile(resolve(ROOT, 'dist/robots.txt'), robots, 'utf8');
console.log(`sitemap: ${pages.filter((p) => p.indexable !== false).length} urls`);
