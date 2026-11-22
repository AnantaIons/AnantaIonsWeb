import { useState } from 'react';
import LedMatrix from './LedMatrix.jsx';
import { LED_COLOURS } from './LedBoard.jsx';

/* Try-it-yourself: type a notice and it scrolls on a simulated board.
   Without JavaScript the board shows the first preset and the input does
   nothing, which is harmless. */

const PRESETS = [
  'Welcome to your store',
  'Flat 20% off today',
  'Exam hall 3 opens at 10 AM',
  'Open 9 AM to 9 PM',
];
const MAX = 48;

const clean = (t) => t.toUpperCase().replace(/\s+/g, ' ').slice(0, MAX);

export default function LedDemo({ heading = 'NOTICE' }) {
  const [text, setText] = useState(PRESETS[0]);
  const [colour, setColour] = useState('amber');
  const [paused, setPaused] = useState(false);
  const c = LED_COLOURS[colour];
  const shown = clean(text.trim()) || 'TYPE A NOTICE';

  return (
    <div className="demo" style={{ '--amber': c.on, '--led-off-col': c.off, '--led-glow': c.glow }}>
      <div className={paused ? 'demo__board is-paused' : 'demo__board'}>
        <LedMatrix
          id="demo"
          colour={colour}
          lines={[{ text: heading }, { text: `${shown} · `, scroll: true }]}
        />
      </div>
      <div className="demo__controls">
        <label htmlFor="demo-input" className="demo__label">Type a notice</label>
        <div className="demo__row">
          <input
            id="demo-input"
            className="demo__input"
            value={text}
            maxLength={MAX}
            autoComplete="off"
            spellCheck={false}
            onInput={(e) => setText(e.target.value)}
            aria-describedby="demo-count"
          />
          <span className="demo__count" id="demo-count">{text.length}/{MAX}</span>
        </div>
        <div className="demo__presets" role="group" aria-label="Example notices">
          {PRESETS.map((p) => (
            <button
              key={p} type="button"
              className={`demo__chip${p === text ? ' is-active' : ''}`}
              aria-pressed={p === text}
              onClick={() => setText(p)}
            >{p}</button>
          ))}
        </div>
        <div className="demo__tools">
          <div className="swatches" role="radiogroup" aria-label="LED colour">
            {Object.entries(LED_COLOURS).map(([k, v]) => (
              <button key={k} type="button" role="radio" aria-checked={colour === k} className="swatch"
                style={{ background: v.on }} onClick={() => setColour(k)}>
                <span className="visually-hidden">{v.label}</span>
              </button>
            ))}
          </div>
          <button type="button" className="demo__play" aria-pressed={paused} onClick={() => setPaused(!paused)}>
            {paused ? 'Play' : 'Pause'} scrolling
          </button>
        </div>
        <p className="demo__fine">Illustrative preview of a single-colour P10 board.</p>
        <p className="visually-hidden" aria-live="polite">Board now shows: {shown}, {c.label.toLowerCase()}</p>
      </div>
    </div>
  );
}
