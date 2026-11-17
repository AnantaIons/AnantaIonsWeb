/* ============================================================================
   ANANTA JOURNAL — plain-language articles. Facts in these articles come
   from manufacturer specifications or from the arithmetic of P10 panels; no
   statistics or claims that are not checked.
   Blocks: ['p', text] · ['h2', text] · ['ul', [items]] · ['table', [head], [rows]] · ['tip', text]
   ========================================================================= */

export const articles = [
  {
    slug: 'led-board-size-guide',
    title: 'How big should your LED notice board be?',
    dek: 'Panels, text size and how much fits on a line — worked out from the P10 module itself.',
    topic: 'LED displays', date: '2026-11-17', minutes: 5,
    body: [
      ['p', 'Almost every single-colour text board in India is built from P10 modules. Each module is 320 × 160 mm and carries 32 × 16 LEDs, 10 mm apart. Boards are made by placing whole modules side by side and on top of each other, so every board size is a multiple of 32 cm wide and 16 cm tall.'],
      ['h2', 'Start with the height: how many rows of text?'],
      ['p', 'Height decides how big your letters can be. A common 5 × 7 dot font is 7 LEDs tall. Doubling each dot gives 14 LEDs, and so on.'],
      ['table', ['Panels tall', 'LEDs tall', 'What fits'], [
        ['1 (16 cm)', '16', 'One line of large text (14 LEDs) or two lines of small text'],
        ['2 (32 cm)', '32', 'A large headline plus a small detail line, or one very large line'],
        ['3 (48 cm)', '48', 'Heading, detail line and a scrolling note'],
        ['4 (64 cm)', '64', 'Room for extra-large numbers or several lines'],
      ]],
      ['h2', 'Then the width: how many letters at once?'],
      ['p', 'With a 5 × 7 font plus one gap, each letter takes 6 LEDs across at the small size and 12 at the large size. One P10 panel is 32 LEDs wide.'],
      ['table', ['Panels wide', 'Width', 'Small letters', 'Large letters'], [
        ['2', '64 cm', '10', '5'],
        ['4', '1.28 m', '21', '10'],
        ['6', '1.92 m', '32', '16'],
        ['8', '2.56 m', '42', '21'],
      ]],
      ['p', 'If your message is longer than the width, it scrolls — which is fine for offers and notices, but a shop name or a token number reads better when it stays still.'],
      ['h2', 'A quick way to decide'],
      ['ul', [
        'Shop sign with one word (OPEN, SALE): 2–3 panels wide, 1 tall.',
        'Offer or notice that can scroll: 4 panels wide, 1 tall.',
        'Headline plus details (menu, token, notice): 4–6 wide, 2–3 tall.',
        'Wide entrance or temple boards: 6–8 wide, 2 tall.',
      ]],
      ['tip', 'Measure the space, then use the size calculator on our LED Displays page — it rounds up to whole panels and sends us the size for a quote.'],
    ],
  },
  {
    slug: 'esp32-or-arduino-uno',
    title: 'ESP32 or Arduino Uno for your college project?',
    dek: 'Two popular boards, compared on the things that actually decide a project.',
    topic: 'Embedded', date: '2026-11-17', minutes: 4,
    body: [
      ['p', 'Both boards can run most student projects. The choice usually comes down to three questions: does it need Wi-Fi or Bluetooth, what voltage are your sensors, and how much the lab manual expects an Uno.'],
      ['table', ['Feature', 'Arduino Uno', 'ESP32 board'], [
        ['Chip', 'ATmega328P, 16 MHz', 'ESP32, dual-core up to 240 MHz'],
        ['Wireless', 'None built in', 'Wi-Fi and Bluetooth built in'],
        ['Logic voltage', '5 V', '3.3 V'],
        ['Program memory', '32 KB flash', 'Depends on the module — usually several MB'],
        ['RAM', '2 KB', 'Hundreds of KB'],
        ['Best for', 'Learning, lab work, 5 V sensors and shields', 'IoT, phone control, data logging online'],
      ]],
      ['h2', 'Choose the Uno when'],
      ['ul', [
        'Your lab manual, kit or shield is written for the Uno.',
        'Your sensors and modules are 5 V.',
        'The project does not need to talk to a phone or the internet.',
      ]],
      ['h2', 'Choose the ESP32 when'],
      ['ul', [
        'You want to control or monitor the project from a phone.',
        'You need to send data to the internet or a dashboard.',
        'The program is too big or too slow for the Uno.',
      ]],
      ['tip', 'The one trap with the ESP32: its pins are 3.3 V. Connecting a 5 V signal straight to it can damage the chip — use a level shifter or a voltage divider.'],
      ['p', 'Not sure? Tell us the project and we will suggest a board and a complete parts list.'],
    ],
  },
  {
    slug: 'small-business-website-checklist',
    title: 'What a small business website really needs',
    dek: 'A practical checklist for shops, schools and coaching centres — before any decoration.',
    topic: 'Websites', date: '2026-11-17', minutes: 4,
    body: [
      ['p', 'Most customers will open your website on a phone, often on mobile data, usually to answer one question: can this business help me, and how do I contact them? A good small-business site answers that in seconds.'],
      ['h2', 'The essentials'],
      ['ul', [
        'Works properly on a phone — text readable without zooming, buttons big enough to tap.',
        'Loads quickly on mobile data: small images, no heavy effects on the first screen.',
        'Contact in one tap: call, WhatsApp and directions on every page.',
        'Clear facts: what you offer, timings, area served, and prices where you can share them.',
        'Real photos of your shop, work or team — they build more trust than stock images.',
        'Your own domain name, and a link to your Google Business Profile so you appear on Maps.',
      ]],
      ['h2', 'Nice to have, after the essentials'],
      ['ul', [
        'An enquiry form that sends you a ready-to-read message.',
        'A gallery or portfolio of past work.',
        'Pages for each main service, so people searching for that service find you.',
      ]],
      ['tip', 'Decoration should never slow down the contact button. If an animation does not make the business look more trustworthy or easier to use, leave it out.'],
    ],
  },
];

export const articleBySlug = Object.fromEntries(articles.map((a) => [a.slug, a]));
