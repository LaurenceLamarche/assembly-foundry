'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-foundry-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(201,164,106,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(201,164,106,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-foundry-gold/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-foundry-warm/5 rounded-full blur-[80px]" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 text-foundry-gold mb-6">
            <Calendar className="w-5 h-5" />
            <span className="font-display">Limited spots available</span>
          </span>
          
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Ready to build something<br />
            <span className="text-gradient">that actually works?</span>
          </h2>
          
          <p className="text-foundry-muted text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Let's talk about what you're dealing with and whether Assembly is the right fit. 
            No pitch decks. No pressure. Just a real conversation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/lola-aligned-systems/assembly-discovery"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-foundry-gold text-foundry-black font-display font-semibold rounded-lg hover:bg-foundry-warm transition-all duration-300"
            >
              Book a discovery call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="mailto:lola@aligned-systems.ai"
              className="inline-flex items-center justify-center px-8 py-4 bg-foundry-steel/50 text-foundry-cream font-display font-semibold rounded-lg border border-foundry-steel hover:border-foundry-gold/50 transition-all duration-300"
            >
              Email us instead
            </a>
          </div>
          
          <p className="text-foundry-muted text-sm mt-8">
            Response time: Usually same day, always within 24 hours.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
