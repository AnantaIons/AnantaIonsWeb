import { useEffect, useRef, useState } from 'react';
import Button from './Button.jsx';
import Icon from './Icon.jsx';
import { TraceNode } from './Trace.jsx';
import { contact } from '../content/site.js';

/* ============================================================================
   START A PROJECT — engineering intake.

   HONESTY RULE, enforced in code, not in copy:
   the success state is reachable ONLY from a 2xx response to a real submit.
   When `contact.formEndpoint` is null the form does not pretend: it says the
   submission route is not connected yet and hands the visitor a prefilled
   email instead. It never renders "your requirement has been received" for a
   request that was never made.

   Spam protection is a honeypot plus a minimum fill time. Both are local, so
   the form costs no third-party request and works with JavaScript-blocking
   privacy tools degrading only to a normal POST.
   ========================================================================= */

const MIN_FILL_MS = 3000;
const MAX_FILE_BYTES = 8 * 1024 * 1024;
const FILE_TYPES = '.pdf,.png,.jpg,.jpeg,.zip,.txt,.csv,.sch,.kicad_sch,.step';

const STEPS = [
  {
    id: 'discover', no: '01', label: 'Discover', legend: 'Tell us about the problem',
    fields: [
      { id: 'name',    label: 'Name',    type: 'text',  required: true,  autoComplete: 'name' },
      { id: 'email',   label: 'Email',   type: 'email', required: true,  autoComplete: 'email' },
      { id: 'company', label: 'Company', type: 'text',  autoComplete: 'organization' },
      { id: 'sector',  label: 'Application or industry', type: 'text',
        hint: 'For example: smart energy, industrial monitoring, connected devices.' },
      { id: 'problem', label: 'What are you trying to build?', type: 'textarea', required: true,
        hint: 'The problem matters more than the specification. What has to be true for it to work?' },
    ],
  },
  {
    id: 'define', no: '02', label: 'Define', legend: 'Hardware and connectivity',
    fields: [
      { id: 'stage', label: 'Current stage', type: 'select', options: [
        'Idea', 'Prototype', 'Hardware ready', 'Firmware in progress', 'Field testing', 'Production'] },
      { id: 'platform', label: 'Target platform', type: 'text',
        hint: 'MCU / MPU if chosen — STM32, ESP32, Renesas RX, nRF52 and so on.' },
      { id: 'sensing', label: 'Sensors and actuators', type: 'text' },
      { id: 'connectivity', label: 'Connectivity', type: 'text',
        hint: 'BLE, Wi-SUN, LoRa, CAN, RS-485 — or unknown, which is a fine answer.' },
      { id: 'power', label: 'Power', type: 'text', hint: 'Battery, mains, energy harvesting.' },
    ],
  },
  {
    id: 'engineer', no: '03', label: 'Engineer', legend: 'Firmware and intelligence',
    fields: [
      { id: 'firmware', label: 'Firmware requirements', type: 'textarea',
        hint: 'Bare-metal or RTOS, drivers, bootloader, update path, comms stack.' },
      { id: 'intelligence', label: 'On-device intelligence', type: 'textarea',
        hint: 'Signal processing, edge inference, anomaly or tamper detection.' },
      { id: 'services', label: 'Where you need us', type: 'checkboxes', options: [
        'Electronics', 'Embedded systems', 'Firmware', 'Connectivity',
        'Intelligent systems', 'Displays', 'Product engineering'] },
    ],
  },
  {
    id: 'deliver', no: '04', label: 'Deliver', legend: 'Timeline and production',
    fields: [
      { id: 'timeline', label: 'Timeline', type: 'select', options: [
        'As soon as possible', '1–3 months', '3–6 months', '6–12 months', 'Exploratory'] },
      { id: 'volume', label: 'Expected production volume', type: 'text',
        hint: 'Ten prototypes and five thousand a year are very different problems.' },
      { id: 'handover', label: 'Documentation and handover needs', type: 'textarea' },
      { id: 'file', label: 'Attach a schematic, specification or brief', type: 'file' },
    ],
  },
];

const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());

function validateStep(step, data) {
  const errors = {};
  for (const f of step.fields) {
    const v = data[f.id];
    if (f.required && (v == null || String(v).trim() === '')) {
      errors[f.id] = `${f.label} is required.`;
    } else if (f.type === 'email' && v && !isEmail(v)) {
      errors[f.id] = 'Enter an email address we can reply to.';
    }
  }
  if (data.__file && data.__file.size > MAX_FILE_BYTES) {
    errors.file = 'That file is larger than 8 MB. Send a link instead, or email it to us.';
  }
  return errors;
}

