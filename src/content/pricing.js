/* LED display starting prices — set by the owner on 2026-11-18.
   Per square foot of finished board, before GST. Change them here and every
   page (home, Displays, size calculator, shop) follows. */

/* mrp = regular price (ends in 999), price = launch-offer price shown big.
   Battery = rechargeable lithium battery backup version. All per sq ft, before GST. */
export const OFFER_LABEL = 'Launch offer';
export const PRICES = {
  single: { id: 'single', name: 'Single colour', mrp: 2999, price: 2499, backupMrp: 6999, backupPrice: 5999,
    body: 'Amber, red, white or green. Clear and bright for notices, offers, timings and token numbers.' },
  rgb: { id: 'rgb', name: 'Full colour (RGB)', mrp: 5999, price: 4999, backupMrp: 13999, backupPrice: 11999,
    body: 'Every colour, with logos and pictures. Made for shop fronts and advertising.' },
};
export const offPct = (mrp, price) => Math.round((1 - price / mrp) * 100);

/* Battery-backup estimate in the size calculator. Internal only — never shown
   on the site. Smaller boards cost relatively more to back up, so the factor
   eases from 2.8 (small boards) to 2.4 (large boards); the per-sq-ft estimate
   never drops below the "from" price on the cards (2.4 × standard). */
export const backupFactor = (sqft) => {
  const t = Math.min(1, Math.max(0, (sqft - 4) / 36));
  return 2.8 - 0.4 * t;
};

export const INCLUDED = [
  'The complete board — nothing extra to buy',
  'P10 panels, controller, cables and power supply',
  'Case and body, finished and ready to mount',
  'Full test in our workshop before delivery',
  'Set-up, and we show you how to change the message',
  'Help on call and WhatsApp after installation',
  'Warranty on every component — panels, controller, power supply and battery',
];

export const FEATURES = [
  ['Auto-brightness', 'Full brightness in sunlight, softer at night — easy on the eyes and saves power.'],
  ['Set up your way', 'Wi-Fi, over the internet from anywhere, USB, Bluetooth (BLE) or SMS.'],
  ['Full software support', 'Easy app and software to change messages, plus updates and help from us.'],
  ['Warranty you can trust', 'Every board is covered by warranty — panels, controller, power supply and battery.'],
  ['Battery option', 'Rechargeable lithium battery backup for places with power cuts, covered by warranty.'],
  ['Shipping across India', 'Packed safely and shipped anywhere in India. Installation available in Jaipur.'],
];

export const PRICE_NOTE = 'Starting prices per square foot of finished board, GST and shipping extra. The final price depends on size, mounting and location, and we confirm it in writing before we build.';

export const PILLARS = [
  ['Quality you can see', 'Bright, even panels, a strong frame and neat wiring. Every board runs a full test before it leaves our workshop.'],
  ['Fast, real service', 'Quick quotes on WhatsApp, quick installation in Jaipur, and a real person to call when you need help.'],
  ['One complete system', 'Board, controller, power, mounting, phone and SMS updates, ready layouts and spare parts — and a website if you need one.'],
  ['Made your way', 'Any size, single colour or full colour, your text and layout, and the way of updating that suits you.'],
];

export const inr = (n) => `₹${Math.round(n).toLocaleString('en-IN')}`;

/* The Standard board — one fixed size for small shops, built in batches so it
   costs less to make. 5 × 5 P10 panels = 160 × 80 LEDs, 1.6 m × 0.8 m
   (5.25 × 2.62 ft), sold as "5 × 2.5 ft". Prices before GST. */
export const STANDARD = {
  name: 'Standard board',
  size: '5 × 2.5 ft',
  exact: '1.6 m × 0.8 m display (5.25 × 2.62 ft), 25 P10 panels, 160 × 80 LEDs',
  panels: [5, 5],
  single: { mrp: 34999, price: 29999 },
  rgb: { mrp: 69999, price: 59999 },
};
