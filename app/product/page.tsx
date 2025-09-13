'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getProduct, createCheckoutUrl } from '@/lib/shopify';
import ProductHero from '@/components/ProductHero';
import SocialProof from '@/components/SocialProof';
import IngredientsScience from '@/components/IngredientsScience';
import HowToUse from '@/components/HowToUse';
import BenefitsProof from '@/components/BenefitsProof';
import IngredientTransparency from '@/components/IngredientTransparency';
import StickyCart from '@/components/StickyCart';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ProductPage() {
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getProduct();
        if (productData) {
          setProduct(productData);
          // Set first available variant as default
          const firstAvailableVariant = productData.variants?.edges?.find(
            (edge: any) => edge.node.availableForSale
          )?.node;
          if (firstAvailableVariant) {
            setSelectedVariant(firstAvailableVariant);
          }
        } else {
          // Create a fallback product if API fails
          setProduct({
            id: '10361268568401',
            title: 'Glazed Hair Drizzle - Premium Hair Color',
            description: 'Transform your hair with our premium drizzle colors. Professional quality, vibrant results, and endless possibilities for your unique style.',
            featuredImage: {
              url: '/hero.png',
              altText: 'Glazed Hair Drizzle Product'
            },
            variants: {
              edges: [{
                node: {
                  id: '51884459065681',
                  title: 'Default',
                  price: { amount: '29.99', currencyCode: 'USD' },
                  availableForSale: true,
                  selectedOptions: []
                }
              }]
            },
            options: []
          });
          setSelectedVariant({
            id: '51884459065681',
            title: 'Default',
            price: { amount: '29.99', currencyCode: 'USD' },
            availableForSale: true,
            selectedOptions: []
          });
        }
      } catch (error) {
        console.error('Error fetching product:', error);
        // Create fallback product on error
        setProduct({
          id: '10361268568401',
          title: 'Glazed Hair Drizzle - Premium Hair Color',
          description: 'Transform your hair with our premium drizzle colors. Professional quality, vibrant results, and endless possibilities for your unique style.',
          featuredImage: {
            url: '/hero.png',
            altText: 'Glazed Hair Drizzle Product'
          },
          variants: {
            edges: [{
              node: {
                id: '51884459065681',
                title: 'Default',
                price: { amount: '29.99', currencyCode: 'USD' },
                availableForSale: true,
                selectedOptions: []
              }
            }]
          },
          options: []
        });
        setSelectedVariant({
          id: '51884459065681',
          title: 'Default',
          price: { amount: '29.99', currencyCode: 'USD' },
          availableForSale: true,
          selectedOptions: []
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-glazed-blue"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h1>
          <p className="text-muted mb-6">The product you're looking for doesn't exist.</p>
          <Link
            href="/"
            className="gradient-bg text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200"
          >
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  // Product data is handled by the ProductHero component

  const handleAddToCart = () => {
    if (selectedVariant) {
      // For now, just redirect to checkout - in a real app you'd add to cart first
      const checkoutUrl = createCheckoutUrl(selectedVariant.id, quantity);
      window.open(checkoutUrl, '_blank');
    }
  };

  const handleBuyNow = () => {
    if (selectedVariant) {
      const checkoutUrl = createCheckoutUrl(selectedVariant.id, quantity);
      window.open(checkoutUrl, '_blank');
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Product Hero Section */}
      <ProductHero
        product={product}
        selectedVariant={selectedVariant}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
      />

      {/* Social Proof Section */}
      <SocialProof />

      {/* Science-Backed Ingredients */}
      <IngredientsScience />

      {/* How to Use Section */}
      <HowToUse />

      {/* Benefits & Clinical Results */}
      <BenefitsProof />

      {/* Ingredient Transparency */}
      <IngredientTransparency />

      {/* Final CTA Section */}
      <section className="py-20 bg-glazed-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Ready to Transform Your Hair?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have discovered the magic of GLAZED hair colors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleAddToCart}
              className="bg-white text-glazed-blue px-12 py-4 rounded-lg font-bold text-xl hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Add to Cart – ${selectedVariant?.price?.amount || '29.99'}
            </button>
            <div className="flex items-center space-x-6 text-white/80">
              <div className="flex items-center space-x-2">
                <span>🚚</span>
                <span className="text-sm">Free Shipping</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🔒</span>
                <span className="text-sm">30-Day Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Cart */}
      <StickyCart
        product={product}
        selectedVariant={selectedVariant}
        quantity={quantity}
        onAddToCart={handleAddToCart}
        onQuantityChange={setQuantity}
      />
      </div>
      <Footer />
    </>
  );
}
