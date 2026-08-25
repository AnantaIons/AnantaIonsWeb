/* The ANANTA IONS engineering stack — the six layers between an idea and a
   shipped product. Transcribed from the supplied data model; the layer names,
   ordering and technology lists are source material, not invention. */

export const stack = [
  {
    id: 'silicon', no: '01', label: 'Silicon',
    signal: 'Signal',
    summary: 'Where every product begins — the raw compute, memory and mixed-signal fabric.',
    detail:
      'Choosing the part is an architectural decision, not a shopping decision. We match ' +
      'core, peripheral set, memory and analog front-end to the behaviour the product has ' +
      'to guarantee, then live with that choice through bring-up.',
    tech: ['MCU / MPU dies', 'ARM Cortex-M / -A', 'RISC-V cores', 'Analog front-ends', 'Mixed-signal SoCs'],
  },
  {
    id: 'hardware', no: '02', label: 'Hardware',
    signal: 'Power',
    summary: 'Boards, sensors, actuators and power — silicon turned into a physical system.',
    detail:
      'Schematic and layout review, power architecture, sensor and actuator integration, ' +
      'and the signal-integrity work that decides whether a board is debuggable later.',
    tech: ['Schematic review', 'Sensor & actuator integration', 'Power architecture', 'Board bring-up', 'Signal integrity'],
  },
  {
    id: 'firmware', no: '03', label: 'Firmware',
    signal: 'Control',
    summary: 'The low-level software that makes hardware deterministic and reliable.',
    detail:
      'Bare-metal and RTOS code written against the datasheet: drivers, board support, ' +
      'boot and update paths. This is the layer that decides whether a product survives ' +
      'the field or comes back.',
    tech: ['Bare-metal C / C++', 'Device drivers & BSP', 'RTOS / FreeRTOS', 'Bootloaders', 'Peripheral integration'],
  },
  {
    id: 'connectivity', no: '04', label: 'Connectivity',
    signal: 'Data',
    summary: 'Communication layers that let devices talk to each other and the cloud.',
    detail:
      'Wired and wireless links chosen against range, power budget and interference, ' +
      'then implemented so they degrade predictably instead of failing silently.',
    tech: ['BLE · Wi-Fi · Wi-SUN', 'LoRa · Sub-GHz', 'GSM / LTE', 'CAN · RS-485', 'UART · SPI · I²C'],
  },
  {
    id: 'intelligence', no: '05', label: 'Intelligence',
    signal: 'Intelligence',
    summary: 'Signal processing and edge algorithms that turn data into decisions.',
    detail:
      'Filtering, feature extraction and compact models that run on the device inside a ' +
      'real power budget — so the product decides locally rather than waiting on a network.',
    tech: ['Signal processing', 'Edge AI · TinyML', 'Anomaly & tamper detection', 'Metrology algorithms', 'Real-time decisions'],
  },
  {
    id: 'product', no: '06', label: 'Product',
    signal: 'Product',
    summary: 'A validated, documented, production-ready system ready to ship.',
    detail:
      'Production firmware, design documentation and field validation, handed over so ' +
      'the team that inherits it can own and extend it.',
    tech: ['Production firmware', 'Design documentation', 'Field validation', 'Knowledge transfer', 'Long-term support'],
  },
];
