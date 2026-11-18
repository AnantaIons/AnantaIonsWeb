import { path } from '../lib/paths.js';
import { PRICES, INCLUDED, PRICE_NOTE, PILLARS, FEATURES, OFFER_LABEL, offPct, inr } from '../content/pricing.js';

/* Starting prices for LED boards: two price cards, what is included, and the
   fine print. Used on the home page and the Displays page. */
export function PriceCards({ calcHref = path('/displays/#size') }) {
  return (
    <div className="prices">
      <div className="prices__grid">
        {Object.values(PRICES).map((p) => (
          <article className={`price-card price-card--${p.id}`} key={p.id} aria-labelledby={`price-${p.id}`}>
            <span className="price-card__swatch" aria-hidden="true" />
            <h3 id={`price-${p.id}`}>{p.name}</h3>
            <p className="price-card__offer">{OFFER_LABEL} · {offPct(p.mrp, p.price)}% off</p>
            <p className="price-card__from">from <s aria-label={`regular price ${inr(p.mrp)}`}>{inr(p.mrp)}</s></p>
            <p className="price-card__amount">{inr(p.price)}<span> / sq ft</span></p>
            <p className="price-card__gst">+ GST</p>
            <p className="price-card__body">{p.body}</p>
            <div className="price-card__backup">
              <p className="price-card__backup-name">With lithium battery backup</p>
              <p className="price-card__backup-was">from <s aria-label={`regular price ${inr(p.backupMrp)}`}>{inr(p.backupMrp)}</s></p>
              <p className="price-card__backup-amount">{inr(p.backupPrice)}<span> / sq ft + GST</span></p>
              <p className="price-card__backup-body">Built-in rechargeable lithium battery keeps the board running through power cuts. Battery covered by warranty.</p>
            </div>
          </article>
        ))}
      </div>
      <div className="prices__included">
        <h3>Every board includes</h3>
        <ul className="checks">{INCLUDED.map((x) => <li key={x}>{x}</li>)}</ul>
        <a className="link-more" href={calcHref}>Work out your board’s price</a>
      </div>
      <div className="features">
        <h3 className="features__title">Smart features and delivery</h3>
        <ul className="features__grid">
          {FEATURES.map(([t, b]) => <li key={t}><strong>{t}</strong><span>{b}</span></li>)}
        </ul>
      </div>
      <p className="prices__note">{PRICE_NOTE}</p>
    </div>
  );
}

export function Pillars() {
  return (
    <div className="points points--4">
      {PILLARS.map(([t, b], i) => (
        <div className="point" key={t}>
          <span className="point__no">0{i + 1}</span>
          <h3>{t}</h3>
          <p>{b}</p>
        </div>
      ))}
    </div>
  );
}

export default PriceCards;
