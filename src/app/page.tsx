import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Benefits from '@/components/Benefits'
import Pricing from '@/components/Pricing'
import Security from '@/components/Security'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Benefits />
        <Pricing />
        <Security />
      </main>
      <Footer />
    </>
  )
}
