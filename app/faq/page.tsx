'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Announcement from '@/components/nav/Announcement';
import Navbar from '@/components/nav/Navbar';
import Footer from '@/components/Footer';

const faqs = [
  {
    question: "What is Glazed Hair Drizzle?",
    answer: "Glazed Hair Drizzle is a revolutionary pre-wash treatment that melts knots, boosts shine, and revives dull hair. It's designed to be applied before shampooing to prepare your hair for the best possible wash and results."
  },
  {
    question: "How do I use Glazed Hair Drizzle?",
    answer: "Apply a small amount to dry hair, focusing on the mid-lengths and ends. Massage gently, then wait 5-10 minutes before shampooing as normal. For best results, use 2-3 times per week."
  },
  {
    question: "Is it safe for all hair types?",
    answer: "Yes! Glazed Hair Drizzle is formulated to be safe for all hair types, including color-treated, chemically processed, and sensitive scalps. It's free from sulfates, parabens, and harsh chemicals."
  },
  {
    question: "How long does one bottle last?",
    answer: "One 100ml bottle typically lasts 4-6 weeks with regular use (2-3 times per week). The exact duration depends on your hair length and how much product you use per application."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes! We offer free worldwide shipping on all orders. Most international orders arrive within 7-14 business days, depending on your location."
  },
  {
    question: "What's your return policy?",
    answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied with your purchase, you can return it for a full refund within 30 days of delivery."
  },
  {
    question: "How do I track my order?",
    answer: "Once your order ships, you'll receive a tracking number via email. You can use this to track your package's progress on our website or the carrier's website."
  },
  {
    question: "Can I change or cancel my order?",
    answer: "Orders can be modified or cancelled within 2 hours of placement. After that, the order enters our fulfillment process and cannot be changed. Contact us immediately if you need to make changes."
  },
  {
    question: "What if I have an allergic reaction?",
    answer: "If you experience any adverse reactions, discontinue use immediately and consult a healthcare professional. Contact our customer service team, and we'll work with you to resolve the issue."
  },
  {
    question: "Do you offer subscription discounts?",
    answer: "Yes! Subscribe to our monthly delivery and save 15% on every order. You can pause, skip, or cancel your subscription at any time through your account dashboard."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-ink/80 mb-8 max-w-2xl mx-auto">
                Everything you need to know about Glazed Hair Drizzle and our services.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-ink pr-4">
                        {faq.question}
                      </h3>
                      {openIndex === index ? (
                        <ChevronUp className="h-5 w-5 text-pink-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-pink-500 flex-shrink-0" />
                      )}
                    </button>
                    {openIndex === index && (
                      <div className="px-6 pb-6">
                        <p className="text-muted leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 sm:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-6">
                Still have questions?
              </h2>
              <p className="text-xl text-muted mb-8">
                Our customer service team is here to help! Get in touch and we'll get back to you within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-pink-500 text-white px-8 py-4 shadow-soft hover:bg-pink-600 transition-colors font-medium text-lg"
                >
                  Contact Us
                </a>
                <a
                  href="mailto:hello@glazed.com"
                  className="inline-flex items-center justify-center rounded-xl bg-white text-pink-500 px-8 py-4 shadow-soft hover:bg-gray-50 transition-colors font-medium text-lg border border-pink-200"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}