import { useEffect, useRef, useState } from 'react';
import Icon from './Icon.jsx';
import { useBasket, setQty, removeFromBasket, clearBasket } from '../lib/basket.js';
import { productById } from '../content/catalogue.js';
import { waLink } from '../lib/wa.js';
import { path } from '../lib/paths.js';

/* Header button + slide-over panel listing the quote basket. Sends one
   consolidated WhatsApp message with every part and quantity. */
export default function QuoteBasket() {
  const items = useBasket().filter((i) => productById[i.id]);
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);
  const panelRef = useRef(null);
  const count = items.reduce((n, i) => n + i.qty, 0);

  useEffect(() => {
    const openIt = () => setOpen(true);
    window.addEventListener('ai-basket-open', openIt);
    return () => window.removeEventListener('ai-basket-open', openIt);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    panelRef.current?.focus();
    const onKey = (e) => { if (e.key === 'Escape') { setOpen(false); btnRef.current?.focus(); } };
    document.addEventListener('keydown', onKey);
    document.documentElement.classList.add('has-drawer');
    return () => { document.removeEventListener('keydown', onKey); document.documentElement.classList.remove('has-drawer'); };
  }, [open]);

  const message = [
    'Hello ANANTA IONS, please send me a quote for:',
    '',
    ...items.map((i, n) => `${n + 1}. ${productById[i.id].name} — qty ${i.qty}`),
    '',
    'Pickup / delivery: ',
  ].join('\n');

  return (
    <>
      <button ref={btnRef} type="button" className="basket-btn" onClick={() => setOpen(true)}
        aria-haspopup="dialog" aria-expanded={open}>
        <Icon name="layers" size={20} />
        <span className="basket-btn__label">Quote</span>
        {count ? <span className="basket-btn__count">{count}</span> : null}
        <span className="visually-hidden">{count ? `, ${count} items` : ', empty'}</span>
      </button>

      {open ? (
        <div className="drawer" role="presentation" onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}>
          <div className="drawer__panel" role="dialog" aria-modal="true" aria-labelledby="basket-title" tabIndex={-1} ref={panelRef}>
            <div className="drawer__head">
              <h2 className="h-2" id="basket-title">Quote request</h2>
              <button type="button" className="drawer__close" onClick={() => { setOpen(false); btnRef.current?.focus(); }}>
                <Icon name="close" size={20} /><span className="visually-hidden">Close</span>
              </button>
            </div>
            {items.length ? (
              <>
                <ul className="drawer__list">
                  {items.map((i) => {
                    const p = productById[i.id];
                    return (
                      <li key={i.id} className="drawer__item">
                        <a href={path(`/shop/${p.id}/`)} className="drawer__name">{p.name}</a>
                        <div className="qty" role="group" aria-label={`Quantity for ${p.name}`}>
                          <button type="button" onClick={() => setQty(i.id, i.qty - 1)} aria-label="Decrease">−</button>
                          <input type="number" min="1" max="999" value={i.qty} aria-label="Quantity"
                            onInput={(e) => setQty(i.id, parseInt(e.target.value, 10) || 1)} />
                          <button type="button" onClick={() => setQty(i.id, i.qty + 1)} aria-label="Increase">+</button>
                        </div>
                        <button type="button" className="drawer__remove" onClick={() => removeFromBasket(i.id)}>
                          Remove<span className="visually-hidden"> {p.name}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
                <div className="drawer__foot">
                  <a className="btn btn--whatsapp btn--lg" href={waLink(message)} target="_blank" rel="noopener noreferrer">
                    <Icon name="whatsapp" size={18} /> Send quote request
                    <span className="visually-hidden"> on WhatsApp (opens in a new tab)</span>
                  </a>
                  <button type="button" className="btn btn--outline btn--sm" onClick={clearBasket}>Clear list</button>
                  <p className="drawer__note">We reply with today’s prices and stock. Nothing is ordered until you confirm.</p>
                </div>
              </>
            ) : (
              <div className="drawer__empty">
                <p>Your quote list is empty. Add parts from the shop, or a whole project kit.</p>
                <a className="btn btn--primary" href={path('/shop/')}>Go to the shop</a>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
