import { path } from '../lib/paths.js';

/* Where our boards work — evening street scenes (highway, shoe store,
   medical store, hospital, school gate, restaurant), each with a full-colour
   10 × 10 P10 board made in our design studio (public/work/boards/*.webp,
   exported from display-designer.html). The scenes are illustrations drawn
   in SVG with light, glow and reflections; the board images are real studio
   output. */

const VW = 640;
const VH = 400;

/* deterministic "random" so server and browser draw the same windows */
const rng = (seed) => () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };

function Windows({ x, y, cols, rows, w = 14, h = 18, gx = 10, gy = 12, seed = 1, lit = 0.55 }) {
  const r = rng(seed);
  const out = [];
  for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
    const on = r() < lit;
    out.push(<rect key={`${i}-${j}`} x={x + i * (w + gx)} y={y + j * (h + gy)} width={w} height={h} rx="1.5"
      fill={on ? (r() < 0.25 ? '#FFE9B8' : '#FFC86B') : '#1B2236'} opacity={on ? 0.75 + r() * 0.25 : 1} />);
  }
  return <g>{out}</g>;
}

/* A mounted 10 × 10 board: metal frame, the studio image, glow and a soft reflection. */
function Board({ id, img, x, y, w, glow }) {
  const h = w / 2;
  return (
    <g>
      {/* daylight: lifts the street and buildings behind the board when the visitor's sky is light */}
      <rect width={VW} height={VH} style={{ fill: 'var(--scn-wash, transparent)' }} />
      <rect x={x - 24} y={y - 18} width={w + 48} height={h + 40} fill={glow} opacity=".35" filter={`url(#${id}-glow)`} />
      <rect x={x - 7} y={y - 7} width={w + 14} height={h + 14} rx="3" fill={`url(#${id}-metal)`} />
      <rect x={x - 2} y={y - 2} width={w + 4} height={h + 4} fill="#050505" />
      <image href={img} x={x} y={y} width={w} height={h} preserveAspectRatio="none" />
      <rect x={x} y={y} width={w} height={h} fill={`url(#${id}-glass)`} />
    </g>
  );
}

