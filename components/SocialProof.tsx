'use client';

import Image from 'next/image';

const customerPhotos = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    quote: "My hair has never felt this soft! The honey drizzle is pure magic.",
    image: "/hero.png",
  },
  {
    id: 2,
    name: "Jessica L.",
    rating: 5,
    quote: "Finally found something that works for my curly hair!",
    image: "/hero.png",
  },
  {
    id: 3,
    name: "Maya K.",
    rating: 5,
    quote: "The scent is incredible and my scalp feels so much healthier",
    image: "/hero.png",
  },
  {
    id: 4,
    name: "Alex T.",
    rating: 5,
    quote: "Worth every penny! My hair has never looked better",
    image: "/hero.png",
  },
  {
    id: 5,
    name: "Emma R.",
    rating: 5,
    quote: "This product changed my hair game completely!",
    image: "/hero.png",
  }
];

export default function SocialProof() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Real Customers, Real Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See why thousands of customers can't stop talking about GLAZED
          </p>
        </div>

        {/* Customer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {customerPhotos.map((customer) => (
            <div
              key={customer.id}
              className="card hover:shadow-lg transition-shadow duration-200"
            >
              {/* Customer Photo */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src={customer.image}
                    alt={customer.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{customer.name}</div>
                  <div className="flex items-center space-x-1">
                    {[...Array(customer.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 italic">
                "{customer.quote}"
              </blockquote>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-sm">
            <div className="text-green-600">🔒</div>
            <span className="font-medium text-gray-800">
              Verified Reviews • 2,000+ Real Customers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}