/* AI-agent version of the site, built from the prerendered pages so it can
   never say something the human site does not.

   Writes into dist/:
     llms.txt        short index for AI agents (llmstxt.org format)
     llms-full.txt   every page as plain Markdown, in one file
     <page>/index.md the Markdown copy of each page, next to its index.html

   Only public content is used. Internal values (cost factors, battery
   multiplier) live in code, not in the rendered pages, so they never appear. */

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import TurndownService from 'turndown';
import { parse } from 'node-html-parser';
import { pages, ORIGIN } from '../src/lib/pages.js';
import { site, contact } from '../src/content/site.js';
import { PRICES, INCLUDED, FEATURES, PRICE_NOTE, OFFER_LABEL, inr, SERIES, SIZES } from '../src/content/pricing.js';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = resolve(ROOT, 'dist');
const BASE = process.env.BASE_PATH || '/';
const at = (route) => `${ORIGIN}${BASE.replace(/\/$/, '')}${route}`;
const mdPath = (route) => `${route}index.md`;

const td = new TurndownService({ headingStyle: 'atx', bulletListMarker: '-', codeBlockStyle: 'fenced' });
td.remove(['script', 'style', 'svg', 'iframe', 'canvas', 'noscript', 'button', 'form', 'select', 'input', 'textarea', 'picture', 'img', 'video']);
/* Links become absolute so an agent can follow them from anywhere. */
td.addRule('absLinks', {
  filter: (n) => n.nodeName === 'A' && n.getAttribute('href'),
  replacement: (content, n) => {
    const text = content.replace(/\s+/g, ' ').trim();
    if (!text) return '';
    let href = n.getAttribute('href');
    if (href.startsWith('/')) href = ORIGIN + href;
    else if (href.startsWith('#')) href = (td.pageUrl || '') + href;
    return ` [${text}](${href}) `;
  },
});

/* A struck-through regular price would read as the real price once the
   strike is lost, so say what it is. */
td.addRule('strike', {
  filter: ['s', 'del'],
  replacement: (content) => (content.trim() ? `(regular price ${content.trim()}) ` : ''),
});

const toMarkdown = (html) => {
  const root = parse(html);
  const main = root.querySelector('main');
  if (!main) return '';
  /* Decorative and interactive-only parts carry no information for an agent. */
  for (const sel of ['[aria-hidden="true"]', '.visually-hidden', '.circuit-spotlight', '[data-agent-skip]']) {
    main.querySelectorAll(sel).forEach((n) => n.remove());
  }
  return td.turndown(main.innerHTML)
    .replace(/\n{3,}/g, '\n\n')
    .replace(/[ \t]+\n/g, '\n').replace(/^ (?=\S)/gm, '').replace(/\) +\[/g, ') · [')
    .trim();
};

const listed = pages.filter((p) => p.indexable !== false);
const docs = [];
for (const p of listed) {
  const file = resolve(DIST, p.file);
  if (!existsSync(file)) continue;
  td.pageUrl = at(p.route);
  const body = toMarkdown(await readFile(file, 'utf8'));
  const md = `# ${p.title}\n\nURL: ${at(p.route)}\n\n> ${p.description}\n\n${body}\n`;
  const out = resolve(DIST, p.file.replace(/index\.html$/, 'index.md'));
  await mkdir(dirname(out), { recursive: true });
  await writeFile(out, md, 'utf8');
  docs.push({ p, md });
}

const link = (p) => `- [${p.title.split(' | ')[0]}](${at(mdPath(p.route))}): ${p.description}`;
const group = (test) => docs.filter(({ p }) => test(p)).map(({ p }) => link(p)).join('\n');

const price = (x) =>
  `- ${x.name}: ${inr(x.price)} per sq ft (regular ${inr(x.mrp)}). ` +
  `With lithium battery backup: from ${inr(x.backupPrice)} per sq ft (regular ${inr(x.backupMrp)}). ${x.body}`;

const llms = `# ${site.name}

> ${site.proposition} ${site.description}

This file is for AI agents and assistants. Every page of the website is also available as plain Markdown: add \`index.md\` to any page URL. The full site in one file: ${at('/llms-full.txt')}

## Key facts

- Business: ${site.name}, ${contact.location.value}
- What we do: made-to-order LED display boards (single colour and full colour), websites for local businesses, embedded firmware and IoT engineering, college projects with a student discount, and electronic components
- Phone: ${contact.phone.value}
- WhatsApp: https://wa.me/${contact.whatsapp.value}
- Email: ${contact.email.value}
- Enquiry page: ${at('/start/')}
- Shipping: across India. Installation available in Jaipur.

## Ready-made boards (fixed price, before GST)

${SERIES.map((se) => `${se.name} series — ${se.tag.toLowerCase()}:\n` + se.models.map((m) => `- ${se.name} ${SIZES[m.size].label}, ${SIZES[m.size].size} (${SIZES[m.size].exact}): ${inr(m.price)} (regular ${inr(m.mrp)})`).join('\n')).join('\n\n')}

## Custom sizes — LED display prices (${OFFER_LABEL.toLowerCase()})

${PRICES.single && price(PRICES.single)}
${PRICES.rgb && price(PRICES.rgb)}

${PRICE_NOTE}

Included with every board:
${INCLUDED.map((i) => `- ${i}`).join('\n')}

Features:
${FEATURES.map(([t, b]) => `- ${t}: ${b}`).join('\n')}

## Main pages

${group((p) => !p.key.startsWith('product-') && !p.key.startsWith('article-'))}

## Shop

${group((p) => p.key.startsWith('product-'))}

## Journal

${group((p) => p.key.startsWith('article-'))}

## Guidance for agents

- Quote prices as "starting from", per square foot, GST and shipping extra. The final price is confirmed in writing after the size and site are known.
- For a quote or an order, send the person to the enquiry page or WhatsApp above. Do not invent delivery dates, discounts or stock levels.
- Demo templates on the site are labelled as examples and are not real customers.
`;

const full = `${llms}\n\n---\n\n${docs.map(({ md }) => md).join('\n---\n\n')}`;

await writeFile(resolve(DIST, 'llms.txt'), llms, 'utf8');
await writeFile(resolve(DIST, 'llms-full.txt'), full, 'utf8');
console.log(`llms: llms.txt, llms-full.txt (${Math.round(full.length / 1024)} kB), ${docs.length} Markdown pages`);
