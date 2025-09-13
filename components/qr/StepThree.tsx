'use client';

import { useState, useEffect } from 'react';


interface StepThreeProps {
  generatedCode: string;
}

export default function StepThree({ generatedCode }: StepThreeProps) {
  const [showConfetti, setShowConfetti] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Trigger confetti animation when code is revealed
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  }, [generatedCode]);

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(generatedCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = generatedCode;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShopNow = () => {
    // This would redirect to the product page with the discount code applied
    window.open(`/product?discount=${generatedCode}`, '_blank');
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            >
              {['🎉', '✨', '🎊', '💫'][Math.floor(Math.random() * 4)]}
            </div>
          ))}
        </div>
      )}

      <div className="text-center relative z-10">
        {/* Success Icon */}
        <div className="text-6xl mb-4 animate-bounce">🎉</div>
        
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Your 30% Code is Ready!
        </h2>
        
        <p className="text-gray-600 mb-6">
          Thanks for your honest review! Here's your exclusive discount code.
        </p>

        {/* Discount Code Display */}
        <div className="bg-gradient-to-r from-[#FFC22E] to-[#FF4FB4] rounded-2xl p-6 mb-6 shadow-lg">
          <p className="text-sm text-white/80 mb-2">Your exclusive code:</p>
          <div className="flex items-center justify-center space-x-3">
            <code className="text-2xl font-bold text-white font-mono tracking-wider">
              {generatedCode}
            </code>
            <button
              onClick={handleCopyCode}
              className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition-all duration-200 active:scale-95"
            >
              {copied ? '✓' : '📋'}
            </button>
          </div>
          {copied && (
            <p className="text-white/80 text-sm mt-2 animate-pulse">
              Copied to clipboard!
            </p>
          )}
        </div>

        {/* Usage Instructions */}
        <div className="bg-gradient-to-r from-[#35C1F1]/10 to-[#FF4FB4]/10 rounded-xl p-4 mb-6">
          <h3 className="font-bold text-gray-800 mb-2">How to use your code:</h3>
          <ol className="text-sm text-gray-600 space-y-1 text-left">
            <li>1. Click "Shop Now" below</li>
            <li>2. Add GLAZED products to your cart</li>
            <li>3. At checkout, enter code: <code className="bg-white px-2 py-1 rounded font-mono">{generatedCode}</code></li>
            <li>4. Enjoy 30% off your order!</li>
          </ol>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleShopNow}
            className="w-full bg-gradient-to-r from-[#35C1F1] to-[#FF4FB4] text-white py-4 px-6 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 active:scale-[.98]"
          >
            Shop with Code →
          </button>
          
          <button
            onClick={handleCopyCode}
            className="w-full border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-2xl font-medium hover:bg-gray-50 transition-all duration-200"
          >
            {copied ? 'Code Copied!' : 'Copy Code'}
          </button>
        </div>

        {/* Additional Info */}
        <div className="mt-6 text-xs text-gray-500 space-y-1">
          <p>• Code expires in 30 days</p>
          <p>• One-time use only</p>
          <p>• Cannot be combined with other offers</p>
        </div>
      </div>
    </div>
  );
}
