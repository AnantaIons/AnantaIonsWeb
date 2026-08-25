const { Button } = window;

const STEPS = [
  { no:'01', label:'Discover', title:'Tell us about your idea', fields:[
    ['name','Name','text',true],['company','Company','text',false],['email','Email','email',true],['phone','Phone','text',false],
    ['description','Project description','area',true,'What are you trying to build? What problem does it solve?'],
    ['application','Application / industry','text',false,'e.g. Smart energy, industrial monitoring…'],
  ]},
  { no:'02', label:'Define', title:'Define hardware & connectivity', fields:[
    ['stage','Current project stage','select',false,'',['Idea','Prototype','Hardware ready','Firmware in progress','Field testing','Production']],
    ['platform','Target platform / MCU-MPU','text',false,'e.g. STM32, ESP32, Renesas RX, nRF52…'],
    ['sensors','Sensors / actuators','text',false,'e.g. current transformer, IMU, temperature…'],
    ['connectivity','Connectivity','text',false,'e.g. BLE, LoRa, Wi-SUN, CAN, RS-485…'],
    ['power','Power requirements','text',false,'e.g. battery, mains, energy-harvesting…'],
  ]},
  { no:'03', label:'Engineer', title:'Define firmware & intelligence', fields:[
    ['firmware','Firmware requirements','area',false,'Bare-metal, RTOS, bootloader, drivers, comms stack…'],
    ['intelligence','Intelligence / algorithms','area',false,'Signal processing, edge AI, anomaly/tamper detection…'],
    ['services','Required services','chips',false,'',['Firmware','Hardware bring-up','Debugging','Connectivity','Edge AI / TinyML','Documentation','Production support']],
  ]},
  { no:'04', label:'Deliver', title:'Production & delivery', fields:[
    ['quantity','Expected production quantity','text',false,'e.g. 10 prototypes, 5,000 units/yr…'],
    ['timeline','Timeline','select',false,'',['ASAP','1–3 months','3–6 months','6–12 months','Exploratory']],
    ['budget','Budget range','select',false,'',['Not sure yet','< $10k','$10k – $50k','$50k – $200k','$200k+']],
    ['docs','Documentation / production requirements','area',false,'Design docs, test reports, handover, compliance…'],
    ['file','Attach a file (schematic, spec, brief)','file',false],
  ]},
];

const fieldWrap = { display:'block', marginBottom:18 };
const labelSty = { display:'block', fontSize:13, fontWeight:700, color:'#fff', marginBottom:8, letterSpacing:'.2px' };
const reqStar = { color:'var(--copper-txt)', marginLeft:4 };
const inputSty = { width:'100%', padding:'12px 14px', background:'var(--ai-black)', border:'1px solid var(--ai-line-2)', borderRadius:2, color:'#fff', fontSize:15, fontFamily:'var(--font-family)', outline:'none', boxSizing:'border-box' };

function Field({ f, value, onChange }){
  const [id,label,type,req,ph,opts] = f;
  const onFocus = e => e.target.style.borderColor='var(--gold)';
  const onBlur = e => e.target.style.borderColor='var(--ai-line-2)';
  return (
    <label style={fieldWrap}>
      <span style={labelSty}>{label}{req && <span style={reqStar}>*</span>}</span>
      {type==='area' && <textarea rows={3} placeholder={ph} value={value||''} onChange={e=>onChange(id,e.target.value)} onFocus={onFocus} onBlur={onBlur} style={{...inputSty,resize:'vertical',minHeight:84}}/>}
      {type==='select' && <select value={value||''} onChange={e=>onChange(id,e.target.value)} onFocus={onFocus} onBlur={onBlur} style={{...inputSty,appearance:'none',cursor:'pointer'}}><option value="" disabled>Select…</option>{opts.map(o=><option key={o} value={o}>{o}</option>)}</select>}
      {type==='file' && <div style={{...inputSty,display:'flex',alignItems:'center',gap:12,cursor:'pointer',color:'var(--ai-txt-3)'}} onClick={e=>e.currentTarget.querySelector('input').click()}><i className="fa-solid fa-paperclip"></i><span>{value||'Choose a file…'}</span><input type="file" style={{display:'none'}} onChange={e=>onChange(id,e.target.files[0]?.name)}/></div>}
      {type==='chips' && <div style={{display:'flex',flexWrap:'wrap',gap:8}}>{opts.map(o=>{const on=(value||[]).includes(o);return <span key={o} onClick={()=>{const cur=value||[];onChange(id,on?cur.filter(x=>x!==o):[...cur,o]);}} style={{fontSize:13,fontWeight:600,padding:'8px 14px',borderRadius:2,cursor:'pointer',color:on?'#000':'var(--ai-txt-2)',background:on?'var(--gold)':'transparent',border:`1px solid ${on?'var(--gold)':'var(--ai-line-2)'}`}}>{o}</span>;})}</div>}
      {(type==='text'||type==='email') && <input type={type} placeholder={ph} value={value||''} onChange={e=>onChange(id,e.target.value)} onFocus={onFocus} onBlur={onBlur} style={inputSty}/>}
    </label>
  );
}

