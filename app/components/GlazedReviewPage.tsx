'use client';

import { useState, useEffect, useRef } from 'react';
import { StarIcon, XMarkIcon, PhotoIcon, ArrowPathIcon } from '@heroicons/react/24/solid';

// Animated Honey Drip Component
const HoneyDrip = () => (
  <div className="absolute top-0 left-0 w-full overflow-hidden">
    <div className="relative h-16">
      <div className="absolute -top-10 left-1/2 w-40 h-40 bg-gradient-to-b from-yellow-400 to-amber-500 rounded-b-full transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-0 left-1/2 w-32 h-32 bg-yellow-300 rounded-b-full transform -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  </div>
);

// Sparkle Component
const Sparkle = () => (
  <div className="absolute animate-spin-slow">
    <div className="w-1 h-1 bg-yellow-200 rounded-full"></div>
  </div>
);

// Donut Timer Component
const DonutTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 6,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const newSeconds = prev.seconds - 1;
        const newMinutes = newSeconds < 0 ? prev.minutes - 1 : prev.minutes;
        const newHours = newMinutes < 0 ? prev.hours - 1 : prev.hours;
        
        if (newHours < 0) {
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0 };
        }
        
        return {
          hours: newHours,
          minutes: newMinutes < 0 ? 59 : newMinutes,
          seconds: newSeconds < 0 ? 59 : newSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-40 h-40 mx-auto mb-8">
      {/* Donut */}
      <div className="absolute inset-0 rounded-full border-8 border-pink-400"></div>
      <div className="absolute inset-2 rounded-full bg-pink-100 flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-bold text-pink-600">
            {String(timeLeft.hours).padStart(2, '0')}:
            {String(timeLeft.minutes).padStart(2, '0')}:
            {String(timeLeft.seconds).padStart(2, '0')}
          </div>
          <div className="text-xs text-pink-500">HURRY!</div>
        </div>
      </div>
    </div>
  );
};

// Star Rating Component
const StarRating = ({ rating = 5 }) => (
  <div className="flex justify-center space-x-1 mb-6">
    {[...Array(5)].map((_, i) => (
      <StarIcon 
        key={i} 
        className={`h-10 w-10 ${i < rating ? 'text-yellow-400' : 'text-gray-200'} 
          transform hover:scale-110 transition-transform duration-200`}
      />
    ))}
  </div>
);

export default function GlazedReviewPage() {
  const [email, setEmail] = useState('');
  const [preview, setPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        setPreview(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      // Handle successful submission
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-blue-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-pink-200 opacity-20"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-md mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-8 relative">
          <HoneyDrip />
          <h1 className="text-4xl font-bold text-pink-600 mb-2 mt-12">
            THANK YOU, <span className="text-blue-600">GLAZED</span> GODDESS!
          </h1>
          <p className="text-lg text-pink-700">Complete your drip review to claim 40% off!</p>
        </header>

        {/* Timer */}
        <div className="text-center mb-8">
          <DonutTimer />
          <p className="text-sm text-pink-700">Offer expires soon — claim your glaze discount!</p>
        </div>

        {/* Review Form */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-pink-100">
          <StarRating />
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-pink-700 mb-1">
                Where should we drizzle your reward?
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                  placeholder="your@email.com"
                />
                <div className="absolute -bottom-1 left-4 right-4 h-2 bg-pink-100 rounded-b-md opacity-50"></div>
              </div>
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-sm font-medium text-pink-700 mb-1">
                Show us your glossiest 5-star moment ✨
              </label>
              {preview ? (
                <div className="relative group">
                  <img 
                    src={preview} 
                    alt="Review preview" 
                    className="w-full h-48 object-cover rounded-xl border-2 border-pink-200"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setPreview(null);
                      if (fileInputRef.current) fileInputRef.current.value = '';
                    }}
                    className="absolute -top-2 -right-2 bg-pink-500 text-white rounded-full p-1 hover:bg-pink-600 transition-colors"
                  >
                    <XMarkIcon className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <div 
                  className="border-2 border-dashed border-pink-300 rounded-xl p-8 text-center cursor-pointer hover:bg-pink-50/50 transition-colors"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <PhotoIcon className="mx-auto h-12 w-12 text-pink-300 mb-3" />
                  <p className="text-sm text-pink-500">Upload your 5-star review screenshot</p>
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
              className={`w-full py-4 px-6 rounded-xl font-bold text-white ${
                isSubmitting || !preview 
                  ? 'bg-pink-300 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-200 shadow-lg'
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <ArrowPathIcon className="h-5 w-5 mr-2 animate-spin" />
                  Processing...
                </div>
              ) : (
                'CLAIM MY 40% OFF GLAZE CODE 💧'
              )}
            </button>
          </form>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center text-sm text-pink-600">
          <p>One use per customer. Code valid for 30 days.</p>
          <p className="mt-1">By submitting, you agree to our Terms and Privacy Policy</p>
        </footer>
      </div>
    </div>
  );
}
