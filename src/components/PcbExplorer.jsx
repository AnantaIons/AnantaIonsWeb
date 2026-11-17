import { useState } from 'react';

/* Interactive circuit board. A generic connected-controller layout (not any
   specific client or product design): each hotspot is a real button over
   the drawing, so it works with keyboard and screen readers, and the
   explanation panel updates politely. */

const PARTS = [
  { id: 'mcu', x: 47, y: 44, title: 'Microcontroller', body: 'The brain. It runs the firmware we write: reading sensors, making decisions, driving outputs. Choosing the right one — pins, memory, power, price, availability — is the first engineering decision.', skill: 'Firmware in C / C++, RTOS where it helps' },
  { id: 'antenna', x: 80, y: 18, title: 'Wi-Fi / Bluetooth antenna', body: 'A printed antenna needs copper-free space around it. Put a ground plane or a metal box too close and the range drops sharply.', skill: 'RF-aware layout, connectivity firmware' },
  { id: 'regulator', x: 15, y: 30, title: 'Voltage regulator', body: 'Turns 12 V or 5 V input into the clean 3.3 V the chip needs. Under-sized regulators overheat; noisy ones cause random resets.', skill: 'Power design and thermal checks' },
  { id: 'crystal', x: 33, y: 66, title: 'Crystal', body: 'Sets the clock. Serial links, timers and radio all depend on it being accurate and laid out close to the chip.', skill: 'Clock and timing design' },
  { id: 'shifter', x: 64, y: 70, title: 'Level shifter', body: 'Lets a 3.3 V controller talk safely to 5 V parts such as LED panels. Skipping it is a common cause of flicker and damaged pins.', skill: 'Interface and signal-integrity design' },
  { id: 'gsm', x: 84, y: 56, title: 'GSM module', body: 'Sends and receives SMS and calls. It draws short bursts of high current, so its power supply needs its own capacitors.', skill: 'GSM / AT-command firmware' },
  { id: 'connector', x: 92, y: 84, title: 'Output connector', body: 'Where the board meets the outside world — LED panels, relays, sensors. Connectors get protection against wrong wiring and static.', skill: 'Robust I/O and protection' },
  { id: 'usb', x: 7, y: 70, title: 'USB / programming port', body: 'Used to load firmware and debug. Production boards also get a way to update firmware without opening the box.', skill: 'Bootloaders and over-the-air updates' },
];

