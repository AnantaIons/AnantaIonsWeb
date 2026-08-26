/* The supplied mark is RGB with no alpha channel, so its black background is
   baked in and reads as a square wherever the surface behind it is not pure
   black — the masthead, the footer, the intro overlay. This lifts the near
   black to transparent and writes a version with an alpha channel.

   The original is kept untouched at public/logo-source.png.
   Run: node scripts/logo-alpha.mjs */

import { chromium } from 'playwright';
import { readFile, writeFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = resolve(ROOT, 'public/logo-source.png');
const OUT = resolve(ROOT, 'public/logo.png');

const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const page = await b.newPage();
const dataUri = `data:image/png;base64,${(await readFile(SRC)).toString('base64')}`;

const out = await page.evaluate(async (uri) => {
  const img = new Image();
  img.src = uri;
  await img.decode();
  const c = document.createElement('canvas');
  c.width = img.naturalWidth; c.height = img.naturalHeight;
  const g = c.getContext('2d');
  g.drawImage(img, 0, 0);
  const d = g.getImageData(0, 0, c.width, c.height);
  const px = d.data;
  for (let i = 0; i < px.length; i += 4) {
    // Perceptual luminance; the mark's darkest real ink sits well above this.
    const l = 0.2126 * px[i] + 0.7152 * px[i + 1] + 0.0722 * px[i + 2];
    if (l <= 16) { px[i + 3] = 0; }
    else if (l < 46) {
      // Feather the rim so the ring keeps a clean anti-aliased edge.
      px[i + 3] = Math.round(((l - 16) / 30) * 255);
    }
  }
  g.putImageData(d, 0, 0);
  return c.toDataURL('image/png');
}, dataUri);

await b.close();
await writeFile(OUT, Buffer.from(out.split(',')[1], 'base64'));
console.log('logo-alpha: public/logo.png now has an alpha channel');
