const DS = window.AnantaIonsDesignSystem_e44e3f;
const { Button, CornerSquare, Badge, StatCallout, TextInput } = DS;

// Scroll-reveal wrapper
function Reveal({ children, delay=0, as='div', className='', style, ...rest }){
  const ref = React.useRef(null);
  React.useEffect(()=>{
    const el = ref.current; if(!el) return;
    const reveal = ()=>el.classList.add('in');
    // reveal anything already in (or near) the viewport on mount
    const rect = el.getBoundingClientRect();
    if(rect.top < (window.innerHeight||800)*0.95){ reveal(); return; }
    if(!('IntersectionObserver' in window)){ reveal(); return; }
    const io = new IntersectionObserver((es)=>{
      es.forEach(e=>{ if(e.isIntersecting){ reveal(); io.unobserve(el); } });
    }, { threshold:0.08, rootMargin:'0px 0px -6% 0px' });
    io.observe(el); return ()=>io.disconnect();
  },[]);
  const Tag = as;
  return <Tag ref={ref} className={`reveal ${className}`} style={{transitionDelay:`${delay}ms`, ...style}} {...rest}>{children}</Tag>;
}

// ANANTA IONS brand mark — the supplied logo (open copper ring with ivory ion in the gap)
function Mark({ size=26 }){
  return <img src={(window.__resources && window.__resources.logo) || "assets/logo.png"} width={size} height={size} alt="ANANTA IONS" style={{display:'block',flexShrink:0,objectFit:'contain'}}/>;
}

function Wordmark({ size=18, href='index.html' }){
  return (
    <a href={href} style={{display:'inline-flex',alignItems:'center',gap:10,textDecoration:'none',userSelect:'none'}}>
      <Mark size={size+8}/>
      <span style={{fontSize:size,fontWeight:700,letterSpacing:'1.5px',color:'#fff'}}>ANANTA <span style={{color:'var(--gold)'}}>IONS</span></span>
    </a>
  );
}

// Eyebrow label
function Eyebrow({ children, style }){
  return <div className="eyebrow" style={style}>{children}</div>;
}

// Dark card surface with corner square
function DarkCard({ children, corner='top-left', className='', style, ...rest }){
  return (
    <div className={`card-hover ${className}`} style={{position:'relative',background:'var(--ai-panel)',border:'1px solid var(--ai-line)',borderRadius:'var(--radius-sm)',padding:28,...style}} {...rest}>
      <span aria-hidden="true" style={{position:'absolute',width:10,height:10,background:'var(--gold)',[corner.split('-')[0]]:0,[corner.split('-')[1]]:0}}/>
      {children}
    </div>
  );
}

// A ghost/text link with arrow
function GhostLink({ children, onClick, href, color='var(--gold)' }){
  return (
    <a href={href} onClick={onClick} className="btnfx" style={{display:'inline-flex',alignItems:'center',gap:8,fontSize:15,fontWeight:700,color,cursor:'pointer'}}>
      {children}<span aria-hidden="true">→</span>
    </a>
  );
}

Object.assign(window, { DS, Button, CornerSquare, Badge, StatCallout, TextInput, Reveal, Mark, Wordmark, Eyebrow, DarkCard, GhostLink });
