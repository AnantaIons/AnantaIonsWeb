/* Capabilities. Each entry answers the three questions the brief requires:
   what we do, how we do it, what problem it solves. No claim here asserts a
   deployment, customer or measured result — those live in projects.js and
   must be verified before launch. */

export const capabilities = [
  {
    no: '01', id: 'electronics', label: 'Electronics',
    what: 'Circuit design for sensors, power supplies and control boards.',
    how:  'Schematic design and review, part selection, power budgeting and layout review.',
    solves: 'Boards that read wrong values, run hot or are hard to debug once assembled.',
    tags: ['Schematic design', 'Power supplies', 'Sensor circuits', 'Layout review'],
  },
  {
    no: '02', id: 'embedded-systems', label: 'Embedded Systems',
    what: 'Microcontroller-based products on ESP32, ARM Cortex-M and Renesas chips.',
    how:  'We pick the right chip for the job and plan how hardware and firmware split the work.',
    solves: 'Prototypes that work on the desk but cannot be produced, updated or serviced.',
    tags: ['ESP32 / ESP32-S3', 'ARM Cortex-M', 'Renesas', 'Board bring-up'],
  },
  {
    no: '03', id: 'firmware', label: 'Firmware',
    what: 'Drivers, RTOS applications, bootloaders and over-the-air updates.',
    how:  'Bare-metal C and C++, or FreeRTOS where it helps, written against the chip datasheet.',
    solves: 'Devices that hang, reset at random, or cannot be updated after installation.',
    tags: ['Embedded C / C++', 'FreeRTOS', 'Bootloaders', 'OTA updates', 'Debugging'],
  },
  {
    no: '04', id: 'connectivity', label: 'Connectivity',
    what: 'Wi-Fi, BLE, GSM, LoRa, CAN and RS-485 links for devices in the field.',
    how:  'We choose the link based on range, power and site conditions, then handle dropouts and retries in firmware.',
    solves: 'Devices that lose connection and never recover, or drain the battery trying.',
    tags: ['Wi-Fi', 'BLE', 'GSM / SIM800', 'LoRa', 'CAN', 'RS-485'],
  },
  {
    no: '05', id: 'intelligent-systems', label: 'Signal Processing & Edge AI',
    what: 'Filtering, measurement algorithms and small ML models that run on the device.',
    how:  'We process sensor data on the microcontroller, sized to fit its memory and power.',
    solves: 'Products that need the cloud for every decision, or give noisy readings.',
    tags: ['DSP', 'TinyML', 'Anomaly detection', 'Metering'],
  },
  {
    no: '06', id: 'displays', label: 'LED Displays',
    what: 'P10 LED boards and controllers, from a single panel to a networked campus system.',
    how:  'Panel driving, brightness control, Hindi and English text, and remote updates over Wi-Fi or GSM.',
    solves: 'Boards that flicker, show garbled text, or have to be updated by hand.',
    tags: ['P10 / HUB12', 'Controllers', 'Hindi + English text', 'Remote updates'],
  },
  {
    no: '07', id: 'product-engineering', label: 'Product Development',
    what: 'Taking a working prototype to a product you can sell and support.',
    how:  'Production firmware, testing, documentation and handover to your team.',
    solves: 'Products only one person understands, or that cannot be built in quantity.',
    tags: ['Production firmware', 'Testing', 'Documentation', 'Support'],
  },
];

/* Engineering projects for students — a stated ANANTA IONS programme. */
export const studentProgram = {
  title: 'Final-year and research projects',
  body:
    'We help engineering students build their final-year and mini projects. You get a ' +
    'working prototype, source code and a clear explanation of how it works, so you can ' +
    'answer questions in your viva.',
  points: [
    'Embedded, IoT, robotics and LED display projects',
    'Help with code and debugging if your project is already started',
    'Guidance on writing your research paper',
  ],
  offers: [
    ['10%', 'discount for students'],
    ['10%', 'referral commission when you bring in a new client'],
  ],
};
