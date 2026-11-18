import Layout from '../components/Layout.jsx';
import Button from '../components/Button.jsx';
import Icon from '../components/Icon.jsx';
import HeroBoard from '../components/HeroBoard.jsx';
import HeroScenes from '../components/HeroScenes.jsx';
import LedDemo from '../components/LedDemo.jsx';
import ProductArt from '../components/ProductArt.jsx';
import { Section } from '../components/Ui.jsx';
import { PriceCards, Pillars } from '../components/DisplayPricing.jsx';
import { path } from '../lib/paths.js';
import { waLink } from '../lib/wa.js';
import { articles } from '../content/journal.js';



export default function Home() {
  return (
    <Layout current="/">
      <section className="hero-v3" aria-labelledby="hero-title">
        <div className="container">
          <p className="eyebrow">Ananta Displays</p>
          <h1 className="h-display" id="hero-title">Make every message <span className="hl">matter.</span></h1>
          <p className="lede">LED display boards made to your size in Jaipur — and the websites, engineering and parts to go with them.</p>
          <div className="btn-row">
            <Button href={path('/start/?service=display')} size="lg">Get a quote</Button>
            <a className="link-more" href="#studio">Design your board</a>
          </div>
        </div>
      </section>

      <section className="stage" aria-label="Product view">
        <div className="container">
          <HeroScenes />
        </div>
      </section>

      <Section labelledBy="points-title">
        <div className="section-head center">
          <p className="eyebrow">Why Ananta Displays</p>
          <h2 className="h-1" id="points-title">Built well. Looked after.</h2>
        </div>
        <Pillars />
      </Section>

      <Section dark labelledBy="exp-title" id="experience">
        <div className="section-head center">
          <p className="eyebrow">A simpler way to communicate</p>
          <h2 className="h-1" id="exp-title">Your message. Ready to be seen.</h2>
          <p className="lede">Type anything, choose a colour, and watch it run on the board.</p>
        </div>
        <div className="experience"><LedDemo /></div>
      </Section>

      <Section dark labelledBy="tpl-title" id="studio">
        <div className="section-head center">
          <p className="eyebrow">Live from our design studio</p>
          <h2 className="h-1" id="tpl-title">One display. Many ideas.</h2>
          <p className="lede">Pick your business, type your shop name and offer, and get a full-colour design for your board size — ready for the controller.</p>
        </div>
        <div className="board-real__mount" aria-hidden="true"><span /><span /></div>
        <HeroBoard />
      </Section>

      <Section labelledBy="price-title" id="pricing">
        <div className="section-head center">
          <p className="eyebrow">Clear pricing</p>
          <h2 className="h-1" id="price-title">Honest prices. No surprises.</h2>
          <p className="lede">Pick single colour or full colour. We build it to your size and confirm the final price before we start.</p>
        </div>
        <PriceCards />
      </Section>

      <Section labelledBy="more-title">
        <div className="section-head center">
          <h2 className="h-1" id="more-title">More from Ananta Ions.</h2>
        </div>
        <div className="tiles">
          <article className="tile" aria-labelledby="t-web">
            <p className="eyebrow">Ananta Digital</p>
            <h3 id="t-web">Websites that work on every phone.</h3>
            <div className="tile__links">
              <a className="link-more" href={path('/websites/#work')}>See our work</a>
              <a className="link-more" href={path('/websites/#experience')}>Templates</a>
            </div>
            <div className="tile__art tile__art--web" aria-hidden="true">
              <div className="device device--desktop">
                <div className="device__bar"><i /><i /><i /><span>kotaquantumvalley.in</span></div>
                <img src={path('/work/kqv-home.webp')} alt="" width="1600" height="1000" loading="lazy" />
              </div>
              <img className="tile__phone" src={path('/work/kqv-mobile.webp')} alt="" width="600" height="1299" loading="lazy" />
            </div>
          </article>

          <article className="tile tile--dark" aria-labelledby="t-eng">
            <p className="eyebrow">Ananta Engineering</p>
            <h3 id="t-eng">Firmware and electronics, built to last.</h3>
            <div className="tile__links">
              <a className="link-more" href={path('/engineering/')}>Learn more</a>
              <a className="link-more" href={path('/engineering/#board')}>Explore a board</a>
            </div>
            <div className="tile__art tile__art--eng" aria-hidden="true">
              <pre className="code-card"><code>
                <span className="c-k">void</span> <span className="c-f">app_main</span>(<span className="c-k">void</span>) {'{'}{'\n'}
                {'  '}<span className="c-f">sensor_init</span>();{'\n'}
                {'  '}<span className="c-k">while</span> (<span className="c-n">1</span>) {'{'}{'\n'}
                {'    '}<span className="c-k">float</span> t = <span className="c-f">sensor_read</span>();{'\n'}
                {'    '}<span className="c-k">if</span> (t &gt; LIMIT) <span className="c-f">alarm_on</span>();{'\n'}
                {'    '}<span className="c-f">sleep_ms</span>(<span className="c-n">500</span>);{'\n'}
                {'  }'}{'\n'}
                {'}'}
              </code></pre>
              <div className="eng-board"><ProductArt id="esp32-devkit" /></div>
            </div>
          </article>

          <article className="tile tile--dark" aria-labelledby="t-cmp">
            <p className="eyebrow">Ananta Components</p>
            <h3 id="t-cmp">The right part, with advice.</h3>
            <div className="tile__links">
              <a className="link-more" href={path('/shop/')}>Shop parts</a>
              <a className="link-more" href={path('/shop/#kits')}>Project kits</a>
            </div>
            <ul className="tile__art shelf" aria-label="Some of the parts we stock">
              {[['p10-led-module', 'P10 LED module'], ['arduino-uno', 'Arduino Uno'], ['sim800-gsm', 'SIM800 GSM'], ['relay-module', 'Relay module']].map(([id, n]) => (
                <li key={id}><a href={path(`/shop/${id}/`)}><span className="shelf__art" aria-hidden="true"><ProductArt id={id} /></span><span className="shelf__name">{n}</span></a></li>
              ))}
            </ul>
          </article>

          <article className="tile" aria-labelledby="t-col">
            <p className="eyebrow">College Projects</p>
            <h3 id="t-col">Projects that work on viva day.</h3>
            <div className="tile__links">
              <a className="link-more" href={path('/college-projects/')}>Learn more</a>
              <a className="link-more" href={path('/start/?service=college')}>Get help</a>
            </div>
            <div className="tile__art tile__art--offer">
              <p className="tile__big">10%</p>
              <p>student discount, plus 10% referral commission</p>
              <ul className="kit-chips" aria-label="Ready project kits">
                <li>SMS notice board</li><li>Wi-Fi LED board</li><li>GSM remote switch</li><li>Wi-Fi smart switch</li>
              </ul>
            </div>
          </article>
        </div>
      </Section>

      <Section soft labelledBy="journal-title">
        <div className="section-head center">
          <h2 className="h-1" id="journal-title">From the journal.</h2>
          <p className="lede"><a className="link-more" href={path('/journal/')}>All articles</a></p>
        </div>
        <div className="grid grid--3">
          {articles.map((a) => (
            <a className="card card--link" key={a.slug} href={path(`/journal/${a.slug}/`)}>
              <span className="badge">{a.topic}</span>
              <h3 className="h-3">{a.title}</h3>
              <p>{a.dek}</p>
              <span className="link-more card__foot">Read</span>
            </a>
          ))}
        </div>
      </Section>

      <section className="section ready" aria-labelledby="ready-title">
        <div className="container">
          <p className="eyebrow">Let’s build something useful</p>
          <h2 className="h-1" id="ready-title">Ready to be seen?</h2>
          <div className="btn-row">
            <a className="btn btn--whatsapp btn--lg" href={waLink('Hello ANANTA IONS, I would like to talk about an LED display board.')} target="_blank" rel="noopener noreferrer">
              <Icon name="whatsapp" size={18} /> Talk to us on WhatsApp<span className="visually-hidden"> (opens in a new tab)</span>
            </a>
            <a className="link-more" href={path('/start/')}>Start a project</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
