'use client';

import Announcement from '@/components/nav/Announcement';
import Navbar from '@/components/nav/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <Announcement />
      <Navbar />
      
      <main className="min-h-screen bg-glaze">
        {/* Hero Section */}
        <section className="relative py-20 sm:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink mb-6">
                About Glazed
              </h1>
              <p className="text-xl text-ink/80 mb-8 max-w-2xl mx-auto">
                We're on a mission to revolutionize hair care with our innovative, 
                science-backed formulas that deliver real results.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-muted mb-6">
                  Founded in 2023, Glazed was born from a simple belief: everyone deserves 
                  access to premium hair care that actually works. Our founder, frustrated 
                  with expensive, ineffective products, set out to create something different.
                </p>
                <p className="text-lg text-muted mb-6">
                  After months of research and testing, we developed our signature Hair Drizzle 
                  formula - a revolutionary pre-wash treatment that transforms hair from the 
                  very first use.
                </p>
                <p className="text-lg text-muted">
                  Today, we're proud to serve thousands of customers worldwide who trust 
                  Glazed for their hair care needs.
                </p>
              </div>
              <div className="relative">
                <Image
                  src="/hero.png"
                  alt="Glazed Hair Care"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16 sm:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-muted mb-8">
                To make premium hair care accessible, effective, and enjoyable for everyone. 
                We believe that great hair shouldn't require a chemistry degree or a second mortgage.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🧪</span>
                  </div>
                  <h3 className="text-xl font-semibold text-ink mb-2">Science-Backed</h3>
                  <p className="text-muted">Every ingredient is carefully selected based on scientific research and proven results.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <h3 className="text-xl font-semibold text-ink mb-2">Clean & Safe</h3>
                  <p className="text-muted">No harsh chemicals, sulfates, or parabens. Safe for all hair types and sensitive scalps.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💝</span>
                  </div>
                  <h3 className="text-xl font-semibold text-ink mb-2">Results Guaranteed</h3>
                  <p className="text-muted">We're so confident in our products that we offer a 30-day money-back guarantee.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-6">
                Our Values
              </h2>
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="text-left">
                  <h3 className="text-2xl font-semibold text-ink mb-4">Transparency</h3>
                  <p className="text-muted text-lg">
                    We believe in complete transparency about our ingredients, processes, 
                    and pricing. No hidden costs, no misleading claims.
                  </p>
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-semibold text-ink mb-4">Quality</h3>
                  <p className="text-muted text-lg">
                    Every product undergoes rigorous testing to ensure it meets our 
                    high standards for effectiveness and safety.
                  </p>
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-semibold text-ink mb-4">Innovation</h3>
                  <p className="text-muted text-lg">
                    We're constantly researching and developing new ways to improve 
                    hair health and make our products even better.
                  </p>
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-semibold text-ink mb-4">Community</h3>
                  <p className="text-muted text-lg">
                    We're building a community of hair care enthusiasts who share 
                    tips, experiences, and support each other's hair journeys.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}