export default function PcbExplorer() {
  const [active, setActive] = useState('mcu');
  const part = PARTS.find((p) => p.id === active);

  return (
    <div className="pcb">
      <div className="pcb__stage">
        <svg className="pcb__art" viewBox="0 0 800 500" aria-hidden="true" focusable="false">
          <defs>
            <pattern id="pcb-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M20 0H0V20" fill="none" stroke="rgba(214,182,107,.06)" />
            </pattern>
            <linearGradient id="pcb-board" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#14241E" /><stop offset="1" stopColor="#0C1713" />
            </linearGradient>
          </defs>
          <rect x="10" y="10" width="780" height="480" rx="22" fill="url(#pcb-board)" stroke="#3A5A4C" strokeWidth="2" />
          <rect x="10" y="10" width="780" height="480" rx="22" fill="url(#pcb-grid)" />
          {[[40, 40], [760, 40], [40, 460], [760, 460]].map(([x, y]) => <circle key={`${x}${y}`} cx={x} cy={y} r="12" fill="#0B0A08" stroke="#C58960" strokeWidth="3" />)}
          <g className="pcb__traces" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M160 150 H260 L300 190 H330" /><path d="M120 340 H200 L240 300 H330" />
            <path d="M440 200 H520 L560 160 H620 V110" /><path d="M440 260 H520 L560 300 H640" />
            <path d="M420 300 V340 L460 380 H500" /><path d="M560 380 H660 L700 420 H740" />
            <path d="M380 300 V350 L340 390 H280" /><path d="M640 300 V260 H680" />
            <path d="M80 230 H160 L190 260 V300" /><path d="M300 120 V90 H420" />
          </g>
          <g className="pcb__pulses" fill="none" strokeLinecap="round">
            <path d="M160 150 H260 L300 190 H330" pathLength="100" /><path d="M440 260 H520 L560 300 H640" pathLength="100" />
            <path d="M560 380 H660 L700 420 H740" pathLength="100" /><path d="M80 230 H160 L190 260 V300" pathLength="100" />
          </g>
          {/* regulator */}
          <rect x="80" y="120" width="80" height="60" rx="4" fill="#1A1714" stroke="#D6B66B" />
          <rect x="94" y="180" width="8" height="18" fill="#C58960" /><rect x="116" y="180" width="8" height="18" fill="#C58960" /><rect x="138" y="180" width="8" height="18" fill="#C58960" />
          {/* MCU */}
          <rect x="330" y="160" width="110" height="140" rx="6" fill="#121110" stroke="#D6B66B" strokeWidth="1.5" />
          {Array.from({ length: 9 }, (_, i) => <rect key={`ml${i}`} x="318" y={170 + i * 14} width="12" height="5" fill="#C58960" />)}
          {Array.from({ length: 9 }, (_, i) => <rect key={`mr${i}`} x="440" y={170 + i * 14} width="12" height="5" fill="#C58960" />)}
          <circle cx="346" cy="176" r="5" fill="#2D2A24" />
          {/* antenna */}
          <path d="M600 60 h40 v24 h-30 v20 h30 v20 h-30 v16 h48" fill="none" stroke="#D6B66B" strokeWidth="4" />
          <rect x="586" y="50" width="120" height="110" rx="4" fill="none" stroke="rgba(214,182,107,.3)" strokeDasharray="6 6" />
          {/* crystal */}
          <rect x="250" y="315" width="40" height="22" rx="10" fill="#B7BCC3" />
          {/* level shifter */}
          <rect x="480" y="330" width="70" height="44" rx="3" fill="#121110" stroke="#D6B66B" />
          {Array.from({ length: 5 }, (_, i) => <rect key={`ls${i}`} x={486 + i * 13} y="374" width="5" height="10" fill="#C58960" />)}
          {/* GSM */}
          <rect x="640" y="240" width="110" height="80" rx="4" fill="#B7BCC3" opacity=".9" />
          <rect x="652" y="252" width="86" height="56" rx="2" fill="none" stroke="#5C5346" />
          {/* connector */}
          <rect x="700" y="400" width="70" height="40" rx="3" fill="#1A1714" stroke="#D6B66B" />
          {Array.from({ length: 4 }, (_, i) => <circle key={`cn${i}`} cx={714 + i * 14} cy="420" r="4" fill="#C58960" />)}
          {/* USB */}
          <rect x="10" y="320" width="56" height="36" rx="4" fill="#9AA0A6" />
          {/* caps */}
          {[[200, 220], [470, 140], [600, 340], [260, 400]].map(([x, y]) => <rect key={`c${x}`} x={x} y={y} width="16" height="10" rx="2" fill="#C58960" />)}
        </svg>

        {PARTS.map((p) => (
          <button key={p.id} type="button" className={`pcb__spot${active === p.id ? ' is-active' : ''}`}
            style={{ left: `${p.x}%`, top: `${p.y}%` }} aria-pressed={active === p.id}
            onClick={() => setActive(p.id)}>
            <span className="visually-hidden">{p.title}</span>
          </button>
        ))}
      </div>

      <div className="pcb__panel" aria-live="polite">
        <span className="pcb__label">Component</span>
        <h3 className="h-2">{part.title}</h3>
        <p>{part.body}</p>
        <p className="pcb__skill"><span>What we do here</span>{part.skill}</p>
        <div className="pcb__list" role="group" aria-label="Choose a component">
          {PARTS.map((p) => (
            <button key={p.id} type="button" className={`demo__chip${active === p.id ? ' is-active' : ''}`}
              aria-pressed={active === p.id} onClick={() => setActive(p.id)}>{p.title}</button>
          ))}
        </div>
      </div>
    </div>
  );
}
