'use client';

import { useState, useRef } from 'react';
import { StarIcon, XMarkIcon, PhotoIcon, ArrowPathIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import CountdownTimer from '../../components/CountdownTimer';
import GlazedReviewPage from '@/components/GlazedReviewPage';

// Function to generate a random coupon code
const generateCouponCode = () => {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let result = '';
  for (let i = 0; i < 8; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

export default function QRLandingPage() {
  const [couponCode, setCouponCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState('');
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      const code = generateCouponCode();
      setCouponCode(code);
      
      // Scroll to coupon
      setTimeout(() => {
        const element = document.getElementById('coupon-section');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 text-gray-900">
      <div className="max-w-2xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Thank You! 🎉</h1>
          <p className="text-xl text-gray-700">We'd love your honest review</p>
        </div>

        {/* Countdown Timer */}
        <CountdownTimer />

        {!couponCode ? (
          // Review Form
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-6 sm:p-8">
              <div className="text-center mb-6">
                <div className="flex justify-center space-x-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <StarIcon key={i} className="h-8 w-8 text-amber-400" />
                  ))}
                </div>
                <h2 className="text-2xl font-bold mb-2">How was your experience?</h2>
                <p className="text-gray-600">Share your thoughts to help us improve</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Review Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Upload Your 5-Star Review
                  </label>
                  {preview ? (
                    <div className="relative">
                      <img 
                        src={preview} 
                        alt="Review preview" 
                        className="w-full rounded-xl border-2 border-dashed border-amber-400/50" 
                      />
                      <button
                        type="button"
                        onClick={handleRemoveImage}
                        className="absolute -top-2 -right-2 bg-amber-500 rounded-full p-1 hover:bg-amber-600 transition-colors"
                      >
                        <XMarkIcon className="h-4 w-4 text-white" />
                      </button>
                    </div>
                  ) : (
                    <div className="border-2 border-dashed border-amber-400/50 rounded-xl p-8 text-center cursor-pointer hover:bg-amber-50/50 transition-colors"
                         onClick={() => fileInputRef.current?.click()}>
                      <PhotoIcon className="mx-auto h-12 w-12 text-amber-400/50 mb-3" />
                      <p className="text-sm text-gray-500 mb-2">Screenshot of your 5-star review</p>
                      <button
                        type="button"
                        className="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition-colors text-sm"
                      >
                        Choose File
                      </button>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                        required
                      />
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || !preview}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-4 rounded-xl font-bold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <ArrowPathIcon className="h-5 w-5 animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <StarIcon className="h-5 w-5" />
                      <span>Get My 40% Off Code</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        ) : (
          // Coupon Display
          <div id="coupon-section" className="text-center">
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-8 rounded-2xl shadow-lg">
              <CheckCircleIcon className="h-16 w-16 text-white mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-2">Your 40% Off Code Is Ready!</h2>
              <p className="text-amber-100 mb-6">Use this code at checkout to save on your next order</p>
              
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl mb-6">
                <div className="text-sm text-amber-100 mb-1">YOUR PROMO CODE</div>
                <div className="text-4xl font-bold font-mono tracking-wider text-white">{couponCode}</div>
              </div>
              
              <button
                onClick={() => {
                  navigator.clipboard.writeText(couponCode);
                  // Could add a toast notification here
                }}
                className="bg-white text-amber-600 px-6 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-colors"
              >
                Copy Code
              </button>
              
              <p className="text-sm text-amber-100 mt-4">Code valid for 30 days. One use per customer.</p>
            </div>
            
            <div className="mt-8 bg-white p-6 rounded-2xl shadow">
              <h3 className="font-bold text-lg mb-3">How to Use Your Code</h3>
              <ol className="text-left space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">1</span>
                  <span>Add items to your cart at checkout</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">2</span>
                  <span>Paste your code at checkout</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-amber-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">3</span>
                  <span>Enjoy your 40% discount!</span>
                </li>
              </ol>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} GLAZED. All rights reserved.</p>
          <p className="mt-1">This offer is valid for a limited time only.</p>
        </div>
      </div>
    </main>
  );
}
