import Announcement from '@/components/nav/Announcement'
import Navbar from '@/components/nav/Navbar'
import Hero from '@/components/hero/Hero'
import { FeatureRow } from '@/components/sections/FeatureRow'
import Marquee from '@/components/sections/Marquee'
import ProductCard from '@/components/product/Card'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Announcement />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <FeatureRow 
          title="Rain‑glow, fast" 
          copy="An advanced hydration serum that lights skin & scalp with instant opalescence." 
          img="/grainy.jpg" 
        />
        <FeatureRow 
          reverse 
          title="Honey‑sweet science" 
          copy="Derm‑tested, pH‑balanced and cruelty‑free. Powered by ceramides and honey sugars." 
          img="/grainy.jpg" 
        />
        <section className="container py-24">
          <div className="flex items-end justify-between mb-8">
            <h2 className="h2 text-ink">Best sellers</h2>
            <a 
              href="/shop" 
              className="text-brand-700 font-medium hover:text-brand-800 transition-colors"
            >
              Shop all →
            </a>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <ProductCard key={i} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}