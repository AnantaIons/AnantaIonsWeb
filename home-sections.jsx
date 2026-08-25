const { Button, Reveal, Wordmark, Eyebrow, DarkCard, GhostLink, CornerSquare } = window;
const { STACK, CAPABILITIES, PROJECTS, PROJECT_FILTERS, NAV_PAGES } = window;

// same-page anchor scroll (does NOT shadow native window.scrollTo)
const goToId = (id) => { const el=document.getElementById(id); if(el) window.scrollTo({top:el.getBoundingClientRect().top+window.scrollY-70,behavior:'smooth'}); };

/* ---------------- NAV ---------------- */
function Nav({ active='index.html' }){
  const [scrolled,setScrolled] = React.useState(false);
  const [open,setOpen] = React.useState(false);
  React.useEffect(()=>{ const h=()=>setScrolled(window.scrollY>16); window.addEventListener('scroll',h); return ()=>window.removeEventListener('scroll',h); },[]);
  return (
    <nav style={{position:'sticky',top:0,zIndex:50,background:scrolled?'rgba(5,5,5,.86)':'rgba(5,5,5,.4)',backdropFilter:'blur(10px)',borderBottom:`1px solid ${scrolled?'var(--ai-line)':'transparent'}`,transition:'all .3s ease'}}>
      <div className="ai-container" style={{height:70,display:'flex',alignItems:'center',gap:32}}>
        <Wordmark/>
        <div className="nav-desktop" style={{display:'flex',gap:26,flex:1,marginLeft:8}}>
          {NAV_PAGES.map(l=>{
            const on = l.href.split('#')[0]===active;
            return <a key={l.label} href={l.href} className="nav-link" style={{fontSize:14,fontWeight:600,letterSpacing:'.2px',color:on?'#fff':'var(--ai-txt-2)'}}>{l.label}</a>;
          })}
        </div>
        <div className="nav-desktop" style={{display:'flex',alignItems:'center',gap:14}}>
          <Button variant="outline-on-dark" size="sm" className="btnfx" href="projects.html">Explore Projects</Button>
          <Button variant="primary" size="sm" className="btnfx" href="start.html">Start a Project</Button>
        </div>
        <button className="nav-mobile" onClick={()=>setOpen(o=>!o)} aria-label="Menu" style={{display:'none',background:'none',border:'1px solid var(--ai-line)',borderRadius:2,color:'#fff',width:40,height:40,cursor:'pointer'}}>
          <i className={`fa-solid ${open?'fa-xmark':'fa-bars'}`}></i>
        </button>
      </div>
      {open && (
        <div className="ai-container" style={{paddingBottom:20,display:'flex',flexDirection:'column',gap:14,borderBottom:'1px solid var(--ai-line)'}}>
          {NAV_PAGES.map(l=>(<a key={l.label} href={l.href} style={{fontSize:16,fontWeight:600,color:'var(--ai-txt)'}}>{l.label}</a>))}
          <div style={{display:'flex',gap:12,marginTop:6}}>
            <Button variant="outline-on-dark" size="sm" href="projects.html">Explore</Button>
            <Button variant="primary" size="sm" href="start.html">Start a Project</Button>
          </div>
        </div>
      )}
      <style>{`@media(max-width:1040px){.nav-desktop{display:none!important}.nav-mobile{display:inline-flex!important;align-items:center;justify-content:center}}`}</style>
    </nav>
  );
}

