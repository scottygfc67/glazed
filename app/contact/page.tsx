'use client';

import { useState } from 'react';
import { M, fadeUp, stagger } from '@/components/motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Announcement from '@/components/nav/Announcement';
import Navbar from '@/components/nav/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
                Get in Touch
              </M.h1>
              <M.p variants={fadeUp} className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Have questions about our products? Need help with your order? 
                We're here to help and would love to hear from you.
              </M.p>
            </M.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <M.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger(0.1)}
              >
                <M.h2 variants={fadeUp} className="text-3xl font-bold text-ink mb-6">
                  Send us a message
                </M.h2>
                <M.p variants={fadeUp} className="text-muted mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </M.p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <M.div variants={fadeUp} className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </M.div>
                  
                  <M.div variants={fadeUp}>
                    <label htmlFor="subject" className="block text-sm font-medium text-ink mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="product-question">Product Question</option>
                      <option value="order-support">Order Support</option>
                      <option value="shipping">Shipping Inquiry</option>
                      <option value="returns">Returns & Exchanges</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </M.div>
                  
                  <M.div variants={fadeUp}>
                    <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </M.div>
                  
                  <M.div variants={fadeUp}>
                    <button
                      type="submit"
                      className="w-full bg-pink-500 text-white py-4 rounded-xl font-semibold hover:bg-pink-600 transition-colors"
                    >
                      Send Message
                    </button>
                  </M.div>
                </form>
              </M.div>

              {/* Contact Info */}
              <M.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger(0.1)}
                className="space-y-8"
              >
                <M.div variants={fadeUp}>
                  <h2 className="text-3xl font-bold text-ink mb-6">
                    Contact Information
                  </h2>
                  <p className="text-muted mb-8">
                    Prefer to reach out directly? Here are all the ways you can get in touch with us.
                  </p>
                </M.div>

                <M.div variants={fadeUp} className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-pink-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink mb-1">Email</h3>
                      <p className="text-muted">hello@glazed.com</p>
                      <p className="text-sm text-muted">We'll respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-pink-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink mb-1">Phone</h3>
                      <p className="text-muted">+44 20 7946 0958</p>
                      <p className="text-sm text-muted">Mon-Fri, 9am-6pm GMT</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-pink-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink mb-1">Address</h3>
                      <p className="text-muted">
                        123 Hair Street<br />
                        London, UK SW1A 1AA
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-pink-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-ink mb-1">Business Hours</h3>
                      <p className="text-muted">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </M.div>

                <M.div variants={fadeUp} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-semibold text-ink mb-2">Quick Response Times</h3>
                  <p className="text-sm text-muted">
                    We pride ourselves on fast, helpful customer service. Most inquiries 
                    are answered within 2-4 hours during business hours.
                  </p>
                </M.div>
              </M.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}