'use client'

import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(201,164,106,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(201,164,106,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Gradient Orb */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-foundry-gold/5 rounded-full blur-[120px] animate-pulse-slow" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="animate-fade-in-up" style={{ animationDelay: '0ms' }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foundry-steel/50 border border-foundry-gold/20 text-foundry-gold text-sm mb-8">
            <Sparkles className="w-4 h-4" />
            <span>Now accepting new clients</span>
          </div>
        </div>
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <span className="text-gradient animate-gradient">Assembly</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-foundry-muted max-w-3xl mx-auto mb-4 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          Custom AI agents built for businesses that refuse to settle for generic.
        </p>
        
        <p className="text-foundry-warm text-lg mb-12 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          From $10K • Hardware included • Fully managed
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
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
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
        <div className="w-6 h-10 border-2 border-foundry-steel rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-foundry-gold rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
