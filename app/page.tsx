import Hero from './sections/Hero'
import Problem from './sections/Problem'
import Solution from './sections/Solution'
import HowItWorks from './sections/HowItWorks'
import Pricing from './sections/Pricing'
import FAQ from './sections/FAQ'
import CTA from './sections/CTA'
import Footer from './sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
