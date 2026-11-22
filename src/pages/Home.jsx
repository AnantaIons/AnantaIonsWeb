import Layout from '../components/Layout.jsx';
import Icon from '../components/Icon.jsx';
import LedBoard from '../components/LedBoard.jsx';
import NightUses from '../components/NightUses.jsx';
import HeroBoard from '../components/HeroBoard.jsx';
import HeroScenes from '../components/HeroScenes.jsx';
import SizeCalculator from '../components/SizeCalculator.jsx';
import { Section } from '../components/Ui.jsx';
import { PriceCards, Pillars } from '../components/DisplayPricing.jsx';
import { PRICES, inr } from '../content/pricing.js';
import { contact } from '../content/site.js';
import { path } from '../lib/paths.js';
import { waLink } from '../lib/wa.js';

/* The home page is a sales page for P10 LED boards. One path, top to bottom:
   see it → know the price → see how it works → see it at work → design it →
   clear doubts → talk to us. Everything else we do sits in one small row. */

const QUOTE_MSG = 'Hello ANANTA IONS, I want a price for an LED display board. Size / place: ';
const tel = `tel:${contact.phone.value.replace(/\s/g, '')}`;

const STEPS = [
  ['Tell us the place', 'Send the wall or frame size and a photo on WhatsApp. We suggest the board size and colour.'],
  ['See your design, free', 'We send a preview of your board with your name, offer and number. You pay half only when you like it.'],
  ['Built and tested', 'Panels, controller, power supply and case are assembled and run in our workshop before delivery.'],
  ['Installed and running', 'We install in Jaipur or ship across India, and show you how to change the message from your phone.'],
];

const FAQ = [
  ['What is a P10 board?', 'P10 means the LEDs are 10 mm apart. Boards are made from 32 × 16 cm panels joined together, so we can build almost any size — from one panel to a full shop front.'],
  ['How do I change the message?', 'From your phone over Wi-Fi or the internet, by USB, Bluetooth or SMS — whichever suits your place. We set it up and show you how.'],
  ['Single colour or full colour?', 'Single colour (amber, red, white or green) is best for text: offers, timings, notices, token numbers. Full colour shows logos and pictures and is made for advertising.'],
  ['Will it work outside, in rain and sun?', 'For outdoor boards we use outdoor-rated panels in a closed case, and auto-brightness keeps it readable in sunlight and soft at night.'],
  ['What about power cuts?', 'Choose the lithium battery backup version and the board keeps running through power cuts. The battery is covered by warranty too.'],
  ['What is included in the price?', 'The complete board: panels, controller, cables, power supply, case and body, testing, set-up and help after installation. GST and shipping are extra.'],
  ['How do I pay?', 'Half to start, once you approve the design. The rest after the board is installed and running. You get a proper bill with GST.'],
  ['How long does it take?', 'It depends on size and colour. We confirm the delivery date in writing with your quote, before you pay anything.'],
];

