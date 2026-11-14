/* global React */
(function(){
const { HeroChapter, Card, StatCallout, CtaStrip, Button } = window.AnantaIonsDesignSystem_e44e3f;

function HomeScreen({ onNavigate }) {
  const P = window.KitPlaceholder, Section = window.KitSection, Head = window.KitSectionHead;
  const features = [
    { icon: 'fa-solid fa-brain', title: 'Agentic AI', description: 'Build and orchestrate autonomous agents on optimized inference infrastructure.' },
    { icon: 'fa-solid fa-database', title: 'Data science', description: 'Accelerate the full pipeline from ingestion to feature engineering at scale.' },
    { icon: 'fa-solid fa-bolt', title: 'Inference', description: 'Serve models at the lowest latency and cost across cloud and edge.' },
    { icon: 'fa-solid fa-comments', title: 'Conversational AI', description: 'Deploy speech and language systems engineered for real-time response.' },
  ];
  const resources = [
    { badge: 'White paper', title: 'Scaling inference across the edge', description: 'A technical walkthrough of distributed serving under strict latency budgets.' },
    { badge: 'Webinar', title: 'Training at trillion-parameter scale', description: 'Architecture patterns for large-model training on end-to-end fabric.' },
    { badge: 'Blog', title: 'Inside the accelerator microarchitecture', description: 'How the AI-100 pipeline reaches 4× throughput per watt.' },
  ];

  return (
    <div>
      <HeroChapter
        eyebrow="Platform"
        headline="Accelerated computing for every industry"
        subhead="Build, train, and deploy at scale on infrastructure engineered end to end."
        primaryCta="Get started"
        secondaryCta="Watch the film"
        onPrimary={() => onNavigate('Resources')}
      />

      <Section>
        <Head eyebrow="Platform" title="Explore the platform" sub="One architecture spanning training, inference, and data science — from the data center to the edge." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
          {features.map((f) => <Card key={f.title} variant="feature" {...f} action="" />)}
        </div>
      </Section>

      <Section soft>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px' }}>
          <StatCallout value="4×" caption="faster training throughput vs. the prior generation" cornerSquare />
          <StatCallout value="60%" caption="lower cost per inference at production scale" cornerSquare />
          <StatCallout value="30ms" caption="median end-to-end serving latency at the edge" cornerSquare />
        </div>
      </Section>

      <Section>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '32px' }}>
          <Head eyebrow="Resources" title="Latest in AI" />
          <Button variant="outline" onClick={() => onNavigate('Resources')}>View all resources</Button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {resources.map((r) => (
            <Card key={r.title} variant="resource" {...r} action="Read more"
              imageNode={<P ratio="3 / 2" label="Editorial image" icon="fa-solid fa-newspaper" />} />
          ))}
        </div>
      </Section>

      <CtaStrip headline="Ready to build on accelerated infrastructure?" cta="Contact sales" />
    </div>
  );
}
Object.assign(window, { HomeScreen });
})();
