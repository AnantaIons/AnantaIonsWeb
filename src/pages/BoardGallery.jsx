import { useState } from 'react';
import Layout from '../components/Layout.jsx';
import Button from '../components/Button.jsx';
import Icon from '../components/Icon.jsx';
import LedBoard, { LED_COLOURS } from '../components/LedBoard.jsx';
import { Section, SectionHead, PageHero, CtaStrip } from '../components/Ui.jsx';
import { path } from '../lib/paths.js';
import { waLink } from '../lib/wa.js';
import { templates, sizeGuide } from '../content/templates.js';

const sizeLabel = ([a, d]) => {
  const cm = (n, u) => (n * u) / 100;
  return `${a} × ${d} panels · ${(a * 32)} × ${(d * 16)} LEDs · ${cm(a, 32).toFixed(2).replace(/\.?0+$/, '')} × ${cm(d, 16).toFixed(2).replace(/\.?0+$/, '')} m`;
};

const USES = ['All', ...Array.from(new Set(templates.map((t) => t.use)))];

export default function BoardGallery() {
  const [use, setUse] = useState('All');
  const shown = templates.filter((t) => use === 'All' || t.use === use);

  return (
    <Layout current="/displays/templates/">
      <PageHero
        eyebrow="Board gallery"
        title={<>Real board sizes, <span className="hl">real advertisements</span></>}
        lede="Layouts we can put on your LED board — from a two-panel shop sign to a wide temple board. Pick one you like and we will make it in your size and colour."
      >
        <div className="btn-row">
          <Button href="#gallery" size="lg">Browse templates</Button>
          <Button href={path('/displays/#size')} variant="on-dark" size="lg">Size calculator</Button>
        </div>
      </PageHero>

      <Section labelledBy="gallery-title" id="gallery">
        <SectionHead eyebrow="Templates" id="gallery-title" title="Pick a layout"
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

      <CtaStrip title="Want your own text on one of these?" cta={{ label: 'Get a quote', href: '/start/' }} />
    </Layout>
  );
}
