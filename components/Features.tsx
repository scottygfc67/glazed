'use client';

import { useState, useEffect } from 'react';

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    title: "Premium Quality",
    description: "Professional-grade formulas with the finest ingredients for salon-quality results at home.",
    color: "text-glazed-blue"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    ),
    title: "Long Lasting Color",
    description: "Advanced color technology ensures vibrant, fade-resistant results that last for weeks.",
    color: "text-glazed-pink"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H5V21H19V9Z"/>
      </svg>
    ),
    title: "Easy Application",
    description: "Simple, mess-free application process with clear instructions for perfect results every time.",
    color: "text-glazed-blue"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    ),
    title: "Gentle Formula",
    description: "Nourishing ingredients that protect and condition your hair while delivering vibrant color.",
    color: "text-glazed-pink"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    ),
    title: "Vibrant Results",
    description: "Rich, intense colors that make a bold statement and turn heads wherever you go.",
    color: "text-glazed-blue"
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    title: "Professional Results",
    description: "Get salon-quality results in the comfort of your own home with our professional formulas.",
    color: "text-glazed-pink"
  }
];

export default function Features() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="features" className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Choose <span className="gradient-text">Glazed</span>?
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Experience the difference with our premium hair color collection designed for 
            professionals and enthusiasts alike.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group p-8 bg-background border border-border rounded-2xl hover:border-glazed-blue/50 transition-all duration-300 hover:shadow-lg hover:shadow-glazed-blue/10 ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-glazed-blue transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-glazed-blue/10 to-glazed-pink/10 rounded-2xl p-8 border border-glazed-blue/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Transform Your Hair?
            </h3>
            <p className="text-muted mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have discovered the magic of Glazed hair colors.
            </p>
            <a
              href="/product"
              className="gradient-bg text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-glazed-blue/25 transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
