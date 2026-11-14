import { useState } from 'react';
import LedMatrix from './LedMatrix.jsx';

/* Try-it-yourself: type a notice and it scrolls on a simulated board.
   Without JavaScript the board shows the first preset and the input does
   nothing, which is harmless. */

const PRESETS = [
  'Exam hall 3 opens at 10 AM',
  'Holiday tomorrow',
  'Fire drill at 11:30',
  'Welcome parents!',
];
const MAX = 48;

const clean = (t) => t.toUpperCase().replace(/\s+/g, ' ').slice(0, MAX);

export default function LedDemo() {
  const [text, setText] = useState(PRESETS[0]);
  const shown = clean(text.trim()) || 'TYPE A NOTICE';

  return (
    <div className="demo">
      <LedMatrix
        id="demo"
        lines={[{ text: 'NOTICE' }, { text: `${shown} · `, scroll: true }]}
      />
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
        <p className="visually-hidden" aria-live="polite">Board now shows: {shown}</p>
      </div>
    </div>
  );
}
