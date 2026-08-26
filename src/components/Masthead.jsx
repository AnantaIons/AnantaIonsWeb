import { useEffect, useRef, useState } from 'react';
import { path } from '../lib/paths.js';
import Icon from './Icon.jsx';
import Mark from './Mark.jsx';
import Button from './Button.jsx';
import { nav, primaryCta, site } from '../content/site.js';

function Wordmark() {
  return (
    <a className="wordmark" href={path('/')}>
      <Mark size={28} className="wordmark__mark" />
      <span className="wordmark__text">
        ANANTA <span className="wordmark__accent">IONS</span>
      </span>
      <span className="visually-hidden">— {site.discipline}, home</span>
    </a>
  );
}

export default function Masthead({ current }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Escape closes the panel and returns focus to the control that opened it —
  // the disclosure pattern, so keyboard users are never stranded inside it.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') { setOpen(false); toggleRef.current?.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`masthead${scrolled ? ' is-scrolled' : ''}`}>
      <div className="masthead__inner container">
        <Wordmark />

        <nav className="masthead__nav" aria-label="Primary">
          <ul className="masthead__list">
            {nav.map((item) => {
              const active = current === item.href;
              return (
                <li key={item.href}>
                  <a
                    className={`masthead__link${active ? ' is-active' : ''}`}
                    href={path(item.href)}
                    aria-current={active ? 'page' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="masthead__cta">
          <Button href={path(primaryCta.href)} size="sm">{primaryCta.label}</Button>
        </div>

        <button
          ref={toggleRef}
          className="masthead__toggle"
          aria-expanded={open}
          aria-controls="masthead-panel"
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} size={22} />
          <span className="visually-hidden">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
      </div>

      <div
        id="masthead-panel"
        ref={panelRef}
        className="masthead__panel"
        hidden={!open}
      >
        <ul className="masthead__panel-list container">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                className="masthead__panel-link"
                href={path(item.href)}
                aria-current={current === item.href ? 'page' : undefined}
              >
                <span>{item.label}</span>
                <Icon name="arrow" size={18} />
              </a>
            </li>
          ))}
          <li className="masthead__panel-cta">
            <Button href={path(primaryCta.href)} size="md">{primaryCta.label}</Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
