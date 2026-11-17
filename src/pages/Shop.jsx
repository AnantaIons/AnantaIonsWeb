import { useState } from 'react';
import Layout from '../components/Layout.jsx';
import Button from '../components/Button.jsx';
import Icon from '../components/Icon.jsx';
import ProductCard from '../components/ProductCard.jsx';
import { Section, SectionHead, PageHero, CtaStrip } from '../components/Ui.jsx';
import { path } from '../lib/paths.js';
import { waLink } from '../lib/wa.js';
import { addToBasket } from '../lib/basket.js';
import { categories, products, kits, productById } from '../content/catalogue.js';

const ORDER_STEPS = [
  ['Build your list', 'Add parts or a whole project kit to your quote list.'],
  ['Send it on WhatsApp', 'One message with every part and quantity.'],
  ['Get price and stock', 'We reply with today’s prices and what is available.'],
  ['Confirm and collect', 'Nothing is ordered until you confirm. Pick up in Jaipur, or ask about delivery.'],
];

function Kit({ k }) {
  const [added, setAdded] = useState(false);
  const addAll = () => {
    k.items.forEach(([id, qty]) => addToBasket(id, qty));
    setAdded(true);
    window.dispatchEvent(new CustomEvent('ai-basket-open'));
    window.setTimeout(() => setAdded(false), 2500);
  };
  return (
    <article className="kit card corner" aria-labelledby={`kit-${k.id}`}>
      <span className="badge badge--ok">Tested build</span>
      <h3 className="h-2" id={`kit-${k.id}`}>{k.title}</h3>
      <p>{k.body}</p>
      <ol className="kit__bom">
        {k.items.map(([id, qty]) => (
          <li key={id}>
            <a href={path(`/shop/${id}/`)}>{productById[id].name}</a>
            <span className="kit__qty">× {qty}</span>
          </li>
        ))}
      </ol>
      <p className="kit__help"><Icon name="wrench" size={16} /> {k.help}</p>
      <button type="button" className="btn btn--primary card__foot" onClick={addAll}>
        <Icon name={added ? 'check' : 'plus'} size={16} /> {added ? 'Kit added' : 'Add whole kit to quote'}
        <span className="visually-hidden"> — {k.title}</span>
      </button>
    </article>
  );
}

export default function Shop() {
  const [cat, setCat] = useState('all');
  const [q, setQ] = useState('');
  const term = q.trim().toLowerCase();
  const shown = products.filter((p) =>
    (cat === 'all' || p.cat === cat) &&
    (!term || `${p.name} ${p.short} ${p.tags.join(' ')}`.toLowerCase().includes(term)));
  const counts = Object.fromEntries(categories.map((c) => [c.id, products.filter((p) => p.cat === c.id).length]));
  const live = categories.filter((c) => counts[c.id]);

  return (
    <Layout current="/shop/">
      <PageHero
        eyebrow="Ananta Components"
        title={<>Parts for what you build, <span className="hl">chosen by engineers</span></>}
        lede="LED display parts, development boards, microcontrollers and modules. Build a quote list, send it on WhatsApp, and we reply with today’s prices — plus help choosing the right part."
      >
        <div className="btn-row">
          <Button href="#catalogue" size="lg">Explore components</Button>
          <Button href="#kits" variant="on-dark" size="lg">Shop by project</Button>
        </div>
      </PageHero>

      <Section labelledBy="cats-title" tight>
        <h2 className="visually-hidden" id="cats-title">Categories</h2>
        <div className="cat-tiles">
          {live.map((c) => (
            <a key={c.id} className="cat-tile" href="#catalogue" onClick={() => setCat(c.id)}>
              <Icon name={c.icon} size={22} className="card__icon" />
              <span className="cat-tile__name">{c.title}</span>
              <span className="cat-tile__count">{counts[c.id]} {counts[c.id] === 1 ? 'item' : 'items'}</span>
            </a>
          ))}
        </div>
      </Section>

      <Section soft labelledBy="catalogue-title" id="catalogue">
        <SectionHead eyebrow="Catalogue" id="catalogue-title" title="All components" />
        <div className="shop-bar">
          <div className="shop-search">
            <Icon name="search" size={18} className="shop-search__icon" />
            <label htmlFor="shop-q" className="visually-hidden">Search components</label>
            <input id="shop-q" type="search" placeholder="Search — e.g. ESP32, P10, relay"
              value={q} onInput={(e) => setQ(e.target.value)} autoComplete="off" />
          </div>
          <div className="shop-tabs" role="group" aria-label="Filter by category">
            <button type="button" className={`demo__chip${cat === 'all' ? ' is-active' : ''}`} aria-pressed={cat === 'all'} onClick={() => setCat('all')}>All</button>
            {live.map((c) => (
              <button key={c.id} type="button" className={`demo__chip${cat === c.id ? ' is-active' : ''}`}
                aria-pressed={cat === c.id} onClick={() => setCat(c.id)}>{c.title}</button>
            ))}
          </div>
        </div>
        <p className="visually-hidden" aria-live="polite">{shown.length} components shown</p>
        {shown.length ? (
          <div className="product-grid">{shown.map((p) => <ProductCard key={p.id} p={p} />)}</div>
        ) : (
          <p className="shop-empty">No match for “{q}”. Ask us on WhatsApp — we may still be able to get it.</p>
        )}
      </Section>

      <Section labelledBy="kits-title" id="kits">
        <SectionHead eyebrow="Shop by project" id="kits-title" title="Complete parts lists for real builds"
          lede="Each kit is a system we have built ourselves, so the parts work together. Add the whole list in one tap." />
        <div className="grid grid--2">{kits.map((k) => <Kit key={k.id} k={k} />)}</div>
      </Section>

      <Section dark labelledBy="how-title" id="how">
        <SectionHead eyebrow="How ordering works" id="how-title" title="Nothing is charged until you confirm" />
        <ol className="steps">
          {ORDER_STEPS.map(([t, b], i) => (
            <li className="step" key={t}>
              <span className="step__no">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="h-3">{t}</h3>
              <p>{b}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section labelledBy="help-title">
        <div className="grid grid--2">
          <div className="shop-ask corner">
            <div>
              <h2 className="h-2" id="help-title">Can’t find a part?</h2>
              <p>Send us the part name or a photo and we will tell you if we can get it.</p>
            </div>
            <a className="btn btn--whatsapp btn--lg" href={waLink('Hello ANANTA IONS, I am looking for this part: ')}
              target="_blank" rel="noopener noreferrer">
              <Icon name="whatsapp" size={18} /> Ask on WhatsApp<span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          </div>
          <div className="shop-ask">
            <div>
              <h2 className="h-2">Need it built, not just bought?</h2>
              <p>Firmware, circuit design and complete projects — from the same team.</p>
            </div>
            <Button href={path('/engineering/')} variant="outline" size="lg">Engineering services</Button>
          </div>
        </div>
      </Section>

      <CtaStrip title="Buying for a college project? We can help build it too." cta={{ label: 'College projects', href: '/college-projects/' }} />
    </Layout>
  );
}
