import { useState } from 'react';
import Layout from '../components/Layout.jsx';
import Icon from '../components/Icon.jsx';
import ProductArt from '../components/ProductArt.jsx';
import ProductCard, { priceLabel } from '../components/ProductCard.jsx';
import AddToQuote from '../components/AddToQuote.jsx';
import { Section, SectionHead } from '../components/Ui.jsx';
import { path } from '../lib/paths.js';
import { waLink } from '../lib/wa.js';
import { productById, categoryById, products, kits } from '../content/catalogue.js';

const TABS = [['specs', 'Specifications'], ['about', 'Overview'], ['docs', 'Documents']];

export default function Product({ id }) {
  const p = productById[id];
  const [tab, setTab] = useState('specs');
  if (!p) return null;
  const cat = categoryById[p.cat];
  const related = products.filter((x) => x.cat === p.cat && x.id !== p.id).slice(0, 3);
  const inKits = kits.filter((k) => k.items.some(([kid]) => kid === p.id));
  const ask = `Hello ANANTA IONS, I am interested in: ${p.name}.\nPlease confirm price and stock${p.confirm.length ? ` (and ${p.confirm.join(', ').toLowerCase()})` : ''}.\nQuantity: `;

  return (
    <Layout current="/shop/">
      <section className="pdp" aria-labelledby="page-title">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <ol>
              <li><a href={path('/shop/')}>Shop</a></li>
              <li><a href={path('/shop/#catalogue')}>{cat.title}</a></li>
              <li aria-current="page">{p.name}</li>
            </ol>
          </nav>

          <div className="pdp__grid">
            <div className="pdp__media">
              <ProductArt id={p.id} />
              <p className="pdp__media-note">Illustration — photos coming soon.</p>
            </div>

            <div className="pdp__info">
              <span className="eyebrow">{cat.title}</span>
              <h1 className="h-1" id="page-title">{p.name}</h1>
              <p className="lede">{p.short}</p>
              <ul className="spec-chips spec-chips--lg">{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>

              <div className="pdp__buy">
                <div className="pdp__price">
                  <span className="pdp__price-value">{priceLabel(p)}</span>
                  <span className="pdp__stock"><span className="dot" /> Stock confirmed on WhatsApp</span>
                </div>
                <AddToQuote id={p.id} name={p.name} showQty size="lg" />
                <a className="btn btn--whatsapp btn--lg" href={waLink(ask)} target="_blank" rel="noopener noreferrer">
                  <Icon name="whatsapp" size={18} /> Ask on WhatsApp<span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              </div>

              {p.confirm.length ? (
                <div className="pdp__confirm">
                  <h2 className="h-3">We confirm with you</h2>
                  <ul>{p.confirm.map((c) => <li key={c}>{c}</li>)}</ul>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <Section soft labelledBy="details-title">
        <h2 className="visually-hidden" id="details-title">Product details</h2>
        <div className="tabs" role="tablist" aria-label="Product details">
          {TABS.map(([k, label]) => (
            <button key={k} role="tab" id={`tab-${k}`} aria-controls={`panel-${k}`} aria-selected={tab === k}
              tabIndex={tab === k ? 0 : -1} className={`tabs__tab${tab === k ? ' is-active' : ''}`}
              onClick={() => setTab(k)}
              onKeyDown={(e) => {
                const i = TABS.findIndex(([x]) => x === k);
                if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                  const n = TABS[(i + (e.key === 'ArrowRight' ? 1 : TABS.length - 1)) % TABS.length][0];
                  setTab(n);
                  document.getElementById(`tab-${n}`)?.focus();
                }
              }}>{label}</button>
          ))}
        </div>

        <div role="tabpanel" id="panel-specs" aria-labelledby="tab-specs" hidden={tab !== 'specs'} className="tabs__panel">
          {p.specs.length ? (
            <table className="spec-table">
              <tbody>{p.specs.map(([k, v]) => <tr key={k}><th scope="row">{k}</th><td>{v}</td></tr>)}</tbody>
            </table>
          ) : <p className="muted-note">Specifications depend on the exact item — we confirm them on WhatsApp.</p>}
          {p.confirm.length ? <p className="muted-note">Confirmed for your order: {p.confirm.join(' · ')}.</p> : null}
        </div>
        <div role="tabpanel" id="panel-about" aria-labelledby="tab-about" hidden={tab !== 'about'} className="tabs__panel">
          <p className="lede">{p.about}</p>
          <h3 className="h-3" style={{ marginTop: '24px' }}>Typical uses</h3>
          <ul className="checks" style={{ marginTop: '12px' }}>{p.uses.map((u) => <li key={u}>{u}</li>)}</ul>
        </div>
        <div role="tabpanel" id="panel-docs" aria-labelledby="tab-docs" hidden={tab !== 'docs'} className="tabs__panel">
          {p.docs.length ? (
            <ul className="doc-list">
              {p.docs.map((d) => (
                <li key={d.label}>
                  <a href={d.ext ? d.href : path(d.href)} {...(d.ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                    <Icon name="doc" size={18} /> {d.label}{d.ext ? <span className="visually-hidden"> (opens in a new tab)</span> : null}
                  </a>
                </li>
              ))}
            </ul>
          ) : <p className="muted-note">Ask us on WhatsApp for the datasheet of the exact item you buy.</p>}
        </div>
      </Section>

      {inKits.length ? (
        <Section labelledBy="kits-title">
          <SectionHead eyebrow="Used in" id="kits-title" title="Project kits with this part" />
          <div className="grid grid--3">
            {inKits.map((k) => (
              <a key={k.id} className="card card--link" href={path(`/shop/#kits`)}>
                <h3 className="h-3">{k.title}</h3>
                <p>{k.body}</p>
                <span className="text-link card__foot">See the kit</span>
              </a>
            ))}
          </div>
        </Section>
      ) : null}

      {related.length ? (
        <Section soft={!inKits.length} labelledBy="rel-title">
          <SectionHead eyebrow="Related" id="rel-title" title={`More ${cat.title.toLowerCase()}`} />
          <div className="product-grid">{related.map((r) => <ProductCard key={r.id} p={r} />)}</div>
        </Section>
      ) : null}

      {/* Sticky action bar on phones */}
      <div className="buy-bar" aria-label="Quick actions">
        <span className="buy-bar__name">{p.name}</span>
        <AddToQuote id={p.id} name={p.name} />
      </div>
    </Layout>
  );
}
