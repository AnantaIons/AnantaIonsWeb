import { useState } from 'react';
import LedBoard from './LedBoard.jsx';
import { SERIES, SIZES, inr } from '../content/pricing.js';
import { waLink } from '../lib/wa.js';

/* Jyoti (single colour) / Rangoli (full colour): one switch, three boards. */
export default function BoardSeries() {
  const [sid, setSid] = useState('jyoti');
  const se = SERIES.find((x) => x.id === sid);
  return (
    <div className={`pick pick--${se.id}`}>
      <div className="pick__switch" role="tablist" aria-label="Board series">
        {SERIES.map((x) => (
          <button key={x.id} type="button" role="tab" aria-selected={x.id === sid} className={x.id === sid ? 'is-on' : ''} onClick={() => setSid(x.id)}>
            {x.name} <span>{x.id === 'jyoti' ? 'Single colour' : 'Full colour'}</span>
          </button>
        ))}
      </div>
      <div role="tabpanel"><ul className="pick__grid">
        {se.models.map((m) => {
          const z = SIZES[m.size];
          const name = `${se.name} ${z.label}`;
          return (
            <li className="pcard" key={`${se.id}-${m.size}`}>
              <div className="pcard__art"><LedBoard id={`${se.id}-${m.size}`} panels={z.panels} items={m.demo} colour={se.id === 'jyoti' ? 'amber' : 'white'} /></div>
              <div className="pcard__body">
                <p className="pcard__name">{name}</p>
                <p className="pcard__size">{z.size}</p>
                <p className="pcard__price">{inr(m.price)} <s aria-label={`regular price ${inr(m.mrp)}`}>{inr(m.mrp)}</s></p>
                <a className="pcard__buy" href={waLink(`Hello ANANTA IONS, I want the ${name} LED board (${z.size}).`)} target="_blank" rel="noopener noreferrer">
                  Order<span className="visually-hidden"> {name} on WhatsApp (opens in a new tab)</span>
                </a>
              </div>
            </li>
          );
        })}
      </ul></div>
      <p className="pick__fine">Prices + GST. Sample messages shown. Battery backup and other sizes available.</p>
    </div>
  );
}
