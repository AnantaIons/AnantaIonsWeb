import { useEffect, useState } from 'react';
import LedBoard, { LED_COLOURS } from './LedBoard.jsx';

/* The home-page hero board: one big 8 × 3 P10 board (256 × 48 LEDs) that
   switches between real-looking layouts — shop offers, a token counter,
   admissions, a menu, aarti timings — in random order, the way a shop owner
   would schedule them. The first layout is prerendered, so the board shows
   something without JavaScript. */

export const HERO_SLIDES = [
  { id: 'welcome', label: 'Shop welcome', colour: 'amber', items: [
    { text: 'WELCOME', size: 3, y: 3 },
    { text: 'OPEN 9 AM - 9 PM', size: 1, y: 29 },
    { text: 'FLAT 20% OFF TODAY · NEW STOCK IN · ', size: 1, y: 39, effect: 'scroll', speed: 22 },
  ] },
  { id: 'sale', label: 'Sale offer', colour: 'red', items: [
    { text: 'MEGA SALE', size: 4, y: 2, effect: 'blink' },
    { text: 'UPTO 50% OFF · TODAY ONLY · ', size: 2, y: 33, effect: 'scroll', speed: 30 },
  ] },
  { id: 'token', label: 'Token counter', colour: 'white', items: [
    { text: 'TOKEN', size: 1, y: 3, align: 'left', x: 4 },
    { text: 'COUNTER 2', size: 1, y: 3, align: 'right' },
    { text: 'A-27', size: 4, y: 15, effect: 'blink' },
  ] },
  { id: 'admissions', label: 'Coaching admissions', colour: 'green', items: [
    { text: 'ADMISSIONS', size: 3, y: 3 },
    { text: 'JEE · NEET · BOARDS', size: 1, y: 29 },
    { text: 'NEW BATCH FROM 1ST · CALL NOW · ', size: 1, y: 39, effect: 'scroll', speed: 22 },
  ] },
  { id: 'menu', label: 'Restaurant special', colour: 'amber', items: [
    { text: 'SPECIAL THALI', size: 2, y: 2 },
    { text: 'ONLY ₹120', size: 3, y: 18 },
    { text: 'MASALA DOSA ₹80 · LASSI ₹40 · ', size: 1, y: 40, effect: 'scroll', speed: 20 },
  ] },
  { id: 'aarti', label: 'Temple timings', colour: 'amber', items: [
    { text: 'AARTI TIMINGS', size: 2, y: 3 },
    { text: 'SANDHYA 7:00 PM', size: 2, y: 20 },
    { text: 'MANGLA 5:30 AM · SHRINGAR 7:30 AM · SHAYAN 9:00 PM · ', size: 1, y: 39, effect: 'scroll', speed: 20 },
  ] },
  { id: 'notice', label: 'School notice', colour: 'white', items: [
    { text: 'NOTICE', size: 3, y: 3 },
    { text: 'PTM ON SATURDAY', size: 1, y: 29 },
    { text: 'ALL PARENTS ARE REQUESTED TO ATTEND · 10 AM TO 1 PM · ', size: 1, y: 39, effect: 'scroll', speed: 20 },
  ] },
  { id: 'parking', label: 'Parking status', colour: 'green', items: [
    { text: 'PARKING', size: 3, y: 3 },
    { text: 'FREE SLOTS: 24', size: 2, y: 29 },
  ] },
];

const EVERY_MS = 5000;

export default function HeroBoard() {
  const [i, setI] = useState(0);

  useEffect(() => {
    let timer = 0;
    const next = () => setI((cur) => {
      let n = cur;
      while (n === cur) n = Math.floor(Math.random() * HERO_SLIDES.length);
      return n;
    });
    const start = () => { stop(); timer = window.setInterval(next, EVERY_MS); };
    const stop = () => { if (timer) window.clearInterval(timer); timer = 0; };
    const vis = () => (document.hidden ? stop() : start());
    start();
    document.addEventListener('visibilitychange', vis);
    return () => { stop(); document.removeEventListener('visibilitychange', vis); };
  }, []);

  const s = HERO_SLIDES[i];
  const c = LED_COLOURS[s.colour];
  return (
    <>
      <div className="board-real board-real--hero" style={{ '--hb-glow': c.glow }}>
        <div className="hero-board__slide" key={s.id}>
          <LedBoard id={`hb-${s.id}`} panels={[8, 3]} items={s.items} colour={s.colour} framed={false} />
        </div>
      </div>
      <div className="board-real__reflect hero-board__reflect" aria-hidden="true" style={{ '--hb-glow': c.glow }} />
      <p className="stage__caption">
        <span className="hero-board__now">{s.label}</span> · 8 × 3 P10 board · layouts change on their own · illustrative
      </p>
    </>
  );
}
