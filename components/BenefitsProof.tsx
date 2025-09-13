'use client';

const benefits = [
  {
    stat: "73%",
    description: "Reduction in scalp flakes",
    icon: "❄️",
  },
  {
    stat: "93%",
    description: "Users felt softer hair after 1 use",
    icon: "✨",
  },
  {
    stat: "86%",
    description: "Saw less breakage in 2 weeks",
    icon: "🔗",
  }
];

const studyDetails = {
  participants: 48,
  duration: "4 weeks",
  methodology: "In-house study with controlled conditions",
  verification: "Verified Results"
};

export default function BenefitsProof() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Clinically Tested Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real science. Real results. Proven by our comprehensive 4-week study.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="card text-center hover:shadow-lg transition-shadow duration-200">
              <div className="text-6xl font-bold text-glazed-blue mb-4">
                {benefit.stat}
              </div>
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <p className="text-lg font-semibold text-gray-900">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Study Details */}
        <div className="card max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Study Info */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Study Methodology
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {studyDetails.participants}
                  </div>
                  <span className="text-gray-700">Test participants</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {studyDetails.duration}
                  </div>
                  <span className="text-gray-700">Study duration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    ✓
                  </div>
                  <span className="text-gray-700">Controlled conditions</span>
                </div>
              </div>
            </div>

            {/* Verification Badge */}
            <div className="text-center">
              <div className="inline-flex items-center space-x-3 bg-green-50 rounded-2xl p-6">
                <div className="text-4xl">🔒</div>
                <div>
                  <div className="font-bold text-green-800 text-lg">
                    {studyDetails.verification}
                  </div>
                  <div className="text-sm text-green-600">
                    Locked & Certified
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Source */}
          <div className="mt-6 pt-6 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500">
              <strong>Source:</strong> {studyDetails.methodology} with {studyDetails.participants} testers over {studyDetails.duration}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}