/* global React */
(function(){
const { Breadcrumb, PillTab, Card, SearchInput, Button } = window.AnantaIonsDesignSystem_e44e3f;

function ResourcesScreen() {
  const P = window.KitPlaceholder, Section = window.KitSection, Head = window.KitSectionHead;
  const [filter, setFilter] = React.useState('All');
  const all = [
    { badge: 'White paper', type: 'White paper', title: 'Scaling inference across the edge', description: 'Distributed model serving under strict latency budgets.', icon: 'fa-solid fa-file-lines' },
    { badge: 'Webinar', type: 'Webinar', title: 'Training at trillion-parameter scale', description: 'Architecture patterns for large-model training.', icon: 'fa-solid fa-video' },
    { badge: 'Blog', type: 'Blog', title: 'Inside the accelerator microarchitecture', description: 'How the AI-100 pipeline reaches 4× throughput per watt.', icon: 'fa-solid fa-newspaper' },
    { badge: 'White paper', type: 'White paper', title: 'A reference fabric for HPC', description: 'Networking topologies for tightly-coupled workloads.', icon: 'fa-solid fa-file-lines' },
    { badge: 'Webinar', type: 'Webinar', title: 'Deploying agents in production', description: 'Orchestration, guardrails, and cost control for agentic systems.', icon: 'fa-solid fa-video' },
    { badge: 'Blog', type: 'Blog', title: 'The economics of inference', description: 'Where cost hides in a serving stack, and how to remove it.', icon: 'fa-solid fa-newspaper' },
  ];
  const tabs = ['All', 'White paper', 'Webinar', 'Blog'];
  const shown = filter === 'All' ? all : all.filter((r) => r.type === filter);

  return (
    <div>
      <Breadcrumb items={['Resources', 'Library']} />
      <Section>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
          <Head eyebrow="Resources" title="Resource library" sub="White papers, webinars, and engineering notes from the Ananta Ions platform team." />
          <div style={{ width: '320px', maxWidth: '100%' }}><SearchInput placeholder="Search resources" /></div>
        </div>
        <div style={{ display: 'flex', gap: '10px', margin: '8px 0 32px', flexWrap: 'wrap' }}>
          {tabs.map((t) => <PillTab key={t} active={filter === t} onClick={() => setFilter(t)}>{t}</PillTab>)}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {shown.map((r) => (
            <Card key={r.title} variant="resource" badge={r.badge} title={r.title} description={r.description} action="Read more"
              imageNode={<P ratio="3 / 2" label={r.type} icon={r.icon} />} />
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '48px' }}>
          <Button variant="outline">Load more</Button>
        </div>
      </Section>
    </div>
  );
}
Object.assign(window, { ResourcesScreen });
})();
