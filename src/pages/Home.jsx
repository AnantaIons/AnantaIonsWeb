import Layout from '../components/Layout.jsx';
import Icon from '../components/Icon.jsx';
import HeroScenes from '../components/HeroScenes.jsx';
import BoardSeries from '../components/BoardSeries.jsx';
import BoardAnatomy, { ANATOMY } from '../components/BoardAnatomy.jsx';
import { FROM_PRICE, inr } from '../content/pricing.js';
import { contact } from '../content/site.js';
import { path } from '../lib/paths.js';
import { waLink } from '../lib/wa.js';

const ASK = 'Hello ANANTA IONS, I want an LED display board for my shop.';
const tel = `tel:${contact.phone.value.replace(/\s/g, '')}`;

export default function Home() {
  return (
    <Layout current="/">
      <section className="p-hero" aria-labelledby="hero-title">
        <div className="container">
          <h1 className="p-hero__title" id="hero-title">Light up your shop.</h1>
          <p className="p-hero__sub">LED display boards from {inr(FROM_PRICE)}. Made in India.</p>
          <div className="p-hero__cta">
            <a className="p-btn p-btn--red" href="#boards">See boards</a>
            <a className="p-btn p-btn--ghost" href={waLink(ASK)} target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" size={18} /> WhatsApp<span className="visually-hidden"> (opens in a new tab)</span></a>
          </div>
          <div className="p-hero__stage"><HeroScenes /></div>
        </div>
      </section>

      <section className="p-pitch" aria-labelledby="pitch-title">
        <div className="container">
          <h2 className="p-pitch__line" id="pitch-title">Printed boards disappear after 7 pm. <span>LED boards keep selling.</span></h2>
          <p className="p-pitch__sub">Change today’s offer from your phone in a minute.</p>
        </div>
      </section>

      <section className="p-sec" id="boards" aria-labelledby="boards-title">
        <div className="container">
          <h2 className="p-h2" id="boards-title">Pick your board.</h2>
          <BoardSeries />
        </div>
      </section>

      <section className="p-sec p-sec--soft" id="inside" aria-labelledby="inside-title">
        <div className="container p-inside">
          <div>
            <h2 className="p-h2 p-h2--left" id="inside-title">Everything inside.</h2>
            <ol className="p-parts">
              {ANATOMY.map(([t]) => <li key={t}>{t}</li>)}
            </ol>
            <p className="p-made"><span className="p-made__flag" aria-hidden="true"><i /><i /><i /></span> Made in India. Built for quality.</p>
          </div>
          <BoardAnatomy />
        </div>
      </section>

      <section className="p-sec p-promise" aria-label="Our promise">
        <div className="container">
          <ul className="p-promise__list">
            <li><strong>Free</strong><span>design preview</span></li>
            <li><strong>50%</strong><span>paid after installation</span></li>
            <li><strong>Warranty</strong><span>on every part</span></li>
            <li><strong>Jaipur</strong><span>tested before delivery</span></li>
          </ul>
        </div>
      </section>

      <section className="p-sec p-final" aria-labelledby="ready-title">
        <div className="container">
          <h2 className="p-h2" id="ready-title">Ready to be seen?</h2>
          <div className="p-hero__cta">
            <a className="p-btn p-btn--red" href={waLink(ASK)} target="_blank" rel="noopener noreferrer"><Icon name="whatsapp" size={18} /> Talk on WhatsApp<span className="visually-hidden"> (opens in a new tab)</span></a>
            <a className="p-btn p-btn--ghost" href={tel}><Icon name="phone" size={18} /> Call</a>
          </div>
          <p className="p-also"><a href={path('/websites/')}>Websites</a><a href={path('/engineering/')}>Engineering</a><a href={path('/shop/')}>Components</a><a href={path('/college-projects/')}>College projects</a></p>
        </div>
      </section>
    </Layout>
  );
}
