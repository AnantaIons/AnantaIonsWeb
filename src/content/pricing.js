/* LED display starting prices — set by the owner on 2026-11-18.
   Per square foot of finished board, before GST. Change them here and every
   page (home, Displays, size calculator, shop) follows. */

/* mrp = regular price (ends in 999), price = launch-offer price shown big.
   Battery = rechargeable lithium battery backup version. All per sq ft, before GST. */
export const OFFER_LABEL = 'Launch offer';
export const PRICES = {
  single: { id: 'single', name: 'Single colour', mrp: 2999, price: 2499, backupMrp: 8999, backupPrice: 7499,
    body: 'Amber, red, white or green. Clear and bright for notices, offers, timings and token numbers.' },
  rgb: { id: 'rgb', name: 'Full colour (RGB)', mrp: 5999, price: 4999, backupMrp: 17999, backupPrice: 14999,
    body: 'Every colour, with logos and pictures. Made for shop fronts and advertising.' },
};
export const offPct = (mrp, price) => Math.round((1 - price / mrp) * 100);

export const INCLUDED = [
  'The complete board — nothing extra to buy',
  'P10 panels, controller, cables and power supply',
  'Case and body, finished and ready to mount',
  'Full test in our workshop before delivery',
  'Set-up, and we show you how to change the message',
  'Help on call and WhatsApp after installation',
];

export const FEATURES = [
  ['Auto-brightness', 'Full brightness in sunlight, softer at night — easy on the eyes and saves power.'],
  ['Set up your way', 'Wi-Fi, over the internet from anywhere, USB, Bluetooth (BLE) or SMS.'],
  ['Full software support', 'Easy app and software to change messages, plus updates and help from us.'],
  ['Battery option', 'Rechargeable lithium battery backup for places with power cuts.'],
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
