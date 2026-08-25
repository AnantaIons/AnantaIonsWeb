const { Button, Reveal, Eyebrow, DarkCard, GhostLink } = window;
const { FIRMWARE, CONNECTIVITY, INTELLIGENCE, INDUSTRIES, PROCESS, WHY } = window;

/* ---------------- CUSTOM ENGINEERING CTA ---------------- */
function CustomEng(){
  return (
    <section className="ai-section" style={{position:'relative',overflow:'hidden',background:'radial-gradient(900px 500px at 15% 50%, rgba(198,106,37,.12), transparent 60%), var(--ai-black-2)',borderTop:'1px solid var(--ai-line)',borderBottom:'1px solid var(--ai-line)'}}>
      <div className="ai-container" style={{display:'grid',gridTemplateColumns:'1.1fr .9fr',gap:48,alignItems:'center'}}>
        <div>
          <Reveal><Eyebrow>Custom engineering</Eyebrow></Reveal>
          <Reveal delay={60}><h2 className="h-sec" style={{marginTop:18,maxWidth:'16ch'}}>Have a problem worth engineering?</h2></Reveal>
          <Reveal delay={120}><p className="sub-sec" style={{marginTop:20}}>Bring us your idea, prototype, hardware or technical challenge. We'll help turn it into a working, production-ready engineering solution — joining at whatever stage you're at.</p></Reveal>
          <Reveal delay={180}><div style={{display:'flex',gap:14,marginTop:30,flexWrap:'wrap'}}>
            <Button variant="primary" size="lg" className="btnfx" href="start.html">Start your project</Button>
            <Button variant="outline-on-dark" size="lg" className="btnfx" href="services.html">Talk to an engineer</Button>
          </div></Reveal>
        </div>
        <Reveal delay={120}>
          <div style={{display:'flex',flexDirection:'column',gap:0,border:'1px solid var(--ai-line)',borderRadius:2,overflow:'hidden'}}>
            {['Idea','Prototype','Hardware ready','Firmware development','Debugging','Field testing','Production'].map((s,i,a)=>(
              <div key={s} style={{display:'flex',alignItems:'center',gap:16,padding:'15px 20px',background:i%2?'var(--ai-panel)':'var(--ai-black)',borderBottom:i<a.length-1?'1px solid var(--ai-line)':'none'}}>
                <span className="mono" style={{fontSize:12,color:'var(--copper-txt)',fontWeight:700,width:24}}>{String(i+1).padStart(2,'0')}</span>
                <span style={{width:8,height:8,background:'var(--gold)',flexShrink:0,opacity:.4+i*0.09}}/>
                <span style={{fontSize:15,fontWeight:600,color:'#fff'}}>{s}</span>
                <span style={{marginLeft:'auto',fontSize:11,color:'var(--ai-txt-3)',textTransform:'uppercase',letterSpacing:'.6px'}}>We can join here</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
      <style>{`@media(max-width:900px){section.ai-section .ai-container{grid-template-columns:1fr!important;gap:36px!important}}`}</style>
    </section>
  );
}

/* ---------------- FIRMWARE ---------------- */
function Firmware(){
  return (
    <section id="firmware" className="ai-section">
      <div className="ai-container">
        <div style={{maxWidth:'62ch'}}>
          <Reveal><Eyebrow>Firmware engineering</Eyebrow></Reveal>
          <Reveal delay={60}><h2 className="h-sec" style={{marginTop:18}}>Firmware is where hardware becomes intelligent.</h2></Reveal>
          <Reveal delay={120}><p className="sub-sec" style={{marginTop:20}}>Deterministic, low-level software written against the silicon — the layer that decides whether a product is reliable in the field or not.</p></Reveal>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:1,marginTop:48,background:'var(--ai-line)',border:'1px solid var(--ai-line)',borderRadius:2,overflow:'hidden'}} className="fw-grid">
          {FIRMWARE.map((f,i)=>(
            <Reveal key={f[0]} delay={(i%3)*60} style={{background:'var(--ai-black)'}}>
              <div className="card-hover" style={{padding:'30px 26px',height:'100%',background:'var(--ai-black)'}}>
                <span className="mono" style={{fontSize:12,color:'var(--ai-txt-3)',fontWeight:700}}>{String(i+1).padStart(2,'0')}</span>
                <h3 style={{fontSize:18,fontWeight:700,color:'#fff',margin:'12px 0 8px'}}>{f[0]}</h3>
                <p style={{fontSize:14,lineHeight:1.6,color:'var(--ai-txt-2)',margin:0}}>{f[1]}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={80}><div style={{marginTop:32}}><Button variant="primary" size="lg" className="btnfx" href="start.html">Get firmware support</Button></div></Reveal>
      </div>
      <style>{`@media(max-width:960px){.fw-grid{grid-template-columns:repeat(2,1fr)!important}}@media(max-width:600px){.fw-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

/* ---------------- CONNECTIVITY ---------------- */
function Connectivity(){
  const nodes=['BLE','Wi-Fi','LoRa','Wi-SUN','Sub-GHz','GSM/LTE','CAN','RS-485','UART','SPI','I²C'];
  return (
    <section id="connectivity" className="ai-section" style={{background:'var(--ai-black-2)',borderTop:'1px solid var(--ai-line)',borderBottom:'1px solid var(--ai-line)'}}>
      <div className="ai-container">
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:56,alignItems:'center'}} className="conn-grid">
          <div>
            <Reveal><Eyebrow>Connectivity & communication</Eyebrow></Reveal>
            <Reveal delay={60}><h2 className="h-sec" style={{marginTop:18,maxWidth:'16ch'}}>A connected technical ecosystem.</h2></Reveal>
            <Reveal delay={120}><p className="sub-sec" style={{marginTop:20}}>Wired and wireless communication engineered for industrial reliability — from a BLE link on a wearable to a Wi-SUN mesh across a city.</p></Reveal>
            <div style={{marginTop:28}}>
              {CONNECTIVITY.map((c,ci)=>(
                <Reveal key={c.g} delay={140+ci*80}>
                  <div style={{marginBottom:18}}>
                    <div style={{fontSize:11,fontWeight:700,letterSpacing:'1.4px',textTransform:'uppercase',color:'var(--copper-txt)',marginBottom:10}}>{c.g}</div>
                    <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
                      {c.items.map(it=>(<span key={it} style={{fontSize:13,fontWeight:600,color:'var(--ai-txt)',background:'var(--ai-panel)',border:'1px solid var(--ai-line-2)',borderRadius:2,padding:'7px 13px'}}>{it}</span>))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={120}><ConnDiagram nodes={nodes}/></Reveal>
        </div>
      </div>
      <style>{`@media(max-width:900px){.conn-grid{grid-template-columns:1fr!important;gap:40px!important}}`}</style>
    </section>
  );
}
function ConnDiagram({ nodes }){
  const cx=210,cy=210,R=160;
  return (
    <svg viewBox="0 0 420 420" width="100%" style={{maxWidth:440,margin:'0 auto',display:'block'}} aria-hidden="true">
      {nodes.map((n,i)=>{
        const ang=(i/nodes.length)*Math.PI*2 - Math.PI/2;
        const x=cx+Math.cos(ang)*R, y=cy+Math.sin(ang)*R;
        return <line key={'l'+i} x1={cx} y1={cy} x2={x} y2={y} stroke="var(--copper)" strokeWidth="1" strokeDasharray="3 5" opacity=".5" style={{animation:`traceflow ${5+i*0.3}s linear infinite`}}/>;
      })}
      <circle cx={cx} cy={cy} r="42" fill="#0a0b0e" stroke="var(--gold)" strokeWidth="1.5"/>
      <text x={cx} y={cy-4} textAnchor="middle" fill="#fff" fontSize="13" fontWeight="700" fontFamily="var(--font-family)">ANANTA</text>
      <text x={cx} y={cy+13} textAnchor="middle" fill="var(--gold)" fontSize="12" fontWeight="700" fontFamily="var(--font-family)">IONS</text>
      {nodes.map((n,i)=>{
        const ang=(i/nodes.length)*Math.PI*2 - Math.PI/2;
        const x=cx+Math.cos(ang)*R, y=cy+Math.sin(ang)*R;
        return (
          <g key={'n'+i}>
            <circle cx={x} cy={y} r="26" fill="var(--ai-panel)" stroke="var(--ai-line-2)" strokeWidth="1"/>
            <circle cx={x} cy={y} r="4" fill="var(--copper-txt)" style={{animation:`pulseGlow ${2.5+i*0.2}s ease-in-out infinite`}} transform={`translate(0 -14)`}/>
            <text x={x} y={y+4} textAnchor="middle" fill="var(--ai-txt)" fontSize="10" fontWeight="700" fontFamily="var(--font-family)">{n}</text>
          </g>
        );
      })}
    </svg>
  );
}

/* ---------------- INTELLIGENCE ---------------- */
function Intelligence(){
  return (
    <section id="intelligence" className="ai-section">
      <div className="ai-container">
        <Reveal><Eyebrow>Embedded intelligence</Eyebrow></Reveal>
        <Reveal delay={60}><h2 className="h-sec" style={{marginTop:18,maxWidth:'14ch'}}>Intelligence at the edge.</h2></Reveal>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20,marginTop:48}} className="grid-3">
          {INTELLIGENCE.map((it,i)=>(
            <Reveal key={it[1]} delay={(i%3)*60}>
              <DarkCard style={{height:'100%'}} corner={i%2? 'bottom-right':'top-left'}>
                <i className={it[0]} style={{fontSize:22,color:'var(--gold)'}}></i>
                <h3 style={{fontSize:18,fontWeight:700,color:'#fff',margin:'16px 0 8px'}}>{it[1]}</h3>
                <p style={{fontSize:14,lineHeight:1.6,color:'var(--ai-txt-2)',margin:0}}>{it[2]}</p>
              </DarkCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- INDUSTRIES ---------------- */
function Industries(){
  return (
    <section id="industries" className="ai-section" style={{background:'var(--ai-black-2)',borderTop:'1px solid var(--ai-line)',borderBottom:'1px solid var(--ai-line)'}}>
      <div className="ai-container">
        <Reveal><Eyebrow>Industrial applications</Eyebrow></Reveal>
        <Reveal delay={60}><h2 className="h-sec" style={{marginTop:18,maxWidth:'20ch'}}>Engineering that runs in the field.</h2></Reveal>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:1,marginTop:48,background:'var(--ai-line)',border:'1px solid var(--ai-line)',borderRadius:2,overflow:'hidden'}} className="grid-3">
          {INDUSTRIES.map((it,i)=>(
            <Reveal key={it[1]} delay={(i%3)*60} style={{background:'var(--ai-black-2)'}}>
              <div className="card-hover" style={{padding:'32px 26px',height:'100%',display:'flex',flexDirection:'column',gap:12,background:'var(--ai-black-2)'}}>
                <i className={it[0]} style={{fontSize:24,color:'var(--copper-txt)'}}></i>
                <h3 style={{fontSize:19,fontWeight:700,color:'#fff',margin:0}}>{it[1]}</h3>
                <p style={{fontSize:14,lineHeight:1.6,color:'var(--ai-txt-2)',margin:0}}>{it[2]}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROCESS ---------------- */
function Process(){
  return (
    <section id="process" className="ai-section">
      <div className="ai-container">
        <Reveal><Eyebrow>Engineering process</Eyebrow></Reveal>
        <Reveal delay={60}><h2 className="h-sec" style={{marginTop:18,maxWidth:'20ch'}}>How a project runs, from discovery to deploy.</h2></Reveal>
        <div style={{marginTop:52,display:'grid',gridTemplateColumns:'repeat(6,1fr)',gap:0}} className="proc-grid">
          {PROCESS.map((p,i,a)=>(
            <Reveal key={p[0]} delay={i*70} style={{position:'relative'}}>
              <div style={{padding:'0 18px 0 0'}}>
                <div style={{display:'flex',alignItems:'center',gap:0,marginBottom:20}}>
                  <span style={{width:12,height:12,background:'var(--gold)',flexShrink:0}}/>
                  <span style={{flex:1,height:1,background:i<a.length-1?'var(--copper)':'transparent'}}/>
                </div>
                <span className="mono" style={{fontSize:12,color:'var(--copper-txt)',fontWeight:700}}>{String(i+1).padStart(2,'0')}</span>
                <h3 style={{fontSize:18,fontWeight:700,color:'#fff',margin:'8px 0 10px'}}>{p[0]}</h3>
                <p style={{fontSize:13,lineHeight:1.55,color:'var(--ai-txt-2)',margin:0}}>{p[1]}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:960px){.proc-grid{grid-template-columns:repeat(2,1fr)!important;gap:32px 0!important}}@media(max-width:560px){.proc-grid{grid-template-columns:1fr!important}}`}</style>
    </section>
  );
}

/* ---------------- WHY ---------------- */
function Why(){
  return (
    <section id="about" className="ai-section" style={{background:'var(--ai-black-2)',borderTop:'1px solid var(--ai-line)',borderBottom:'1px solid var(--ai-line)'}}>
      <div className="ai-container">
        <Reveal><Eyebrow>Why ANANTA IONS</Eyebrow></Reveal>
        <Reveal delay={60}><h2 className="h-sec" style={{marginTop:18,maxWidth:'20ch'}}>Engineering quality over marketing claims.</h2></Reveal>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:20,marginTop:48}} className="grid-3">
          {WHY.map((w,i)=>(
            <Reveal key={w[0]} delay={(i%3)*60}>
              <div style={{padding:'26px 24px',background:'var(--ai-panel)',border:'1px solid var(--ai-line)',borderTop:'2px solid var(--gold)',borderRadius:2,height:'100%'}}>
                <h3 style={{fontSize:18,fontWeight:700,color:'#fff',margin:'0 0 10px'}}>{w[0]}</h3>
                <p style={{fontSize:14,lineHeight:1.6,color:'var(--ai-txt-2)',margin:0}}>{w[1]}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCTA(){
  return (
    <section style={{position:'relative',overflow:'hidden',background:'radial-gradient(1000px 600px at 50% -10%, rgba(212,175,55,.14), transparent 60%), var(--ai-black)'}}>
      <div className="ai-container" style={{padding:'128px 32px',textAlign:'center'}}>
        <Reveal><p className="eyebrow" style={{justifyContent:'center'}}>Silicon → Signal → Code → Intelligence → Real world</p></Reveal>
        <Reveal delay={80}><h2 style={{fontSize:'clamp(38px,6vw,72px)',fontWeight:700,lineHeight:1.03,letterSpacing:'-.03em',color:'#fff',margin:'24px 0 0'}}>Have a system to build?<br/><span style={{color:'var(--gold)'}}>Let's engineer it.</span></h2></Reveal>
        <Reveal delay={160}><div style={{display:'flex',gap:16,justifyContent:'center',marginTop:38,flexWrap:'wrap'}}>
          <Button variant="primary" size="lg" className="btnfx" href="start.html">Start a Project</Button>
          <Button variant="outline-on-dark" size="lg" className="btnfx" href="projects.html">Explore Projects</Button>
        </div></Reveal>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function SiteFooter(){
  const cols=[
    ['Explore',[['Home','index.html'],['Projects','projects.html'],['Services','services.html'],['About','about.html']]],
    ['Engineering',[['Firmware','services.html#firmware'],['Connectivity','services.html#connectivity'],['Intelligence','services.html#intelligence'],['Industries','about.html#industries']]],
    ['Company',[['About','about.html'],['Process','about.html#process'],['Start a Project','start.html'],['Contact','start.html']]],
  ];
  return (
    <footer style={{background:'var(--ai-black)',borderTop:'1px solid var(--ai-line)'}}>
      <div className="ai-container" style={{padding:'72px 32px 40px'}}>
        <div style={{display:'grid',gridTemplateColumns:'1.6fr 1fr 1fr 1fr',gap:40}} className="foot-grid">
          <div>
            <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:16}}>
              <img src={(window.__resources && window.__resources.logo) || "assets/logo.png"} width="26" height="26" alt="" style={{display:'block',flexShrink:0,objectFit:'contain'}}/>
              <span style={{fontSize:18,fontWeight:700,letterSpacing:'1.5px',color:'#fff'}}>ANANTA <span style={{color:'var(--gold)'}}>IONS</span></span>
            </div>
            <p style={{fontSize:14,lineHeight:1.6,color:'var(--ai-txt-2)',maxWidth:'34ch'}}>Engineering intelligence between silicon and the real world.</p>
            <div style={{marginTop:20}}><Button variant="primary" size="sm" className="btnfx" href="start.html">Start a Project</Button></div>
          </div>
          {cols.map(c=>(
            <div key={c[0]}>
              <h4 style={{fontSize:13,fontWeight:700,letterSpacing:'.4px',color:'#fff',margin:'0 0 16px',textTransform:'uppercase'}}>{c[0]}</h4>
              <ul style={{listStyle:'none',margin:0,padding:0,display:'flex',flexDirection:'column',gap:11}}>
                {c[1].map(l=>(<li key={l[0]}><a className="link-row" href={l[1]} style={{fontSize:14,color:'var(--ai-txt-2)'}}>{l[0]}</a></li>))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:16,marginTop:48,paddingTop:22,borderTop:'1px solid var(--ai-line)',flexWrap:'wrap'}}>
          <span style={{fontSize:11,color:'var(--ai-txt-3)',letterSpacing:'.5px',textTransform:'uppercase'}}>© 2026 ANANTA IONS · Placeholder site — contact & social links to be added</span>
          <div style={{display:'flex',gap:14}}>
            {['fa-brands fa-linkedin-in','fa-brands fa-github','fa-brands fa-x-twitter'].map(s=>(
              <a key={s} className="btnfx" href="#" style={{width:34,height:34,border:'1px solid var(--ai-line-2)',borderRadius:2,display:'inline-flex',alignItems:'center',justifyContent:'center',color:'var(--ai-txt-2)'}}><i className={s} style={{fontSize:14}}></i></a>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:820px){.foot-grid{grid-template-columns:1fr 1fr!important;gap:32px!important}}`}</style>
    </footer>
  );
}

Object.assign(window, { CustomEng, Firmware, Connectivity, Intelligence, Industries, Process, Why, FinalCTA, SiteFooter });
