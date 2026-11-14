import { useState } from 'react';
import Icon from './Icon.jsx';
import { contact } from '../content/site.js';

/* The brief goes out through channels that actually deliver: WhatsApp or the
   visitor's own email app, both prefilled. There is no server in between, so
   there is no confirmation screen that could lie about delivery. */

const TOPICS = [
  'Campus LED display system',
  'Embedded firmware',
  'Electronics / PCB',
  'IoT and connectivity',
  'Student or research project',
  'Something else',
];

function compose(v) {
  return [
    `Hello ANANTA IONS,`,
    ``,
    `Name: ${v.name}`,
    v.reach ? `Contact: ${v.reach}` : null,
    `Topic: ${v.topic}`,
    ``,
    v.message,
  ].filter((l) => l !== null).join('\n');
}

export default function ContactForm() {
  const [v, setV] = useState({ name: '', reach: '', topic: TOPICS[0], message: '' });
  const [error, setError] = useState('');
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value });

  const send = (channel) => (e) => {
    e.preventDefault();
    if (!v.name.trim() || v.message.trim().length < 10) {
      setError('Add your name and a sentence or two about what you need.');
      return;
    }
    setError('');
    const body = compose(v);
    const url = channel === 'whatsapp'
      ? `https://wa.me/${contact.whatsapp.value}?text=${encodeURIComponent(body)}`
      : `mailto:${contact.email.value}?subject=${encodeURIComponent(`${v.topic} — ${v.name}`)}&body=${encodeURIComponent(body)}`;
    window.open(url, channel === 'whatsapp' ? '_blank' : '_self', 'noopener');
  };

  return (
    <form className="form corner" onSubmit={send('whatsapp')} noValidate aria-labelledby="form-title">
      <h2 className="h-2" id="form-title">Send us the brief</h2>
      <div className="form__row">
        <div className="field">
          <label htmlFor="f-name">Your name</label>
          <input id="f-name" name="name" autoComplete="name" required value={v.name} onInput={set('name')} />
        </div>
        <div className="field">
          <label htmlFor="f-reach">Phone or email <span className="field__hint">(optional)</span></label>
          <input id="f-reach" name="reach" autoComplete="email" value={v.reach} onInput={set('reach')} />
        </div>
      </div>
      <div className="field">
        <label htmlFor="f-topic">What is it about?</label>
        <select id="f-topic" name="topic" value={v.topic} onChange={set('topic')}>
          {TOPICS.map((t) => <option key={t}>{t}</option>)}
        </select>
      </div>
      <div className="field">
        <label htmlFor="f-msg">What has to work?</label>
        <textarea id="f-msg" name="message" required value={v.message} onInput={set('message')}
          aria-describedby="f-msg-hint" />
        <span className="field__hint" id="f-msg-hint">The problem, the hardware you have, and when you need it. A paragraph is enough.</span>
      </div>
      {error ? <p className="form__error" role="alert">{error}</p> : null}
      <div className="btn-row">
        <button type="submit" className="btn btn--whatsapp btn--lg">
          <Icon name="whatsapp" size={18} /> Send on WhatsApp
        </button>
        <button type="button" className="btn btn--outline btn--lg" onClick={send('email')}>
          <Icon name="mail" size={18} /> Send by email
        </button>
      </div>
      <p className="form__note">Opens WhatsApp or your email app with the message filled in — you press send.</p>
    </form>
  );
}
