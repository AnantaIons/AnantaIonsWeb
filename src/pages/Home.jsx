import Layout from '../components/Layout.jsx';
import Icon from '../components/Icon.jsx';
import HeroScenes from '../components/HeroScenes.jsx';
import BoardAnatomy, { ANATOMY } from '../components/BoardAnatomy.jsx';
import { PRICES, STANDARD, inr, offPct } from '../content/pricing.js';
import { contact } from '../content/site.js';
import { path } from '../lib/paths.js';
import { waLink } from '../lib/wa.js';

/* Home sells one thing: the Standard LED board. Three parts only —
   see boards at work, see the board and its price, talk to us. */
const ORDER = (kind) => `Hello ANANTA IONS, I want the Standard ${STANDARD.size} LED board (${kind}). Please share the details.`;
const tel = `tel:${contact.phone.value.replace(/\s/g, '')}`;

export default function Home() {
  return (
    <Layout current="/">
      <section className="sell-hero" aria-labelledby="hero-title">
        <div className="container sell-hero__grid">
          <div className="sell-hero__copy">
            <p className="eyebrow eyebrow--red">LED display boards · Jaipur</p>
            <h1 className="h-display" id="hero-title">LED boards that bring in <span className="hl">customers.</span></h1>
            <p className="lede">Our Standard board — {STANDARD.size}, made for shops. Bright day and night, and you change the message from your phone.</p>
            <div className="btn-row">
              <a className="btn btn--red btn--lg" href="#standard">See the board and price</a>
              <a className="link-more" href={waLink(ORDER('single colour'))} target="_blank" rel="noopener noreferrer">Ask on WhatsApp<span className="visually-hidden"> (opens in a new tab)</span></a>
            </div>
            <ul className="trust-row">
              <li><Icon name="check" size={16} /> Free design preview</li>
              <li><Icon name="check" size={16} /> Pay the rest after installation</li>
              <li><Icon name="check" size={16} /> Warranty on every part</li>
            </ul>
          </div>
          <div className="sell-hero__art"><HeroScenes /></div>
        </div>
      </section>

      <section className="section std" id="standard" aria-labelledby="std-title">
        <div className="container">
          <div className="section-head center">
            <p className="eyebrow eyebrow--red">The Standard board</p>
            <h2 className="h-1" id="std-title">{STANDARD.size}. One price. Everything inside.</h2>
            <p className="lede">{STANDARD.exact}. Built in batches, so it costs less.</p>
          </div>
          <div className="std__grid">
            <div className="std__anat">
              <BoardAnatomy />
              <ol className="anat__list">
                {ANATOMY.map(([t, b]) => <li key={t}><strong>{t}</strong> {b}</li>)}
              </ol>
            </div>
            <div className="std__buy">
              {[['single', 'Single colour', 'Amber, red, white or green. Best for offers, timings and notices.'], ['rgb', 'Full colour', 'Every colour, with your logo and pictures.']].map(([k, n, b]) => (
                <div className={`std__card std__card--${k}`} key={k}>
                  <p className="std__name">{n}</p>
                  <p className="std__off">Launch offer · {offPct(STANDARD[k].mrp, STANDARD[k].price)}% off</p>
                  <p className="std__price"><s aria-label={`regular price ${inr(STANDARD[k].mrp)}`}>{inr(STANDARD[k].mrp)}</s> <strong>{inr(STANDARD[k].price)}</strong> <span>+ GST</span></p>
                  <p className="std__body">{b}</p>
                  <a className="btn btn--red" href={waLink(ORDER(n.toLowerCase()))} target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" size={18} /> Order on WhatsApp<span className="visually-hidden"> (opens in a new tab)</span></a>
                </div>
              ))}
              <p className="std__note">Need another size? From {inr(PRICES.single.price)}/sq ft single colour and {inr(PRICES.rgb.price)}/sq ft full colour — <a href={path('/displays/#size')}>work out your price</a>. Battery backup available. Shipping extra; installation in Jaipur.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section ready ready--red" aria-labelledby="ready-title">
        <div className="container">
          <p className="eyebrow">Free design preview · pay the rest after installation</p>
          <h2 className="h-1" id="ready-title">Ready to be seen?</h2>
          <div className="btn-row">
            <a className="btn btn--whatsapp btn--lg" href={waLink(ORDER('please suggest'))} target="_blank" rel="noopener noreferrer">
              <Icon name="whatsapp" size={18} /> Talk to us on WhatsApp<span className="visually-hidden"> (opens in a new tab)</span>
            </a>
            <a className="link-more" href={tel}>Call {contact.phone.value}</a>
          </div>
          <p className="ready__also">Also from us: <a href={path('/websites/')}>Websites</a> · <a href={path('/engineering/')}>Engineering</a> · <a href={path('/shop/')}>Components</a> · <a href={path('/college-projects/')}>College projects</a></p>
        </div>
      </section>
    </Layout>
  );
}
