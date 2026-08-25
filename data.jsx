// ANANTA IONS — content model. Placeholder content is clearly marked; nothing invented is presented as fact.
const STACK = [
  { key:'silicon', label:'Silicon', no:'01', desc:'Where every product begins — the raw compute, memory and mixed-signal fabric.', tech:['MCU / MPU dies','ARM Cortex-M / -A','RISC-V cores','Analog front-ends','Mixed-signal SoCs'] },
  { key:'hardware', label:'Hardware', no:'02', desc:'Boards, sensors, actuators and power — silicon turned into a physical system.', tech:['Schematic review','Sensor & actuator integration','Power architecture','Board bring-up','Signal integrity'] },
  { key:'firmware', label:'Firmware', no:'03', desc:'The low-level software that makes hardware deterministic and reliable.', tech:['Bare-metal C / C++','Device drivers & BSP','RTOS / FreeRTOS','Bootloaders','Peripheral integration'] },
  { key:'connectivity', label:'Connectivity', no:'04', desc:'Communication layers that let devices talk to each other and the cloud.', tech:['BLE · Wi-Fi · Wi-SUN','LoRa · Sub-GHz','GSM / LTE','CAN · RS-485','UART · SPI · I²C'] },
  { key:'intelligence', label:'Intelligence', no:'05', desc:'Signal processing and edge algorithms that turn data into decisions.', tech:['Signal processing','Edge AI · TinyML','Anomaly & tamper detection','Metrology algorithms','Real-time decisions'] },
  { key:'product', label:'Product', no:'06', desc:'A validated, documented, production-ready system ready to ship.', tech:['Production firmware','Design documentation','Field validation','Knowledge transfer','Long-term support'] },
];

const CAPABILITIES = [
  { icon:'fa-solid fa-microchip', title:'Firmware Engineering', body:'Bare-metal C/C++, device drivers, RTOS, bootloaders, BSP and peripheral integration — engineered for determinism.', tags:['Bare-metal','FreeRTOS','Bootloaders','BSP','Debugging'] },
  { icon:'fa-solid fa-memory', title:'Embedded Systems', body:'MCU/MPU architecture across ARM, Renesas and ESP32 — from hardware bring-up to prototype-to-production.', tags:['ARM','Renesas','ESP32','Bring-up','Architecture'] },
  { icon:'fa-solid fa-tower-broadcast', title:'Connectivity', body:'Wired and wireless communication stacks tuned for industrial reliability and constrained power budgets.', tags:['BLE','Wi-SUN','LoRa','CAN','RS-485'] },
  { icon:'fa-solid fa-wave-square', title:'Embedded Intelligence', body:'Signal processing, edge algorithms and TinyML that run on the device — no round-trip to the cloud required.', tags:['DSP','Edge AI','TinyML','Anomaly detection'] },
  { icon:'fa-solid fa-industry', title:'Industrial & Connected Tech', body:'Smart energy, environmental and industrial monitoring, intelligent control and connected device platforms.', tags:['Smart energy','Industrial IoT','Automation','Telemetry'] },
  { icon:'fa-solid fa-diagram-project', title:'Technology Transfer', body:'Product architecture, documentation, knowledge transfer and production support — engineered to hand over cleanly.', tags:['Architecture','Docs','Handover','Production'] },
];

// Projects — placeholder reference designs; specs are illustrative, not commitments.
const PROJECTS = [
  { name:'DLMS/COSEM Protocol Analyzer', cat:'Smart Energy', status:'Available', mcu:'ARM Cortex-M4', conn:'RS-485 · Wi-SUN', desc:'Metering-grade protocol capture and decode for DLMS/COSEM smart-energy networks.', tags:['Metrology','RS-485','DLMS'], price:'Request quote' },
  { name:'Environment Monitoring Node', cat:'Environmental', status:'Available', mcu:'ESP32-S3', conn:'BLE · Wi-Fi', desc:'Multi-sensor edge node measuring air quality, temperature and humidity with local buffering.', tags:['Sensors','Edge','BLE'], price:'From placeholder' },
  { name:'Sub-GHz Telemetry Gateway', cat:'Industrial IoT', status:'Prototype', mcu:'STM32WL', conn:'LoRa · Sub-GHz', desc:'Long-range telemetry concentrator bridging field sensors to an industrial backhaul.', tags:['LoRa','Gateway','Telemetry'], price:'Request quote' },
  { name:'Tamper-Aware Metering Module', cat:'Smart Energy', status:'Available', mcu:'Renesas RX', conn:'RS-485', desc:'Energy metrology front-end with hardware and firmware tamper-detection algorithms.', tags:['Metrology','Tamper','Renesas'], price:'Request quote' },
  { name:'BLE Sensor Bridge', cat:'Connected Devices', status:'Available', mcu:'nRF52840', conn:'BLE 5.x', desc:'Reference design bridging analog and digital sensors to a phone or gateway over BLE.', tags:['BLE','Reference','Sensors'], price:'From placeholder' },
  { name:'CAN Industrial Controller', cat:'Automation', status:'Prototype', mcu:'ARM Cortex-M7', conn:'CAN · RS-485', desc:'Deterministic control node for machine automation with a CAN control plane.', tags:['CAN','Real-time','Control'], price:'Request quote' },
];
const PROJECT_FILTERS = ['All','Smart Energy','Industrial IoT','Environmental','Connected Devices','Automation'];

