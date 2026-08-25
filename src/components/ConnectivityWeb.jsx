/* THE CONNECTED SYSTEM

   A radial diagram of every link ANANTA IONS works across, with the controller
   at the centre. Restored from the original site — it was the best visual it
   had — and rebuilt: the spokes are Engineering Traces, so the signal actually
   travels outward from the controller to each protocol rather than sitting
   still, and each spoke carries its own phase so the diagram reads as traffic
   rather than a strobe.

   Text lives in the adjacent list, not the SVG: at 390px an 11px SVG label is
   unreadable, and a screen reader gets nothing from it either. */

const WIRED = ['CAN', 'RS-485', 'UART', 'SPI', 'I²C'];
const WIRELESS = ['BLE', 'Wi-Fi', 'Wi-SUN', 'LoRa', 'Sub-GHz', 'GSM / LTE'];
const NODES = [...WIRELESS, ...WIRED];

const CX = 210, CY = 210, R = 146, CORE = 44;

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
    const w = Math.max(50, label.length * 6.9 + 30);
    return { label, x, y, sx, sy, ex, ey, len, w, wireless: i < WIRELESS.length };
  });

  return (
    <figure className="web">
      <div className="web__figure">
        <svg viewBox="0 0 420 420" role="presentation" aria-hidden="true"
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
                <circle cx={p.x - p.w / 2 + 11} cy={p.y} r="2.6"
                        fill={p.wireless ? 'var(--ai-gold)' : 'var(--ai-copper-txt)'}
                        className="web__dot" style={{ animationDelay: `${(i * 0.24).toFixed(2)}s` }} />
                <text x={p.x - p.w / 2 + 20} y={p.y + 4} textAnchor="start" className="web__label">
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
