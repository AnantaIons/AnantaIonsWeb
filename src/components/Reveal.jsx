import { useEffect, useRef } from 'react';

/* Scroll reveal that is safe by construction:
   - Server-rendered markup is fully visible. The hiding rule is scoped to
     `html.js`, which only exists once the client script runs, so a visitor
     with JS blocked or a crawler reading the HTML sees everything.
   - Anything already in view on mount is revealed immediately, without a
     transition, so above-the-fold content never animates in late.
   - `prefers-reduced-motion` zeroes the duration tokens, so this becomes an
     instant class flip rather than a movement.
   The same observer marks the element `.is-live`, which is what energises any
   Engineering Trace inside it. */

export default function Reveal({
  as: Tag = 'div', delay = 0, className = '', children, ...rest
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const live = () => el.classList.add('is-live');

    if (!('IntersectionObserver' in window)) { live(); return; }

    const box = el.getBoundingClientRect();
    if (box.top < (window.innerHeight || 800) * 0.92) {
      el.classList.add('is-instant');
      live();
      return;
    }
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) { live(); io.unobserve(el); }
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -4% 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`.trim()}
      style={delay ? { '--reveal-delay': `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
