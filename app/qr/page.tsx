'use client';

import { useState, useRef, useEffect } from 'react';
import { StarIcon, XMarkIcon, PhotoIcon, ArrowPathIcon, CheckCircleIcon, SparklesIcon } from '@heroicons/react/24/outline';
import CountdownTimer from '../../components/CountdownTimer';
import Image from 'next/image';

// Function to generate a random coupon code
const generateCouponCode = () => {
  const prefix = 'GLAZED-40-';
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let result = '';
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return prefix + result;
};

// HoneyDripBorder component for the top decoration
const HoneyDripBorder = () => (
  <div className="absolute top-0 left-0 right-0 h-12 overflow-hidden">
    <div className="absolute -top-10 w-full h-20 bg-amber-400 rounded-b-full"></div>
    <div className="absolute -top-5 left-1/4 w-12 h-12 bg-amber-400 rounded-full"></div>
    <div className="absolute -top-3 left-1/2 w-8 h-8 bg-amber-400 rounded-full"></div>
    <div className="absolute -top-6 right-1/4 w-10 h-10 bg-amber-400 rounded-full"></div>
  </div>
);

// Floating donut decoration
const FloatingDonut = ({ top, left, size, rotation, delay }: { top: string; left: string; size: string; rotation: number; delay: number }) => (
  <div 
    className="absolute z-0 pointer-events-none"
    style={{
      top,
      left,
      width: size,
      height: size,
      animation: `float 6s ease-in-out ${delay}s infinite`,
      transform: `rotate(${rotation}deg)`
    }}
  >
    <div className="w-full h-full rounded-full bg-pink-300 border-4 border-pink-400 flex items-center justify-center">
      <div className="w-3/4 h-3/4 rounded-full bg-amber-200 border-2 border-amber-300"></div>
    </div>
  </div>
);

