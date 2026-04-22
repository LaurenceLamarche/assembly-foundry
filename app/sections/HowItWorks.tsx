'use client'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Deep-dive into your workflows, pain points, and what "done" looks like. We map the full scope before writing a line of code.'
  },
  {
    number: '02',
    title: 'Architecture',
    description: 'Design the agent system, integrations, and data flow. You approve the blueprint before we build.'
  },
  {
    number: '03',
    title: 'Development',
    description: 'We build in sprints with weekly demos. Transparent, collaborative, no surprises.'
  },
  {
    number: '04',
    title: 'Deployment',
    description: "Hardware provisioned, agents deployed, monitoring active. We handle the infra so you don't have to.",
  },
  {
    number: '05',
    title: 'Handoff & Warranty',
    description: 'Training, documentation, 60 days of support. Optional retainers for continuous improvement.'
  }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-foundry-charcoal">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-foundry-gold font-display text-sm tracking-wider uppercase">The Process</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4">
            How we work
          </h2>
        </div>
        
        <div className="space-y-0">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="relative flex gap-8 py-8 border-b border-foundry-steel last:border-b-0"
            >
              <div className="shrink-0 w-16">
                <span className="font-display text-4xl font-bold text-foundry-gold/30">{step.number}</span>
              </div>
              <div className="flex-1 pt-2">
                <h3 className="font-display text-2xl font-semibold mb-2">{step.title}</h3>
                <p className="text-foundry-muted text-lg leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
