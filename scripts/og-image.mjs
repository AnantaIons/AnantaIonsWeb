/* Renders the 1200x630 Open Graph card from the site's own tokens, so the
   social preview cannot drift from the brand. Run: node scripts/og-image.mjs */

import { launchBrowser } from './browser.mjs';
import { readFile, writeFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const tokens = await readFile(resolve(ROOT, 'src/styles/tokens.css'), 'utf8');
const font = await readFile(resolve(ROOT, 'public/fonts/inter-latin-var.woff2'));
const logo = await readFile(resolve(ROOT, 'public/logo.png'));

const html = `<!doctype html><meta charset="utf-8"><style>
@font-face{font-family:'Inter var';src:url(data:font/woff2;base64,${font.toString('base64')}) format('woff2');font-weight:100 900}
${tokens}
*{box-sizing:border-box;margin:0}
body{width:1200px;height:630px;background:
  radial-gradient(900px 450px at 78% 10%, var(--hardware-wash), transparent 62%), var(--ai-black);
  font-family:'Inter var';color:var(--ai-txt);display:flex;flex-direction:column;
  justify-content:space-between;padding:64px 72px;overflow:hidden}
.mark{display:flex;align-items:center;gap:14px}
.mark img{width:42px;height:42px}
.mark span{font-size:24px;font-weight:700;letter-spacing:.14em;color:#fff}
.mark b{color:var(--ai-gold);font-weight:700}
h1{font-size:82px;line-height:.98;letter-spacing:-.035em;font-weight:700;color:#fff;max-width:16ch}
h1 em{font-style:normal;color:var(--ai-gold)}
.foot{display:flex;align-items:center;gap:18px;font-size:19px;font-weight:700;
  letter-spacing:.16em;text-transform:uppercase;color:var(--ai-copper-txt)}
.node{width:12px;height:12px;background:var(--ai-gold)}
.rail{flex:1;height:1px;background:linear-gradient(90deg,var(--ai-copper),var(--ai-gold))}
</style>
<div class="mark"><img src="data:image/png;base64,${logo.toString('base64')}"><span>ANANTA <b>IONS</b></span></div>
<h1>Engineering <em>intelligence</em> between silicon and the real world.</h1>
<div class="foot"><span class="node"></span>Electronics &amp; embedded product engineering<span class="rail"></span></div>`;

const b = await launchBrowser();
const p = await b.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
await p.setContent(html, { waitUntil: 'load' });
await p.waitForTimeout(400);
await writeFile(resolve(ROOT, 'public/og-image.png'), await p.screenshot({ type: 'png' }));
await b.close();
console.log('og-image: public/og-image.png');
