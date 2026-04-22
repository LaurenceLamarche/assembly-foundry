'use client'

import { Cpu, Shield, Zap, Wrench } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Truly Custom',
    description: 'Not templates. Not prompts we tweak. Agents built from scratch for your workflows, your voice, your edge cases.'
  },
  {
    icon: Cpu,
    title: 'Hardware Included',
    description: 'We provision dedicated Mac Mini infrastructure, set up in our facility, fully managed. You get enterprise-grade reliability without the headache.'
  },
  {
    icon: Shield,
    title: 'Full Ownership',
    description: 'No black boxes. You own the code, the config, the data. We&apos;re your technical partner, not a gatekeeper.'
  },
  {
    icon: Wrench,
    title: 'Ongoing Partnership',
    description: '60-day warranty included. Optional retainers for continuous optimization. We grow with you.'
  }
]

export default function Solution() {
  return (
    <section className="py-24 md:py-32 bg-foundry-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-foundry-gold font-display text-sm tracking-wider uppercase">Our Approach</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4">
            Built different. Managed completely.
          </h2>
          <p className="text-foundry-muted text-lg mt-4 max-w-2xl mx-auto">
            We&apos;re not a SaaS company masquerading as a service. We&apos;re builders who happen to be obsessive about operations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl bg-foundry-charcoal border border-foundry-steel hover:border-foundry-gold/40 hover:bg-foundry-graphite transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-xl bg-foundry-gold/10 flex items-center justify-center shrink-0 group-hover:bg-foundry-gold/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-foundry-gold" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-foundry-muted leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
