import { useState } from 'react';
import Icon from './Icon.jsx';
import { waLink } from '../lib/wa.js';
import { PRICES, BACKUP_FACTOR, inr } from '../content/pricing.js';

/* How many P10 panels does a wall need?
   A P10 module is 320 mm × 160 mm with 32 × 16 LEDs. The board is rounded UP
   to whole panels, so the result is the smallest board that covers the space. */

const PANEL_W = 320;   // mm
const PANEL_H = 160;   // mm
const UNITS = { ft: 304.8, m: 1000, in: 25.4 };
const LABEL = { ft: 'feet', m: 'metres', in: 'inches' };

const fmt = (mm, unit) => {
  const v = mm / UNITS[unit];
  return `${v.toFixed(unit === 'm' ? 2 : 1)} ${unit}`;
};

export default function SizeCalculator() {
  const [w, setW] = useState('4');
  const [h, setH] = useState('2');
  const [unit, setUnit] = useState('ft');
  const [kind, setKind] = useState('single');
  const [backup, setBackup] = useState(false);

  const wmm = Math.max(0, parseFloat(w) || 0) * UNITS[unit];
  const hmm = Math.max(0, parseFloat(h) || 0) * UNITS[unit];
  const across = Math.max(1, Math.ceil(wmm / PANEL_W - 0.02));
  const down = Math.max(1, Math.ceil(hmm / PANEL_H - 0.02));
  const total = across * down;
  const valid = wmm > 0 && hmm > 0 && total <= 400;
  const sqft = (across * PANEL_W * down * PANEL_H) / (304.8 * 304.8);
  const estimate = sqft * PRICES[kind].perSqFt * (backup ? BACKUP_FACTOR : 1);
  const shown = Math.min(across, 24);
  const shownDown = Math.min(down, 12);

  const message =
    `Hello ANANTA IONS, I want a quote for an LED board.\n` +
    `Space: ${w} × ${h} ${LABEL[unit]}\n` +
    `Board: ${across} × ${down} P10 panels (${total} total), ` +
    `${fmt(across * PANEL_W, unit)} × ${fmt(down * PANEL_H, unit)}\n` +
    `Type: ${PRICES[kind].name}${backup ? ' with lithium battery backup' : ''} (about ${sqft.toFixed(1)} sq ft, from ${inr(estimate)} + GST)\n` +
    `Message to show: `;

  return (
    <div className="calc">
      <div className="calc__inputs">
        <div className="field">
          <label htmlFor="calc-w">Width</label>
          <input id="calc-w" type="number" inputMode="decimal" min="0" step="0.5" value={w}
            onInput={(e) => setW(e.target.value)} />
        </div>
        <span className="calc__x" aria-hidden="true">×</span>
        <div className="field">
          <label htmlFor="calc-h">Height</label>
          <input id="calc-h" type="number" inputMode="decimal" min="0" step="0.5" value={h}
            onInput={(e) => setH(e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="calc-u">Unit</label>
          <select id="calc-u" value={unit} onChange={(e) => setUnit(e.target.value)}>
            <option value="ft">feet</option>
            <option value="in">inches</option>
            <option value="m">metres</option>
          </select>
        </div>
      </div>

      <div className="calc__kind" role="radiogroup" aria-label="Board type">
        {Object.values(PRICES).map((p) => (
          <button key={p.id} type="button" role="radio" aria-checked={kind === p.id}
            className={kind === p.id ? 'is-on' : ''} onClick={() => setKind(p.id)}>
            {p.name} <span>{inr(p.perSqFt)}/sq ft</span>
          </button>
        ))}
        <label className="calc__backup">
          <input type="checkbox" checked={backup} onChange={(e) => setBackup(e.target.checked)} />
          Lithium battery backup <span>(3 × price)</span>
        </label>
      </div>

      {valid ? (
        <div className="calc__result" aria-live="polite">
          <div
            className={`calc__preview${kind === 'rgb' ? ' calc__preview--rgb' : ''}`} aria-hidden="true"
            style={{ '--cols': shown, '--rows': shownDown, aspectRatio: `${across * 2} / ${down}`, width: `min(100%, ${Math.round((240 * across * 2) / down)}px)` }}
          >
            {Array.from({ length: shown * shownDown }, (_, i) => <span key={i} />)}
          </div>
          <dl className="calc__stats">
            <div><dt>Panels</dt><dd>{across} × {down} = <strong>{total}</strong></dd></div>
            <div><dt>Board size</dt><dd>{fmt(across * PANEL_W, unit)} × {fmt(down * PANEL_H, unit)}</dd></div>
            <div><dt>LEDs</dt><dd>{(across * 32).toLocaleString('en-IN')} × {down * 16} dots</dd></div>
          </dl>
          <p className="calc__estimate">Starting estimate <strong>{inr(estimate)}</strong> <span>+ GST · about {sqft.toFixed(1)} sq ft</span></p>
          <a className="btn btn--whatsapp btn--lg" href={waLink(message)} target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" size={18} /> Get a quote for this size
            <span className="visually-hidden"> (opens WhatsApp in a new tab)</span>
          </a>
          <p className="calc__note">Rounded up to whole P10 panels (32 × 16 cm each). The estimate uses our starting price; the final size and price are confirmed with you before we build.</p>
        </div>
      ) : (
        <p className="calc__note" aria-live="polite">Enter a width and height. For boards over 400 panels, message us directly.</p>
      )}
    </div>
  );
}
