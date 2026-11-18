import { useEffect, useState } from 'react';
import { path } from '../lib/paths.js';

/* Home-page hero: the LED design studio itself, running in showcase mode on a
   large 10 × 6 panel board (3.2 m × 0.96 m). It picks a random business and
   layout every few seconds; the caption follows along via postMessage.
   The studio page is public/display-designer.html (?show=1 = showcase). */

const PW = 10;
const PH = 6;

export default function HeroBoard() {
  const [now, setNow] = useState(null);

  useEffect(() => {
    const on = (e) => { if (e.data && e.data.ledShow) setNow(e.data.ledShow); };
    window.addEventListener('message', on);
    return () => window.removeEventListener('message', on);
  }, []);

  const src = path(`/display-designer.html?show=1&pw=${PW}&ph=${PH}&every=6000`);
  return (
    <>
      <div className="board-real board-real--hero">
        <div className="hero-studio" style={{ aspectRatio: `${PW * 32} / ${PH * 16}` }}>
          <iframe src={src} title="Live LED board preview from our design studio" tabIndex={-1} aria-hidden="true" />
        </div>
      </div>
      <div className="board-real__reflect hero-board__reflect" aria-hidden="true" />
      <p className="stage__caption">
        {now ? <><span className="hero-board__now">{now.biz}</span> · {now.layout} layout · </> : null}
        {PW} × {PH} panel board · made in our design studio · illustrative
      </p>
      <div className="btn-row hero-studio__cta">
        <a className="btn--on-dark-pill" href={path('/display-designer.html')}>Design your own board</a>
        <a className="link-more" href={path('/displays/templates/')}>Browse all layouts</a>
      </div>
    </>
  );
}
