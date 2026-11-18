import Layout from '../components/Layout.jsx';
import Button from '../components/Button.jsx';
import Icon from '../components/Icon.jsx';
import LedMatrix from '../components/LedMatrix.jsx';
import LedDemo from '../components/LedDemo.jsx';
import LedBoard from '../components/LedBoard.jsx';
import ProductArt from '../components/ProductArt.jsx';
import { Section } from '../components/Ui.jsx';
import { path } from '../lib/paths.js';
import { waLink } from '../lib/wa.js';
import { templates } from '../content/templates.js';
import { articles } from '../content/journal.js';

const POINTS = [
  ['Made to your size', 'From a two-panel shop sign to a full wall, built from standard P10 panels.'],
  ['Changed in seconds', 'Update the message from your phone or by SMS. No USB stick, no ladder.'],
  ['Made in Jaipur', 'Built and tested here, with help close by when you need it.'],
];

const PICKS = ['sale', 'restaurant', 'token'].map((id) => templates.find((t) => t.id === id));

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
            <a className="link-more" href="#experience">Try it yourself</a>
          </div>
        </div>
      </section>

      <section className="stage" aria-label="Product view">
        <div className="container">
          <div className="board-real__mount" aria-hidden="true"><span /><span /></div>
          <div className="board-real">
            <LedMatrix id="hero" lines={[
              { text: 'WELCOME' },
              { text: 'OPEN 9-9' },
              { text: 'FLAT 20% OFF TODAY · NEW STOCK IN · ', scroll: true },
            ]} />
          </div>
          <div className="board-real__reflect" aria-hidden="true" />
          <p className="stage__caption">Single-colour P10 board, 4 × 3 panels · illustrative</p>
        </div>
      </section>

      <Section labelledBy="points-title">
        <h2 className="visually-hidden" id="points-title">Why our boards</h2>
        <div className="points">
          {POINTS.map(([t, b], i) => (
            <div className="point" key={t}>
              <span className="point__no">0{i + 1}</span>
              <h3>{t}</h3>
              <p>{b}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section dark labelledBy="exp-title" id="experience">
        <div className="section-head center">
          <p className="eyebrow">A simpler way to communicate</p>
          <h2 className="h-1" id="exp-title">Your message. Ready to be seen.</h2>
          <p className="lede">Type anything, choose a colour, and watch it run on the board.</p>
        </div>
        <div className="experience"><LedDemo /></div>
      </Section>

      <Section soft labelledBy="tpl-title">
        <div className="section-head center">
          <h2 className="h-1" id="tpl-title">One display. Many ideas.</h2>
          <p className="lede">Offers, menus, token numbers, notices — ready-made layouts on real board sizes, or design your own and download it for the controller.</p>
        </div>
        <div className="tpl-row" aria-hidden="true">
          {PICKS.map((t) => (
            <figure className="tpl" key={t.id}>
              <LedBoard id={`h-${t.id}`} panels={t.panels} items={t.items} colour={t.colour} />
              <figcaption>{t.title}</figcaption>
            </figure>
          ))}
        </div>
        <div className="btn-row center-row">
          <Button href={path('/displays/templates/')}>Browse the gallery</Button>
          <a className="link-more" href={path('/display-designer.html')}>Design your own</a>
        </div>
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
              <a className="link-more" href={path('/websites/')}>Learn more</a>
              <a className="link-more" href={path('/websites/#experience')}>See demos</a>
            </div>
            <div className="tile__art" aria-hidden="true">
              <div className="device device--desktop">
                <div className="device__bar"><i /><i /><i /><span>Demo store</span></div>
                <div className="device__screen"><iframe src={path('/demos/commerce/')} title="Demo website preview" tabIndex={-1} /></div>
              </div>
            </div>
          </article>

          <article className="tile tile--dark" aria-labelledby="t-eng">
            <p className="eyebrow">Ananta Engineering</p>
            <h3 id="t-eng">Firmware and electronics, built to last.</h3>
            <div className="tile__links">
              <a className="link-more" href={path('/engineering/')}>Learn more</a>
              <a className="link-more" href={path('/engineering/#board')}>Explore a board</a>
            </div>
            <div className="tile__art" aria-hidden="true"><ProductArt id="esp32-devkit" /></div>
          </article>

          <article className="tile tile--dark" aria-labelledby="t-cmp">
            <p className="eyebrow">Ananta Components</p>
            <h3 id="t-cmp">The right part, with advice.</h3>
            <div className="tile__links">
              <a className="link-more" href={path('/shop/')}>Shop parts</a>
              <a className="link-more" href={path('/shop/#kits')}>Project kits</a>
            </div>
            <div className="tile__art" aria-hidden="true"><ProductArt id="p10-led-module" /></div>
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
