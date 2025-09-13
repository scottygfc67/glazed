'use client';

const ingredients = [
  {
    name: "Sweet Almond Oil",
    benefit: "Seals split ends",
    description: "Rich in vitamin E and fatty acids that penetrate deep into hair shafts to repair damage and prevent breakage.",
  },
  {
    name: "Flaxseed Extract",
    benefit: "Reduces frizz by 40%",
    description: "Contains omega-3 fatty acids that smooth hair cuticles and lock in moisture for silky, manageable hair.",
  },
  {
    name: "Jojoba Oil",
    benefit: "Mimics natural scalp oils",
    description: "Closely resembles human sebum, providing perfect balance for scalp health and natural shine.",
  },
  {
    name: "Pink Grapefruit Oil",
    benefit: "Clarifies scalp buildup",
    description: "Natural astringent properties gently remove product buildup while stimulating healthy hair growth.",
  }
];

export default function IngredientsScience() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Backed by Science. Powered by Nature.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each ingredient is carefully selected and clinically tested for maximum hair health benefits
          </p>
        </div>

        {/* Ingredients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ingredients.map((ingredient, index) => (
            <div
              key={index}
              className="card text-center hover:shadow-lg transition-shadow duration-200"
            >
              <div className="text-4xl mb-4">🧪</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {ingredient.name}
              </h3>
              <p className="text-glazed-blue font-semibold mb-3">
                {ingredient.benefit}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                {ingredient.description}
              </p>
            </div>
          ))}
        </div>

        {/* Dermatologist Approved */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-gray-50 rounded-2xl p-6">
            <div className="text-4xl">👩‍⚕️</div>
            <div className="text-left">
              <div className="font-bold text-gray-900 text-lg">
                Dermatologist-Approved
              </div>
              <div className="text-sm text-gray-600">
                Tested by certified trichologists for safety and efficacy
              </div>
            </div>
            <div className="text-2xl">✅</div>
          </div>
        </div>
      </div>
    </section>
  );
}