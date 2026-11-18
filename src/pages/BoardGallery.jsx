import { useEffect, useRef, useState } from 'react';
import Layout from '../components/Layout.jsx';
import Button from '../components/Button.jsx';
import Icon from '../components/Icon.jsx';
import LedBoard, { LED_COLOURS } from '../components/LedBoard.jsx';
import { Section, SectionHead, PageHero, CtaStrip } from '../components/Ui.jsx';
import { path } from '../lib/paths.js';
import { waLink } from '../lib/wa.js';
import LedDemo from '../components/LedDemo.jsx';
import { templates, sizeGuide } from '../content/templates.js';

const sizeLabel = ([a, d]) => {
  const cm = (n, u) => (n * u) / 100;
  return `${a} × ${d} panels · ${(a * 32)} × ${(d * 16)} LEDs · ${cm(a, 32).toFixed(2).replace(/\.?0+$/, '')} × ${cm(d, 16).toFixed(2).replace(/\.?0+$/, '')} m`;
};

/* The full-colour designer (public/display-designer.html) runs inside this
   page in embed mode and reports its height, so it reads as part of the page. */
function StudioFrame() {
  const ref = useRef(null);
  const [h, setH] = useState(1400);
  useEffect(() => {
    const on = (e) => { if (e.data && e.data.ledEmbedH && e.source === ref.current?.contentWindow) setH(Math.ceil(e.data.ledEmbedH) + 4); };
    window.addEventListener('message', on);
    return () => window.removeEventListener('message', on);
  }, []);
  return (
    <iframe ref={ref} className="studio-frame" src={path('/display-designer.html?embed=1')} style={{ height: `${h}px` }}
      title="Full-colour LED board designer" loading="lazy" />
  );
}

const USES = ['All', ...Array.from(new Set(templates.map((t) => t.use)))];

export default function BoardGallery() {
  const [use, setUse] = useState('All');
  const shown = templates.filter((t) => use === 'All' || t.use === use);

  return (
    <Layout current="/displays/templates/">
      <PageHero
        eyebrow="Design studio"
        title={<>Design your LED board <span className="hl">in minutes</span></>}
        lede="Everything in one place: a full-colour designer for big boards, ready single-colour layouts, and a quick notice preview. Pick what fits, then send it to us on WhatsApp."
      >
        <nav className="studio-jump" aria-label="On this page">
          <a href="#studio"><strong>Full-colour designer</strong><span>Your shop name, offer and icon on any board size</span></a>
          <a href="#gallery"><strong>Single-colour layouts</strong><span>Notices, offers, tokens and timings</span></a>
          <a href="#try"><strong>Quick notice preview</strong><span>Type a message, see it scroll</span></a>
        </nav>
      </PageHero>

      <Section labelledBy="studio-title" id="studio">
        <SectionHead eyebrow="Full colour" id="studio-title" title="Full-colour designer"
          lede="Choose your business, set the board size in panels, type your text — and download a PNG or GIF for your controller. Your text is saved on this device only." />
        <StudioFrame />
        <p className="studio-note">Prefer a bigger screen? <a href={path('/display-designer.html')}>Open the designer on its own page</a>.</p>
      </Section>

      <Section labelledBy="gallery-title" id="gallery">
        <SectionHead eyebrow="Single colour" id="gallery-title" title="Single-colour layouts"
          lede="Every board below is drawn at its true LED resolution, so text sizes are exactly what you would see." />
        <div className="gallery-filter" role="group" aria-label="Filter by use">
          {USES.map((u) => (
            <button key={u} type="button" className={`demo__chip${use === u ? ' is-active' : ''}`}
              aria-pressed={use === u} onClick={() => setUse(u)}>{u}</button>
          ))}
        </div>
        <p className="visually-hidden" aria-live="polite">{shown.length} templates shown</p>

        <div className="gallery">
          {shown.map((t) => (
            <article className={`gallery-card gallery-card--${t.panels[0] >= 6 ? 'wide' : t.panels[0] <= 2 ? 'small' : 'mid'}`}
              key={t.id} aria-labelledby={`${t.id}-t`}>
              <div className="gallery-card__stage">
                <LedBoard id={`g-${t.id}`} panels={t.panels} items={t.items} colour={t.colour} />
              </div>
              <div className="gallery-card__body">
                <div className="gallery-card__meta">
                  <span className="badge">{t.use}</span>
                  <span className="gallery-card__colour" style={{ '--swatch': LED_COLOURS[t.colour].on }}>
                    {LED_COLOURS[t.colour].label} LEDs
                  </span>
                </div>
                <h3 className="h-3" id={`${t.id}-t`}>{t.title}</h3>
                <p>{t.note}</p>
                <p className="gallery-card__size">{sizeLabel(t.panels)}</p>
                <a className="btn btn--whatsapp btn--sm" target="_blank" rel="noopener noreferrer"
                  href={waLink(`Hello ANANTA IONS, I like the "${t.title}" board (${t.panels[0]} × ${t.panels[1]} panels, ${LED_COLOURS[t.colour].label.toLowerCase()}). My text: `)}>
                  <Icon name="whatsapp" size={16} /> I want this board
                  <span className="visually-hidden"> — {t.title}, opens WhatsApp in a new tab</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section dark labelledBy="fonts-title">
        <SectionHead eyebrow="Font sizes" id="fonts-title" title="Four text sizes, one board"
          lede="Bigger text reads from further away but fits fewer letters. Most boards mix two sizes: a big headline and a small detail line." />
        <div className="font-sizes">
          <LedBoard id="sizes" panels={[8, 4]} colour="amber" items={[
            { text: 'SIZE 1 · 7 LEDS TALL', size: 1, y: 3, align: 'left', x: 4 },
            { text: 'SIZE 2 · 14 LEDS', size: 2, y: 13, align: 'left', x: 4 },
            { text: 'SIZE 3', size: 3, y: 30, align: 'left', x: 4 },
            { text: '4', size: 4, y: 31, align: 'right' },
          ]} />
          <dl className="size-guide">
            {sizeGuide.map(([n, name, tall, use]) => (
              <div key={n}><dt><span className="step__no">{n}</span> {name}</dt><dd>{tall} — {use}</dd></div>
            ))}
          </dl>
        </div>
      </Section>

      <Section labelledBy="colours-title">
        <SectionHead eyebrow="LED colours" id="colours-title" title="Single-colour boards in four colours" />
        <div className="grid grid--4">
          {Object.entries(LED_COLOURS).map(([k, c]) => (
            <div className="card" key={k}>
              <LedBoard id={`col-${k}`} panels={[2, 1]} colour={k} items={[{ text: c.label.toUpperCase(), size: 2, y: 1 }]} />
              <h3 className="h-3">{c.label}</h3>
            </div>
          ))}
        </div>
      </Section>

      <Section dark labelledBy="try-title" id="try">
        <div className="demo-grid">
          <div>
            <span className="eyebrow">Quick preview</span>
            <h2 className="h-1" id="try-title">Write a notice, see it on the board</h2>
            <p className="lede" style={{ marginTop: '16px' }}>Type your own message or pick an example, and choose the LED colour.</p>
            <p style={{ marginTop: '16px' }}><a className="link-more" href={path('/displays/#size')}>Work out your board size and price</a></p>
          </div>
          <LedDemo />
        </div>
      </Section>

      <CtaStrip title="Want your own text on one of these?" cta={{ label: 'Get a quote', href: '/start/' }} />
    </Layout>
  );
}