function StartProject({ open=true, onClose, inline=false }){
  const [step,setStep] = React.useState(0);
  const [data,setData] = React.useState({});
  const [done,setDone] = React.useState(false);
  const [err,setErr] = React.useState('');
  React.useEffect(()=>{ if(inline) return; document.body.style.overflow = open?'hidden':''; if(open){setStep(0);setDone(false);setErr('');} },[open,inline]);
  if(!inline && !open) return null;
  const set = (k,v)=>setData(d=>({...d,[k]:v}));
  const cur = STEPS[step];
  const validate = ()=>{ for(const f of cur.fields){ if(f[3] && !data[f[0]]){ setErr(`${f[1]} is required.`); return false; } } setErr(''); return true; };
  const next = ()=>{ if(!validate()) return; if(step<STEPS.length-1) setStep(step+1); else setDone(true); };

  const card = (
      <div onClick={e=>e.stopPropagation()} style={{width:'100%',maxWidth:720,margin:inline?'0 auto':undefined,background:'var(--ai-panel)',border:'1px solid var(--ai-line-2)',borderRadius:2,position:'relative'}}>
        <span aria-hidden="true" style={{position:'absolute',top:0,left:0,width:12,height:12,background:'var(--gold)'}}/>
        {!inline && <button onClick={onClose} aria-label="Close" style={{position:'absolute',top:16,right:16,background:'none',border:'none',color:'var(--ai-txt-2)',fontSize:20,cursor:'pointer',zIndex:2}}><i className="fa-solid fa-xmark"></i></button>}
        {done ? (
          <div style={{padding:'72px 40px',textAlign:'center'}}>
            <div style={{width:64,height:64,margin:'0 auto 24px',border:'2px solid var(--gold)',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center'}}><i className="fa-solid fa-check" style={{color:'var(--gold)',fontSize:26}}></i></div>
            <h3 style={{fontSize:26,fontWeight:700,color:'#fff',margin:'0 0 12px'}}>Your engineering requirement has been received.</h3>
            <p style={{fontSize:15,lineHeight:1.6,color:'var(--ai-txt-2)',maxWidth:'46ch',margin:'0 auto 28px'}}>Thank you{data.name?`, ${data.name}`:''}. An ANANTA IONS engineer will review your requirement and respond shortly. <span style={{color:'var(--ai-txt-3)'}}>(Demo — this form does not submit anywhere yet.)</span></p>
            <Button variant="primary" className="btnfx" onClick={onClose}>Close</Button>
          </div>
        ) : (
          <div style={{padding:'40px'}}>
            <div style={{fontSize:11,fontWeight:700,letterSpacing:'1.6px',textTransform:'uppercase',color:'var(--copper-txt)'}}>Let's engineer your requirement</div>
            <div style={{display:'flex',gap:0,margin:'22px 0 30px',flexWrap:'wrap'}}>
              {STEPS.map((s,i)=>{
                const on=i===step, past=i<step;
                return (
                  <div key={s.no} onClick={()=>i<=step&&setStep(i)} style={{display:'flex',alignItems:'center',gap:10,flex:1,minWidth:120,cursor:i<=step?'pointer':'default'}}>
                    <span className="step-num" style={{width:30,height:30,borderRadius:'50%',display:'inline-flex',alignItems:'center',justifyContent:'center',fontSize:12,fontWeight:700,flexShrink:0,color:on||past?'#000':'var(--ai-txt-3)',background:on||past?'var(--gold)':'transparent',border:`1px solid ${on||past?'var(--gold)':'var(--ai-line-2)'}`}}>{past?<i className="fa-solid fa-check" style={{fontSize:11}}></i>:s.no}</span>
                    <span style={{fontSize:12,fontWeight:700,letterSpacing:'.4px',textTransform:'uppercase',color:on?'#fff':'var(--ai-txt-3)'}}>{s.label}</span>
                    {i<STEPS.length-1 && <span style={{flex:1,height:1,background:past?'var(--gold)':'var(--ai-line)',minWidth:10}}/>}
                  </div>
                );
              })}
            </div>
            <h3 style={{fontSize:23,fontWeight:700,color:'#fff',margin:'0 0 24px',letterSpacing:'-.01em'}}>{cur.title}</h3>
            <div style={{display:'grid',gridTemplateColumns: cur.fields.length>4?'1fr 1fr':'1fr',gap:'0 20px'}} className="form-grid">
              {cur.fields.map(f=><Field key={f[0]} f={f} value={data[f[0]]} onChange={set}/>)}
            </div>
            {err && <div style={{fontSize:13,color:'var(--color-error)',marginBottom:14}}><i className="fa-solid fa-circle-exclamation" style={{marginRight:6}}></i>{err}</div>}
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:14,paddingTop:22,borderTop:'1px solid var(--ai-line)'}}>
              <span style={{fontSize:12,color:'var(--ai-txt-3)'}}>Step {step+1} of {STEPS.length}</span>
              <div style={{display:'flex',gap:12}}>
                {step>0 && <Button variant="outline-on-dark" size="md" className="btnfx" onClick={()=>setStep(step-1)}>Back</Button>}
                <Button variant="primary" size="md" className="btnfx" onClick={next}>{step<STEPS.length-1?'Continue':'Submit Engineering Requirement'}</Button>
              </div>
            </div>
          </div>
        )}
        <style>{`@media(max-width:560px){.form-grid{grid-template-columns:1fr!important}}`}</style>
      </div>
  );
  if(inline) return card;
  return (
    <div role="dialog" aria-modal="true" onClick={onClose} style={{position:'fixed',inset:0,zIndex:100,background:'rgba(3,3,4,.82)',backdropFilter:'blur(6px)',display:'flex',alignItems:'flex-start',justifyContent:'center',overflowY:'auto',padding:'40px 20px'}}>
      {card}
    </div>
  );
}

Object.assign(window, { StartProject });
