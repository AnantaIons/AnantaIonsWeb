/* ============================================================================
   CATALOGUE — every shop product, its product page, and the project kits.

   Spec policy (owner-approved: "build now, fill later"):
     · `specs` holds only facts that are true for the standard part, checked
       against the manufacturer's datasheet or official board page.
     · Anything that depends on the exact item in stock (variant, rating,
       colour, original vs compatible board) is listed in `confirm` and shown
       as "Confirm on WhatsApp" — never guessed.
     · `price` stays null until the owner supplies one; null shows
       "Ask price". `stock`: 'confirm' | 'in' | 'out'.
   ========================================================================= */

export const categories = [
  { id: 'led', title: 'LED display parts', icon: 'display' },
  { id: 'boards', title: 'Development boards', icon: 'chip' },
  { id: 'mcu', title: 'Microcontrollers', icon: 'chip' },
  { id: 'comms', title: 'Communication', icon: 'broadcast' },
  { id: 'modules', title: 'Modules', icon: 'power' },
];

export const products = [
  {
    id: 'p10-led-module', cat: 'led', name: 'P10 LED module — single colour',
    short: '32 × 16 LED panel, the building block of every outdoor text board.',
    tags: ['32 × 16 LEDs', '320 × 160 mm', '5 V'],
    specs: [
      ['Resolution', '32 × 16 LEDs (512 per panel)'],
      ['Panel size', '320 × 160 mm'],
      ['Pixel pitch', '10 mm'],
      ['Supply', '5 V DC'],
    ],
    confirm: ['LED colour', 'Indoor or outdoor', 'Scan type and data connector'],
    about: 'P10 modules are tiled side by side to make a board of any size. A controller sends the text, and a 5 V power supply feeds the panels.',
    uses: ['Shop and school notice boards', 'Scrolling signs', 'Token and counter displays'],
    docs: [],
    price: null, stock: 'confirm',
  },
  {
    id: 'smps-5v', cat: 'led', name: '5 V power supply (SMPS) for LED panels',
    short: 'Mains-to-5 V supply sized for a set of P10 panels.',
    tags: ['230 V AC in', '5 V DC out'],
    specs: [['Input', '230 V AC mains'], ['Output', '5 V DC']],
    confirm: ['Current rating (amps)', 'How many panels it can run'],
    about: 'LED panels draw a lot of current at 5 V. The supply rating decides how many panels one unit can power — we help you choose the right size for your board.',
    uses: ['Powering P10 boards', 'Other 5 V electronics with high current'],
    docs: [],
    price: null, stock: 'confirm',
  },
  {
    id: 'panel-cables', cat: 'led', name: 'Panel data cable (ribbon) and power cables',
    short: 'Cables to chain panels together and feed them power.',
    tags: ['Ribbon data cable', 'Power leads'],
    specs: [],
    confirm: ['Length', 'Connector type for your panels'],
    about: 'Each panel needs a data cable from the previous panel and a power lead from the supply.',
    uses: ['Connecting P10 panels in a board'],
    docs: [],
    price: null, stock: 'confirm',
  },
  {
    id: 'led-board-complete', cat: 'led', name: 'Complete LED notice board — made to size',
    short: 'Panels, controller, power supply and frame, built and tested.',
    tags: ['Made to order', 'Any size'],
    specs: [['Built from', 'P10 modules — any width × height in whole panels']],
    confirm: ['Size', 'LED colour', 'How you want to update the text'],
    about: 'A ready-to-mount board built to your size. Use the size calculator to see how many panels your space needs, then send us the size.',
    uses: ['Schools, shops, offices, temples'],
    docs: [{ label: 'Size calculator', href: '/displays/#size' }, { label: 'Board gallery', href: '/displays/templates/' }],
    price: null, priceText: 'From ₹2,499/sq ft + GST', stock: 'confirm',
  },
  {
    id: 'esp32-devkit', cat: 'boards', name: 'ESP32 development board',
    short: 'Dual-core microcontroller with built-in Wi-Fi and Bluetooth.',
    tags: ['Wi-Fi', 'Bluetooth', '3.3 V logic'],
    specs: [
      ['Chip', 'ESP32 — dual-core 32-bit, up to 240 MHz'],
      ['Wireless', 'Wi-Fi 802.11 b/g/n (2.4 GHz), Bluetooth and Bluetooth LE'],
      ['Logic level', '3.3 V'],
      ['Programming', 'USB, with Arduino IDE or ESP-IDF'],
    ],
    confirm: ['Exact board and module (e.g. ESP32-WROOM-32)', 'Flash size', 'USB connector type'],
    about: 'The usual choice for IoT projects: connect sensors and relays, and control them from a phone or the internet. Remember its pins are 3.3 V, not 5 V.',
    uses: ['IoT and home automation', 'Wi-Fi LED boards', 'Sensor logging'],
    docs: [{ label: 'ESP32 datasheet (Espressif)', href: 'https://www.espressif.com/sites/default/files/documentation/esp32_datasheet_en.pdf', ext: true }],
    price: null, stock: 'confirm',
  },
  {
    id: 'arduino-uno', cat: 'boards', name: 'Arduino Uno',
    short: 'The standard beginner board — huge community, endless examples.',
    tags: ['ATmega328P', '5 V', '16 MHz'],
    specs: [
      ['Microcontroller', 'ATmega328P, 16 MHz'],
      ['Operating voltage', '5 V'],
      ['Digital I/O', '14 pins (6 with PWM)'],
      ['Analog inputs', '6'],
      ['Memory', '32 KB flash, 2 KB SRAM, 1 KB EEPROM'],
    ],
    confirm: ['Original or compatible board'],
    about: 'The easiest way to start with microcontrollers. Most tutorials and college lab manuals are written for the Uno.',
    uses: ['First projects and lab work', 'Sensor and motor projects'],
    docs: [{ label: 'Arduino Uno Rev3 docs', href: 'https://docs.arduino.cc/hardware/uno-rev3/', ext: true }],
    price: null, stock: 'confirm',
  },
  {
    id: 'arduino-mega', cat: 'boards', name: 'Arduino Mega',
    short: 'More pins, more memory and four serial ports for bigger projects.',
    tags: ['ATmega2560', '54 I/O', '4 UARTs'],
    specs: [
      ['Microcontroller', 'ATmega2560, 16 MHz'],
      ['Operating voltage', '5 V'],
      ['Digital I/O', '54 pins'],
      ['Analog inputs', '16'],
      ['Serial ports', '4 hardware UARTs'],
      ['Memory', '256 KB flash, 8 KB SRAM, 4 KB EEPROM'],
    ],
    confirm: ['Original or compatible board'],
    about: 'Choose the Mega when the Uno runs out of pins or memory — for example a GSM module, an LED board and sensors on one controller.',
    uses: ['SMS notice boards', 'Robotics', 'Projects with many sensors'],
    docs: [{ label: 'Arduino Mega 2560 docs', href: 'https://docs.arduino.cc/hardware/mega-2560/', ext: true }],
    price: null, stock: 'confirm',
  },
  {
    id: 'attiny85', cat: 'mcu', name: 'ATtiny85',
    short: 'Tiny 8-pin microcontroller for small, low-cost products.',
    tags: ['8 pins', '8 KB flash', 'AVR'],
    specs: [
      ['Core', '8-bit AVR, up to 20 MHz'],
      ['Memory', '8 KB flash, 512 B SRAM, 512 B EEPROM'],
      ['Pins', '8 (up to 6 usable as I/O)'],
    ],
    confirm: ['Package (DIP-8 or SMD)'],
    about: 'Small enough for simple dedicated jobs — like our GSM remote switch, which fits its whole firmware in this chip.',
    uses: ['Small controllers', 'GSM remote switches', 'Wearables and gadgets'],
    docs: [{ label: 'ATtiny25/45/85 datasheet summary (Microchip)', href: 'https://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-2586-AVR-8-bit-Microcontroller-ATtiny25-ATtiny45-ATtiny85_Datasheet-Summary.pdf', ext: true }],
    price: null, stock: 'confirm',
  },
  {
    id: 'sim800-gsm', cat: 'comms', name: 'SIM800 GSM module',
    short: 'Send and receive SMS and calls from a microcontroller.',
    tags: ['GSM / 2G', 'SMS', 'UART'],
    specs: [
      ['Network', 'GSM / GPRS (2G)'],
      ['Control', 'AT commands over serial (UART)'],
    ],
    confirm: ['Board type (SIM800L, SIM800C …)', 'Supply voltage for that board'],
    about: 'Lets a project send alerts by SMS or be switched by a phone call. Needs a SIM card that works on a 2G network, and a power supply that can handle short current peaks.',
    uses: ['SMS notice boards', 'Remote switches', 'Alert systems'],
    docs: [],
    price: null, stock: 'confirm',
  },
  {
    id: 'relay-module', cat: 'modules', name: 'Relay module',
    short: 'Switch mains appliances safely from a microcontroller pin.',
    tags: ['5 V coil', 'Switching'],
    specs: [],
    confirm: ['Number of channels', 'Coil voltage', 'Contact rating'],
    about: 'A relay lets a small control signal switch lights, pumps or motors. Wiring mains needs care — ask us if you are unsure.',
    uses: ['Home automation', 'Pump and light control', 'GSM remote switches'],
    docs: [],
    price: null, stock: 'confirm',
  },
];

