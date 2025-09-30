'use client';

import { useState, useCallback } from 'react';
import { M, fadeUp, stagger } from '@/components/motion';
import { ShoppingCart, Plus, Minus, Trash2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { createCheckoutUrl } from '@/lib/checkout';
import { useCart } from '@/lib/cart-context';
import Announcement from '@/components/nav/Announcement';
import Navbar from '@/components/nav/Navbar';
import Footer from '@/components/Footer';

export default function CartPage() {
  const { cartItems, updateQuantity, removeItem, getTotalPrice, getTotalQuantity, getSavings, getOriginalPrice, clearCart } = useCart();
  const [checkingOut, setCheckingOut] = useState(false);


  const handleCheckout = async () => {
    if (cartItems.length === 0) return;
    
    try {
      setCheckingOut(true);
      
      // For now, just checkout with the first item (we'll improve this later)
      const firstItem = cartItems[0];
      const totalQuantity = getTotalQuantity();
      
      const checkoutUrl = await createCheckoutUrl(firstItem.variantId, totalQuantity);
      window.location.href = checkoutUrl;
    } catch (error) {
      console.error('Checkout failed:', error);
      alert('Checkout failed. Please try again.');
    } finally {
      setCheckingOut(false);
    }
  };


  if (cartItems.length === 0) {
    return (
      <>
        <Announcement />
        <Navbar />
        <div className="min-h-screen bg-glaze py-20">
          <div className="container mx-auto px-6 text-center">
            <M.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-md mx-auto"
            >
              <ShoppingCart className="h-24 w-24 text-gray-300 mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-ink mb-4">Your cart is empty</h1>
              <p className="text-muted mb-8">Looks like you haven't added any items to your cart yet.</p>
              <Link
                href="/product"
                className="inline-flex items-center px-6 py-3 bg-pink-500 text-white rounded-xl hover:bg-pink-600 transition-colors"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Continue Shopping
              </Link>
            </M.div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Announcement />
      <Navbar />
      
      <div className="min-h-screen bg-glaze py-8">
        <div className="container mx-auto px-6">
          <M.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-3xl font-bold text-ink">Shopping Cart</h1>
              <Link
                href="/product"
                className="inline-flex items-center text-pink-500 hover:text-pink-600 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Continue Shopping
              </Link>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl p-6 shadow-soft">
                  <h2 className="text-xl font-semibold text-ink mb-6">
                    Items ({getTotalQuantity()})
                  </h2>
                  
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <M.div
                        key={item.id}
                        variants={fadeUp}
                        className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        
                        <div className="flex-1">
                          <h3 className="font-medium text-ink">{item.name}</h3>
                          <div className="flex items-center gap-2">
                            {item.quantity >= 2 && (
                              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                                2 for £32.99
                              </span>
                            )}
                            <p className="text-pink-500 font-semibold">
                              £{(() => {
                                if (item.quantity >= 2) {
                                  const pairs = Math.floor(item.quantity / 2);
                                  const remaining = item.quantity % 2;
                                  return (pairs * 32.99 + remaining * item.price).toFixed(2);
                                }
                                return (item.price * item.quantity).toFixed(2);
                              })()}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-600 p-2"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </M.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl p-6 shadow-soft sticky top-8">
                  <h2 className="text-xl font-semibold text-ink mb-6">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    {getSavings() > 0 && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <div className="flex justify-between items-center">
                          <span className="text-green-800 text-sm font-medium">2 for £32.99 Applied!</span>
                          <span className="text-green-600 font-semibold">-£{getSavings().toFixed(2)}</span>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex justify-between">
                      <span className="text-muted">Subtotal</span>
                      <span className="font-medium">£{getTotalPrice().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted">Shipping</span>
                      <span className="text-green-600 font-medium">Free</span>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between text-lg font-semibold">
                        <span>Total</span>
                        <span>£{getTotalPrice().toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={handleCheckout}
                    disabled={checkingOut || cartItems.length === 0}
                    className="w-full bg-pink-500 text-white py-4 rounded-xl font-semibold hover:bg-pink-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {checkingOut ? 'Processing...' : 'Checkout'}
                  </button>
                  
                  <p className="text-xs text-muted text-center mt-4">
                    Secure checkout powered by Shopify
                  </p>
                </div>
              </div>
            </div>
          </M.div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}
