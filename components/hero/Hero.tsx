'use client'
import Image from 'next/image'
import { M, fadeUp, stagger, popIn } from '@/components/motion'
import Balancer from 'react-wrap-balancer'

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Full background image */}
      <div className="absolute inset-0">
        <Image 
          src="/hero.svg" 
          alt="Glazed Hair Drizzle" 
          fill 
          priority 
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/75" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <M.div 
            variants={stagger()} 
            initial="hidden" 
            animate="show"
          >
            <M.p variants={fadeUp} className="eyebrow text-pink-200 mb-4 drop-shadow-md">
              New • Limited • Glossy
            </M.p>
            <M.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 drop-shadow-lg">
              <Balancer>
                Get Softer, Shinier Hair in One Wash
                <br />
                <span className="text-pink-300 drop-shadow-lg">No Tangles. Just Glow.</span>
              </Balancer>
            </M.h1>
            <M.p variants={fadeUp} className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto drop-shadow-md">
              A glossy pre-wash drizzle that melts knots, boosts shine, and revives dull hair — fast. Get healthy, touchable hair from the very first use.
            </M.p>
            <M.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a 
                href="/product" 
                className="inline-flex items-center justify-center rounded-xl bg-brand-500 text-white px-8 py-4 shadow-soft hover:bg-brand-600 transition-colors font-medium text-lg"
              >
                Shop now
              </a>
              <a 
                href="#benefits" 
                className="inline-flex items-center justify-center rounded-xl bg-pink-500 text-white px-8 py-4 shadow-soft hover:bg-pink-600 transition-colors font-medium text-lg"
              >
                Learn more
              </a>
            </M.div>

            <M.div 
              variants={stagger(0.06)} 
              className="grid grid-cols-3 gap-6 max-w-2xl mx-auto"
            >
              {[
                ['25k+', 'Happy Customers'],
                ['4.9★', 'Avg Rating'],
                ['30‑Day', 'Money Back']
              ].map(([k, v]) => (
                <M.div 
                  key={k} 
                  variants={popIn} 
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20"
                >
                  <p className="text-2xl font-semibold text-white">{k}</p>
                  <p className="text-sm text-gray-300">{v}</p>
                </M.div>
              ))}
            </M.div>
          </M.div>
        </div>
      </div>

    </section>
  )
}
