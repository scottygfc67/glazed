import Announcement from '@/components/nav/Announcement'
import Navbar from '@/components/nav/Navbar'
import Hero from '@/components/hero/Hero'
import { FeatureRow } from '@/components/sections/FeatureRow'
import Marquee from '@/components/sections/Marquee'
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
        {/* Product Spotlight */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-ink mb-6">
                  Meet Glazed Hair Drizzle
                </h2>
                <p className="text-xl text-muted mb-8">
                  Our revolutionary pre-wash treatment that melts knots, boosts shine, 
                  and revives dull hair from the very first use.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center">
                      <span className="text-pink-500 text-sm">✓</span>
                    </div>
                    <p className="text-muted">Clinically proven to improve hair health</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center">
                      <span className="text-pink-500 text-sm">✓</span>
                    </div>
                    <p className="text-muted">Safe for all hair types and colors</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center">
                      <span className="text-pink-500 text-sm">✓</span>
                    </div>
                    <p className="text-muted">30-day money-back guarantee</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/product"
                    className="inline-flex items-center justify-center rounded-xl bg-pink-500 text-white px-8 py-4 shadow-soft hover:bg-pink-600 transition-colors font-medium text-lg"
                  >
                    Shop Now
                  </a>
                  <a
                    href="/about"
                    className="inline-flex items-center justify-center rounded-xl bg-white text-pink-500 px-8 py-4 shadow-soft hover:bg-gray-50 transition-colors font-medium text-lg border border-pink-200"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-2xl">
                  <div className="aspect-square bg-gray-100 rounded-xl mb-6 flex items-center justify-center">
                    <img 
                      src="/hero.png" 
                      alt="Glazed Hair Drizzle" 
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-ink mb-2">Glazed Hair Drizzle</h3>
                  <p className="text-muted mb-4">100ml • Pre-wash treatment</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-bold text-pink-500">£29.99</span>
                      <span className="text-lg text-muted line-through">£59.99</span>
                    </div>
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      50% Off
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                  Best Seller
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}