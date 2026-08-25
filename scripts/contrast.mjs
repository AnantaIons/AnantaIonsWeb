// WCAG contrast helper used to tune the palette. Not part of the build.
const hex = h => { h = h.replace('#',''); if (h.length===3) h = [...h].map(c=>c+c).join('');
  return [0,2,4].map(i => parseInt(h.slice(i,i+2),16)/255); };
const lin = c => c <= 0.04045 ? c/12.92 : ((c+0.055)/1.055) ** 2.4;
const L = h => { const [r,g,b] = hex(h).map(lin); return 0.2126*r + 0.7152*g + 0.0722*b; };
export const ratio = (a,b) => { const [x,y] = [L(a),L(b)].sort((p,q)=>q-p); return (x+0.05)/(y+0.05); };

if (import.meta.url === `file://${process.argv[1]}`) {
  const BG = { 'black #050505':'#050505', 'panel #0d0f12':'#0d0f12', 'panel2 #14171c':'#14171c' };
  const FG = { 'ivory #f3e1ad':'#f3e1ad', 'gold #d4af37':'#d4af37', 'copper-txt #d47728':'#d47728',
    'txt #e7e9ed':'#e7e9ed', 'txt-2 #a8afbb':'#a8afbb', 'txt-3 #7a828e':'#7a828e',
    'txt-3b #8c95a3':'#8c95a3', 'copper #c66a25':'#c66a25', 'white':'#ffffff' };
  for (const [bn,bv] of Object.entries(BG)) {
    console.log('\non ' + bn);
    for (const [fn,fv] of Object.entries(FG)) {
      const r = ratio(fv,bv);
      console.log('  ' + fn.padEnd(20) + r.toFixed(2).padStart(6) +
        (r>=4.5?'  AA':'') + (r>=7?'+ AAA':'') + (r<4.5?(r>=3?'  AA-large only':'  FAIL'):''));
    }
  }
  console.log('\ngold #d4af37 as button bg vs black text #050505:', ratio('#d4af37','#050505').toFixed(2));
}
