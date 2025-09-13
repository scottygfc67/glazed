'use client';

import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: 'How do I find my TikTok Shop review?',
    answer: (
      <div>
        <p className="mb-2">To find your review:</p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Open the TikTok app and go to your profile</li>
          <li>Tap the menu (three dots) in the top-right corner</li>
          <li>Select &quot;Orders&quot;</li>
          <li>Find your GLAZED order and tap &quot;Write a review&quot;</li>
          <li>After submitting, take a screenshot of your 5-star review</li>
        </ol>
      </div>
    ),
  },
  {
    question: 'What qualifies as a valid review?',
    answer: 'Your review must clearly show your 5-star rating, the product title, and your TikTok username. Make sure the screenshot is clear and all text is readable. Blur or crop out any personal information you don\'t want to share.',
  },
  {
    question: 'When will I receive my discount code?',
    answer: 'Your 40% off code will be generated instantly after you upload a valid review screenshot. The code will be valid for 30 days from the date of issue.',
  },
  {
    question: 'How do I use my discount code?',
    answer: 'During checkout on our website, you\'ll find a field to enter your promo code. Paste your code there to apply the 40% discount to your order.',
  },
  {
    question: 'What if my code doesn\'t work?',
    answer: 'If you\'re having trouble with your code, please contact our support team with your email address and order number (if available), and we\'ll help you resolve the issue.',
  },
  {
    question: 'Is there a limit to how many times I can use this offer?',
    answer: 'This is a one-time use code per customer. Each code is valid for a single order and cannot be combined with other promotions.',
  },
  {
    question: 'How is my data being used?',
    answer: 'We only use your email to send you the discount code and order confirmation. Your review screenshot is used solely for verification purposes and will not be shared or used for any other reason. For more details, please see our Privacy Policy.',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto mt-16">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-white/10 pb-4">
            <button
              className="flex justify-between items-center w-full text-left py-4 focus:outline-none"
              onClick={() => toggleFaq(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-${index}`}
            >
              <span className="text-lg font-medium">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUpIcon className="h-5 w-5 text-glz-honey" />
              ) : (
                <ChevronDownIcon className="h-5 w-5 text-glz-honey" />
              )}
            </button>
            <div
              id={`faq-${index}`}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
              aria-hidden={openIndex !== index}
            >
              <div className="pb-4 text-ink/80">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
