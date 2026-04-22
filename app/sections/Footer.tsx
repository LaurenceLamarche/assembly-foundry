'use client'

import { Bot } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-12 bg-foundry-charcoal border-t border-foundry-steel">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-foundry-gold/10 flex items-center justify-center">
              <Bot className="w-5 h-5 text-foundry-gold" />
            </div>
            <div>
              <span className="font-display font-bold text-foundry-cream">Assembly</span>
              <span className="text-foundry-muted text-sm ml-2">by Aligned Systems</span>
            </div>
          </div>
          
          <div className="flex items-center gap-8 text-foundry-muted text-sm">
            <a href="mailto:lola@aligned-systems.ai" className="hover:text-foundry-gold transition-colors">
              lola@aligned-systems.ai
            </a>
            <span>•</span>
            <span>Toronto, Canada</span>
          </div>
          
          <div className="text-foundry-muted text-sm">
            © 2026 Assembly. Built with intention.
          </div>
        </div>
      </div>
    </footer>
  )
}
