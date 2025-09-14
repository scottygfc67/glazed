'use client';

import { M, fadeUp, stagger } from '@/components/motion';
import { Shield, Clock, Heart, CheckCircle } from 'lucide-react';
import Announcement from '@/components/nav/Announcement';
import Navbar from '@/components/nav/Navbar';
import Footer from '@/components/Footer';

export default function MoneyBackGuaranteePage() {
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
              <M.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                30-Day Money Back Guarantee
              </M.h1>
              <M.p variants={fadeUp} className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                We're so confident in our Glazed Hair Drizzle that we guarantee your 
                satisfaction or your money back. No questions asked.
              </M.p>
            </M.div>
          </div>
        </section>

        {/* Guarantee Details */}
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
                Our Promise to You
              </M.h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <M.div variants={fadeUp} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="h-8 w-8 text-pink-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-ink mb-4 text-center">100% Risk-Free</h3>
                  <p className="text-muted text-center">
                    Try our products with complete confidence. If you're not satisfied, 
                    we'll refund every penny.
                  </p>
                </M.div>

                <M.div variants={fadeUp} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Clock className="h-8 w-8 text-pink-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-ink mb-4 text-center">30 Full Days</h3>
                  <p className="text-muted text-center">
                    Take your time to test our products. You have a full 30 days 
                    from delivery to decide.
                  </p>
                </M.div>

                <M.div variants={fadeUp} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="h-8 w-8 text-pink-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-ink mb-4 text-center">No Questions Asked</h3>
                  <p className="text-muted text-center">
                    We won't ask why you're returning. Your satisfaction is our 
                    only concern.
                  </p>
                </M.div>
              </div>
            </M.div>
          </div>
        </section>

        {/* How It Works */}
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
                  How Our Guarantee Works
                </M.h2>
                <M.p variants={fadeUp} className="text-lg text-muted mb-8">
                  Our money-back guarantee is designed to give you complete peace of mind 
                  when trying our products. Here's exactly how it works.
                </M.p>
                
                <div className="space-y-6">
                  <M.div variants={fadeUp} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink mb-1">Order with Confidence</h3>
                      <p className="text-muted">Place your order knowing you're completely protected by our guarantee.</p>
                    </div>
                  </M.div>

                  <M.div variants={fadeUp} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink mb-1">Try Our Products</h3>
                      <p className="text-muted">Use our products for up to 30 days to see the results for yourself.</p>
                    </div>
                  </M.div>

                  <M.div variants={fadeUp} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink mb-1">Not Satisfied?</h3>
                      <p className="text-muted">Simply contact us within 30 days and we'll process your full refund.</p>
                    </div>
                  </M.div>

                  <M.div variants={fadeUp} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink mb-1">Get Your Money Back</h3>
                      <p className="text-muted">Receive your full refund within 5-7 business days, no questions asked.</p>
                    </div>
                  </M.div>
                </div>
              </M.div>
              
              <M.div variants={fadeUp} className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-ink mb-6">What's Covered</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-muted">Full product price refund</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-muted">Original shipping costs</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-muted">Return shipping costs</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-muted">No restocking fees</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-muted">No questions asked</p>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Why We Offer This</h4>
                  <p className="text-sm text-green-700">
                    We're so confident in our products that we're willing to put our money 
                    where our mouth is. We believe in the quality and effectiveness of 
                    Glazed Hair Drizzle.
                  </p>
                </div>
              </M.div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <M.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger(0.1)}
              className="text-center max-w-4xl mx-auto"
            >
              <M.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-ink mb-6">
                What Our Customers Say
              </M.h2>
              <M.p variants={fadeUp} className="text-xl text-muted mb-12">
                Don't just take our word for it. Here's what real customers say about our guarantee.
              </M.p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <M.div variants={fadeUp} className="bg-gray-50 rounded-2xl p-8">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {'★'.repeat(5)}
                    </div>
                    <span className="ml-2 text-sm text-muted">5.0</span>
                  </div>
                  <p className="text-muted mb-4 italic">
                    "I was skeptical at first, but the guarantee made me feel safe to try it. 
                    I'm so glad I did - my hair has never looked better!"
                  </p>
                  <p className="font-semibold text-ink">- Sarah M.</p>
                </M.div>
                
                <M.div variants={fadeUp} className="bg-gray-50 rounded-2xl p-8">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {'★'.repeat(5)}
                    </div>
                    <span className="ml-2 text-sm text-muted">5.0</span>
                  </div>
                  <p className="text-muted mb-4 italic">
                    "The guarantee shows they really stand behind their product. 
                    I didn't need to use it, but it gave me confidence to order."
                  </p>
                  <p className="font-semibold text-ink">- Emma L.</p>
                </M.div>
              </div>
            </M.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24 bg-pink-500">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <M.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger(0.1)}
              className="text-center max-w-3xl mx-auto"
            >
              <M.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Try Risk-Free?
              </M.h2>
              <M.p variants={fadeUp} className="text-xl text-white/90 mb-8">
                Join thousands of satisfied customers who trust our money-back guarantee. 
                Your hair transformation awaits!
              </M.p>
              <M.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/product"
                  className="inline-flex items-center justify-center rounded-xl bg-white text-pink-500 px-8 py-4 shadow-soft hover:bg-gray-50 transition-colors font-medium text-lg"
                >
                  Shop Now
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-pink-600 text-white px-8 py-4 shadow-soft hover:bg-pink-700 transition-colors font-medium text-lg"
                >
                  Ask Questions
                </a>
              </M.div>
            </M.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