/* ---------------- HERO ---------------- */
function HeroVisual(){
  const rows = STACK;
  return (
    <svg viewBox="0 0 440 460" width="100%" style={{maxWidth:480,filter:'drop-shadow(0 30px 60px rgba(0,0,0,.6))'}} aria-hidden="true">
      <defs>
        <linearGradient id="plate" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#14171c"/><stop offset="1" stopColor="#0a0b0e"/>
        </linearGradient>
      </defs>
      {rows.map((r,i)=>{
        const y = 24 + i*70;
        return (
          <g key={r.key}>
            <path d={`M60 ${y+52} L60 ${y+70}`} stroke="var(--copper)" strokeWidth="2" strokeDasharray="4 6" style={{animation:`traceflow 6s linear infinite`}} opacity={i<rows.length-1?.8:0}/>
            <rect x="40" y={y} width="360" height="52" rx="2" fill="url(#plate)" stroke="var(--ai-line-2)"/>
            <rect x="40" y={y} width="4" height="52" fill={i===2||i===5?'var(--gold)':'var(--copper)'}/>
            <circle cx="66" cy={y+26} r="5" fill="var(--gold)" style={{animation:`pulseGlow ${3+i*0.4}s ease-in-out infinite`}}/>
            <text x="88" y={y+24} fill="#fff" fontSize="15" fontWeight="700" fontFamily="var(--font-family)">{r.label}</text>
            <text x="88" y={y+41} fill="var(--ai-txt-3)" fontSize="10" fontFamily="var(--font-family)" letterSpacing="1">{r.no} / 06</text>
            {[0,1,2,3].map(d=>(<rect key={d} x={330+d*14} y={y+22} width="8" height="8" fill={d< (i+1) ? 'var(--copper-txt)':'var(--ai-line-2)'}/>))}
          </g>
        );
      })}
    </svg>
  );
}
function Hero(){
  return (
    <header id="top" style={{position:'relative',overflow:'hidden',background:'radial-gradient(1100px 600px at 78% 12%, rgba(198,106,37,.10), transparent 60%), var(--ai-black)'}}>
      <div className="ai-container" style={{paddingTop:80,paddingBottom:72,display:'grid',gridTemplateColumns:'1.05fr .95fr',gap:56,alignItems:'center'}}>
        <div>
          <Reveal><Eyebrow>Firmware · Embedded · Connectivity · Intelligence</Eyebrow></Reveal>
          <Reveal delay={80}><h1 style={{fontSize:'clamp(38px,5.4vw,66px)',lineHeight:1.02,letterSpacing:'-.03em',fontWeight:700,color:'#fff',margin:'22px 0 0'}}>Engineering intelligence between <span style={{color:'var(--gold)'}}>silicon</span> and the <span style={{color:'var(--copper-txt)'}}>real world</span>.</h1></Reveal>
          <Reveal delay={160}><p className="sub-sec" style={{marginTop:24,fontSize:19}}>Firmware, embedded systems, connectivity and intelligent electronics — engineered for real-world products. We design the low-level software and system architecture that turn silicon and hardware into production-ready systems.</p></Reveal>
          <Reveal delay={240}><div style={{display:'flex',gap:14,marginTop:34,flexWrap:'wrap'}}>
            <Button variant="primary" size="lg" className="btnfx" href="projects.html">Explore Projects</Button>
            <Button variant="outline-on-dark" size="lg" className="btnfx" href="start.html">Start a Project</Button>
            <Button variant="ghost" className="btnfx" href="services.html" style={{color:'var(--ivory)'}}>Talk to an Engineer</Button>
          </div></Reveal>
          <Reveal delay={320}><div style={{display:'flex',alignItems:'center',gap:10,marginTop:44,flexWrap:'wrap',color:'var(--ai-txt-3)',fontSize:12,fontWeight:700,letterSpacing:'1.5px',textTransform:'uppercase'}}>
            {['Idea','Architecture','Silicon','Hardware','Firmware','Connectivity','Intelligence','Product'].map((s,i,a)=>(
              <React.Fragment key={s}><span style={{color:i===a.length-1?'var(--gold)':'var(--ai-txt-3)'}}>{s}</span>{i<a.length-1 && <span style={{color:'var(--copper)'}}>→</span>}</React.Fragment>
            ))}
          </div></Reveal>
        </div>
        <Reveal delay={200} style={{display:'flex',justifyContent:'center'}}><HeroVisual/></Reveal>
      </div>
      <style>{`@media(max-width:900px){#top .ai-container{grid-template-columns:1fr!important;gap:40px!important;padding-top:48px}#top svg{max-width:360px}}`}</style>
    </header>
  );
}

