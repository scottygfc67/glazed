'use client';

const steps = [
  {
    number: 1,
    title: "Apply to Dry Scalp & Lengths",
    description: "Start with clean, dry hair. Apply a generous amount to your scalp and work through to the ends, focusing on damaged areas.",
    icon: "💆‍♀️",
    duration: "2-3 minutes"
  },
  {
    number: 2,
    title: "Wait 1-4 Hours (or Overnight)",
    description: "Let the magic happen! For best results, leave on for 1-4 hours or overnight for deep conditioning.",
    icon: "⏰",
    duration: "1-4 hours"
  },
  {
    number: 3,
    title: "Double-Shampoo & Style",
    description: "Rinse thoroughly with warm water, then double-shampoo to remove all product. Style as usual and enjoy your glazed locks!",
    icon: "🚿",
    duration: "5-10 minutes"
  }
];

export default function HowToUse() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Your 3-Step Glazing Ritual
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your hair with our simple, effective routine that delivers salon-quality results at home
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              {/* Step Number */}
              <div className="w-16 h-16 mx-auto rounded-full bg-glazed-blue text-white flex items-center justify-center text-2xl font-bold mb-6">
                {step.number}
              </div>

              {/* Step Content */}
              <div className="card">
                {/* Icon */}
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="text-sm text-gray-500 font-medium mb-4">
                  {step.duration}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Upsell Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Want Best Results?
            </h3>
            <p className="text-gray-600 mb-6">
              Try our satin wrap & scalp massager for the ultimate glazing experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Add Satin Wrap (+$15)
              </button>
              <button className="btn-secondary">
                Add Scalp Massager (+$25)
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}