/* THE CONNECTED SYSTEM

   A radial diagram of every link ANANTA IONS works across, with the controller
   at the centre. Restored from the original site — it was the best visual it
   had — and rebuilt: the spokes are Engineering Traces, so the signal actually
   travels outward from the controller to each protocol rather than sitting
   still, and each spoke carries its own phase so the diagram reads as traffic
   rather than a strobe.

   Text lives in the adjacent list, not the SVG: at 390px an 11px SVG label is
   unreadable, and a screen reader gets nothing from it either. */

/* Each link gets the thing it is usually carrying, drawn in 16 units so it
   sits inside the node plate: what the protocol connects to says more at a
   glance than the protocol name alone. */
const GLYPH = {
  'BLE':       'M8 1.5v13l4.5-4L5 5.5M8 14.5v-13l4.5 4L5 10.5',
  'Wi-Fi':     'M2 6.5a9 9 0 0 1 12 0M4.5 9.5a5.5 5.5 0 0 1 7 0M8 12.5v0',
  'Wi-SUN':    'M8 3.5v9M3.5 6l4.5-2.5L12.5 6M3.5 10l4.5 2.5L12.5 10',
  'LoRa':      'M8 9.5v5M5 3a5 5 0 0 1 6 0M3 1a8 8 0 0 1 10 0M8 7.5v0',
  'Sub-GHz':   'M1.5 11h2l2-6 2.5 9 2-6 1.5 3h3',
  'GSM / LTE': 'M8 2v12M4 5.5v8.5M12 5.5v8.5M1.5 9v5M14.5 9v5',
  'CAN':       'M2 8h3M11 8h3M5 4.5h6v7H5zM8 2v2.5M8 11.5V14',
  'RS-485':    'M2 5.5h12M2 10.5h12M5 5.5v5M11 5.5v5',
  'UART':      'M3 4.5h10v7H3zM5 2.5v2M8 2.5v2M11 2.5v2M5 11.5v2M8 11.5v2M11 11.5v2',
  'SPI':       'M2.5 3.5h11v9h-11zM4.5 6h7M4.5 8h7M4.5 10h4',
  'I²C':       'M2 5h12M2 11h12M6 3v4M10 9v4',
};

const WIRED = ['CAN', 'RS-485', 'UART', 'SPI', 'I²C'];
const WIRELESS = ['BLE', 'Wi-Fi', 'Wi-SUN', 'LoRa', 'Sub-GHz', 'GSM / LTE'];
const NODES = [...WIRELESS, ...WIRED];

/* R is set by the widest node plate: eleven of them must sit on the ring
   without touching, and "GSM / LTE" is the one that decides it. */
const CX = 240, CY = 240, R = 182, CORE = 46;

