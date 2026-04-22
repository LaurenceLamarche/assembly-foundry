'use client'

import { motion } from 'framer-motion'
import { Clock, Bot, AlertCircle } from 'lucide-react'

const problems = [
  {
    icon: Clock,
    title: 'Your team is drowning',
    description: 'Endless tickets, repetitive questions, manual follow-ups. Your best people are stuck doing work that doesn\'t scale.'
  },
  {
    icon: Bot,
    title: 'Chatbots are disappointing',
    description: 'Generic AI that sounds like everyone else. Can\'t handle nuance. Breaks when things get complex. Customers hate it.'
  },
  {
    icon: AlertCircle,
    title: 'No one owns the outcome',
    description: 'Agencies sell you a setup. SaaS tools leave you to figure it out. Where\'s the partner who actually makes it work?'
  }
]

export default function Problem() {
  return (
    <section className="py-24 md:py-32 bg-foundry-charcoal">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-foundry-gold font-display text-sm tracking-wider uppercase">The Reality</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4">
            Your AI should work harder than you do.
            <br />
            <span className="text-foundry-muted">Right now, it doesn't.</span>
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-foundry-graphite border border-foundry-steel hover:border-foundry-gold/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-foundry-gold/10 flex items-center justify-center mb-6">
                <problem.icon className="w-6 h-6 text-foundry-gold" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{problem.title}</h3>
              <p className="text-foundry-muted leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