/* ---------------- PAGE HERO (compact, for sub-pages) ---------------- */
function PageHero({ eyebrow, title, sub, children }){
  return (
    <header style={{position:'relative',overflow:'hidden',background:'radial-gradient(1000px 500px at 80% 0%, rgba(198,106,37,.10), transparent 60%), var(--ai-black)',borderBottom:'1px solid var(--ai-line)'}}>
      <div className="ai-container" style={{paddingTop:72,paddingBottom:64}}>
        <Reveal><Eyebrow>{eyebrow}</Eyebrow></Reveal>
        <Reveal delay={80}><h1 style={{fontSize:'clamp(34px,5vw,58px)',lineHeight:1.04,letterSpacing:'-.03em',fontWeight:700,color:'#fff',margin:'20px 0 0',maxWidth:'20ch'}}>{title}</h1></Reveal>
        {sub && <Reveal delay={160}><p className="sub-sec" style={{marginTop:20,fontSize:19}}>{sub}</p></Reveal>}
        {children && <Reveal delay={240}><div style={{marginTop:30,display:'flex',gap:14,flexWrap:'wrap'}}>{children}</div></Reveal>}
      </div>
    </header>
  );
}

/* ---------------- TRUST STATEMENT ---------------- */
function Trust(){
  return (
    <section className="ai-section" style={{borderTop:'1px solid var(--ai-line)',borderBottom:'1px solid var(--ai-line)',background:'var(--ai-black-2)'}}>
      <div className="ai-container">
        <Reveal><p style={{fontSize:'clamp(24px,3.2vw,38px)',lineHeight:1.32,fontWeight:400,color:'#fff',letterSpacing:'-.01em',maxWidth:'22ch',textWrap:'balance'}}>
          From <span style={{color:'var(--gold)'}}>low-level firmware</span> to <span style={{color:'var(--copper-txt)'}}>connected intelligent products.</span>
        </p></Reveal>
        <Reveal delay={100}><p className="sub-sec" style={{marginTop:22,fontSize:17}}>ANANTA IONS is an engineering partner, not a services desk. Bring us an idea, a prototype, a hardware platform or a technical requirement — we architect, engineer and validate the embedded layer that makes it a reliable product.</p></Reveal>
      </div>
    </section>
  );
}

/* ---------------- ENGINEERING STACK (interactive) ---------------- */
function EngineeringStack(){
  const [active,setActive] = React.useState(2);
  const a = STACK[active];
  return (
    <section id="solutions" className="ai-section">
      <div className="ai-container">
        <Reveal><Eyebrow>The ANANTA IONS engineering stack</Eyebrow></Reveal>
        <Reveal delay={60}><h2 className="h-sec" style={{marginTop:18,maxWidth:'18ch'}}>Six layers between an idea and a shipped product.</h2></Reveal>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1.1fr',gap:48,marginTop:52,alignItems:'start'}} className="stack-grid">
          <Reveal className="stack-rail" style={{display:'flex',flexDirection:'column'}}>
            {STACK.map((s,i)=>{
              const on = i===active;
              return (
                <div key={s.key} onMouseEnter={()=>setActive(i)} onClick={()=>setActive(i)} style={{position:'relative',cursor:'pointer',padding:'18px 20px',borderLeft:`2px solid ${on?'var(--gold)':'var(--ai-line)'}`,background:on?'linear-gradient(90deg,rgba(212,175,55,.06),transparent)':'transparent',transition:'all .25s ease'}}>
                  <div style={{display:'flex',alignItems:'baseline',gap:14}}>
                    <span className="mono" style={{fontSize:12,color:on?'var(--copper-txt)':'var(--ai-txt-3)',fontWeight:700}}>{s.no}</span>
                    <span style={{fontSize:'clamp(22px,2.6vw,30px)',fontWeight:700,color:on?'#fff':'var(--ai-txt-3)',letterSpacing:'-.01em',transition:'color .25s'}}>{s.label}</span>
                  </div>
                </div>
              );
            })}
          </Reveal>
          <Reveal delay={80}>
            <DarkCard style={{padding:36,minHeight:300}}>
              <span className="mono" style={{fontSize:13,color:'var(--copper-txt)',fontWeight:700}}>{a.no} / 06</span>
              <h3 style={{fontSize:30,fontWeight:700,color:'#fff',margin:'12px 0 0',letterSpacing:'-.01em'}}>{a.label}</h3>
              <p style={{fontSize:17,lineHeight:1.6,color:'var(--ai-txt-2)',margin:'14px 0 26px',maxWidth:'46ch'}}>{a.desc}</p>
              <div style={{height:1,background:'var(--ai-line)',margin:'0 0 22px'}}/>
              <div style={{display:'flex',flexWrap:'wrap',gap:10}}>
                {a.tech.map(t=>(<span key={t} style={{fontSize:13,fontWeight:600,color:'var(--ai-txt)',background:'var(--ai-panel-2)',border:'1px solid var(--ai-line-2)',borderRadius:2,padding:'8px 14px'}}>{t}</span>))}
              </div>
            </DarkCard>
          </Reveal>
        </div>
      </div>
      <style>{`@media(max-width:900px){.stack-grid{grid-template-columns:1fr!important;gap:28px!important}}`}</style>
    </section>
  );
}

