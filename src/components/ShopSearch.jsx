import { useState } from 'react';
import Icon from './Icon.jsx';
import { waLink } from '../lib/wa.js';

const rupees = (n) => `₹${n.toLocaleString('en-IN')}`;

/* Searchable catalogue. Without JavaScript every item is listed and the
   search box is inert, so nothing is ever hidden from a visitor. */
export default function ShopSearch({ categories }) {
  const [q, setQ] = useState('');
  const term = q.trim().toLowerCase();
  const match = (it) => !term || it.name.toLowerCase().includes(term);
  const visible = categories
    .map((c) => ({ ...c, items: c.items.filter(match) }))
    .filter((c) => c.items.length);
  const count = visible.reduce((n, c) => n + c.items.length, 0);

  return (
    <>
      <div className="shop-bar">
        <div className="shop-search">
          <Icon name="search" size={18} className="shop-search__icon" />
          <label htmlFor="shop-q" className="visually-hidden">Search components</label>
          <input id="shop-q" type="search" placeholder="Search — e.g. ESP32, P10, relay"
            value={q} onInput={(e) => setQ(e.target.value)} autoComplete="off" />
        </div>
        <nav className="shop-tabs" aria-label="Categories">
          {categories.map((c) => <a key={c.id} href={`#${c.id}`}>{c.title}</a>)}
        </nav>
      </div>
      <p className="visually-hidden" aria-live="polite">{term ? `${count} matching items` : ''}</p>

      {visible.map((c) => (
        <section className="shop-cat" key={c.id} id={c.id} aria-labelledby={`${c.id}-t`}>
          <h3 className="h-2" id={`${c.id}-t`}>{c.title}</h3>
          <ul className="shop-list">
            {c.items.map((it) => (
              <li className="shop-item" key={it.name}>
                <div className="shop-item__info">
                  <span className="shop-item__name">{it.name}</span>
                  <span className={`shop-item__price${it.inStock ? '' : ' is-out'}`}>
                    {!it.inStock ? 'Out of stock' : it.price != null ? rupees(it.price) : 'Ask price'}
                  </span>
                </div>
                <a className="btn btn--whatsapp btn--sm" href={waLink(`Hello ANANTA IONS, I want to buy: ${it.name}`)}
                  target="_blank" rel="noopener noreferrer">
                  <Icon name="whatsapp" size={16} /> Order
                  <span className="visually-hidden"> {it.name} on WhatsApp (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}

      {term && !count ? (
        <p className="shop-empty">No match for “{q}”. Ask us on WhatsApp — we may still be able to get it.</p>
      ) : null}
    </>
  );
}
