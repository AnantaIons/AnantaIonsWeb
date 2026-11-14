/* global React */
(function(){
const { Breadcrumb, SubNav, StatCallout, CtaStrip, Button, Card } = window.AnantaIonsDesignSystem_e44e3f;

function SolutionsScreen() {
  const P = window.KitPlaceholder, Section = window.KitSection, Head = window.KitSectionHead;
  const [tab, setTab] = React.useState('Overview');
  return (
    <div>
      <Breadcrumb items={['Industries', 'Healthcare & life sciences', 'Drug discovery']} />
      <SubNav items={['Overview', 'Drug discovery', 'Medical imaging', 'Genomics', 'Patient care']} active={tab} onSelect={setTab} />

      {/* Dark chapter intro */}
      <section style={{ background: 'var(--color-surface-dark)', color: 'var(--color-on-dark)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '80px 24px', display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '48px', alignItems: 'center' }}>
          <div style={{ position: 'relative', paddingLeft: '20px' }}>
            <span aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, width: 16, height: 16, background: 'var(--color-primary)' }}></span>
            <div style={{ fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.5px', color: 'var(--color-primary)', marginBottom: '16px' }}>Healthcare & life sciences</div>
            <h1 style={{ margin: 0, fontSize: '48px', fontWeight: 700, lineHeight: 1.25 }}>Accelerating drug discovery</h1>
            <p style={{ margin: '16px 0 32px', fontSize: '22px', fontWeight: 400, lineHeight: 1.4, color: 'var(--color-on-dark-mute)' }}>Screen billions of candidate molecules in silico and compress research timelines from years to weeks.</p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <Button variant="primary" size="lg">Talk to an expert</Button>
              <Button variant="outline-on-dark" size="lg">Read the docs</Button>
            </div>
          </div>
          <P ratio="4 / 3" label="Life-sciences render" icon="fa-solid fa-dna" dark />
        </div>
      </section>

      {/* Long-form body: 60/40 */}
      <Section>
        <div style={{ display: 'grid', gridTemplateColumns: '60% 40%', gap: '48px', alignItems: 'start' }}>
          <div>
            <Head eyebrow="Overview" title="A platform built for computational biology" />
            <p style={{ fontSize: '16px', lineHeight: 1.5, color: 'var(--color-body)' }}>Modern therapeutic pipelines are bound by the cost of exploration. Ananta Ions couples accelerated molecular simulation with generative models so research teams can prioritize the few candidates worth synthesizing — and abandon the rest before a single assay is run.</p>
            <p style={{ fontSize: '16px', lineHeight: 1.5, color: 'var(--color-body)' }}>The same infrastructure that trains foundation models for language now folds proteins, docks ligands, and predicts binding affinity. Read the <a href="#" style={{ color: 'var(--color-link)', textDecoration: 'underline' }}>reference architecture</a> for deployment patterns across on-premises and cloud fabric.</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '32px' }}>
              <StatCallout value="1B+" caption="candidate molecules screened per run" />
              <StatCallout value="12×" caption="reduction in time-to-lead" />
            </div>
          </div>
          <aside style={{ background: 'var(--color-surface-soft)', border: '1px solid var(--color-hairline)', borderRadius: 'var(--radius-sm)', padding: '32px', position: 'relative' }}>
            <span aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, width: 12, height: 12, background: 'var(--color-primary)' }}></span>
            <h3 style={{ margin: '0 0 16px', fontSize: '18px', fontWeight: 700, color: 'var(--color-ink)' }}>On this page</h3>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Overview', 'Reference architecture', 'Case studies', 'Get started'].map((l) => (
                <li key={l}><a href="#" style={{ fontSize: '15px', color: 'var(--color-link)', textDecoration: 'none' }}>{l}</a></li>
              ))}
            </ul>
          </aside>
        </div>
      </Section>

      <Section soft>
        <Head eyebrow="Capabilities" title="Across the discovery pipeline" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          <Card variant="feature" icon="fa-solid fa-atom" title="Molecular simulation" description="GPU-accelerated docking and molecular dynamics at unprecedented scale." action="" />
          <Card variant="feature" icon="fa-solid fa-diagram-project" title="Generative design" description="Propose novel, synthesizable structures conditioned on target properties." action="" />
          <Card variant="feature" icon="fa-solid fa-microscope" title="Predictive assays" description="Estimate binding affinity and toxicity before wet-lab validation." action="" />
        </div>
      </Section>

      <CtaStrip headline="Bring accelerated discovery to your lab" cta="Talk to an expert" />
    </div>
  );
}
Object.assign(window, { SolutionsScreen });
})();