function Field({ field, value, error, onChange }) {
  const id = `intake-${field.id}`;
  const describedBy = [
    field.hint ? `${id}-hint` : null,
    error ? `${id}-error` : null,
  ].filter(Boolean).join(' ') || undefined;

  const common = {
    id,
    name: field.id,
    value: field.type === 'file' ? undefined : (value ?? ''),
    onChange,
    required: field.required || undefined,
    'aria-required': field.required || undefined,
    'aria-invalid': error ? 'true' : undefined,
    'aria-describedby': describedBy,
    autoComplete: field.autoComplete,
    className: `field__control${error ? ' is-invalid' : ''}`,
  };

  return (
    <div className={`field field--${field.type}`}>
      {field.type === 'checkboxes' ? (
        <fieldset className="field__group">
          <legend className="field__label">{field.label}</legend>
          <div className="field__checks">
            {field.options.map((opt) => {
              const checked = Array.isArray(value) && value.includes(opt);
              return (
                <label className="check" key={opt}>
                  <input
                    type="checkbox" name={field.id} value={opt} checked={checked}
                    onChange={onChange} className="check__input"
                  />
                  <span className="check__box" aria-hidden="true"><Icon name="check" size={14} /></span>
                  <span className="check__label">{opt}</span>
                </label>
              );
            })}
          </div>
        </fieldset>
      ) : (
        <>
          <label className="field__label" htmlFor={id}>
            {field.label}
            {field.required ? <span className="field__required" aria-hidden="true">*</span> : null}
          </label>
          {field.hint ? <p className="field__hint" id={`${id}-hint`}>{field.hint}</p> : null}

          {field.type === 'textarea' ? (
            <textarea rows={4} {...common} />
          ) : field.type === 'select' ? (
            <div className="field__select">
              <select {...common}>
                <option value="">Select…</option>
                {field.options.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
              <Icon name="chevronDown" size={18} className="field__select-icon" />
            </div>
          ) : field.type === 'file' ? (
            <input type="file" accept={FILE_TYPES} {...common} />
          ) : (
            <input type={field.type} {...common} />
          )}
        </>
      )}

      {error ? (
        <p className="field__error" id={`${id}-error`}>
          <Icon name="alert" size={15} /> {error}
        </p>
      ) : null}
    </div>
  );
}

export default function IntakeForm() {
  const [stepIndex, setStepIndex] = useState(0);
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});
  // idle | submitting | sent | error | unconfigured
  const [status, setStatus] = useState('idle');
  const [failure, setFailure] = useState('');
  const startedAt = useRef(Date.now());
  const summaryRef = useRef(null);
  const headingRef = useRef(null);
  const announced = useRef(false);

  const step = STEPS[stepIndex];
  const isLast = stepIndex === STEPS.length - 1;

  useEffect(() => {
    if (!announced.current) { announced.current = true; return; }
    headingRef.current?.focus();
  }, [stepIndex]);

  const update = (fieldId, type) => (e) => {
    const t = e.target;
    setData((d) => {
      if (type === 'checkboxes') {
        const cur = Array.isArray(d[fieldId]) ? d[fieldId] : [];
        return { ...d, [fieldId]: t.checked ? [...cur, t.value] : cur.filter((x) => x !== t.value) };
      }
      if (type === 'file') {
        const f = t.files?.[0];
        return { ...d, file: f ? f.name : '', __file: f || null };
      }
      return { ...d, [fieldId]: t.value };
    });
    setErrors((prev) => (prev[fieldId] ? { ...prev, [fieldId]: undefined } : prev));
  };

  const focusFirstError = (errs) => {
    const first = step.fields.find((f) => errs[f.id]);
    if (first) document.getElementById(`intake-${first.id}`)?.focus();
    summaryRef.current?.focus();
  };

  const goNext = () => {
    const errs = validateStep(step, data);
    if (Object.keys(errs).length) { setErrors(errs); focusFirstError(errs); return; }
    setErrors({});
    if (!isLast) setStepIndex((i) => i + 1);
    else submit();
  };

  const buildSummary = () => {
    const lines = [];
    for (const s of STEPS) {
      const rows = s.fields
        .map((f) => [f.label, Array.isArray(data[f.id]) ? data[f.id].join(', ') : data[f.id]])
        .filter(([, v]) => v != null && String(v).trim() !== '');
      if (rows.length) {
        lines.push(`${s.no} ${s.label.toUpperCase()}`);
        for (const [k, v] of rows) lines.push(`  ${k}: ${v}`);
        lines.push('');
      }
    }
    return lines.join('\n');
  };

  async function submit() {
    // Honeypot: a real person never fills a field they cannot see.
    if (data.__hp) { setStatus('sent'); return; }
    if (Date.now() - startedAt.current < MIN_FILL_MS) {
      setFailure('That was submitted unusually fast. Please try again.');
      setStatus('error');
      return;
    }
    if (!contact.formEndpoint) { setStatus('unconfigured'); return; }

    setStatus('submitting');
    setFailure('');
    try {
      const body = new FormData();
      for (const [k, v] of Object.entries(data)) {
        if (k.startsWith('__')) continue;
        body.append(k, Array.isArray(v) ? v.join(', ') : String(v ?? ''));
      }
      if (data.__file) body.append('attachment', data.__file);
      body.append('summary', buildSummary());

      const res = await fetch(contact.formEndpoint, {
        method: 'POST', body, headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error(`The server responded ${res.status}.`);
      setStatus('sent');
    } catch (err) {
      const reason = err instanceof Error ? err.message : 'The request could not be completed.';
      setFailure(/[.!?]$/.test(reason) ? reason : `${reason}.`);
      setStatus('error');
    }
  }

  const mailtoHref = () => {
    const subject = encodeURIComponent(
      `Engineering requirement — ${data.company || data.name || 'new enquiry'}`);
    return `mailto:${contact.email.value}?subject=${subject}&body=${encodeURIComponent(buildSummary())}`;
  };

  /* ---- terminal states ---- */

  if (status === 'sent') {
    return (
      <div className="intake intake--terminal" role="status">
        <span className="intake__seal" aria-hidden="true"><Icon name="check" size={28} /></span>
        <h3 className="heading-1">Your requirement reached us.</h3>
        <p className="prose">
          Thank you{data.name ? `, ${data.name}` : ''}. An ANANTA IONS engineer will read it and
          reply to {data.email || 'the address you gave'}.
        </p>
      </div>
    );
  }

  if (status === 'unconfigured') {
    return (
      <div className="intake intake--terminal intake--honest" role="status">
        <span className="intake__seal intake__seal--warn" aria-hidden="true">
          <Icon name="alert" size={26} />
        </span>
        <h3 className="heading-1">Not submitted — this form has no endpoint yet.</h3>
        <p className="prose">
          Your answers were <strong>not</strong> sent anywhere, and nothing was stored. The
          submission route has not been connected for this deployment, and we would rather tell
          you that than show you a confirmation that means nothing.
        </p>
        <p className="prose">
          Send the same details by email and they will reach an engineer directly.
        </p>
        <div className="intake__actions">
          <Button href={mailtoHref()}>Email this requirement</Button>
          <Button variant="quiet" onClick={() => { setStatus('idle'); setStepIndex(0); }}>
            Back to the form
          </Button>
        </div>
        <details className="intake__details">
          <summary>Show what would have been sent</summary>
          <pre className="intake__pre">{buildSummary() || 'No answers entered.'}</pre>
        </details>
      </div>
    );
  }

  /* ---- the form ---- */

  const errorList = step.fields.filter((f) => errors[f.id]);

  return (
    <form
      className="intake"
      noValidate
      onSubmit={(e) => { e.preventDefault(); goNext(); }}
    >
      <ol className="intake__steps" aria-label="Intake progress">
        {STEPS.map((s, i) => (
          <li key={s.id} className="intake__step">
            <button
              type="button"
              className={`intake__step-btn${i === stepIndex ? ' is-active' : ''}${i < stepIndex ? ' is-done' : ''}`}
              aria-current={i === stepIndex ? 'step' : undefined}
              disabled={i > stepIndex}
              onClick={() => i < stepIndex && setStepIndex(i)}
            >
              <TraceNode signal={i <= stepIndex} />
              <span className="mono intake__step-no">{s.no}</span>
              <span className="intake__step-label">{s.label}</span>
            </button>
          </li>
        ))}
      </ol>

      <p className="intake__progress label label--muted" aria-live="polite">
        Step {stepIndex + 1} of {STEPS.length}
      </p>

      {errorList.length ? (
        <div className="intake__summary" role="alert" tabIndex={-1} ref={summaryRef}>
          <strong>Check {errorList.length === 1 ? 'this field' : 'these fields'}:</strong>
          <ul>
            {errorList.map((f) => (
              <li key={f.id}><a href={`#intake-${f.id}`}>{errors[f.id]}</a></li>
            ))}
          </ul>
        </div>
      ) : null}

      <fieldset className="intake__fieldset">
        <legend className="visually-hidden">{step.legend}</legend>
        <h3 className="heading-1 intake__legend" tabIndex={-1} ref={headingRef}>{step.legend}</h3>

        <div className="intake__fields">
          {step.fields.map((f) => (
            <Field
              key={f.id}
              field={f}
              value={data[f.id]}
              error={errors[f.id]}
              onChange={update(f.id, f.type)}
            />
          ))}
        </div>
      </fieldset>

      {/* Honeypot. Hidden from sight and from assistive technology alike. */}
      <div className="intake__hp" aria-hidden="true">
        <label htmlFor="intake-website">Website</label>
        <input
          id="intake-website" name="website" type="text" tabIndex={-1} autoComplete="off"
          onChange={(e) => setData((d) => ({ ...d, __hp: e.target.value }))}
        />
      </div>

      {status === 'error' ? (
        <div className="intake__failure" role="alert">
          <Icon name="alert" size={18} />
          <div>
            <strong>Not sent.</strong> {failure} Nothing was stored — your answers are still here.
            <div className="intake__actions">
              <Button size="sm" onClick={submit} type="button">Try again</Button>
              <Button size="sm" variant="quiet" href={mailtoHref()}>Send by email instead</Button>
            </div>
          </div>
        </div>
      ) : null}

      <div className="intake__controls">
        {stepIndex > 0 ? (
          <Button type="button" variant="quiet" trailing={false}
                  onClick={() => setStepIndex((i) => i - 1)}>
            Back
          </Button>
        ) : <span />}
        <Button type="submit" disabled={status === 'submitting'}>
          {status === 'submitting'
            ? 'Sending…'
            : isLast ? 'Submit requirement' : 'Continue'}
        </Button>
      </div>
    </form>
  );
}
