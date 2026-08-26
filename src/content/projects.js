/* ============================================================================
   PROJECTS — the credibility engine of the site.

   *** EVERY ENTRY BELOW IS UNVERIFIED PLACEHOLDER MATERIAL. ***

   The supplied ANANTA IONS source material marks its project catalogue as
   illustrative ("project names, specifications and pricing are illustrative
   and to be replaced with real listings"). No customer, deployment, result or
   performance figure has been invented here, and none may be added without a
   verified source.

   Each entry carries `verified: false`, which makes the UI render a
   PLACEHOLDER marker on the card and the case study, and makes `npm run qa`
   report the site as not launch-ready. Set `verified: true` only when every
   field in that entry is true of a real ANANTA IONS project.

   Fields, per the required case-study structure:
     problem      the real-world problem the system addresses
     approach     the engineering approach taken
     architecture the system shape
     technology   platform / connectivity / interface facts
     engineering  what the hard part actually was
     result       the outcome  — MUST be verified before use
     status       lifecycle state
   ========================================================================= */

export const projects = [
  {
    id: 'dlms-protocol-analyzer',
    verified: false,
    title: 'DLMS/COSEM Protocol Analyzer',
    domain: 'Smart Energy',
    status: 'Reference design',
    summary:
      'Metering-grade protocol capture and decode for DLMS/COSEM smart-energy networks.',
    problem:
      'Field faults on metering networks are hard to diagnose because the protocol traffic ' +
      'is not observable with general-purpose tools.',
    approach:
      'A dedicated capture front-end that decodes DLMS/COSEM frames in real time rather ' +
      'than logging raw bytes for later analysis.',
    architecture: 'Capture front-end → frame decoder → session reconstruction → export.',
    technology: { platform: 'ARM Cortex-M4', connectivity: 'RS-485 · Wi-SUN', interface: 'Host tooling' },
    engineering:
      'Sustaining line-rate decode inside a constrained memory budget while preserving ' +
      'framing across a lossy bus.',
    result: null,
    tags: ['Metrology', 'RS-485', 'DLMS/COSEM'],
  },
  {
    id: 'environment-monitoring-node',
    verified: false,
    title: 'Environment Monitoring Node',
    domain: 'Environmental',
    status: 'Reference design',
    summary:
      'Multi-sensor edge node measuring air quality, temperature and humidity with local buffering.',
    problem:
      'Distributed environmental sensing loses data whenever the uplink is unavailable, ' +
      'which is exactly when the readings matter.',
    approach:
      'Buffer and timestamp locally, reconcile on reconnect, and calibrate sensors on the ' +
      'device instead of in post-processing.',
    architecture: 'Sensor array → conditioning & calibration → local store → BLE/Wi-Fi uplink.',
    technology: { platform: 'ESP32-S3', connectivity: 'BLE · Wi-Fi', interface: 'Gateway / phone' },
    engineering:
      'Holding calibration across temperature drift while staying inside the power budget ' +
      'a battery node allows.',
    result: null,
    tags: ['Sensors', 'Edge', 'BLE'],
  },
  {
    id: 'sub-ghz-telemetry-gateway',
    verified: false,
    title: 'Sub-GHz Telemetry Gateway',
    domain: 'Industrial IoT',
    status: 'Prototype',
    summary:
      'Long-range telemetry concentrator bridging field sensors to an industrial backhaul.',
    problem:
      'Field assets are distributed past the reach of short-range radio and past the ' +
      'economics of running cable.',
    approach:
      'A sub-GHz concentrator that aggregates many low-rate field nodes onto one ' +
      'industrial backhaul, with store-and-forward across outages.',
    architecture: 'Field nodes → sub-GHz concentrator → store & forward → backhaul.',
    technology: { platform: 'STM32WL', connectivity: 'LoRa · Sub-GHz', interface: 'Industrial backhaul' },
    engineering:
      'Scheduling many nodes on a shared band without collapsing throughput as the ' +
      'population grows.',
    result: null,
    tags: ['LoRa', 'Gateway', 'Telemetry'],
  },
  {
    id: 'tamper-aware-metering-module',
    verified: false,
    title: 'Tamper-Aware Metering Module',
    domain: 'Smart Energy',
    status: 'Reference design',
    summary:
      'Energy metrology front-end with hardware and firmware tamper-detection.',
    problem:
      'Revenue metering has to stay accurate and prove that it has not been interfered with.',
    approach:
      'Detection split deliberately across hardware and firmware so that defeating one ' +
      'layer does not defeat the measurement.',
    architecture: 'Metrology front-end → tamper detection → event log → RS-485 reporting.',
    technology: { platform: 'Renesas RX', connectivity: 'RS-485', interface: 'Utility head-end' },
    engineering:
      'Separating genuine tamper events from ordinary electrical noise without ' +
      'accumulating false positives in the field.',
    result: null,
    tags: ['Metrology', 'Tamper detection', 'Renesas'],
  },
  {
    id: 'ble-sensor-bridge',
    verified: false,
    title: 'BLE Sensor Bridge',
    domain: 'Connected Devices',
    status: 'Reference design',
    summary:
      'Bridges analog and digital sensors to a phone or gateway over BLE.',
    problem:
      'Existing instrumentation is often analog, and has no path to a modern application ' +
      'without replacing the sensor itself.',
    approach:
      'A bridge that conditions the existing signal and exposes it as a standard BLE ' +
      'service, leaving the installed sensor in place.',
    architecture: 'Analog/digital sensors → conditioning → BLE GATT services → host app.',
    technology: { platform: 'nRF52840', connectivity: 'BLE 5.x', interface: 'Phone / gateway' },
    engineering:
      'Keeping the radio duty cycle low enough for a coin cell while staying responsive ' +
      'enough to feel live.',
    result: null,
    tags: ['BLE', 'Sensors', 'Reference design'],
  },
  {
    id: 'can-industrial-controller',
    verified: false,
    title: 'CAN Industrial Controller',
    domain: 'Automation',
    status: 'Prototype',
    summary:
      'Deterministic control node for machine automation with a CAN control plane.',
    problem:
      'Machine control needs a bounded, predictable response time — average latency is ' +
      'not a useful guarantee.',
    approach:
      'A hard real-time control loop with the CAN control plane kept separate from ' +
      'diagnostics traffic.',
    architecture: 'Control loop → CAN control plane → RS-485 diagnostics → supervisory host.',
    technology: { platform: 'ARM Cortex-M7', connectivity: 'CAN · RS-485', interface: 'Supervisory host' },
    engineering:
      'Guaranteeing the worst-case path, not the average one, with diagnostics running ' +
      'alongside control.',
    result: null,
    tags: ['CAN', 'Real-time', 'Control'],
  },
];

export const projectDomains = [
  'All', 'Smart Energy', 'Industrial IoT', 'Environmental', 'Connected Devices', 'Automation',
];

/** Everything on the site that is not yet verified, for the QA report. */
export const unverifiedProjects = () => projects.filter(p => !p.verified);