export default function ConnectivityWeb() {
  const points = NODES.map((label, i) => {
    const a = (i / NODES.length) * Math.PI * 2 - Math.PI / 2;
    const x = CX + Math.cos(a) * R;
    const y = CY + Math.sin(a) * R;
    // Start the spoke at the edge of the core, not its centre.
    const sx = CX + Math.cos(a) * CORE;
    const sy = CY + Math.sin(a) * CORE;
    // Stop the spoke at the node's edge rather than under it.
    const ex = CX + Math.cos(a) * (R - 16);
    const ey = CY + Math.sin(a) * (R - 16);
    const len = Math.round(R - 16 - CORE);
    // The node is sized to its own label — "I²C" and "GSM / LTE" do not
    // deserve the same box.
    const w = Math.max(62, label.length * 6.6 + 38);
    return { label, x, y, sx, sy, ex, ey, len, w, wireless: i < WIRELESS.length };
  });

  return (
    <figure className="web">
      <div className="web__figure">
        <svg viewBox="0 0 480 480" role="presentation" aria-hidden="true"
             preserveAspectRatio="xMidYMid meet">
          <defs>
            <radialGradient id="web-core">
              <stop offset="0" stopColor="#1b1f26" />
              <stop offset="1" stopColor="#0a0c10" />
            </radialGradient>
          </defs>

          {/* spokes — the conductors */}
          {points.map((p, i) => (
            <g key={p.label}>
              <line x1={p.sx} y1={p.sy} x2={p.ex} y2={p.ey}
                    stroke="var(--ai-copper-deep)" strokeWidth="1" />
              <line
                className="trace-live"
                x1={p.sx} y1={p.sy} x2={p.ex} y2={p.ey}
                stroke={p.wireless ? 'var(--ai-gold)' : 'var(--ai-copper-txt)'}
                style={{ '--live-len': p.len, '--live-delay': `${(i * 0.24).toFixed(2)}s`,
                         '--dur-flow': '2.9s' }}
              />
            </g>
          ))}

          {/* the controller */}
          <circle cx={CX} cy={CY} r={CORE} fill="url(#web-core)"
                  stroke="var(--ai-gold)" strokeWidth="1.25" />
          <rect x={CX - 9} y={CY - 9} width="18" height="18" fill="none"
                stroke="var(--ai-copper)" strokeWidth="1" />
          <rect x={CX - 3} y={CY - 3} width="6" height="6" fill="var(--ai-gold)" />

          {/* protocol nodes. Two forms of the same node: a labelled plate for
              widths where 11px SVG type is readable, and a plain square below
              that, where the legend carries the names instead. Swapped in CSS
              rather than JS so it costs nothing and survives a resize. */}
          {points.map((p, i) => (
            <g key={`n-${p.label}`}>
              <g className="web__node web__node--wide">
                <rect x={p.x - p.w / 2} y={p.y - 15} width={p.w} height="30" rx="1"
                      fill="var(--ai-panel-2)" stroke="var(--ai-line-2)" />
                <rect x={p.x - p.w / 2} y={p.y - 15} width="2.5" height="30"
                      fill={p.wireless ? 'var(--ai-gold)' : 'var(--ai-copper-txt)'} />
                <g transform={`translate(${p.x - p.w / 2 + 9} ${p.y - 8})`}
                   className="web__glyph"
                   style={{ '--glyph-tint': p.wireless ? 'var(--ai-gold)' : 'var(--ai-copper-txt)' }}>
                  <path d={GLYPH[p.label]} />
                </g>
                <text x={p.x - p.w / 2 + 31} y={p.y + 4} textAnchor="start" className="web__label">
                  {p.label}
                </text>
              </g>
              <g className="web__node web__node--compact">
                <rect x={p.x - 12} y={p.y - 12} width="24" height="24" rx="1"
                      fill="var(--ai-panel-2)" stroke="var(--ai-line-2)" />
                <rect x={p.x - 12} y={p.y - 12} width="24" height="2.5"
                      fill={p.wireless ? 'var(--ai-gold)' : 'var(--ai-copper-txt)'} />
                <rect x={p.x - 3.5} y={p.y - 2} width="7" height="7"
                      fill={p.wireless ? 'var(--ai-gold)' : 'var(--ai-copper-txt)'}
                      className="web__dot" style={{ animationDelay: `${(i * 0.24).toFixed(2)}s` }} />
              </g>
            </g>
          ))}

        </svg>
      </div>

      <figcaption className="web__legend">
        <div className="web__group">
          <p className="label label--signal">Wireless</p>
          <ul className="chip-set">
            {WIRELESS.map((n) => <li className="chip chip--signal" key={n}>{n}</li>)}
          </ul>
        </div>
        <div className="web__group">
          <p className="label">Wired</p>
          <ul className="chip-set">
            {WIRED.map((n) => <li className="chip chip--hardware" key={n}>{n}</li>)}
          </ul>
        </div>
        <p className="web__note">
          Every link is chosen against range, power budget and interference — then made
          to fail predictably rather than silently.
        </p>
      </figcaption>
    </figure>
  );
}
