/* Capabilities. Each entry answers the three questions the brief requires:
   what we do, how we do it, what problem it solves. No claim here asserts a
   deployment, customer or measured result — those live in projects.js and
   must be verified before launch. */

export const capabilities = [
  {
    no: '01', id: 'electronics', label: 'Electronics', span: 'wide',
    what: 'Analog and digital circuit design, from sensing front-end to power stage.',
    how:  'Schematic capture and review, component selection against real operating ' +
          'envelopes, power-rail budgeting, and layout review for signal integrity.',
    solves: 'Boards that measure accurately, power cleanly and stay debuggable once they ' +
            'leave the bench.',
    tags: ['Analog front-ends', 'Power architecture', 'Schematic review', 'Signal integrity'],
  },
  {
    no: '02', id: 'embedded-systems', label: 'Embedded Systems', span: 'tall',
    what: 'MCU and MPU system architecture across ARM, Renesas and ESP32-class parts.',
    how:  'Partitioning behaviour across silicon, hardware and firmware before code is ' +
          'written, then carrying the architecture through bring-up to production.',
    solves: 'Prototypes that stall on the way to production because nothing was ' +
            'architected for manufacture, update or field service.',
    tags: ['ARM Cortex-M / -A', 'Renesas', 'ESP32-class', 'Bring-up', 'Architecture'],
  },
  {
    no: '03', id: 'firmware', label: 'Firmware',
    what: 'Deterministic low-level software: drivers, RTOS task design, bootloaders, BSP.',
    how:  'Bare-metal C/C++ written against the datasheet, with an update and recovery ' +
          'path designed in from the first commit rather than bolted on.',
    solves: 'Timing that drifts, watchdogs that fire in the field, and devices that cannot ' +
            'be safely updated once deployed.',
    tags: ['Bare-metal C / C++', 'FreeRTOS', 'Bootloaders', 'Drivers & BSP', 'Hard-fault forensics'],
  },
  {
    no: '04', id: 'connectivity', label: 'Connectivity',
    what: 'Wired and wireless communication engineered for industrial reliability.',
    how:  'Link selection against range, power budget and interference, then protocol ' +
          'work that handles loss, retry and back-off explicitly.',
    solves: 'Links that pass on the bench and fail across a plant floor, a basement meter ' +
            'room or a city-scale mesh.',
    tags: ['BLE', 'Wi-SUN', 'LoRa · Sub-GHz', 'Wi-Fi', 'CAN', 'RS-485'],
  },
  {
    no: '05', id: 'intelligent-systems', label: 'Intelligent Systems', span: 'wide',
    what: 'On-device signal processing, edge algorithms and compact inference.',
    how:  'Filtering and feature extraction on live sensor streams, models sized to the ' +
          'MCU and its power budget, decisions taken in microseconds on the device.',
    solves: 'Round-trips to a server for decisions that have to be made locally — and the ' +
            'bandwidth, latency and privacy cost that comes with them.',
    tags: ['DSP', 'Edge AI · TinyML', 'Anomaly detection', 'Metrology', 'Real-time control'],
  },
  {
    no: '06', id: 'displays', label: 'Displays',
    what: 'Embedded display systems and the controller and content pipeline behind them.',
    how:  'Panel and driver integration, refresh and brightness control, multi-script ' +
          'text rendering, and remote content update paths.',
    solves: 'Display products that are readable, updatable and legible in the script and ' +
            'lighting conditions where they actually run.',
    tags: ['LED matrix', 'Panel drivers', 'Multi-script rendering', 'Remote content'],
  },
  {
    no: '07', id: 'product-engineering', label: 'Product Engineering', span: 'wide',
    what: 'Taking a working system to something that can be built, shipped and maintained.',
    how:  'Production firmware, design documentation, field validation and structured ' +
          'handover — including the knowledge transfer that makes the system yours.',
    solves: 'Engineering that only its author can maintain, and products that cannot be ' +
            'manufactured or supported at volume.',
    tags: ['Production firmware', 'Documentation', 'Field validation', 'Handover'],
  },
];
