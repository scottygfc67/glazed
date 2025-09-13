'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getProduct, createCheckoutUrl, formatPrice } from '@/lib/shopify';
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
  const [selectedImage, setSelectedImage] = useState(0);

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

  const images = product.images?.edges?.map((edge: any) => edge.node) || [];
  const variants = product.variants?.edges?.map((edge: any) => edge.node) || [];
  const availableVariants = variants.filter((variant: any) => variant.availableForSale);

  const handleVariantChange = (variantId: string) => {
    const variant = variants.find((v: any) => v.id === variantId);
    if (variant) {
      setSelectedVariant(variant);
    }
  };

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
      <section className="py-20 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Your Glazed Era Starts Now
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of hair-obsessed customers who can't stop talking about GLAZED
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleAddToCart}
              className="bg-white text-gray-800 px-12 py-4 rounded-full font-bold text-xl hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Add to Cart – ${selectedVariant?.price?.amount || '29.99'}
            </button>
            <div className="flex items-center space-x-6 text-white/80">
              <div className="flex items-center space-x-2">
                <span>💖</span>
                <span className="text-sm">Ships in 24h</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🔒</span>
                <span className="text-sm">Money-Back Guarantee</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>
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
