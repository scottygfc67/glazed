'use client';

import Image from 'next/image';

interface ProductHeroProps {
  product: any;
  selectedVariant: any;
  onAddToCart: () => void;
  onBuyNow: () => void;
}

export default function ProductHero({ product, selectedVariant, onAddToCart, onBuyNow }: ProductHeroProps) {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <div className="relative">
            <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
              {product?.featuredImage ? (
                <Image
                  src={product.featuredImage.url}
                  alt={product.featuredImage.altText || product.title}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-6xl">
                  🍯
                </div>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            {/* Product Name */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {product?.title || 'GLAZED Hair Drizzle'}
              </h1>
              <p className="text-xl text-gray-600">
                Professional-quality hair colors for vibrant, long-lasting results
              </p>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-4xl font-bold text-gray-900">
                ${selectedVariant?.price?.amount || '29.99'}
              </span>
              <span className="text-2xl text-gray-400 line-through">
                $49.99
              </span>
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                Save 40%
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onAddToCart}
                className="bg-glazed-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Add to Cart
              </button>
              
              <button
                onClick={onBuyNow}
                className="bg-transparent text-glazed-blue px-8 py-4 rounded-lg font-semibold text-lg border-2 border-glazed-blue hover:bg-glazed-blue hover:text-white transition-all duration-200"
              >
                Buy Now
              </button>
            </div>

            {/* Quick Benefits */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl">🔗</div>
                <span className="font-medium text-gray-700">Reduces Knots</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl">✨</div>
                <span className="font-medium text-gray-700">Adds Shine</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl">❄️</div>
                <span className="font-medium text-gray-700">Prevents Flakes</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl">💆</div>
                <span className="font-medium text-gray-700">Soothes Scalp</span>
              </div>
            </div>

            {/* Trust Signal */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center space-x-2">
                <div className="text-green-600">✅</div>
                <span className="font-medium text-green-800">
                  Trusted by 25,000+ customers worldwide
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}