export default function QRLandingPage() {
  const [couponCode, setCouponCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState('');
  const [preview, setPreview] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      const code = generateCouponCode();
      setCouponCode(code);
      
      // Scroll to coupon after state updates
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

  // Add floating donuts
  const donuts = [
    { top: '10%', left: '5%', size: '60px', rotation: 15, delay: 0 },
    { top: '15%', left: '85%', size: '40px', rotation: -10, delay: 0.5 },
    { top: '60%', left: '90%', size: '50px', rotation: 20, delay: 1 },
    { top: '70%', left: '5%', size: '45px', rotation: -15, delay: 1.5 },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-50 text-gray-900 overflow-x-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {donuts.map((donut, i) => (
          <FloatingDonut key={i} {...donut} />
        ))}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-amber-200 rounded-full mix-blend-multiply opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-48 h-48 bg-blue-200 rounded-full mix-blend-multiply opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 py-16">
        {/* Honey Drip Border */}
        <div className="relative bg-gradient-to-r from-blue-400 to-blue-500 rounded-t-3xl pt-12 pb-8 px-6 mb-8 overflow-hidden">
          <HoneyDripBorder />
          <div className="relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3">THANK YOU, GLAZED GODDESS! ✨</h1>
            <p className="text-blue-100 text-lg md:text-xl">Drop your 5-star drip &amp; unlock your reward</p>
          </div>
        </div>

        {/* Countdown Timer in a honey bubble */}
        <div className="bg-amber-100 border-4 border-amber-300 rounded-full w-48 h-48 mx-auto mb-10 flex items-center justify-center relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-300 to-amber-400 opacity-30 animate-pulse"></div>
          <div className="relative z-10 text-center">
            <p className="text-amber-800 text-sm font-medium mb-1">SPECIAL GLAZE CODE EXPIRES IN</p>
            <div className="text-2xl font-bold text-amber-900">
              {isClient && <CountdownTimer initialMinutes={5} />}
            </div>
          </div>
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-amber-200 rounded-full blur-md opacity-70"></div>
        </div>

        {!couponCode ? (
          // Review Form
          <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden border-2 border-amber-200 relative">
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent pointer-events-none"></div>
            
            <div className="p-6 sm:p-8 relative z-10">
              {/* Star Rating */}
              <div className="flex justify-center space-x-1 mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-amber-300 to-amber-500 rounded-full transform rotate-12 scale-110"></div>
                    <StarIcon className="h-10 w-10 text-amber-400 relative z-10 drop-shadow-lg" />
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Input */}
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">
                    Where should we drizzle your code?
                  </label>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-100 to-pink-100 rounded-xl transform -rotate-1"></div>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="relative w-full px-5 py-4 bg-white/80 backdrop-blur-sm rounded-xl border-2 border-amber-200 focus:ring-2 focus:ring-amber-400 focus:border-transparent text-gray-800 placeholder-amber-400 font-medium"
                      placeholder="your@glow.com"
                    />
                  </div>
                </div>

                {/* Review Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 ml-1">
                    Upload Your 5-Star Review
                  </label>
                  {preview ? (
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-pink-200 rounded-2xl transform rotate-1 group-hover:rotate-0 transition-transform"></div>
                      <div className="relative bg-white rounded-xl overflow-hidden border-2 border-amber-300">
                        <div className="relative w-full h-48 bg-gray-50">
                          <Image 
                            src={preview}
                            alt="Review preview"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <button
                          type="button"
                          onClick={handleRemoveImage}
                          className="absolute top-2 right-2 bg-amber-500 hover:bg-amber-600 rounded-full p-1.5 transition-colors shadow-md"
                        >
                          <XMarkIcon className="h-4 w-4 text-white" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div 
                      className="relative group cursor-pointer"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-pink-200 rounded-2xl transform rotate-1 group-hover:rotate-0 transition-transform"></div>
                      <div className="relative bg-gradient-to-br from-amber-50 to-pink-50 border-2 border-dashed border-amber-300 rounded-2xl p-8 text-center transition-all group-hover:bg-opacity-90">
                        <div className="bg-amber-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                          <PhotoIcon className="h-8 w-8 text-amber-500" />
                        </div>
                        <p className="text-sm text-amber-800 font-medium mb-3">Screenshot of your 5★ review</p>
                        <div className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-amber-400 to-pink-400 text-white font-bold rounded-full text-sm shadow-lg hover:shadow-amber-200/50 transition-all group-hover:scale-105">
                          <SparklesIcon className="h-4 w-4 mr-1.5" />
                          Upload Screenshot
                        </div>
                        <p className="text-xs text-amber-600 mt-3">Show your 5★ review with username and product title</p>
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="hidden"
                          required
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || !preview}
                  className={`w-full py-5 px-6 rounded-2xl font-extrabold text-lg tracking-wide relative overflow-hidden group ${
                    isSubmitting || !preview 
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-amber-500 to-pink-500 text-white hover:shadow-xl hover:shadow-amber-200/50 transform hover:-translate-y-0.5 transition-all'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <ArrowPathIcon className="h-5 w-5 animate-spin mr-2" />
                      <span>Glazing Your Code...</span>
                    </div>
                  ) : (
                    <>
                      <span className="relative z-10">CLAIM MY 40% OFF GLASSY CODE</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        ) : (
          // Coupon Display
          <div id="coupon-section" className="text-center">
            <div className="relative bg-gradient-to-br from-blue-400 to-blue-600 p-8 rounded-3xl shadow-2xl overflow-hidden">
              {/* Honey drip effect */}
              <div className="absolute -top-20 -left-10 w-40 h-40 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
              <div className="absolute -bottom-20 -right-10 w-60 h-60 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-4">
                  <CheckCircleIcon className="h-12 w-12 text-white" />
                </div>
                <h2 className="text-3xl font-extrabold text-white mb-3">Your 40% Off Code Is Ready! 🎉</h2>
                <p className="text-blue-100 text-lg mb-6">Use this code at checkout to save on your next bottle</p>
                
                <div className="bg-white/20 backdrop-blur-sm p-5 rounded-2xl mb-6 border-2 border-white/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -rotate-2 scale-105"></div>
                  <div className="relative">
                    <div className="text-sm font-semibold text-blue-100 mb-1 tracking-wider">YOUR PROMO CODE</div>
                    <div className="text-4xl font-black font-mono tracking-wider text-white bg-gradient-to-r from-amber-300 to-white bg-clip-text text-transparent">
                      {couponCode}
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(couponCode);
                    // Could add a toast notification here
                  }}
                  className="bg-white text-blue-600 px-8 py-3.5 rounded-xl font-extrabold hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-200/50 flex items-center mx-auto"
                >
                  <span className="mr-2">Copy Code</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                </button>
                
                <p className="text-sm text-blue-100 mt-4">Code valid for 30 days. One use per customer.</p>
              </div>
            </div>
            
            <div className="mt-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border-2 border-amber-100">
              <h3 className="font-extrabold text-xl text-gray-800 mb-4 flex items-center justify-center">
                <span className="bg-gradient-to-r from-amber-400 to-pink-400 bg-clip-text text-transparent">How to Use Your Code</span>
              </h3>
              <ol className="space-y-4 text-left">
                <li className="flex items-start">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 text-white font-bold text-sm mr-3 mt-0.5">1</span>
                  <span className="text-gray-700">Add items to your cart at checkout</span>
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
