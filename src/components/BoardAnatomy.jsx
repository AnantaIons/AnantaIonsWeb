/* What is inside an Ananta board — an exploded view, three layers pulled
   apart. Generic parts only. Numbers match the list beside the drawing. */
const Dot = ({ x, y, n }) => (
  <g className="anat__dot"><circle cx={x} cy={y} r="13" /><text x={x} y={y + 4.5} textAnchor="middle">{n}</text></g>
);

export const ANATOMY = [
  ['LED panels', '25 P10 panels, 160 × 80 bright LEDs, outdoor rated.'],
  ['Controller', 'Stores your messages. Update by Wi-Fi, internet, Bluetooth or USB.'],
  ['Power supply', '5 V supplies sized for the full board, with a fuse.'],
  ['Light sensor', 'Auto-brightness: full in sunlight, softer at night.'],
  ['Cables', 'Data and power cables, neatly tied and labelled.'],
  ['Frame and back', 'Aluminium frame and closed back, ready to mount.'],
  ['Battery (optional)', 'Lithium battery keeps it running in power cuts.'],
];

export default function BoardAnatomy() {
  const panels = [];
  for (let r = 0; r < 5; r++) for (let c = 0; c < 5; c++) panels.push(<rect key={`${r}-${c}`} x={c * 64} y={r * 32} width="64" height="32" className="anat__panel" />);
  return (
    <svg className="anat" viewBox="0 0 560 420" role="img" aria-label="Exploded view of an Ananta LED board: LED panels, controller and power, frame and back">
      <defs>
        <pattern id="anat-led" width="4" height="4" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.1" fill="#3A1A00" /></pattern>
        <pattern id="anat-lit" width="4" height="4" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.3" fill="#FFA000" /></pattern>
      </defs>
      {/* back layer: frame and closed back */}
      <g transform="translate(250 40) skewY(14)">
        <rect width="320" height="160" rx="6" className="anat__back" />
        <rect x="20" y="-8" width="40" height="10" rx="2" className="anat__bracket" /><rect x="260" y="-8" width="40" height="10" rx="2" className="anat__bracket" />
      </g>
      {/* middle layer: controller, power, cables, battery */}
      <g transform="translate(150 110) skewY(14)">
        <rect width="320" height="160" rx="6" className="anat__tray" />
        <rect x="24" y="24" width="70" height="44" rx="4" className="anat__ctrl" />
        <rect x="120" y="22" width="80" height="34" rx="3" className="anat__psu" /><rect x="120" y="66" width="80" height="34" rx="3" className="anat__psu" />
        <rect x="226" y="96" width="70" height="44" rx="4" className="anat__bat" />
        <path d="M94 46 H120 M200 40 C250 40 250 120 300 120 M60 68 V130 H220" className="anat__wire" />
        <circle cx="300" cy="14" r="6" className="anat__sensor" />
      </g>
      {/* front layer: P10 panels with a lit message */}
      <g transform="translate(40 190) skewY(14)">
        <rect x="-6" y="-6" width="332" height="172" rx="8" className="anat__frame" />
        <rect width="320" height="160" fill="url(#anat-led)" className="anat__face" />
        {panels}
        <text x="160" y="98" textAnchor="middle" className="anat__msg">OPEN</text>
      </g>
      <Dot x="70" y="196" n="1" />
      <Dot x="190" y="128" n="2" />
      <Dot x="300" y="152" n="3" />
      <Dot x="460" y="104" n="4" />
      <Dot x="250" y="250" n="5" />
      <Dot x="540" y="120" n="6" />
      <Dot x="420" y="300" n="7" />
    </svg>
  );
}
