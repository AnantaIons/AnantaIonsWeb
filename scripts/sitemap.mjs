/* sitemap.xml + robots.txt, generated from the page registry so they cannot
   fall out of step with the routes that actually exist. */

import { writeFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { pages, ORIGIN } from '../src/lib/pages.js';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const today = new Date().toISOString().slice(0, 10);

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...pages.map((p) => [
    '  <url>',
    `    <loc>${ORIGIN}${p.route}</loc>`,
    `    <lastmod>${today}</lastmod>`,
    `    <priority>${p.priority}</priority>`,
    '  </url>',
  ].join('\n')),
  '</urlset>',
  '',
].join('\n');

const robots = `# ANANTA IONS
User-agent: *
Allow: /

Sitemap: ${ORIGIN}/sitemap.xml
`;

await writeFile(resolve(ROOT, 'dist/sitemap.xml'), xml, 'utf8');
await writeFile(resolve(ROOT, 'dist/robots.txt'), robots, 'utf8');
console.log(`sitemap: ${pages.length} urls`);
