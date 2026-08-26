/* Positioning and industries. Transcribed from the supplied ANANTA IONS
   content model — these are stated principles and served sectors, not claims
   about customers, deployments or results. */

export const principles = [
  ['Engineering-first thinking',
   'Decisions are driven by system behaviour and physics, not by trends.'],
  ['Low-level expertise',
   'Comfortable at the register, the bus and the datasheet.'],
  ['Hardware and firmware together',
   'We understand both sides of the pin, so nothing falls between them.'],
  ['Production-oriented',
   'Built to ship, to be manufactured and to be maintained — not to demo.'],
  ['Documentation discipline',
   'Every system leaves with the documentation needed to own and extend it.'],
  ['System-level view',
   'We engineer the whole path from silicon to the real world.'],
];

export const industries = [
  ['power',     'Smart Energy',      'Metering, metrology and grid-edge intelligence.'],
  ['gauge',     'Industrial IoT',    'Connected monitoring and control for the factory floor.'],
  ['signal',    'Environmental',     'Air, water and climate monitoring networks.'],
  ['network',   'Connected Devices', 'Products that sense, communicate and coordinate.'],
  ['chip',      'Automation',        'Deterministic control for machines and processes.'],
  ['broadcast', 'Telemetry',         'Long-range data collection from distributed assets.'],
];

/* Where a project can join. Engineering rarely starts at step one. */
export const entryPoints = [
  'Idea', 'Prototype', 'Hardware ready', 'Firmware development',
  'Debugging', 'Field testing', 'Production',
];
