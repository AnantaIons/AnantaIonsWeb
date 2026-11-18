/* LED display starting prices — set by the owner on 2026-11-18.
   Per square foot of finished board, before GST. Change them here and every
   page (home, Displays, size calculator, shop) follows. */

export const PRICES = {
  single: { id: 'single', name: 'Single colour', perSqFt: 2500,
    body: 'Amber, red, white or green. Clear and bright for notices, offers, timings and token numbers.' },
  rgb: { id: 'rgb', name: 'Full colour (RGB)', perSqFt: 5000,
    body: 'Every colour, with logos and pictures. Made for shop fronts and advertising.' },
};

/* Battery-backup version: keeps the board running through power cuts.
   Owner-set at 3 × the standard price. */
export const BACKUP_FACTOR = 3;

export const INCLUDED = [
  'The complete board — nothing extra to buy',
  'P10 panels, controller, cables and power supply',
  'Case and body, finished and ready to mount',
  'Full test in our workshop before delivery',
  'Set-up, and we show you how to change the message',
  'Help on call and WhatsApp after installation',
];

export const PRICE_NOTE = 'Starting prices per square foot of finished board, GST extra. Battery backup versions are 3 × the standard price. The final price depends on size, mounting and location, and we confirm it in writing before we build.';

export const PILLARS = [
  ['Quality you can see', 'Bright, even panels, a strong frame and neat wiring. Every board runs a full test before it leaves our workshop.'],
  ['Fast, real service', 'Quick quotes on WhatsApp, quick installation in Jaipur, and a real person to call when you need help.'],
  ['One complete system', 'Board, controller, power, mounting, phone and SMS updates, ready layouts and spare parts — and a website if you need one.'],
  ['Made your way', 'Any size, single colour or full colour, your text and layout, and the way of updating that suits you.'],
];

export const inr = (n) => `₹${Math.round(n).toLocaleString('en-IN')}`;