function Defs({ id, glow }) {
  return (
    <defs>
      <filter id={`${id}-glow`} x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="22" /></filter>
      <filter id={`${id}-soft`} x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="6" /></filter>
      <linearGradient id={`${id}-metal`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#5A5D66" /><stop offset=".1" stopColor="#2A2C31" /><stop offset=".9" stopColor="#1A1B1F" /><stop offset="1" stopColor="#45474E" />
      </linearGradient>
      <linearGradient id={`${id}-glass`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#fff" stopOpacity=".07" /><stop offset=".45" stopColor="#fff" stopOpacity="0" />
      </linearGradient>
      <radialGradient id={`${id}-pool`} cx=".5" cy=".5" r=".5">
        <stop offset="0" stopColor={glow} stopOpacity=".45" /><stop offset="1" stopColor={glow} stopOpacity="0" />
      </radialGradient>
    </defs>
  );
}

const Dusk = ({ id, top = '#141B33', mid = '#3A2E55', low = '#E07B4F' }) => (
  <>
    <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" style={{ stopColor: `var(--scn-top, ${top})` }} />
      <stop offset=".55" style={{ stopColor: `var(--scn-mid, ${mid})` }} />
      <stop offset="1" style={{ stopColor: `var(--scn-low, ${low})` }} />
    </linearGradient>
    <rect width={VW} height={VH} fill={`url(#${id}-sky)`} />
  </>
);

export const SCENES = [
  {
    id: 'billboard', title: 'Highway billboard', note: 'Big, bright offers that drivers read from far away.', glow: '#FF4FB0',
    art: (id, img, glow) => (
      <>
        <Dusk id={id} />
        <circle className="scn-sun" cx="120" cy="250" r="34" fill="#FFB27A" opacity=".55" filter={`url(#${id}-soft)`} />
        <path d="M0 262 L40 240 L70 250 L110 228 L150 246 L200 236 L240 252 L300 238 L360 256 L420 242 L470 254 L520 236 L580 250 L640 240 V280 H0 Z" fill="#1A1630" />
        <path d="M0 270 h30 v-18 h14 v-30 h16 v30 h10 v-12 h18 v30 h22 v-40 h12 v40 h20 v-22 h14 v22 H640 V290 H0 Z" fill="#130F24" opacity=".9" />
        <Windows x={34} y={226} cols={2} rows={2} w={4} h={5} gx={4} gy={4} seed={3} />
        <rect y="282" width={VW} height="118" fill="#111421" />
        <path d="M250 282 L-60 400 H120 L300 282 Z" fill="#1C2031" />
        <path d="M300 282 L120 400 H520 L340 282 Z" fill="#232838" />
        <path d="M318 290 L310 306 M304 320 L294 342 M286 360 L272 392" stroke="#E9E4D8" strokeWidth="3" strokeLinecap="round" opacity=".7" />
        <path d="M296 290 C240 330 180 360 60 400" stroke="#FF3B30" strokeWidth="2.5" opacity=".75" filter={`url(#${id}-soft)`} />
        <path d="M296 290 C240 330 180 360 60 400" stroke="#FF6B5E" strokeWidth="1.2" opacity=".9" />
        <path d="M324 290 C380 330 440 360 600 400" stroke="#FFF4D6" strokeWidth="2.5" opacity=".7" filter={`url(#${id}-soft)`} />
        <path d="M324 290 C380 330 440 360 600 400" stroke="#FFFDF2" strokeWidth="1.2" opacity=".95" />
        <rect x="462" y="190" width="10" height="120" fill="#2B2E36" /><rect x="546" y="190" width="10" height="120" fill="#2B2E36" />
        <path d="M466 210 L552 260 M552 210 L466 260" stroke="#2B2E36" strokeWidth="4" />
        <rect x="390" y="182" width="238" height="6" fill="#33363F" />
        <Board id={id} img={img} x={392} y={62} w={232} glow={glow} />
        <ellipse cx="510" cy="330" rx="120" ry="16" fill={`url(#${id}-pool)`} />
      </>
    ),
  },
  {
    id: 'shoes', title: 'Footwear store', note: 'A large board above the shop front, seen from the whole street.', glow: '#FF7A2A',
    art: (id, img, glow) => (
      <>
        <Dusk id={id} top="#0F1530" mid="#29284A" low="#7A4A60" />
        <rect x="0" y="40" width="110" height="300" fill="#151A2E" /><Windows x={14} y={60} cols={3} rows={6} w={18} h={22} gx={10} gy={16} seed={7} lit={.5} />
        <rect x="530" y="70" width="110" height="270" fill="#151A2E" /><Windows x={544} y={88} cols={3} rows={5} w={18} h={22} gx={10} gy={16} seed={9} lit={.45} />
        <rect x="110" y="20" width="420" height="320" fill="#1E2236" />
        <Board id={id} img={img} x={180} y={34} w={280} glow={glow} />
        <rect x="128" y="196" width="384" height="12" fill="#2E3246" />
        <path d="M120 208 H520 L506 232 H134 Z" fill="#B23A1C" /><path d="M120 208 H520 L506 232 H134 Z" fill={`url(#${id}-glass)`} />
        <rect x="140" y="242" width="140" height="98" fill="#FFD9A0" opacity=".9" /><rect x="360" y="242" width="140" height="98" fill="#FFD9A0" opacity=".9" />
        <rect x="292" y="242" width="56" height="98" fill="#3B2A1E" /><rect x="296" y="246" width="48" height="94" fill="#FFE7BD" opacity=".55" />
        <path d="M140 290 H280 M360 290 H500" stroke="#B88A55" strokeWidth="3" />
        {[[150, 288], [196, 288], [240, 288], [370, 288], [416, 288], [460, 288], [160, 336], [214, 336], [384, 336], [440, 336]].map(([sx, sy], k) => (
          <path key={k} d={`M${sx} ${sy} q4 -14 16 -10 l10 4 q8 3 8 6 z`} fill={['#2A2A33', '#C0392B', '#2E6FD8', '#EDEDED'][k % 4]} />
        ))}
        <rect y="340" width={VW} height="60" fill="#14172A" /><rect y="340" width={VW} height="4" fill="#2A2E42" />
        <ellipse cx="320" cy="372" rx="200" ry="18" fill="#FFD9A0" opacity=".12" />
        <path d="M560 340 v-30 q0 -8 6 -10 h6 q6 2 6 10 v30 M566 296 a7 7 0 1 0 0.1 0" fill="#0B0D18" />
      </>
    ),
  },
  {
    id: 'medical', title: 'Medical store', note: 'Open hours and offers, seen clearly at night.', glow: '#22D85A',
    art: (id, img, glow) => (
      <>
        <Dusk id={id} top="#0A0F22" mid="#151C38" low="#2A3150" />
        <rect x="0" y="80" width="90" height="260" fill="#121731" /><Windows x={12} y={96} cols={2} rows={6} w={20} h={18} gx={14} gy={18} seed={11} />
        <rect x="90" y="30" width="460" height="310" fill="#1A2034" />
        <rect x="550" y="110" width="90" height="230" fill="#121731" /><Windows x={562} y={126} cols={2} rows={5} w={20} h={18} gx={14} gy={18} seed={13} />
        <Board id={id} img={img} x={130} y={44} w={300} glow={glow} />
        <rect x="462" y="60" width="64" height="64" rx="8" fill="#0B2E17" /><path d="M494 72 V112 M474 92 H514" stroke="#28E06A" strokeWidth="14" />
        <rect x="462" y="60" width="64" height="64" rx="8" fill="#28E06A" opacity=".25" filter={`url(#${id}-soft)`} />
        <rect x="130" y="216" width="380" height="124" fill="#E8F6EE" opacity=".92" />
        {[236, 262, 288].map((sy) => <path key={sy} d={`M146 ${sy} H494`} stroke="#9FB8AA" strokeWidth="3" />)}
        {Array.from({ length: 22 }, (_, k) => (
          <rect key={k} x={152 + (k % 11) * 31} y={k < 11 ? 222 : 248} width="14" height={k % 3 ? 12 : 14} rx="2" fill={['#3F8F5A', '#D9534F', '#4A78C2', '#E2B23B'][k % 4]} />
        ))}
        <rect x="150" y="304" width="340" height="36" fill="#7BA38D" />
        <rect y="340" width={VW} height="60" fill="#10142A" />
        <ellipse cx="290" cy="368" rx="230" ry="20" fill={`url(#${id}-pool)`} />
        <path d="M40 350 h70 l-6 -18 h-22 l-10 -12 h-16 l6 14 h-12 z" fill="#0A0D1C" /><circle cx="54" cy="352" r="9" fill="#0A0D1C" /><circle cx="100" cy="352" r="9" fill="#0A0D1C" />
      </>
    ),
  },
  {
    id: 'hospital', title: 'Hospital', note: 'Emergency, OPD timings and notices, 24 × 7.', glow: '#FF3030',
    art: (id, img, glow) => (
      <>
        <Dusk id={id} top="#0C1430" mid="#1C2550" low="#4A4472" />
        <rect x="70" y="20" width="500" height="320" fill="#1D2440" />
        <rect x="250" y="0" width="140" height="30" fill="#232B4A" />
        <rect x="300" y="4" width="40" height="22" rx="3" fill="#E8EEF8" /><path d="M314 9 V21 M326 9 V21 M314 15 H326" stroke="#D02A2A" strokeWidth="3.5" />
        <Windows x={92} y={34} cols={14} rows={2} w={22} h={16} gx={11} gy={12} seed={21} lit={.7} />
        <Windows x={92} y={234} cols={4} rows={1} w={22} h={16} gx={11} seed={23} lit={.7} />
        <Windows x={432} y={234} cols={4} rows={1} w={22} h={16} gx={11} seed={25} lit={.7} />
        <Board id={id} img={img} x={180} y={92} w={280} glow={glow} />
        <path d="M232 262 H408 L396 280 H244 Z" fill="#E6EAF2" />
        <rect x="270" y="280" width="100" height="60" fill="#BFE3F0" opacity=".85" /><path d="M320 280 V340" stroke="#7FA9BB" strokeWidth="3" />
        <rect y="340" width={VW} height="60" fill="#121733" />
        <ellipse cx="320" cy="368" rx="220" ry="18" fill={`url(#${id}-pool)`} />
        <path d="M470 356 v-32 h58 l20 14 v18 z" fill="#E9EDF5" /><rect x="476" y="330" width="22" height="12" fill="#9CC3D9" />
        <path d="M494 344 h12 M500 338 v12" stroke="#D02A2A" strokeWidth="3" /><rect x="490" y="318" width="16" height="6" rx="2" fill="#2F6BFF" />
        <circle cx="488" cy="358" r="7" fill="#0B0E1E" /><circle cx="534" cy="358" r="7" fill="#0B0E1E" />
      </>
    ),
  },
  {
    id: 'school', title: 'School gate', note: 'Admissions, notices and timings at the gate.', glow: '#3A7BFF',
    art: (id, img, glow) => (
      <>
        <Dusk id={id} top="#5B8FD6" mid="#9CC0E8" low="#F2D7B0" />
        <circle className="scn-sun" cx="560" cy="80" r="26" fill="#FFF3C9" opacity=".9" />
        <rect x="20" y="170" width="600" height="170" fill="#E9D9C0" /><path d="M10 170 L320 120 L630 170 Z" fill="#B65A3C" />
        <Windows x={40} y={196} cols={16} rows={2} w={20} h={22} gx={16} gy={20} seed={31} lit={.15} />
        <rect x="130" y="70" width="40" height="270" fill="#C9B79A" /><rect x="470" y="70" width="40" height="270" fill="#C9B79A" />
        <rect x="124" y="62" width="52" height="12" fill="#A8977C" /><rect x="464" y="62" width="52" height="12" fill="#A8977C" />
        <rect x="170" y="190" width="300" height="150" fill="#2E3A4F" opacity=".25" />
        {Array.from({ length: 16 }, (_, k) => <path key={k} d={`M${182 + k * 18} 200 V340`} stroke="#3A3F4A" strokeWidth="4" />)}
        <path d="M170 210 H470 M170 320 H470" stroke="#3A3F4A" strokeWidth="5" />
        <Board id={id} img={img} x={182} y={58} w={276} glow={glow} />
        <circle cx="70" cy="250" r="44" fill="#3E7A3A" /><circle cx="40" cy="280" r="30" fill="#356B33" /><rect x="64" y="280" width="10" height="60" fill="#5A4030" />
        <circle cx="590" cy="260" r="36" fill="#3E7A3A" /><rect x="585" y="290" width="10" height="50" fill="#5A4030" />
        <rect y="340" width={VW} height="60" fill="#8E8A82" /><rect y="340" width={VW} height="5" fill="#A6A198" />
      </>
    ),
  },
  {
    id: 'restaurant', title: 'Restaurant', note: 'Today’s special, changed in seconds from a phone.', glow: '#FF5A2A',
    art: (id, img, glow) => (
      <>
        <Dusk id={id} top="#101633" mid="#33284E" low="#C26A4A" />
        <rect x="40" y="40" width="560" height="300" fill="#2A1E22" />
        <Board id={id} img={img} x={170} y={52} w={300} glow={glow} />
        <path d="M40 216 H600" stroke="#4A3430" strokeWidth="6" />
        {Array.from({ length: 22 }, (_, k) => (
          <circle key={k} cx={52 + k * 25.5} cy={232 + Math.sin(k * 0.6) * 3} r="3.2" fill="#FFD27A" />
        ))}
        <path d="M44 230 Q170 246 320 232 Q470 246 596 230" stroke="#6B5048" strokeWidth="1.5" fill="none" />
        <rect x="70" y="250" width="200" height="90" fill="#FFC27A" opacity=".85" /><rect x="370" y="250" width="200" height="90" fill="#FFC27A" opacity=".85" />
        <rect x="290" y="250" width="60" height="90" fill="#4A2E24" /><rect x="294" y="254" width="52" height="86" fill="#FFD9A0" opacity=".5" />
        <path d="M86 300 h40 M146 300 h40 M206 300 h40 M386 300 h40 M446 300 h40 M506 300 h40" stroke="#6B3A22" strokeWidth="4" />
        <rect y="340" width={VW} height="60" fill="#191424" />
        <path d="M90 382 Q130 350 170 382 Z" fill="#C0392B" /><path d="M130 382 V400" stroke="#C0392B" strokeWidth="3" />
        <path d="M470 382 Q510 350 550 382 Z" fill="#E2B23B" /><path d="M510 382 V400" stroke="#E2B23B" strokeWidth="3" />
        <ellipse cx="320" cy="364" rx="220" ry="16" fill={`url(#${id}-pool)`} />
      </>
    ),
  },
];

export function SceneArt({ s }) {
  const id = `scn-${s.id}`;
  return (
    <svg viewBox={`0 0 ${VW} ${VH}`} aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid slice">
      <Defs id={id} glow={s.glow} />
      {s.art(id, path(`/work/boards/${s.id}.webp`), s.glow)}
    </svg>
  );
}

export default function AppScenes() {
  return (
    <div className="scenes">
      {SCENES.map((s) => {
        return (
          <figure className="scene" key={s.id}>
            <div className="scene__art"><SceneArt s={s} /></div>
            <figcaption><strong>{s.title}</strong><span>{s.note}</span></figcaption>
          </figure>
        );
      })}
    </div>
  );
}
