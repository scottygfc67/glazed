'use client';

import { M, fadeUp, stagger } from '@/components/motion';
import { RotateCcw, Clock, Shield, CheckCircle } from 'lucide-react';
import Announcement from '@/components/nav/Announcement';
import Navbar from '@/components/nav/Navbar';
import Footer from '@/components/Footer';

export default function ReturnsPage() {
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
                Returns & Exchanges
              </h1>
              <p className="text-xl text-ink/80 mb-8 max-w-2xl mx-auto">
                Not completely satisfied? We offer hassle-free returns and exchanges 
                within 30 days of purchase.
              </p>
            </M.div>
          </div>
        </section>

        {/* Return Policy */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <M.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger(0.1)}
              className="max-w-4xl mx-auto"
            >
              <M.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-ink mb-12 text-center">
                Our Return Policy
              </M.h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <M.div variants={fadeUp} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Clock className="h-8 w-8 text-pink-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-ink mb-4 text-center">30-Day Window</h3>
                  <p className="text-muted text-center">
                    You have 30 days from the delivery date to return or exchange your items.
                  </p>
                </M.div>

                <M.div variants={fadeUp} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <RotateCcw className="h-8 w-8 text-pink-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-ink mb-4 text-center">Free Returns</h3>
                  <p className="text-muted text-center">
                    All returns are completely free. We'll even provide a prepaid return label.
                  </p>
                </M.div>

                <M.div variants={fadeUp} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="h-8 w-8 text-pink-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-ink mb-4 text-center">Full Refund</h3>
                  <p className="text-muted text-center">
                    Get a full refund to your original payment method within 5-7 business days.
                  </p>
                </M.div>
              </div>
            </M.div>
          </div>
        </section>

        {/* How to Return */}
        <section className="py-16 sm:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <M.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger(0.1)}
              >
                <M.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-ink mb-6">
                  How to Return an Item
                </M.h2>
                <M.p variants={fadeUp} className="text-lg text-muted mb-8">
                  Returning an item is simple and straightforward. Follow these easy steps 
                  to process your return.
                </M.p>
                
                <div className="space-y-6">
                  <M.div variants={fadeUp} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink mb-1">Contact Us</h3>
                      <p className="text-muted">Email us at returns@glazed.com with your order number and reason for return.</p>
                    </div>
                  </M.div>

                  <M.div variants={fadeUp} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink mb-1">Get Return Label</h3>
                      <p className="text-muted">We'll send you a prepaid return label and return instructions.</p>
                    </div>
                  </M.div>

                  <M.div variants={fadeUp} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink mb-1">Package & Ship</h3>
                      <p className="text-muted">Pack the item securely and drop it off at any authorized location.</p>
                    </div>
                  </M.div>

                  <M.div variants={fadeUp} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink mb-1">Get Refund</h3>
                      <p className="text-muted">Once we receive your return, we'll process your refund within 5-7 business days.</p>
                    </div>
                  </M.div>
                </div>
              </M.div>
              
              <M.div variants={fadeUp} className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-ink mb-6">Return Requirements</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-muted">Item must be in original, unopened condition</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-muted">Original packaging and labels intact</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-muted">Return within 30 days of delivery</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-muted">Include original receipt or order confirmation</p>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Important Note</h4>
                  <p className="text-sm text-yellow-700">
                    For hygiene reasons, we cannot accept returns on opened or used products. 
                    If you received a damaged or defective item, please contact us immediately.
                  </p>
                </div>
              </M.div>
            </div>
          </div>
        </section>

        {/* Exchange Process */}
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
                Need to Exchange?
              </M.h2>
              <M.p variants={fadeUp} className="text-xl text-muted mb-8">
                Want a different size or variant? We make exchanges easy and free.
              </M.p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <M.div variants={fadeUp} className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-xl font-semibold text-ink mb-4">Same Process</h3>
                  <p className="text-muted mb-4">
                    Exchanges follow the same process as returns. Just let us know what 
                    you'd like instead when you contact us.
                  </p>
                  <ul className="text-left space-y-2 text-muted">
                    <li>• Contact us with your exchange request</li>
                    <li>• We'll send return label and new item</li>
                    <li>• No additional shipping charges</li>
                    <li>• Price differences will be handled</li>
                  </ul>
                </M.div>
                
                <M.div variants={fadeUp} className="bg-gray-50 rounded-2xl p-8">
                  <h3 className="text-xl font-semibold text-ink mb-4">Quick Exchanges</h3>
                  <p className="text-muted mb-4">
                    For faster exchanges, we can ship your new item immediately 
                    and process the return separately.
                  </p>
                  <ul className="text-left space-y-2 text-muted">
                    <li>• New item ships within 24 hours</li>
                    <li>• Return processed when received</li>
                    <li>• Temporary hold on payment method</li>
                    <li>• Perfect for urgent needs</li>
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
