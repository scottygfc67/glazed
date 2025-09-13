'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "How long does the color last?",
    answer: "Our hair colors are designed to last 4-6 weeks with proper care. The longevity depends on your hair type, how often you wash your hair, and the products you use. For best results, use color-safe shampoos and avoid excessive heat styling."
  },
  {
    question: "Is the color safe for all hair types?",
    answer: "Yes! Our formulas are gentle and safe for all hair types, including color-treated, bleached, and natural hair. However, we recommend doing a patch test 48 hours before full application, especially if you have sensitive skin or allergies."
  },
  {
    question: "How do I apply the color?",
    answer: "Start with clean, dry hair. Apply the color evenly from roots to ends, making sure to saturate all strands. Leave on for the recommended time (usually 20-30 minutes), then rinse thoroughly with cool water until the water runs clear. Follow with a color-safe conditioner."
  },
  {
    question: "Can I mix different colors?",
    answer: "Absolutely! Our colors are designed to be mixable, allowing you to create custom shades. Start with small amounts and test on a small section of hair first. Keep in mind that mixing colors may affect the final result and longevity."
  },
  {
    question: "What if I don't like the result?",
    answer: "We offer a 30-day satisfaction guarantee. If you're not completely happy with your purchase, contact our customer service team within 30 days of delivery for a full refund or exchange. We want you to love your Glazed experience!"
  },
  {
    question: "How should I care for my colored hair?",
    answer: "Use sulfate-free, color-safe shampoos and conditioners. Wash with cool water when possible, and avoid excessive heat styling. Deep condition weekly and use UV protection when spending time in the sun. These steps will help maintain vibrant color longer."
  },
  {
    question: "Can I use this on bleached hair?",
    answer: "Yes! Our colors work beautifully on bleached hair and often produce more vibrant results. However, make sure your hair is in good condition before coloring, as bleached hair can be more porous and may absorb color differently."
  },
  {
    question: "How much product do I need?",
    answer: "For short hair (chin-length), one bottle should be sufficient. For medium-length hair (shoulder-length), you may need 1-2 bottles. For long hair (below shoulders), plan for 2-3 bottles. It's better to have a little extra than to run out mid-application!"
  },
  {
    question: "Is the packaging eco-friendly?",
    answer: "We're committed to sustainability! Our bottles are made from recyclable materials, and we use minimal packaging. We're constantly working to improve our environmental impact and are exploring biodegradable options for future products."
  },
  {
    question: "Do you ship internationally?",
    answer: "Currently, we ship within the United States and Canada. We're working on expanding our shipping to other countries soon. Sign up for our newsletter to be notified when we launch in your region!"
  },
  {
    question: "What's your return policy?",
    answer: "We offer a 30-day return policy for unopened products in their original packaging. For opened products, we offer a 30-day satisfaction guarantee. Contact our customer service team to initiate a return or exchange."
  },
  {
    question: "How can I contact customer support?",
    answer: "You can reach our customer support team via email at support@glazed-hair.com, through our contact form, or by calling 1-800-GLAZED-1. We typically respond within 24 hours and are here to help with any questions or concerns."
  }
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-glazed-blue/10 to-glazed-pink/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Find answers to common questions about our hair colors, application process, 
              and care instructions. Can't find what you're looking for? Contact us!
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl overflow-hidden hover:border-glazed-blue/50 transition-all duration-300"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-card/50 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-foreground pr-4">
                      {faq.question}
                    </h3>
                    <svg
                      className={`w-6 h-6 text-glazed-blue transition-transform duration-200 flex-shrink-0 ${
                        openItems.includes(index) ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  
                  {openItems.includes(index) && (
                    <div className="px-6 pb-6 animate-fade-in">
                      <p className="text-muted leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="mt-16 bg-gradient-to-r from-glazed-blue/10 to-glazed-pink/10 rounded-2xl p-8 border border-glazed-blue/20">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Still Have Questions?
                </h3>
                <p className="text-muted mb-6 max-w-2xl mx-auto">
                  Our customer support team is here to help! Reach out to us and we'll get back to you within 24 hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="gradient-bg text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                  >
                    Contact Us
                  </a>
                  <a
                    href="mailto:support@glazed-hair.com"
                    className="bg-card border border-border text-foreground px-6 py-3 rounded-full font-semibold hover:border-glazed-blue/50 transition-all duration-200"
                  >
                    Email Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
