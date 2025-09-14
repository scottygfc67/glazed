'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getProduct, formatPrice } from '@/lib/shopify';
import { M, fadeUp, stagger, popIn } from '@/components/motion';
import Balancer from 'react-wrap-balancer';
import Announcement from '@/components/nav/Announcement';
import Navbar from '@/components/nav/Navbar';
import Footer from '@/components/Footer';
import QuantityBreaks from '@/components/pdp/QuantityBreaks';
import { ShoppingCart, Star, Truck, Shield, Heart } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { useNotification } from '@/lib/notification-context';

export default function ProductPage() {
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const [addingToCart, setAddingToCart] = useState(false);
  const { addToCart } = useCart();
  const { showNotification } = useNotification();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log('Fetching product from Shopify...');
        console.log('Using product ID:', process.env.SHOPIFY_PRODUCT_ID || '10361268568401');
        console.log('Using domain:', process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN);
        console.log('Using token:', !!process.env.SHOPIFY_PUBLIC_ACCESS_TOKEN);
        
        const productData = await getProduct();
        console.log('Product data from Shopify:', productData);
        
        if (productData) {
          setProduct(productData);
          const firstAvailableVariant = productData.variants?.edges?.find(
            (edge: any) => edge.node.availableForSale
          )?.node;
          if (firstAvailableVariant) {
            console.log('Selected variant from Shopify:', firstAvailableVariant);
            setSelectedVariant(firstAvailableVariant);
          } else {
            console.log('No available variants found in Shopify data');
          }
        } else {
          console.log('No product data returned from Shopify, using fallback');
          // Fallback product
          setProduct({
            id: '10361268568401',
            title: 'Glazed Hair Drizzle',
            description: 'A glossy pre-wash drizzle that melts knots, boosts shine, and revives dull hair — fast. Get healthy, touchable hair from the very first use.',
            featuredImage: {
              url: '/hero.png',
              altText: 'Glazed Hair Drizzle Product'
            },
            variants: {
              edges: [{
                node: {
                  id: '51884459065681',
                  title: 'Default',
                  price: { amount: '29.99', currencyCode: 'GBP' },
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
            price: { amount: '29.99', currencyCode: 'GBP' },
            availableForSale: true,
            selectedOptions: []
          });
        }
      } catch (error) {
        console.error('Error fetching product:', error);
        // Fallback on error
        setProduct({
          id: '10361268568401',
          title: 'Glazed Hair Drizzle',
          description: 'A glossy pre-wash drizzle that melts knots, boosts shine, and revives dull hair — fast. Get healthy, touchable hair from the very first use.',
          featuredImage: {
            url: '/hero.png',
            altText: 'Glazed Hair Drizzle Product'
          },
          variants: {
            edges: [{
              node: {
                id: '51884459065681',
                title: 'Default',
                price: { amount: '29.99', currencyCode: 'GBP' },
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
          price: { amount: '29.99', currencyCode: 'GBP' },
          availableForSale: true,
          selectedOptions: []
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  const handleAddToCart = useCallback(() => {
    console.log('Add to cart clicked!', { product, selectedVariant, quantity });
    
    // Use fallback data if product/variant not loaded
    const productTitle = product?.title || 'Glazed Hair Drizzle';
    const productPrice = selectedVariant?.price?.amount || '29.99';
    const productImage = product?.featuredImage?.url || '/hero.png';
    const variantId = process.env.NEXT_PUBLIC_SHOPIFY_VARIANT_ID || '51884459065681';
    
    try {
      setAddingToCart(true);
      
      const cartItem = {
        name: productTitle,
        price: parseFloat(productPrice),
        quantity: quantity,
        image: productImage,
        variantId: variantId,
      };
      
      console.log('Adding to cart:', cartItem);
      
      // Add to cart
      addToCart(cartItem);
      
      // Show success notification
      showNotification(`Added ${quantity} ${quantity === 1 ? 'bottle' : 'bottles'} to cart!`, 'success');
    } catch (error) {
      console.error('Failed to add to cart:', error);
      showNotification('Failed to add to cart. Please try again.', 'error');
    } finally {
      setAddingToCart(false);
    }
  }, [product, selectedVariant, quantity, addToCart, showNotification]);

  const handleBuyNow = useCallback(async () => {
    console.log('Buy now clicked!', { product, selectedVariant, quantity });
    
    try {
      setAddingToCart(true);
      
      // Use variant ID from environment variables or fallback to hardcoded
      const variantId = process.env.NEXT_PUBLIC_SHOPIFY_VARIANT_ID || '51884459065681';
      const domain = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN || 'zfamh0-xh.myshopify.com';
      
      console.log('Creating checkout URL:', { variantId, quantity, domain });
      
      // Create direct Shopify checkout URL
      const checkoutUrl = `https://${domain}/cart/${variantId}:${quantity}?checkout[source]=product&checkout[quantity]=${quantity}`;
      
      console.log('Checkout URL created:', checkoutUrl);
      
      // Redirect to Shopify checkout
      window.location.href = checkoutUrl;
    } catch (error) {
      console.error('Failed to create checkout URL:', error);
      showNotification('Sorry—checkout unavailable right now. Please try again.', 'error');
    } finally {
      setAddingToCart(false);
    }
  }, [quantity, showNotification]);

  if (loading) {
    return (
      <>
        <Announcement />
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-glaze">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-brand-500"></div>
        </div>
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Announcement />
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-glaze">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-ink mb-4">Product Not Found</h1>
            <p className="text-muted mb-6">The product you're looking for doesn't exist.</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Announcement />
      <Navbar />
      
      {/* Hero Product Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image 
            src={product.featuredImage?.url || '/hero.png'} 
            alt={product.featuredImage?.altText || 'Glazed Hair Drizzle'} 
            fill 
            priority 
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-6 sm:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center w-full">
            {/* Product Image */}
            <M.div 
              initial={{ opacity: 0, x: -50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative w-full max-w-sm sm:max-w-md mx-auto aspect-[3/4]">
                <Image 
                  src={product.featuredImage?.url || '/hero.png'} 
                  alt={product.featuredImage?.altText || 'Glazed Hair Drizzle'} 
                  fill 
                  className="object-contain drop-shadow-2xl"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 50vw"
                />
              </div>
            </M.div>

            {/* Product Info */}
            <M.div 
              variants={stagger()} 
              initial="hidden" 
              animate="show" 
              className="text-center lg:text-left px-4 sm:px-0"
            >
              <M.p variants={fadeUp} className="eyebrow text-pink-200 mb-4">
                Premium Hair Care
              </M.p>
              
              <M.h1 variants={fadeUp} className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-white mb-4 sm:mb-6 drop-shadow-lg">
                <Balancer>
                  {product.title}
                </Balancer>
              </M.h1>
              
              <M.p variants={fadeUp} className="text-base sm:text-lg md:text-xl text-gray-100 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 drop-shadow-md">
                {product.description}
              </M.p>

              {/* Price */}
              <M.div variants={fadeUp} className="mb-4 sm:mb-6">
                <div className="text-3xl sm:text-4xl font-bold text-white drop-shadow-lg">
                  {formatPrice(selectedVariant?.price?.amount || '29.99', selectedVariant?.price?.currencyCode || 'GBP')}
                </div>
                <p className="text-gray-300 text-sm mt-1">Free worldwide shipping</p>
              </M.div>

              {/* Quantity Breaks */}
              <M.div variants={fadeUp} className="mb-6 sm:mb-8">
                <label className="block text-white text-sm font-medium mb-3 sm:mb-4">Choose your bundle</label>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20">
                  <QuantityBreaks 
                    unitPrice={parseFloat(selectedVariant?.price?.amount || '29.99')} 
                    qty={quantity} 
                    setQty={setQuantity} 
                    pairPrice={29.99} 
                  />
                </div>
              </M.div>

              {/* CTA Buttons */}
              <M.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8">
                <button
                  onClick={() => {
                    console.log('Add to cart button clicked!');
                    handleAddToCart();
                  }}
                  disabled={addingToCart}
                  className="inline-flex items-center justify-center rounded-xl bg-brand-500 text-white px-6 sm:px-8 py-3 sm:py-4 shadow-soft hover:bg-brand-600 transition-colors font-medium text-base sm:text-lg disabled:opacity-50"
                >
                  <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  {addingToCart ? 'Adding...' : 'Add to Cart'}
                </button>
                <button
                  onClick={() => {
                    console.log('Buy now button clicked!');
                    handleBuyNow();
                  }}
                  disabled={addingToCart}
                  className="inline-flex items-center justify-center rounded-xl bg-pink-500 text-white px-6 sm:px-8 py-3 sm:py-4 shadow-soft hover:bg-pink-600 transition-colors font-medium text-base sm:text-lg disabled:opacity-50"
                >
                  <Heart className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  {addingToCart ? 'Processing...' : 'Buy Now'}
                </button>
              </M.div>


              {/* Trust Indicators */}
              <M.div 
                variants={stagger(0.1)} 
                className="grid grid-cols-3 gap-2 sm:gap-4 max-w-md mx-auto lg:mx-0"
              >
                {[
                  { icon: Star, text: '4.9★ Rating', subtext: '25k+ reviews' },
                  { icon: Truck, text: 'Free Shipping', subtext: 'Worldwide' },
                  { icon: Shield, text: '30-Day', subtext: 'Money Back' }
                ].map(({ icon: Icon, text, subtext }, index) => (
                  <M.div 
                    key={index}
                    variants={popIn} 
                    className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center border border-white/20"
                  >
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white mx-auto mb-1 sm:mb-2" />
                    <p className="text-xs sm:text-sm font-medium text-white">{text}</p>
                    <p className="text-xs text-gray-300">{subtext}</p>
                  </M.div>
                ))}
              </M.div>
            </M.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-glaze">
        <div className="container mx-auto px-6 sm:px-8 lg:px-4">
          <M.div 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true, amount: 0.3 }} 
            variants={stagger()}
            className="text-center mb-16"
          >
            <M.h2 variants={fadeUp} className="h2 text-ink mb-4">
              Why Choose Glazed?
            </M.h2>
            <M.p variants={fadeUp} className="lead text-muted max-w-2xl mx-auto">
              Professional-quality hair care that delivers results from the very first use.
            </M.p>
          </M.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: 'Melts Knots',
                description: 'Advanced formula gently untangles even the most stubborn knots without damage.',
                icon: '✨'
              },
              {
                title: 'Boosts Shine',
                description: 'Instant luminosity that makes your hair look healthy and vibrant.',
                icon: '💫'
              },
              {
                title: 'Revives Dull Hair',
                description: 'Brings back life to tired, damaged hair with nourishing ingredients.',
                icon: '🌟'
              }
            ].map((feature, index) => (
              <M.div 
                key={index}
                initial="hidden" 
                whileInView="show" 
                viewport={{ once: true }} 
                variants={fadeUp}
                className="glaze-card p-8 text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-ink mb-3">{feature.title}</h3>
                <p className="text-muted">{feature.description}</p>
              </M.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-brand-600">
        <div className="container mx-auto px-4 text-center">
          <M.div 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true }} 
            variants={stagger()}
          >
            <M.h2 variants={fadeUp} className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              Ready to Transform Your Hair?
            </M.h2>
            <M.p variants={fadeUp} className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have discovered the magic of Glazed.
            </M.p>
            <M.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleBuyNow}
                disabled={addingToCart}
                className="inline-flex items-center justify-center rounded-xl bg-white text-brand-600 px-8 py-4 shadow-soft hover:bg-gray-100 transition-colors font-medium text-lg disabled:opacity-50"
              >
                <Heart className="h-5 w-5 mr-2" />
                Buy Now
              </button>
            </M.div>
          </M.div>
        </div>
      </section>

      {/* Mobile Sticky Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/90 backdrop-blur border-t border-line p-3 md:hidden">
        <div className="flex items-center justify-between gap-3">
          <div className="text-sm">
            <div className="font-medium text-ink">{quantity} × {product.title}</div>
            <div className="text-xs text-muted">
              {quantity >= 2 ? '2 for £29.99 auto‑applies' : 'Add one more for 2 for £29.99'}
            </div>
          </div>
          <button 
            onClick={handleBuyNow} 
            disabled={addingToCart}
            className="px-4 h-10 rounded-lg bg-pink-500 text-white font-semibold hover:bg-pink-600 transition-colors disabled:opacity-50"
          >
            {addingToCart ? 'Processing...' : 'Buy Now'}
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}