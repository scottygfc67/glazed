'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface StickyCartProps {
  product: any;
  selectedVariant: any;
  quantity: number;
  onAddToCart: () => void;
  onQuantityChange: (quantity: number) => void;
}

export default function StickyCart({ product, selectedVariant, quantity, onAddToCart, onQuantityChange }: StickyCartProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showDrip, setShowDrip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAddToCart = () => {
    onAddToCart();
    setShowDrip(true);
    setTimeout(() => setShowDrip(false), 2000);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-2xl transform transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Product Info */}
          <div className="flex items-center space-x-4">
            <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-gradient-to-br from-pink-200 to-purple-200">
              {product?.featuredImage ? (
                <Image
                  src={product.featuredImage.url}
                  alt={product.title}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-2xl">
                  🍯
                </div>
              )}
            </div>
            
            <div>
              <h3 className="font-bold text-gray-800 text-sm">
                {product?.title || 'GLAZED Hair Drizzle'}
              </h3>
              <p className="text-lg font-bold text-gray-800">
                ${selectedVariant?.price?.amount || '29.99'}
              </p>
            </div>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="flex items-center space-x-4">
            {/* Quantity Selector */}
            <div className="flex items-center space-x-2 bg-gray-100 rounded-full p-1">
              <button
                onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors duration-200"
              >
                -
              </button>
              <span className="w-8 text-center font-semibold text-gray-800">
                {quantity}
              </span>
              <button
                onClick={() => onQuantityChange(quantity + 1)}
                className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors duration-200"
              >
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="bg-glazed-blue text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="flex items-center justify-center space-x-6 mt-3 pt-3 border-t border-gray-100">
          <div className="flex items-center space-x-1 text-xs text-gray-500">
            <span>🚚</span>
            <span>Free Shipping</span>
          </div>
          <div className="flex items-center space-x-1 text-xs text-gray-500">
            <span>🔒</span>
            <span>Secure Checkout</span>
          </div>
          <div className="flex items-center space-x-1 text-xs text-gray-500">
            <span>💖</span>
            <span>30-Day Guarantee</span>
          </div>
        </div>
      </div>
    </div>
  );
}
