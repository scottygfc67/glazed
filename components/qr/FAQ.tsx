'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "How to find your review screenshot?",
    answer: "Open TikTok Shop, go to 'My Orders', find your GLAZED purchase, and tap 'Write Review'. After posting, take a screenshot of your review with the star rating visible."
  },
  {
    question: "How long does approval take?",
    answer: "Your code is generated instantly! We verify submissions automatically, so you should receive your 30% discount code within seconds of uploading your screenshot."
  },
  {
    question: "What if my review is private?",
    answer: "No problem! We only need to see that you've posted a review. You can make it public temporarily, take a screenshot, then make it private again if you prefer."
  },
  {
    question: "Can I use this code multiple times?",
    answer: "No, each code is single-use only. However, you can get a new code by leaving another review for future purchases!"
  },
  {
    question: "What if I don't have TikTok?",
    answer: "Unfortunately, this promotion is specifically for TikTok Shop customers. You can still enjoy our regular discounts by signing up for our newsletter!"
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely! We use encrypted uploads, never sell your data, and only store your screenshot temporarily for verification. Your privacy is our priority."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
        Frequently Asked Questions
      </h2>
      
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-4 py-4 text-left flex items-center justify-between hover:bg-gray-50/50 rounded-xl transition-colors duration-200"
            >
              <span className="font-medium text-gray-800 pr-4">
                {faq.question}
              </span>
              <div className={`text-gray-500 transition-transform duration-200 ${
                openIndex === index ? 'rotate-180' : ''
              }`}>
                ▼
              </div>
            </button>
            
            {openIndex === index && (
              <div className="px-4 pb-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
