import Layout from '../components/Layout.jsx';
import Icon from '../components/Icon.jsx';
import { Section, PageHero, CtaStrip } from '../components/Ui.jsx';
import { waLink } from '../lib/wa.js';
import ShopSearch from '../components/ShopSearch.jsx';
import { categories, shopNote } from '../content/shop.js';


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
        <ShopSearch categories={categories} />
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
