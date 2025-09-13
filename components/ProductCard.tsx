'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface ProductCardProps {
  product: {
    id: string;
    title: string;
    description?: string;
    featuredImage?: {
      url: string;
      altText?: string;
    };
    priceRange: {
      minVariantPrice: {
        amount: string;
        currencyCode: string;
      };
      maxVariantPrice: {
        amount: string;
        currencyCode: string;
      };
    };
    variants: {
      edges: Array<{
        node: {
          id: string;
          availableForSale: boolean;
        };
      }>;
    };
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const isAvailable = product.variants.edges.some(edge => edge.node.availableForSale);

  const formatPrice = (amount: string, currencyCode: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currencyCode,
    }).format(parseFloat(amount));
  };

  const isOnSale = product.priceRange.minVariantPrice.amount !== product.priceRange.maxVariantPrice.amount;

  return (
    <div
      className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-glazed-blue/50 transition-all duration-300 hover:shadow-lg hover:shadow-glazed-blue/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        {product.featuredImage ? (
          <Image
            src={product.featuredImage.url}
            alt={product.featuredImage.altText || product.title}
            fill
            className={`object-cover transition-transform duration-300 ${
              isHovered ? 'scale-105' : 'scale-100'
            }`}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-glazed-blue/20 to-glazed-pink/20 flex items-center justify-center">
            <svg className="w-16 h-16 text-glazed-blue/50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
        )}
        
        {/* Overlay */}
        <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <Link
            href={`/product/${product.id}`}
            className="gradient-bg text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105"
          >
            View Details
          </Link>
        </div>

        {/* Availability Badge */}
        {!isAvailable && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Sold Out
          </div>
        )}

        {/* Sale Badge */}
        {isOnSale && (
          <div className="absolute top-4 left-4 bg-glazed-pink text-white px-3 py-1 rounded-full text-sm font-semibold">
            Sale
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-glazed-blue transition-colors duration-300">
          {product.title}
        </h3>
        
        {product.description && (
          <p className="text-muted text-sm mb-4 line-clamp-2">
            {product.description}
          </p>
        )}

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-foreground">
              {formatPrice(product.priceRange.minVariantPrice.amount, product.priceRange.minVariantPrice.currencyCode)}
            </span>
            {isOnSale && (
              <span className="text-lg text-muted line-through">
                {formatPrice(product.priceRange.maxVariantPrice.amount, product.priceRange.maxVariantPrice.currencyCode)}
              </span>
            )}
          </div>
        </div>

        {/* CTA Button */}
        <Link
          href={`/product/${product.id}`}
          className={`w-full py-3 px-4 rounded-full font-semibold text-center transition-all duration-200 ${
            isAvailable
              ? 'gradient-bg text-white hover:shadow-lg hover:shadow-glazed-blue/25 transform hover:scale-105'
              : 'bg-muted text-foreground cursor-not-allowed'
          }`}
        >
          {isAvailable ? 'Shop Now' : 'Sold Out'}
        </Link>
      </div>
    </div>
  );
}
