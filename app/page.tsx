import Announcement from '@/components/nav/Announcement'
import Navbar from '@/components/nav/Navbar'
import Hero from '@/components/hero/Hero'
import Marquee from '@/components/sections/Marquee'
import ProductSpotlight from '@/components/sections/ProductSpotlight'
import SimpleBenefits from '@/components/SimpleBenefits'
import Banner from '@/components/Banner'
import HowTo from '@/components/HowTo'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Announcement />
      <Navbar />
      <main>
        <Hero />
        <div className="py-8">
          <Marquee />
        </div>
        <div className="py-8">
          <ProductSpotlight />
        </div>
        <div className="py-8">
          <SimpleBenefits />
        </div>
        <div className="py-8">
          <Banner />
        </div>
        <div className="py-8">
          <HowTo />
        </div>
      </main>
      <Footer />
    </>
  )
}