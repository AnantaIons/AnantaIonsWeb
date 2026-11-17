/* Technical line illustrations of each part, drawn in the brand metals on
   obsidian. They stand in until real product photos are supplied — swap a
   case for an <img> when photography exists. Decorative: the product name is
   always in text beside them. */

const G = '#D6B66B';   // gold lines
const C = '#C58960';   // copper details
const D = '#3A342B';   // dark fills
const A = '#FFA000';   // amber LEDs

function Pins({ x, y, n, step = 10, len = 8, dir = 1 }) {
  return Array.from({ length: n }, (_, i) => (
    <rect key={i} x={x + i * step} y={dir > 0 ? y : y - len} width="4" height={len} fill={G} opacity=".85" />
  ));
}

function Dots({ x, y, cols, rows, gap, on }) {
  const out = [];
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
    out.push(<circle key={`${r}-${c}`} cx={x + c * gap} cy={y + r * gap} r={gap * 0.32} fill={on && on(c, r) ? A : '#2B1600'} />);
  }
  return out;
}

const ART = {
  'p10-led-module': () => (
    <g>
      <rect x="40" y="48" width="240" height="120" rx="6" fill="#0B0A08" stroke={G} strokeWidth="1.5" />
      <Dots x={50} y={58} cols={32} rows={16} gap={7.1} on={(c, r) => (r > 3 && r < 12 && (c % 7 === 1 || c % 7 === 2 || (r === 4 || r === 11) && c % 7 < 5))} />
      <rect x="130" y="172" width="60" height="10" rx="2" fill={D} stroke={C} />
    </g>
  ),
  'smps-5v': () => (
    <g>
      <rect x="50" y="50" width="220" height="110" rx="6" fill={D} stroke={G} strokeWidth="1.5" />
      {Array.from({ length: 14 }, (_, i) => <rect key={i} x={66 + i * 11} y="64" width="5" height="44" rx="2" fill="#1A1714" />)}
      <rect x="62" y="124" width="196" height="24" rx="3" fill="#1A1714" stroke={C} />
      {Array.from({ length: 7 }, (_, i) => <circle key={i} cx={78 + i * 27} cy="136" r="6" fill="none" stroke={G} />)}
    </g>
  ),
  'panel-cables': () => (
    <g fill="none">
      <path d="M40 80 C120 40, 200 140, 280 90" stroke={G} strokeWidth="16" opacity=".25" />
      {Array.from({ length: 8 }, (_, i) => <path key={i} d={`M40 ${73 + i * 2} C120 ${33 + i * 2}, 200 ${133 + i * 2}, 280 ${83 + i * 2}`} stroke={i % 2 ? C : G} strokeWidth="1" />)}
      <rect x="22" y="68" width="22" height="26" rx="3" fill={D} stroke={G} />
      <rect x="276" y="78" width="22" height="26" rx="3" fill={D} stroke={G} />
      <path d="M50 150 C110 130, 180 175, 270 145" stroke="#B3332D" strokeWidth="4" />
      <path d="M50 160 C110 140, 180 185, 270 155" stroke="#1C1A18" strokeWidth="4" />
      <path d="M50 160 C110 140, 180 185, 270 155" stroke={G} strokeWidth=".8" opacity=".5" />
    </g>
  ),
  'led-board-complete': () => (
    <g>
      <rect x="20" y="44" width="280" height="112" rx="8" fill="#0B0A08" stroke={G} strokeWidth="2" />
      <Dots x={30} y={54} cols={40} rows={14} gap={6.6} on={(c, r) => r > 2 && r < 11 && ((c * 7 + r * 3) % 11 < 5)} />
      <rect x="140" y="156" width="40" height="22" fill={D} stroke={C} />
    </g>
  ),
  'esp32-devkit': () => (
    <g>
      <rect x="70" y="40" width="180" height="120" rx="6" fill="#16232A" stroke={G} strokeWidth="1.5" />
      <rect x="110" y="52" width="100" height="70" rx="3" fill="#C9CCD1" opacity=".9" />
      <path d="M118 58 h16 v8 h-12 v8 h12 v8 h-12 v8 h16" fill="none" stroke={C} strokeWidth="2" />
      <rect x="146" y="140" width="28" height="18" rx="2" fill="#9AA0A6" />
      <Pins x={76} y={30} n={17} step={10} len={10} />
      <Pins x={76} y={160} n={17} step={10} len={10} />
      <rect x="84" y="134" width="14" height="10" rx="2" fill={D} stroke={G} />
      <rect x="222" y="134" width="14" height="10" rx="2" fill={D} stroke={G} />
    </g>
  ),
  'arduino-uno': () => (
    <g>
      <path d="M50 46 h210 l14 14 v96 l-14 14 H50 z" fill="#0E4E6B" stroke={G} strokeWidth="1.5" />
      <rect x="36" y="58" width="34" height="34" rx="2" fill="#B7BCC3" />
      <rect x="40" y="118" width="40" height="30" rx="3" fill="#1A1714" />
      <rect x="150" y="110" width="96" height="26" rx="2" fill="#1A1714" stroke={C} />
      <Pins x={150} y={104} n={10} step={9} len={6} dir={-1} />
      <rect x="110" y="50" width="150" height="10" fill="#1A1714" />
      <rect x="140" y="160" width="120" height="10" fill="#1A1714" />
      <circle cx="100" cy="72" r="5" fill={A} />
    </g>
  ),
  'arduino-mega': () => (
    <g>
      <path d="M20 54 h270 l12 12 v76 l-12 12 H20 z" fill="#0E4E6B" stroke={G} strokeWidth="1.5" />
      <rect x="8" y="64" width="28" height="28" rx="2" fill="#B7BCC3" />
      <rect x="12" y="112" width="32" height="26" rx="3" fill="#1A1714" />
      <rect x="140" y="88" width="56" height="56" rx="3" fill="#1A1714" stroke={C} transform="rotate(45 168 116)" />
      <rect x="70" y="58" width="210" height="9" fill="#1A1714" />
      <rect x="90" y="142" width="190" height="9" fill="#1A1714" />
      <rect x="268" y="68" width="16" height="72" fill="#1A1714" />
    </g>
  ),
  'attiny85': () => (
    <g>
      <rect x="110" y="60" width="100" height="80" rx="6" fill="#1A1714" stroke={G} strokeWidth="1.5" />
      <circle cx="160" cy="60" r="10" fill="#0B0A08" stroke={G} />
      <circle cx="124" cy="126" r="4" fill="#2D2A24" />
      {Array.from({ length: 4 }, (_, i) => <rect key={`l${i}`} x="90" y={68 + i * 18} width="20" height="6" fill={C} />)}
      {Array.from({ length: 4 }, (_, i) => <rect key={`r${i}`} x="210" y={68 + i * 18} width="20" height="6" fill={C} />)}
    </g>
  ),
  'sim800-gsm': () => (
    <g>
      <rect x="80" y="50" width="160" height="110" rx="6" fill="#2A1E3A" stroke={G} strokeWidth="1.5" />
      <rect x="100" y="66" width="70" height="56" rx="3" fill="#B7BCC3" />
      <rect x="184" y="66" width="44" height="56" rx="4" fill="none" stroke={C} strokeDasharray="3 3" />
      <path d="M240 70 h22 M262 70 l8 -30" stroke={G} strokeWidth="2" fill="none" />
      <Pins x={96} y={160} n={12} step={11} len={10} />
    </g>
  ),
  'relay-module': () => (
    <g>
      <rect x="60" y="56" width="200" height="100" rx="6" fill="#0E2B1F" stroke={G} strokeWidth="1.5" />
      <rect x="90" y="70" width="80" height="60" rx="4" fill="#1D4E8F" />
      <rect x="190" y="74" width="54" height="40" rx="3" fill="#2E6FA8" />
      {Array.from({ length: 3 }, (_, i) => <circle key={i} cx={202 + i * 15} cy="94" r="5" fill="#B7BCC3" />)}
      <circle cx="210" cy="136" r="4" fill="#E0484A" />
      <Pins x={70} y={156} n={3} step={12} len={10} />
    </g>
  ),
};

export default function ProductArt({ id }) {
  const Draw = ART[id];
  return (
    <svg className="product-art" viewBox="0 0 320 200" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id={`pa-${id}`} cx="50%" cy="45%" r="70%">
          <stop offset="0" stopColor="#2A2219" />
          <stop offset="1" stopColor="#11100E" />
        </radialGradient>
      </defs>
      <rect width="320" height="200" fill={`url(#pa-${id})`} />
      {Draw ? <Draw /> : null}
    </svg>
  );
}