export default function Home() {
  return (
    <Layout current="/">
      <section className="sell-hero" aria-labelledby="hero-title">
        <div className="container sell-hero__grid">
          <div className="sell-hero__copy">
            <p className="eyebrow eyebrow--red">P10 LED display boards · Jaipur</p>
            <h1 className="h-display" id="hero-title">LED boards that bring in <span className="hl">customers.</span></h1>
            <p className="lede">Bright display boards made to your size — for shops, hospitals, schools and highways. Change the message from your phone.</p>
            <ul className="sell-hero__prices" aria-label="Starting prices">
              <li><span>Single colour</span><strong>{inr(PRICES.single.price)}</strong><em>/ sq ft</em></li>
              <li><span>Full colour</span><strong>{inr(PRICES.rgb.price)}</strong><em>/ sq ft</em></li>
            </ul>
            <div className="btn-row">
              <a className="btn btn--red btn--lg" href={waLink(QUOTE_MSG)} target="_blank" rel="noopener noreferrer">
                <Icon name="whatsapp" size={18} /> Get a price on WhatsApp<span className="visually-hidden"> (opens in a new tab)</span>
              </a>
              <a className="link-more" href="#price">Work it out yourself</a>
            </div>
            <ul className="trust-row">
              <li><Icon name="check" size={16} /> Warranty on every part</li>
              <li><Icon name="check" size={16} /> Tested before delivery</li>
              <li><Icon name="check" size={16} /> Pay the rest after installation</li>
              <li><Icon name="check" size={16} /> Ships across India</li>
            </ul>
          </div>
          <div className="sell-hero__art"><HeroScenes /></div>
        </div>
      </section>

      <div className="ticker-band" aria-hidden="true">
        <LedBoard id="tick" panels={[16, 1]} colour="red" framed={false} items={[
          { text: `SINGLE COLOUR FROM RS ${PRICES.single.price} PER SQ FT · FULL COLOUR FROM RS ${PRICES.rgb.price} · BATTERY BACKUP · WARRANTY ON EVERY PART · SHIPPING ACROSS INDIA · `, size: 2, y: 1, effect: 'scroll', speed: 30 },
        ]} />
      </div>

      <Section labelledBy="price-title" id="price" className="section--warm">
        <div className="section-head center">
          <p className="eyebrow">Clear pricing</p>
          <h2 className="h-1" id="price-title">Know your price in 30 seconds.</h2>
          <p className="lede">Starting prices per square foot, everything included. Put in your size for an estimate.</p>
        </div>
        <PriceCards calcHref="#size" />
        <div className="home-calc" id="size">
          <SizeCalculator />
        </div>
      </Section>

      <Section labelledBy="how-title" id="how">
        <div className="section-head center">
          <p className="eyebrow">How it works</p>
          <h2 className="h-1" id="how-title">From your wall to a working board.</h2>
        </div>
        <ol className="how-steps">
          {STEPS.map(([t, b], i) => (
            <li key={t}><span className="how-steps__n" aria-hidden="true">{i + 1}</span><h3>{t}</h3><p>{b}</p></li>
          ))}
        </ol>
      </Section>

      <Section dark labelledBy="night-title" id="after-dark" className="after-dark">
        <div className="section-head center">
          <p className="eyebrow eyebrow--red">After dark</p>
          <h2 className="h-1" id="night-title">When the street goes dark, your board keeps selling.</h2>
          <p className="lede">The places our boards are made for, as they look at night.</p>
        </div>
        <NightUses limit={6} />
      </Section>

      <Section dark labelledBy="tpl-title" id="studio">
        <div className="section-head center">
          <p className="eyebrow">Design studio</p>
          <h2 className="h-1" id="tpl-title">See your board before we build it.</h2>
          <p className="lede">Pick your business, type your shop name and offer, and get a full-colour design for your board size.</p>
        </div>
        <div className="board-real__mount" aria-hidden="true"><span /><span /></div>
        <HeroBoard />
      </Section>

      <Section labelledBy="why-title" id="why">
        <div className="section-head center">
          <p className="eyebrow">Why Ananta Displays</p>
          <h2 className="h-1" id="why-title">Built well. Looked after.</h2>
        </div>
        <Pillars />
      </Section>

      <Section soft labelledBy="faq-title" id="faq">
        <div className="faq">
          <div className="faq__head">
            <p className="eyebrow">Questions</p>
            <h2 className="h-1" id="faq-title">Before you buy.</h2>
            <p className="lede">Anything else? Ask us on <a href={waLink('Hello ANANTA IONS, I have a question about LED boards: ')} target="_blank" rel="noopener noreferrer">WhatsApp<span className="visually-hidden"> (opens in a new tab)</span></a> or call <a href={tel}>{contact.phone.value}</a>.</p>
          </div>
          <div className="faq__list">
            {FAQ.map(([q, a]) => (
              <details key={q}><summary>{q}</summary><p>{a}</p></details>
            ))}
          </div>
        </div>
      </Section>

      <section className="section ready ready--red" aria-labelledby="ready-title">
        <div className="container">
          <p className="eyebrow">Free quote · no obligation</p>
          <h2 className="h-1" id="ready-title">Ready to be seen?</h2>
          <div className="btn-row">
            <a className="btn btn--whatsapp btn--lg" href={waLink(QUOTE_MSG)} target="_blank" rel="noopener noreferrer">
              <Icon name="whatsapp" size={18} /> Get a price on WhatsApp<span className="visually-hidden"> (opens in a new tab)</span>
            </a>
            <a className="link-more" href={tel}>Call {contact.phone.value}</a>
          </div>
        </div>
      </section>

      <Section labelledBy="more-title" tight>
        <h2 className="also__title" id="more-title">Also from Ananta Ions</h2>
        <ul className="also">
          <li><a href={path('/websites/')}><Icon name="globe" size={22} /><strong>Websites</strong><span>For shops, schools and clinics</span></a></li>
          <li><a href={path('/engineering/')}><Icon name="cpu" size={22} /><strong>Engineering</strong><span>Firmware, IoT and electronics</span></a></li>
          <li><a href={path('/shop/')}><Icon name="chip" size={22} /><strong>Components</strong><span>P10 panels, ESP32, Arduino</span></a></li>
          <li><a href={path('/college-projects/')}><Icon name="book" size={22} /><strong>College projects</strong><span>10% student discount</span></a></li>
        </ul>
      </Section>
    </Layout>
  );
}
