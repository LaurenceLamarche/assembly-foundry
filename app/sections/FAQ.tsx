'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What kinds of agents can you build?',
    answer: 'Honestly? Almost anything. Customer support agents that integrate with your helpdesk, sales agents that qualify leads and book meetings, operations agents that process documents and update CRMs, internal agents that answer employee questions from your knowledge base. If it involves language + logic + integrations, we can build it.'
  },
  {
    question: 'Why do you include hardware?',
    answer: 'Because reliability matters. When your agent runs on shared cloud infrastructure, you\'re battling for resources with thousands of other users. Our dedicated Mac Mini setup means predictable performance, better data security, and no surprise bills from usage spikes. Plus, we handle all the DevOps so you don\'t have to.'
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Foundation projects: 4-6 weeks. Growth projects: 8-12 weeks. Enterprise: 12-16 weeks minimum. We work in sprints with weekly check-ins, so you\'re never in the dark about progress.'
  },
  {
    question: 'What if we need changes after launch?',
    answer: 'Every project includes a 60-day warranty period where we fix bugs and make adjustments at no extra cost. After that, you can either pay per-change or enroll in a monthly retainer for continuous improvement and new features.'
  },
  {
    question: 'Do we own the code?',
    answer: 'Absolutely. Once the project is paid in full, you own everything — source code, configurations, documentation, trained models (where applicable). We\'re your builder, not your gatekeeper. You can take it in-house, hire someone else, whatever works for you.'
  },
  {
    question: 'What infrastructure do you use?',
    answer: 'We provision dedicated Mac Minis in our secure facility for most workloads. For larger deployments, we use clusters with proper load balancing and redundancy. All systems are monitored 24/7 with automated alerts.'
  },
  {
    question: 'Can this integrate with our existing tools?',
    answer: 'Yes — we specialize in integrations. Whether it\'s Salesforce, HubSpot, Zendesk, Slack, your custom database, or some obscure internal tool, we\'ll make your agent talk to it.'
  },
  {
    question: 'What makes you different from other AI agencies?',
    answer: 'Three things: (1) We actually build from scratch — no templates, no white-labeled SaaS with your logo. (2) We include hardware and ongoing ops, not just code. (3) We\'re operators first — Lola and Seb have built and run actual businesses, so we understand the real-world stakes.'
  }
]

function FAQItem({ faq, isOpen, onClick }: { faq: typeof faqs[0], isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border-b border-foundry-steel last:border-b-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 text-left"
      >
        <span className="font-display text-lg font-semibold pr-8">{faq.question}</span>
        <ChevronDown className={`w-5 h-5 text-foundry-gold shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="pb-6 text-foundry-muted leading-relaxed">{faq.answer}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 md:py-32 bg-foundry-charcoal">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-foundry-gold font-display text-sm tracking-wider uppercase">FAQ</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4">
            Questions? Answered.
          </h2>
        </div>
        
        <div className="bg-foundry-graphite rounded-2xl p-8 border border-foundry-steel">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
