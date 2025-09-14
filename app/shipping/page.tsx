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
        <section className="relative py-20 sm:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <M.div
              initial="hidden"
              animate="visible"
              variants={stagger(0.1)}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ink mb-6">
                Shipping Information
              </h1>
              <p className="text-xl text-ink/80 mb-8 max-w-2xl mx-auto">
                Fast, free, and reliable shipping worldwide. Get your Glazed products 
                delivered right to your door.
              </p>
            </M.div>
          </div>
        </section>

        {/* Shipping Options */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <M.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger(0.1)}
              className="max-w-6xl mx-auto"
            >
              <M.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-ink mb-12 text-center">
                Shipping Options
              </M.h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <M.div variants={fadeUp} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Truck className="h-8 w-8 text-pink-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-ink mb-4 text-center">Standard Shipping</h3>
                  <div className="space-y-3 text-center">
                    <p className="text-2xl font-bold text-pink-500">FREE</p>
                    <p className="text-muted">On all orders worldwide</p>
                    <p className="text-sm text-muted">5-7 business days (UK)</p>
                    <p className="text-sm text-muted">7-14 business days (International)</p>
                  </div>
                </M.div>

                <M.div variants={fadeUp} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Clock className="h-8 w-8 text-pink-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-ink mb-4 text-center">Express Shipping</h3>
                  <div className="space-y-3 text-center">
                    <p className="text-2xl font-bold text-pink-500">£9.99</p>
                    <p className="text-muted">Next day delivery (UK)</p>
                    <p className="text-sm text-muted">2-3 business days (International)</p>
                    <p className="text-sm text-muted">Order by 2pm for same-day dispatch</p>
                  </div>
                </M.div>

                <M.div variants={fadeUp} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="h-8 w-8 text-pink-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-ink mb-4 text-center">Tracked Shipping</h3>
                  <div className="space-y-3 text-center">
                    <p className="text-2xl font-bold text-pink-500">Included</p>
                    <p className="text-muted">All orders are fully tracked</p>
                    <p className="text-sm text-muted">Real-time updates via email</p>
                    <p className="text-sm text-muted">Secure delivery confirmation</p>
                  </div>
                </M.div>
              </div>
            </M.div>
          </div>
        </section>

        {/* Delivery Information */}
        <section className="py-16 sm:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <M.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger(0.1)}
              >
                <M.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-ink mb-6">
                  Delivery Information
                </M.h2>
                <M.p variants={fadeUp} className="text-lg text-muted mb-6">
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
              
              <M.div variants={fadeUp} className="bg-white rounded-2xl p-8 shadow-lg">
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
        <section className="py-16 sm:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <M.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger(0.1)}
              className="text-center max-w-4xl mx-auto"
            >
              <M.div variants={fadeUp} className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-10 w-10 text-pink-500" />
              </M.div>
              <M.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-ink mb-6">
                International Shipping
              </M.h2>
              <M.p variants={fadeUp} className="text-xl text-muted mb-8">
                We ship to over 50 countries worldwide. All international orders include 
                free shipping and are fully tracked.
              </M.p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <M.div variants={fadeUp} className="text-left">
                  <h3 className="text-xl font-semibold text-ink mb-4">Popular Destinations</h3>
                  <ul className="space-y-2 text-muted">
                    <li>• United States (7-10 days)</li>
                    <li>• Canada (8-12 days)</li>
                    <li>• Australia (10-14 days)</li>
                    <li>• Germany (5-8 days)</li>
                    <li>• France (5-8 days)</li>
                    <li>• Netherlands (5-8 days)</li>
                  </ul>
                </M.div>
                <M.div variants={fadeUp} className="text-left">
                  <h3 className="text-xl font-semibold text-ink mb-4">Important Notes</h3>
                  <ul className="space-y-2 text-muted">
                    <li>• Customs duties may apply</li>
                    <li>• Delivery times may vary</li>
                    <li>• All packages are insured</li>
                    <li>• Tracking provided for all orders</li>
                    <li>• No hidden fees or charges</li>
                    <li>• 30-day money-back guarantee</li>
                  </ul>
                </M.div>
              </div>
            </M.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
