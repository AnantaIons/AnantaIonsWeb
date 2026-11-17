import { useState } from 'react';
import Icon from './Icon.jsx';
import { addToBasket } from '../lib/basket.js';

/* Quantity + "Add to quote". With `showQty` a stepper is shown (product
   pages); cards add one at a time. Confirms in place, then offers to open
   the basket. */
export default function AddToQuote({ id, name, showQty = false, size = 'sm' }) {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const add = () => {
    addToBasket(id, qty);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2200);
  };
  return (
    <div className="add-quote">
      {showQty ? (
        <div className="qty" role="group" aria-label={`Quantity for ${name}`}>
          <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease">−</button>
          <input type="number" min="1" max="999" value={qty} aria-label="Quantity"
            onInput={(e) => setQty(Math.max(1, Math.min(999, parseInt(e.target.value, 10) || 1)))} />
          <button type="button" onClick={() => setQty((q) => Math.min(999, q + 1))} aria-label="Increase">+</button>
        </div>
      ) : null}
      <button type="button" className={`btn btn--primary btn--${size}`} onClick={add}>
        <Icon name={added ? 'check' : 'plus'} size={16} />
        {added ? 'Added' : 'Add to quote'}
        <span className="visually-hidden"> — {name}</span>
      </button>
      <span className="visually-hidden" aria-live="polite">{added ? `${name} added to your quote list` : ''}</span>
      {added ? (
        <button type="button" className="add-quote__view" onClick={() => window.dispatchEvent(new CustomEvent('ai-basket-open'))}>
          View list
        </button>
      ) : null}
    </div>
  );
}
