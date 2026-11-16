import Layout from '../components/Layout.jsx';
import Icon from '../components/Icon.jsx';
import { Section, PageHero, CtaStrip } from '../components/Ui.jsx';
import { waLink } from '../lib/wa.js';
import { categories, shopNote } from '../content/shop.js';

const rupees = (n) => `₹${n.toLocaleString('en-IN')}`;

export default function Shop() {
  return (
    <Layout current="/shop/">
      <PageHero
        eyebrow="Shop"
        title={<>Electronic components, <span className="hl">ordered on WhatsApp</span></>}
        lede={shopNote}
      />

      <Section labelledBy="cat-title" id="catalogue">
        <h2 className="visually-hidden" id="cat-title">Component list</h2>
        <nav className="shop-tabs" aria-label="Categories">
          {categories.map((c) => <a key={c.id} href={`#${c.id}`}>{c.title}</a>)}
        </nav>
        {categories.map((c) => (
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
        <div className="shop-ask corner">
          <div>
            <h3 className="h-2">Can’t find a part?</h3>
            <p>Send us the part name or a photo on WhatsApp and we will tell you if we can get it.</p>
          </div>
          <a className="btn btn--whatsapp btn--lg" href={waLink('Hello ANANTA IONS, I am looking for this part: ')}
            target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" size={18} /> Ask on WhatsApp<span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        </div>
      </Section>

      <CtaStrip title="Buying for a project? We can help build it too." cta={{ label: 'College projects', href: '/college-projects/' }} />
    </Layout>
  );
}