/* ---------------- CAPABILITIES ---------------- */
function Capabilities(){
  return (
    <section className="ai-section" style={{background:'var(--ai-black-2)',borderTop:'1px solid var(--ai-line)',borderBottom:'1px solid var(--ai-line)'}}>
      <div className="ai-container">
        <Reveal><Eyebrow>Core capabilities</Eyebrow></Reveal>
        <Reveal delay={60}><h2 className="h-sec" style={{marginTop:18,maxWidth:'20ch'}}>Six engineering disciplines, one system-level team.</h2></Reveal>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20,marginTop:48}} className="grid-3">
          {CAPABILITIES.map((c,i)=>(
            <Reveal key={c.title} delay={i*60}>
              <DarkCard style={{height:'100%',display:'flex',flexDirection:'column'}}>
                <i className={c.icon} style={{fontSize:24,color:'var(--gold)'}}></i>
                <h3 style={{fontSize:20,fontWeight:700,color:'#fff',margin:'18px 0 10px'}}>{c.title}</h3>
                <p style={{fontSize:15,lineHeight:1.6,color:'var(--ai-txt-2)',margin:0}}>{c.body}</p>
                <div style={{display:'flex',flexWrap:'wrap',gap:7,marginTop:18}}>
                  {c.tags.map(t=>(<span key={t} style={{fontSize:11,fontWeight:700,letterSpacing:'.4px',color:'var(--copper-txt)',border:'1px solid var(--copper-deep)',borderRadius:2,padding:'4px 8px',textTransform:'uppercase'}}>{t}</span>))}
                </div>
              </DarkCard>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:960px){.grid-3{grid-template-columns:repeat(2,1fr)!important}}@media(max-width:640px){.grid-3{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

/* ---------------- PROJECTS (filterable; limit for previews) ---------------- */
function Projects({ limit }){
  const [filter,setFilter] = React.useState('All');
  let list = filter==='All' ? PROJECTS : PROJECTS.filter(p=>p.cat===filter);
  if(limit) list = PROJECTS.slice(0,limit);
  return (
    <section id="projects" className="ai-section">
      <div className="ai-container">
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',gap:24,flexWrap:'wrap'}}>
          <div>
            <Reveal><Eyebrow>Ready-made projects</Eyebrow></Reveal>
            <Reveal delay={60}><h2 className="h-sec" style={{marginTop:18}}>Engineering, ready to deploy.</h2></Reveal>
          </div>
          {limit && <Reveal delay={100}><GhostLink href="projects.html">View all projects</GhostLink></Reveal>}
        </div>
        {!limit && <Reveal delay={80}><div style={{display:'flex',gap:10,flexWrap:'wrap',margin:'32px 0 8px'}}>
          {PROJECT_FILTERS.map(f=>{
            const on=f===filter;
            return <span key={f} className="chip" onClick={()=>setFilter(f)} style={{fontSize:13,fontWeight:700,letterSpacing:'.3px',padding:'8px 16px',borderRadius:2,cursor:'pointer',color:on?'#000':'var(--ai-txt-2)',background:on?'var(--gold)':'transparent',border:`1px solid ${on?'var(--gold)':'var(--ai-line-2)'}`}}>{f}</span>;
          })}
        </div></Reveal>}
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20,marginTop:28}} className="grid-3">
          {list.map((p,i)=>(
            <Reveal key={p.name} delay={(i%3)*70}>
              <DarkCard style={{height:'100%',display:'flex',flexDirection:'column',padding:0,overflow:'hidden'}}>
                <div style={{aspectRatio:'16/10',background:'linear-gradient(135deg,#14171c,#0a0b0e)',borderBottom:'1px solid var(--ai-line)',position:'relative',display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <ProjectGlyph seed={i}/>
                  <span style={{position:'absolute',top:12,right:12,fontSize:10,fontWeight:700,letterSpacing:'.6px',textTransform:'uppercase',padding:'4px 9px',borderRadius:2,color:p.status==='Available'?'#000':'var(--ivory)',background:p.status==='Available'?'var(--gold)':'transparent',border:p.status==='Available'?'none':'1px solid var(--copper)'}}>{p.status}</span>
                </div>
                <div style={{padding:22,display:'flex',flexDirection:'column',flex:1}}>
                  <span style={{fontSize:11,fontWeight:700,letterSpacing:'1px',textTransform:'uppercase',color:'var(--copper-txt)'}}>{p.cat}</span>
                  <h3 style={{fontSize:18,fontWeight:700,color:'#fff',margin:'8px 0 8px',lineHeight:1.25}}>{p.name}</h3>
                  <p style={{fontSize:14,lineHeight:1.55,color:'var(--ai-txt-2)',margin:'0 0 16px'}}>{p.desc}</p>
                  <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,fontSize:12,color:'var(--ai-txt-3)',marginBottom:16}}>
                    <div><div style={{color:'var(--ai-txt-3)',fontSize:10,textTransform:'uppercase',letterSpacing:'.6px'}}>Platform</div><div style={{color:'var(--ai-txt)',marginTop:2}}>{p.mcu}</div></div>
                    <div><div style={{color:'var(--ai-txt-3)',fontSize:10,textTransform:'uppercase',letterSpacing:'.6px'}}>Connectivity</div><div style={{color:'var(--ai-txt)',marginTop:2}}>{p.conn}</div></div>
                  </div>
                  <div style={{marginTop:'auto',display:'flex',alignItems:'center',justifyContent:'space-between',paddingTop:14,borderTop:'1px solid var(--ai-line)'}}>
                    <span style={{fontSize:13,fontWeight:700,color:'var(--ivory)'}}>{p.price}</span>
                    <GhostLink href="start.html">Request project</GhostLink>
                  </div>
                </div>
              </DarkCard>
            </Reveal>
          ))}
        </div>
        <Reveal delay={60}><p style={{fontSize:12,color:'var(--ai-txt-3)',marginTop:24}}>Placeholder catalog — project names, specifications and pricing are illustrative and to be replaced with real listings in <span style={{color:'var(--ai-txt-2)'}}>data.jsx</span>.</p></Reveal>
      </div>
    </section>
  );
}
function ProjectGlyph({ seed }){
  const icons=['fa-solid fa-bolt','fa-solid fa-leaf','fa-solid fa-tower-cell','fa-solid fa-shield-halved','fa-solid fa-bluetooth-b','fa-solid fa-gears'];
  return (
    <svg viewBox="0 0 200 120" width="70%" style={{opacity:.9}} aria-hidden="true">
      {[0,1,2,3,4].map(i=>(<line key={i} x1={20+i*40} y1="10" x2={20+i*40} y2="110" stroke="var(--ai-line-2)" strokeWidth="1"/>))}
      {[0,1,2].map(i=>(<line key={i} x1="10" y1={30+i*30} x2="190" y2={30+i*30} stroke="var(--ai-line-2)" strokeWidth="1"/>))}
      <circle cx="100" cy="60" r="26" fill="#0a0b0e" stroke="var(--copper)" strokeWidth="1.5"/>
      <foreignObject x="80" y="40" width="40" height="40"><div style={{width:40,height:40,display:'flex',alignItems:'center',justifyContent:'center'}}><i className={icons[seed%icons.length]} style={{color:'var(--gold)',fontSize:18}}></i></div></foreignObject>
    </svg>
  );
}

Object.assign(window, { Nav, Hero, PageHero, Trust, EngineeringStack, Capabilities, Projects, goToId });
