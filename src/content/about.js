/* Positioning and industries. Transcribed from the supplied ANANTA IONS
   content model — these are stated principles and served sectors, not claims
   about customers, deployments or results. */

export const principles = [
  ['We read the datasheet',
   'Most field bugs come from a timing diagram or an errata note someone skipped. We check them first.'],
  ['Hardware and firmware together',
   'The same people look at the schematic and write the code, so problems at the pins get caught early.'],
  ['Built to be manufactured',
   'We pick parts you can actually buy in India, and design boards that can be assembled and tested in volume.'],
  ['Updates planned from day one',
   'Every product we design has a way to update its firmware after it is installed.'],
  ['Documentation you can use',
   'You get schematics, source code and notes that let your own team maintain the product.'],
  ['Honest about status',
   'If something is a prototype, we call it a prototype. If a job is not right for us, we say so.'],
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
