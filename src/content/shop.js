/* ============================================================================
   SHOP CATALOGUE — ordered on WhatsApp, no online payment.

   EDIT THIS LIST to match real stock. `price` is a number in rupees, or null
   to show "Ask price". Set `inStock: false` to show "Out of stock" while
   keeping the item listed. Every item gets an "Order on WhatsApp" button
   with the item name prefilled.

   The starting list below is display-focused and must be confirmed by the
   owner before launch: no prices are set, so nothing is quoted publicly
   until real prices are added.
   ========================================================================= */

export const shopNote =
  'Prices change with stock, so ask on WhatsApp for today’s price. Pickup in Jaipur — ' +
  'ask us about delivery.';

export const categories = [
  {
    id: 'led',
    title: 'LED display parts',
    items: [
      { name: 'P10 LED module — single colour', price: null, inStock: true },
      { name: '5 V power supply (SMPS) for LED panels', price: null, inStock: true },
      { name: 'Panel data cable (ribbon) and power cables', price: null, inStock: true },
      { name: 'Complete LED notice board — made to size', price: null, inStock: true },
    ],
  },
  {
    id: 'boards',
    title: 'Microcontroller boards',
    items: [
      { name: 'ESP32 development board', price: null, inStock: true },
      { name: 'Arduino Uno', price: null, inStock: true },
      { name: 'Arduino Mega', price: null, inStock: true },
      { name: 'ATtiny85', price: null, inStock: true },
    ],
  },
  {
    id: 'modules',
    title: 'Modules',
    items: [
      { name: 'SIM800 GSM module', price: null, inStock: true },
      { name: 'Relay module', price: null, inStock: true },
    ],
  },
];
