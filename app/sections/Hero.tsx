'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(201,164,106,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(201,164,106,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Gradient Orb */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-foundry-gold/5 rounded-full blur-[120px] animate-pulse-slow" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foundry-steel/50 border border-foundry-gold/20 text-foundry-gold text-sm mb-8">
            <Sparkles className="w-4 h-4" />
            <span>Now accepting new clients</span>
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="text-gradient animate-gradient">Assembly</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-foundry-muted max-w-3xl mx-auto mb-4"
        >
          Custom AI agents built for businesses that refuse to settle for generic.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-foundry-warm text-lg mb-12"
        >
          From $10K • Hardware included • Fully managed
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#pricing"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-foundry-gold text-foundry-black font-display font-semibold rounded-lg hover:bg-foundry-warm transition-all duration-300"
          >
            Start your project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center px-8 py-4 bg-foundry-steel/50 text-foundry-cream font-display font-semibold rounded-lg border border-foundry-steel hover:border-foundry-gold/50 transition-all duration-300"
          >
            See how it works
          </a>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-foundry-steel rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-foundry-gold rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}
