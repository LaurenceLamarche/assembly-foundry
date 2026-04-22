'use client'

import { Check, ArrowRight, Server } from 'lucide-react'

const tiers = [
  {
    name: 'Foundation',
    price: '$10,000',
    description: 'Single-purpose agent for one core workflow',
    features: [
      '1 custom AI agent',
      'Up to 3 integrations',
      'Dedicated Mac Mini hardware',
      '60-day warranty & support',
      'Initial training session',
      'Technical documentation'
    ],
    cta: 'Start with Foundation',
    popular: false
  },
  {
    name: 'Growth',
    price: '$25,000',
    description: 'Multi-agent system for complex operations',
    features: [
      'Up to 3 integrated agents',
      'Unlimited integrations',
      'Premium Mac Mini setup',
      '6 months priority support',
      'Monthly optimization reviews',
      'Custom dashboard',
      'WhatsApp/Slack alerts',
      'API access for your team'
    ],
    cta: 'Build with Growth',
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$50,000+',
    description: 'Fully customized platform for scale',
    features: [
      'Unlimited agent ecosystem',
      'Multi-tenant architecture',
      'Clustered infrastructure',
      'Dedicated Slack channel',
      'Quarterly strategy sessions',
      'Custom model training',
      'SLA guarantees',
      'White-label options'
    ],
    cta: 'Discuss Enterprise',
    popular: false
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-foundry-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-foundry-gold font-display text-sm tracking-wider uppercase">Investment</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4">
            Clear pricing. Real outcomes.
          </h2>
          <p className="text-foundry-muted text-lg mt-4 max-w-2xl mx-auto">
            All tiers include hardware, hosting, and our commitment to making it work.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-8 ${
                tier.popular
                  ? 'bg-foundry-gold text-foundry-black'
                  : 'bg-foundry-charcoal border border-foundry-steel'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-foundry-black text-foundry-gold text-sm font-display font-semibold">
                    <Server className="w-4 h-4" />
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-6">
                <h3 className={`font-display text-xl font-semibold mb-2 ${tier.popular ? 'text-foundry-black' : 'text-foundry-cream'}`}>
                  {tier.name}
                </h3>
                <p className={`text-sm ${tier.popular ? 'text-foundry-black/70' : 'text-foundry-muted'}`}>
                  {tier.description}
                </p>
              </div>
              
              <div className="mb-8">
                <span className={`font-display text-4xl font-bold ${tier.popular ? 'text-foundry-black' : 'text-foundry-cream'}`}>
                  {tier.price}
                </span>
                <span className={tier.popular ? 'text-foundry-black/70' : 'text-foundry-muted'}>
                  {' '}+ monthly hosting
                </span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 mt-0.5 ${tier.popular ? 'text-foundry-black' : 'text-foundry-gold'}`} />
                    <span className={tier.popular ? 'text-foundry-black/90' : 'text-foundry-cream'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <a
                href="#contact"
                className={`group w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg font-display font-semibold transition-all duration-300 ${
                  tier.popular
                    ? 'bg-foundry-black text-foundry-gold hover:bg-foundry-graphite'
                    : 'bg-foundry-gold text-foundry-black hover:bg-foundry-warm'
                }`}
              >
                {tier.cta}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-foundry-muted">
            Monthly hosting: $297 (Foundation) / $597 (Growth) / Custom (Enterprise)
          </p>
          <p className="text-foundry-muted text-sm mt-2">
            Covers hardware maintenance, monitoring, security updates, and 99.9% uptime SLA.
          </p>
        </div>
      </div>
    </section>
  )
}
