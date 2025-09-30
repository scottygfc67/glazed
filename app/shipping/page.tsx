'use client';

import { M, fadeUp, stagger } from '@/components/motion';
import { Truck, Clock, Shield, Globe } from 'lucide-react';
import Announcement from '@/components/nav/Announcement';
import Navbar from '@/components/nav/Navbar';
import Footer from '@/components/Footer';

export default function ShippingPage() {
  return (
    <>
      <Announcement />
      <Navbar />
      
      <main className="min-h-screen bg-glaze">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink mb-4">
                Shipping Information
              </h1>
              <p className="text-lg sm:text-xl text-ink/80 mb-6 max-w-2xl mx-auto">
                Fast, free, and reliable shipping worldwide. Get your Glazed products delivered to your door.
              </p>
            </div>
          </div>
        </section>

        {/* Shipping Options */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <M.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={stagger(0.1)}
              className="max-w-6xl mx-auto"
            >
              <M.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-ink mb-8 text-center">
                Shipping Options
              </M.h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <M.div variants={fadeUp} className="bg-white border border-line rounded-2xl p-6 shadow-sm">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Clock className="h-8 w-8 text-pink-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-ink mb-1 text-center">UK — Next Day</h3>
                  <p className="text-center text-sm text-muted mb-2">Order by 2pm (Mon–Fri)</p>
                  <div className="space-y-1 text-center">
                    <p className="text-2xl font-bold text-pink-500">£5.99</p>
                    <p className="text-sm text-muted">Tracked. Signature on delivery.</p>
                  </div>
                </M.div>

                <M.div variants={fadeUp} className="bg-white border border-line rounded-2xl p-6 shadow-sm">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Truck className="h-8 w-8 text-pink-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-ink mb-1 text-center">UK — 2–3 Days</h3>
                  <p className="text-center text-sm text-muted mb-2">Royal Mail/DPD</p>
                  <div className="space-y-1 text-center">
                    <p className="text-2xl font-bold text-pink-500">£3.99</p>
                    <p className="text-sm text-muted">Tracked service with updates.</p>
                  </div>
                </M.div>

                <M.div variants={fadeUp} className="bg-white border border-line rounded-2xl p-6 shadow-sm">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="h-8 w-8 text-pink-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-ink mb-1 text-center">Tracked & Insured</h3>
                  <p className="text-center text-sm text-muted mb-2">All orders</p>
                  <div className="space-y-1 text-center">
                    <p className="text-2xl font-bold text-pink-500">Included</p>
                    <p className="text-sm text-muted">Real‑time tracking + delivery confirmation</p>
                  </div>
                </M.div>
              </div>
            </M.div>
          </div>
        </section>

        {/* Delivery Information */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <M.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={stagger(0.1)}
              >
                <M.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-ink mb-4">
                  Delivery Information
                </M.h2>
                <M.p variants={fadeUp} className="text-base sm:text-lg text-muted mb-6">
                  We work with trusted shipping partners to ensure your Glazed products 
                  arrive safely and on time. Here's what you need to know about delivery.
                </M.p>
                <M.div variants={fadeUp} className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-pink-500 text-sm">✓</span>
                    </div>
                    <p className="text-muted">All orders are processed within 1-2 business days</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-pink-500 text-sm">✓</span>
                    </div>
                    <p className="text-muted">You'll receive tracking information via email</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-pink-500 text-sm">✓</span>
                    </div>
                    <p className="text-muted">Packages are discreetly packaged for privacy</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-pink-500 text-sm">✓</span>
                    </div>
                    <p className="text-muted">Signature required for delivery confirmation</p>
                  </div>
                </M.div>
              </M.div>
              
              <M.div variants={fadeUp} className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-ink mb-6">Shipping Timeline</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-medium text-ink">Order Placed</span>
                    <span className="text-pink-500 font-semibold">Day 0</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-medium text-ink">Processing</span>
                    <span className="text-muted">Day 1-2</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-medium text-ink">Dispatched</span>
                    <span className="text-muted">Day 2-3</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-medium text-ink">Delivered (UK)</span>
                    <span className="text-green-600 font-semibold">Day 5-7</span>
                  </div>
                </div>
              </M.div>
            </div>
          </div>
        </section>

        {/* International Shipping */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <M.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={stagger(0.1)}
              className="text-center max-w-4xl mx-auto"
            >
              <M.div variants={fadeUp} className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-10 w-10 text-pink-500" />
              </M.div>
              <M.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-ink mb-4">International Shipping</M.h2>
              <M.p variants={fadeUp} className="text-base sm:text-lg text-muted mb-6">
                We ship to over 50 countries worldwide. All international orders include 
                free shipping and are fully tracked.
              </M.p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <M.div variants={fadeUp} className="text-left">
                  <h3 className="text-xl font-semibold text-ink mb-4">Popular Destinations</h3>
                  <ul className="space-y-2 text-muted">
                    <li>• Europe: £6.99 (3–7 days)</li>
                    <li>• United States: £9.99 (3–7 days)</li>
                    <li>• Rest of World: £9.99 (3–7 days)</li>
                  </ul>
                </M.div>
                <M.div variants={fadeUp} className="text-left">
                  <h3 className="text-xl font-semibold text-ink mb-4">Important Notes</h3>
                  <ul className="space-y-2 text-muted">
                    <li>• Prices shown in GBP; duties/taxes may apply</li>
                    <li>• Delivery times are estimates</li>
                    <li>• All packages insured and tracked</li>
                    <li>• 30‑day money‑back guarantee</li>
                  </ul>
                </M.div>
              </div>
            </M.div>
          </div>
        </section>

        {/* CTA (match money-back style) */}
        <section className="py-16 sm:py-20 bg-pink-500">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to get glowing?</h2>
              <p className="text-white/90 mb-8 text-lg">Free worldwide shipping on every Duo. 30‑day money‑back guarantee.</p>
              <a href="/product" className="inline-flex items-center justify-center rounded-xl bg-white text-pink-500 px-8 py-4 shadow-soft hover:bg-gray-50 transition-colors font-medium text-lg">Buy Now</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
