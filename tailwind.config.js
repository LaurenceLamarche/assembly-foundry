module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'foundry': {
          'black': '#0a0a0a',
          'charcoal': '#141414',
          'graphite': '#1a1a1a',
          'steel': '#2a2a2a',
          'warm': '#8b7355',
          'gold': '#c9a46a',
          'cream': '#f5f0e8',
          'muted': '#9ca3af',
        }
      },
      fontFamily: {
        'display': ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        'body': ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      }
    },
  },
  plugins: [],
}
