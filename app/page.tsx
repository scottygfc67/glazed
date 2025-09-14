import Announcement from '@/components/nav/Announcement'
import Navbar from '@/components/nav/Navbar'
import Hero from '@/components/hero/Hero'
import { FeatureRow } from '@/components/sections/FeatureRow'
import Marquee from '@/components/sections/Marquee'
import ProductSpotlight from '@/components/sections/ProductSpotlight'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Announcement />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <ProductSpotlight />
        <FeatureRow 
          title="Rain‑glow, fast" 
          copy="An advanced hydration serum that lights skin & scalp with instant opalescence." 
          img="/land1.png" 
        />
        <FeatureRow 
          reverse 
          title="Honey‑sweet science" 
          copy="Derm‑tested, pH‑balanced and cruelty‑free. Powered by ceramides and honey sugars." 
          img="/land2.jpeg" 
        />
      </main>
      <Footer />
    </>
  )
}