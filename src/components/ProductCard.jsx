import Icon from './Icon.jsx';
import AddToQuote from './AddToQuote.jsx';
import ProductArt from './ProductArt.jsx';
import { path } from '../lib/paths.js';
import { categoryById } from '../content/catalogue.js';

export const priceLabel = (p) => (p.stock === 'out' ? 'Out of stock' : p.priceText ? p.priceText : p.price != null ? `₹${p.price.toLocaleString('en-IN')}` : 'Ask price');

export default function ProductCard({ p }) {
  return (
    <article className="product-card" aria-labelledby={`pc-${p.id}`}>
      <a className="product-card__media" href={path(`/shop/${p.id}/`)} tabIndex={-1} aria-hidden="true">
        <ProductArt id={p.id} />
      </a>
      <div className="product-card__body">
        <span className="product-card__cat">{categoryById[p.cat]?.title}</span>
        <h3 className="h-3" id={`pc-${p.id}`}><a href={path(`/shop/${p.id}/`)}>{p.name}</a></h3>
        <ul className="spec-chips">{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>
        <div className="product-card__foot">
          <span className="product-card__price">{priceLabel(p)}</span>
          <a className="text-link product-card__more" href={path(`/shop/${p.id}/`)}>
            Details<span className="visually-hidden"> — {p.name}</span> <Icon name="arrow" size={14} />
          </a>
        </div>
        <AddToQuote id={p.id} name={p.name} />
      </div>
    </article>
  );
}
