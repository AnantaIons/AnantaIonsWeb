import { useEffect, useRef, useState } from 'react';
import Icon from './Icon.jsx';
import { contact } from '../content/site.js';

/* Guided project enquiry: service → details → budget & timing → contact →
   review. The finished brief goes out on WhatsApp or by email, prefilled —
   there is no server, so nothing claims to be "sent" until the visitor
   presses send in their own app. A ?service= query preselects the service. */

const SERVICES = [
  { id: 'display', icon: 'display', label: 'LED display board', hint: 'Notice boards, signs, scrolling displays' },
  { id: 'website', icon: 'globe', label: 'Website', hint: 'Business, shop, school or portfolio site' },
  { id: 'engineering', icon: 'cpu', label: 'Engineering', hint: 'Firmware, IoT, electronics, product development' },
  { id: 'college', icon: 'book', label: 'College project', hint: 'Final-year, mini project, research help' },
  { id: 'components', icon: 'chip', label: 'Components', hint: 'Parts or a complete project kit' },
];

const DETAILS = {
  display: [
    { id: 'where', label: 'Where will the board go?', type: 'select', options: ['Shop / showroom', 'School / college', 'Office / hospital', 'Temple / event', 'Other'] },
    { id: 'size', label: 'Rough size (if known)', type: 'text', placeholder: 'e.g. 4 ft × 2 ft' },
    { id: 'update', label: 'How do you want to change the message?', type: 'select', options: ['Not sure — advise me', 'From my phone', 'By SMS', 'Fixed message'] },
  ],
  website: [
    { id: 'biz', label: 'What is the business?', type: 'text', placeholder: 'e.g. coaching centre in Jaipur' },
    { id: 'kind', label: 'Type of website', type: 'select', options: ['Business / services', 'Online shop', 'School / coaching', 'Portfolio', 'Not sure'] },
    { id: 'existing', label: 'Do you have a website now?', type: 'select', options: ['No', 'Yes — needs a redesign', 'Yes — needs changes'] },
  ],
  engineering: [
    { id: 'product', label: 'What should the product do?', type: 'text', placeholder: 'e.g. monitor a water tank and send alerts' },
    { id: 'stage', label: 'Where are you now?', type: 'select', options: ['Just an idea', 'Have a prototype', 'Have a product — needs fixes', 'Ready for production'] },
  ],
  college: [
    { id: 'branch', label: 'Branch and year', type: 'text', placeholder: 'e.g. ECE, final year' },
    { id: 'idea', label: 'Project idea', type: 'text', placeholder: 'Your idea, or “need an idea”' },
    { id: 'help', label: 'What do you need?', type: 'select', options: ['Complete project', 'Help with my project', 'Research paper guidance'] },
  ],
  components: [
    { id: 'parts', label: 'Parts you need', type: 'text', placeholder: 'e.g. ESP32, 2 × P10 module, 5 V SMPS' },
    { id: 'use', label: 'For', type: 'select', options: ['College project', 'Business / production', 'Hobby'] },
  ],
};

const BUDGETS = ['Under ₹10,000', '₹10,000 – 25,000', '₹25,000 – 50,000', '₹50,000 – 1,00,000', 'Above ₹1,00,000', 'Not sure yet'];
const TIMES = ['As soon as possible', 'Within a month', '1 – 3 months', 'Flexible'];
const STEPS = ['Service', 'Details', 'Budget', 'Contact', 'Review'];