export const productById = Object.fromEntries(products.map((p) => [p.id, p]));
export const categoryById = Object.fromEntries(categories.map((c) => [c.id, c]));

/* ---------------------------------------------------------------------------
   Shop by project — kits built only from products listed above. These are
   the same systems ANANTA IONS has built, so the parts list is tested.
   ------------------------------------------------------------------------- */
export const kits = [
  {
    id: 'sms-notice-board', title: 'SMS notice board',
    body: 'A P10 board you update by sending an SMS. Based on our own SMS notice board build.',
    items: [['arduino-mega', 1], ['sim800-gsm', 1], ['p10-led-module', 2], ['smps-5v', 1], ['panel-cables', 1]],
    help: 'We can supply the firmware and help you assemble it.',
  },
  {
    id: 'gsm-remote-switch', title: 'GSM remote switch',
    body: 'Turn a pump or light on and off by calling or texting it. Based on our ATtiny85 remote switch.',
    items: [['attiny85', 1], ['sim800-gsm', 1], ['relay-module', 1]],
    help: 'Firmware available — fits in the ATtiny85.',
  },
  {
    id: 'wifi-led-board', title: 'Wi-Fi LED board',
    body: 'A small P10 board you update from your phone over Wi-Fi.',
    items: [['esp32-devkit', 1], ['p10-led-module', 2], ['smps-5v', 1], ['panel-cables', 1]],
    help: 'Needs level shifting between the 3.3 V ESP32 and the 5 V panels — we will show you how.',
  },
  {
    id: 'wifi-smart-switch', title: 'Wi-Fi smart switch',
    body: 'Control an appliance from your phone — a good first IoT project.',
    items: [['esp32-devkit', 1], ['relay-module', 1]],
    help: 'A common final-year starting point; we can extend it with sensors.',
  },
];