const FIRMWARE = [
  ['Bare-metal C / C++','Deterministic low-level code written directly against the silicon.'],
  ['RTOS / FreeRTOS','Task architecture, scheduling and synchronization for real-time systems.'],
  ['Device drivers & BSP','Peripheral drivers and board support packages for new hardware.'],
  ['Bootloaders','Secure, field-updatable boot and firmware-update pipelines.'],
  ['Communication stacks','Reliable wired and wireless protocol implementations.'],
  ['Optimization & debugging','Cycle-, memory- and power-level tuning; hard-fault forensics.'],
];

const CONNECTIVITY = [
  {g:'Wireless',items:['BLE','Wi-Fi','Wi-SUN','Sub-GHz','LoRa','GSM / LTE']},
  {g:'Wired',items:['CAN','RS-485','UART','SPI','I²C']},
];

const INTELLIGENCE = [
  ['fa-solid fa-chart-line','Signal Processing','Filtering, transforms and feature extraction on live sensor streams.'],
  ['fa-solid fa-magnifying-glass-chart','Sensor Intelligence','Fusion and calibration that turn raw readings into trustworthy data.'],
  ['fa-solid fa-triangle-exclamation','Anomaly Detection','On-device detection of faults, tamper and out-of-spec behaviour.'],
  ['fa-solid fa-bolt','Energy & Metrology','Precision measurement algorithms for smart-energy systems.'],
  ['fa-solid fa-brain','Edge AI · TinyML','Compact models that infer on the MCU, within tight power budgets.'],
  ['fa-solid fa-gauge-high','Real-time Decisions','Deterministic control loops that act in microseconds, not seconds.'],
];

const INDUSTRIES = [
  ['fa-solid fa-plug-circle-bolt','Smart Energy','Metering, metrology and grid-edge intelligence.'],
  ['fa-solid fa-gears','Industrial IoT','Connected monitoring and control for the factory floor.'],
  ['fa-solid fa-leaf','Environmental','Air, water and climate monitoring networks.'],
  ['fa-solid fa-network-wired','Connected Devices','Products that sense, communicate and coordinate.'],
  ['fa-solid fa-robot','Automation','Deterministic control for machines and processes.'],
  ['fa-solid fa-satellite-dish','Telemetry','Long-range data collection from distributed assets.'],
];

const PROCESS = [
  ['Discover','We map the idea, constraints and target — what must be true for the product to work.'],
  ['Architect','System, hardware and firmware architecture defined before a line of code is written.'],
  ['Engineer','Firmware, drivers and algorithms built and reviewed against the architecture.'],
  ['Integrate','Hardware bring-up, connectivity and intelligence brought together on real silicon.'],
  ['Validate','Bench and field testing, debugging discipline, and measured performance.'],
  ['Deploy','Production firmware, documentation and long-term engineering support.'],
];

const WHY = [
  ['Engineering-first thinking','Decisions are driven by system behaviour and physics, not trends.'],
  ['Low-level expertise','Comfortable at the register, the bus and the datasheet.'],
  ['Hardware + firmware','We understand both sides of the pin, so nothing falls between them.'],
  ['Production-oriented','Built to ship, be manufactured, and be maintained — not just to demo.'],
  ['Documentation discipline','Every system leaves with the docs to own and extend it.'],
  ['System-level view','We engineer the whole path from silicon to the real world.'],
];

const NAV_LINKS = ['Projects','Solutions','Firmware','Connectivity','Intelligence','Industries'];
const NAV_PAGES = [
  { label:'Home', href:'index.html' },
  { label:'Projects', href:'projects.html' },
  { label:'Services', href:'services.html' },
  { label:'Industries', href:'about.html#industries' },
  { label:'About', href:'about.html' },
];

Object.assign(window, { STACK, CAPABILITIES, PROJECTS, PROJECT_FILTERS, FIRMWARE, CONNECTIVITY, INTELLIGENCE, INDUSTRIES, PROCESS, WHY, NAV_LINKS, NAV_PAGES });