export default function EnquiryWizard() {
  const [step, setStep] = useState(0);
  const [svc, setSvc] = useState(null);
  const [d, setD] = useState({});
  const [budget, setBudget] = useState('');
  const [time, setTime] = useState('');
  const [who, setWho] = useState({ name: '', reach: '', city: 'Jaipur' });
  const [err, setErr] = useState('');
  const headRef = useRef(null);
  const first = useRef(true);

  useEffect(() => {
    const s = new URLSearchParams(window.location.search).get('service');
    if (s && SERVICES.some((x) => x.id === s)) { setSvc(s); setStep(1); }
  }, []);
  useEffect(() => {
    if (first.current) { first.current = false; return; }
    headRef.current?.focus();
  }, [step]);

  const service = SERVICES.find((s) => s.id === svc);
  const fields = svc ? DETAILS[svc] : [];

  const next = () => {
    setErr('');
    if (step === 0 && !svc) return setErr('Choose what you need help with.');
    if (step === 1 && !(d.note || '').trim() && !fields.some((f) => (d[f.id] || '').trim?.())) return setErr('Tell us a little about it — one line is enough.');
    if (step === 3 && (!who.name.trim() || !who.reach.trim())) return setErr('Add your name and a phone number or email.');
    setStep((s) => Math.min(4, s + 1));
  };
  const back = () => { setErr(''); setStep((s) => Math.max(0, s - 1)); };

  const brief = [
    'Hello ANANTA IONS, new enquiry:',
    '',
    `Service: ${service?.label || ''}`,
    ...fields.filter((f) => d[f.id]).map((f) => `${f.label} ${d[f.id]}`),
    d.note ? `Details: ${d.note}` : null,
    budget ? `Budget: ${budget}` : null,
    time ? `Timeline: ${time}` : null,
    '',
    `Name: ${who.name}`,
    `Contact: ${who.reach}`,
    who.city ? `City: ${who.city}` : null,
  ].filter((l) => l !== null).join('\n');

  const send = (via) => {
    const url = via === 'wa'
      ? `https://wa.me/${contact.whatsapp.value}?text=${encodeURIComponent(brief)}`
      : `mailto:${contact.email.value}?subject=${encodeURIComponent(`${service?.label} enquiry — ${who.name}`)}&body=${encodeURIComponent(brief)}`;
    window.open(url, via === 'wa' ? '_blank' : '_self', 'noopener');
  };

  return (
    <form className="wizard corner" onSubmit={(e) => { e.preventDefault(); if (step < 4) next(); else send('wa'); }} noValidate aria-labelledby="wizard-title">
      <div className="wizard__top">
        <h2 className="h-2" id="wizard-title">Start a project</h2>
        <ol className="wizard__progress" aria-label="Progress">
          {STEPS.map((s, i) => (
            <li key={s} className={i === step ? 'is-current' : i < step ? 'is-done' : ''} aria-current={i === step ? 'step' : undefined}>
              <span className="wizard__dot">{i < step ? <Icon name="check" size={12} /> : i + 1}</span>
              <span className="wizard__label">{s}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="wizard__body">
        <h3 className="h-3 wizard__q" tabIndex={-1} ref={headRef}>
          {['What do you need help with?', `Tell us about your ${service?.label.toLowerCase() || 'project'}`, 'Budget and timing', 'How can we reach you?', 'Check and send'][step]}
        </h3>

        {step === 0 ? (
          <div className="svc-grid" role="radiogroup" aria-label="Service">
            {SERVICES.map((s) => (
              <button key={s.id} type="button" role="radio" aria-checked={svc === s.id}
                className={`svc${svc === s.id ? ' is-on' : ''}`} onClick={() => { setSvc(s.id); setErr(''); }}>
                <Icon name={s.icon} size={22} />
                <span className="svc__label">{s.label}</span>
                <span className="svc__hint">{s.hint}</span>
              </button>
            ))}
          </div>
        ) : null}

        {step === 1 ? (
          <div className="wizard__fields">
            {fields.map((f) => (
              <div className="field" key={f.id}>
                <label htmlFor={`w-${f.id}`}>{f.label}</label>
                {f.type === 'select' ? (
                  <select id={`w-${f.id}`} value={d[f.id] || ''} onChange={(e) => setD({ ...d, [f.id]: e.target.value })}>
                    <option value="">Choose…</option>
                    {f.options.map((o) => <option key={o}>{o}</option>)}
                  </select>
                ) : (
                  <input id={`w-${f.id}`} placeholder={f.placeholder} value={d[f.id] || ''} onInput={(e) => setD({ ...d, [f.id]: e.target.value })} />
                )}
              </div>
            ))}
            <div className="field">
              <label htmlFor="w-note">Anything else? <span className="field__hint">(optional)</span></label>
              <textarea id="w-note" value={d.note || ''} onInput={(e) => setD({ ...d, note: e.target.value })} />
            </div>
          </div>
        ) : null}

        {step === 2 ? (
          <div className="wizard__fields">
            <fieldset className="field">
              <legend>Approximate budget</legend>
              <div className="pill-group">
                {BUDGETS.map((b) => (
                  <label key={b} className={`pill${budget === b ? ' is-on' : ''}`}>
                    <input type="radio" name="budget" value={b} checked={budget === b} onChange={() => setBudget(b)} /> {b}
                  </label>
                ))}
              </div>
            </fieldset>
            <fieldset className="field">
              <legend>When do you need it?</legend>
              <div className="pill-group">
                {TIMES.map((t) => (
                  <label key={t} className={`pill${time === t ? ' is-on' : ''}`}>
                    <input type="radio" name="time" value={t} checked={time === t} onChange={() => setTime(t)} /> {t}
                  </label>
                ))}
              </div>
            </fieldset>
            <p className="field__hint">Both optional — a rough idea helps us suggest the right option.</p>
          </div>
        ) : null}

        {step === 3 ? (
          <div className="wizard__fields form__row">
            <div className="field">
              <label htmlFor="w-name">Your name</label>
              <input id="w-name" autoComplete="name" value={who.name} onInput={(e) => setWho({ ...who, name: e.target.value })} />
            </div>
            <div className="field">
              <label htmlFor="w-reach">Phone or email</label>
              <input id="w-reach" autoComplete="tel" value={who.reach} onInput={(e) => setWho({ ...who, reach: e.target.value })} />
            </div>
            <div className="field">
              <label htmlFor="w-city">City</label>
              <input id="w-city" autoComplete="address-level2" value={who.city} onInput={(e) => setWho({ ...who, city: e.target.value })} />
            </div>
          </div>
        ) : null}

        {step === 4 ? (
          <div className="wizard__review">
            <pre className="wizard__brief">{brief}</pre>
            <div className="btn-row">
              <button type="submit" className="btn btn--whatsapp btn--lg"><Icon name="whatsapp" size={18} /> Send on WhatsApp</button>
              <button type="button" className="btn btn--outline btn--lg" onClick={() => send('mail')}><Icon name="mail" size={18} /> Send by email</button>
            </div>
            <p className="form__note">Opens WhatsApp or your email app with this message ready — you press send.</p>
          </div>
        ) : null}

        {err ? <p className="form__error" role="alert">{err}</p> : null}
      </div>

      <div className="wizard__nav">
        {step > 0 ? <button type="button" className="btn btn--outline" onClick={back}><Icon name="arrow" size={16} className="flip" /> Back</button> : <span />}
        {step < 4 ? <button type="submit" className="btn btn--primary">Continue <Icon name="arrow" size={16} /></button> : null}
      </div>
    </form>
  );
}
