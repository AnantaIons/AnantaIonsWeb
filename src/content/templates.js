/* ============================================================================
   BOARD GALLERY — example layouts on real P10 board sizes.

   These are display TEMPLATES (what a board can show), not past customer
   installations. Each sits on a real panel count; font size 1–4 means each
   font pixel is 1–4 LEDs (7, 14, 21 or 28 LEDs tall).
   ========================================================================= */

export const sizeGuide = [
  ['1', 'Small', '7 LEDs tall', 'Details, timings, phone numbers'],
  ['2', 'Medium', '14 LEDs tall', 'Main message on a one-row board'],
  ['3', 'Large', '21 LEDs tall', 'Headlines on two-row boards'],
  ['4', 'Extra large', '28 LEDs tall', 'Numbers and one-word signs'],
];

export const templates = [
  {
    id: 'shop-open', use: 'Shops', title: 'Shop sign', colour: 'red', panels: [2, 1],
    note: 'One big word, readable from across the road.',
    items: [{ text: 'OPEN', size: 2, y: 1, effect: 'blink' }],
  },
  {
    id: 'parking', use: 'Offices', title: 'Parking status', colour: 'green', panels: [3, 1],
    note: 'Small board, one clear status.',
    items: [{ text: 'PARKING', size: 2, y: 1 }],
  },
  {
    id: 'sale', use: 'Shops', title: 'Sale offer', colour: 'red', panels: [4, 1],
    note: 'Scrolling offer on a single row of panels.',
    items: [{ text: 'MEGA SALE · FLAT 50% OFF · TODAY ONLY · ', size: 2, y: 1, effect: 'scroll' }],
  },
  {
    id: 'restaurant', use: 'Restaurants', title: 'Today’s special', colour: 'amber', panels: [4, 2],
    note: 'Large headline with a small scrolling menu line.',
    items: [
      { text: 'SPECIAL', size: 2, y: 1 },
      { text: 'VEG THALI ₹120 · MASALA DOSA ₹80 · LASSI ₹40 · ', size: 1, y: 21, effect: 'scroll', speed: 18 },
    ],
  },
  {
    id: 'token', use: 'Hospitals & banks', title: 'Token display', colour: 'white', panels: [4, 2],
    note: 'Small label, extra-large number that blinks when it changes.',
    items: [
      { text: 'TOKEN', size: 1, y: 2, align: 'left', x: 3 },
      { text: 'COUNTER 2', size: 1, y: 2, align: 'right' },
      { text: 'A-27', size: 3, y: 11, effect: 'blink' },
    ],
  },
  {
    id: 'school', use: 'Schools & colleges', title: 'School notice', colour: 'amber', panels: [4, 3],
    note: 'Three panel rows: heading, detail, scrolling note.',
    items: [
      { text: 'NOTICE', size: 2, y: 1 },
      { text: 'PTM ON SATURDAY', size: 1, y: 21 },
      { text: 'ALL PARENTS ARE REQUESTED TO ATTEND · 10 AM TO 1 PM · ', size: 1, y: 36, effect: 'scroll', speed: 18 },
    ],
  },
  {
    id: 'coaching', use: 'Coaching centres', title: 'Admissions open', colour: 'green', panels: [6, 3],
    note: 'Big headline, course line and a scrolling phone number.',
    items: [
      { text: 'ADMISSIONS', size: 3, y: 2 },
      { text: 'JEE · NEET · BOARDS', size: 1, y: 27 },
      { text: 'NEW BATCH FROM 1ST · CALL NOW · ', size: 1, y: 38, effect: 'scroll', speed: 20 },
    ],
  },
  {
    id: 'temple', use: 'Temples & events', title: 'Aarti timings', colour: 'amber', panels: [8, 2],
    note: 'Wide two-row board with a long scrolling line.',
    items: [
      { text: 'AARTI TIMINGS', size: 2, y: 1 },
      { text: 'MANGLA 5:30 AM · SHRINGAR 7:30 AM · SANDHYA 7:00 PM · SHAYAN 9:00 PM · ', size: 1, y: 22, effect: 'scroll', speed: 20 },
    ],
  },
  {
    id: 'jeweller', use: 'Shops', title: 'Rate board', colour: 'red', panels: [6, 2],
    note: 'Two fixed rows for rates — updated whenever they change.',
    items: [
      { text: 'GOLD 22K', size: 1, y: 4, align: 'left', x: 4 },
      { text: '₹ ----', size: 1, y: 4, align: 'right' },
      { text: 'SILVER', size: 1, y: 20, align: 'left', x: 4 },
      { text: '₹ ----', size: 1, y: 20, align: 'right' },
    ],
  },
  {
    id: 'big-number', use: 'Offices', title: 'Counter number', colour: 'white', panels: [2, 2],
    note: 'Extra-large font on a compact square board.',
    items: [{ text: '07', size: 4, y: 2 }],
  },
];
