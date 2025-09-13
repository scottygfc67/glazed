'use client';

import { useState } from 'react';

const ingredients = [
  {
    name: "Sweet Almond Oil",
    commonName: "Sweet Almond Oil",
    purpose: "Seals split ends and provides deep conditioning",
    benefits: ["Vitamin E", "Fatty Acids", "Moisturizing"]
  },
  {
    name: "Flaxseed Extract",
    commonName: "Flaxseed Extract",
    purpose: "Reduces frizz and smooths hair cuticles",
    benefits: ["Omega-3", "Anti-frizz", "Smoothing"]
  },
  {
    name: "Jojoba Oil",
    commonName: "Jojoba Oil",
    purpose: "Mimics natural scalp oils for perfect balance",
    benefits: ["Sebum-like", "Scalp Health", "Natural Shine"]
  },
  {
    name: "Pink Grapefruit Oil",
    commonName: "Pink Grapefruit Oil",
    purpose: "Clarifies scalp buildup and stimulates growth",
    benefits: ["Astringent", "Clarifying", "Stimulating"]
  }
];

const freeFrom = [
  { name: "Sulfates", icon: "🚫" },
  { name: "Silicones", icon: "🚫" },
  { name: "Synthetic Fragrance", icon: "🚫" },
  { name: "Parabens", icon: "🚫" },
  { name: "Phthalates", icon: "🚫" },
  { name: "Mineral Oil", icon: "🚫" }
];

export default function IngredientTransparency() {
  const [expandedIngredient, setExpandedIngredient] = useState<number | null>(null);

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What's In It?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete transparency in every drop. Know exactly what you're putting on your hair.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Ingredients Accordion */}
          <div className="space-y-4 mb-12">
            {ingredients.map((ingredient, index) => (
              <div
                key={index}
                className="card hover:shadow-lg transition-shadow duration-200"
              >
                <button
                  onClick={() => setExpandedIngredient(expandedIngredient === index ? null : index)}
                  className="w-full text-left flex items-center justify-between hover:bg-gray-50 rounded-lg p-4 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-glazed-blue rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {ingredient.commonName}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {ingredient.name}
                      </p>
                    </div>
                  </div>
                  <div className={`text-gray-500 transition-transform duration-200 ${
                    expandedIngredient === index ? 'rotate-180' : ''
                  }`}>
                    ▼
                  </div>
                </button>

                {expandedIngredient === index && (
                  <div className="px-4 pb-4 border-t border-gray-100">
                    <div className="pt-4">
                      <p className="text-gray-700 mb-4">
                        {ingredient.purpose}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {ingredient.benefits.map((benefit, benefitIndex) => (
                          <span
                            key={benefitIndex}
                            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Free From Section */}
          <div className="card mb-8">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Free From Harmful Ingredients
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {freeFrom.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors duration-200"
                >
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <span className="text-sm font-semibold text-gray-700 text-center">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Warning */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="flex items-center space-x-3">
              <div className="text-3xl">⚠️</div>
              <div>
                <h4 className="font-bold text-yellow-800 mb-1">
                  Contains Nuts & Seeds
                </h4>
                <p className="text-sm text-yellow-700">
                  This product contains sweet almond oil and flaxseed extract. 
                  Please discontinue use if you experience any allergic reactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}