'use client';

import { useState, useEffect } from 'react';
import { CheckCircleIcon, DocumentDuplicateIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

interface CouponCardProps {
  code: string;
  email?: string;
}

export default function CouponCard({ code, email }: CouponCardProps) {
  const [isCopied, setIsCopied] = useState(false);
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Hide confetti after animation completes
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    
    // Reset the copied state after 2 seconds
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  // Generate confetti elements
  const confetti = Array(50).fill(null).map((_, i) => (
    <motion.div
      key={i}
      className="confetti"
      style={{
        left: `${Math.random() * 100}%`,
        backgroundColor: ['#F4B400', '#29B7E6', '#FF3B8D', '#FFFFFF'][Math.floor(Math.random() * 4)],
        width: `${Math.random() * 10 + 5}px`,
        height: `${Math.random() * 10 + 5}px`,
        borderRadius: Math.random() > 0.5 ? '50%' : '0',
      }}
      initial={{ y: -50, opacity: 1, rotate: 0 }}
      animate={{
        y: window.innerHeight + 100,
        x: Math.random() * 200 - 100,
        rotate: Math.random() * 720,
        opacity: 0,
      }}
      transition={{
        duration: Math.random() * 2 + 2,
        ease: 'easeOut',
        delay: Math.random() * 0.5,
      }}
    />
  ));

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-glz-honey/20 to-glz-rose/20 rounded-2xl p-0.5">
      <div className="bg-ink rounded-2xl p-8 text-center">
        <AnimatePresence>
          {showConfetti && (
            <div className="fixed inset-0 pointer-events-none">
              {confetti}
            </div>
          )}
        </AnimatePresence>

        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
          <CheckCircleIcon className="h-8 w-8 text-green-600" aria-hidden="true" />
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-2">Sweet! Your Code Is Ready 🍯</h2>
        
        <p className="text-ink/80 mb-6">
          Use this code at checkout within 30 days.
          {email && ' We\'ve also emailed it to you.'}
        </p>
        
        <div 
          className="bg-white/10 rounded-xl p-4 mb-6 cursor-pointer hover:bg-white/20 transition-colors group"
          onClick={copyToClipboard}
        >
          <div className="font-mono text-2xl font-bold tracking-wider text-glz-honey mb-1">
            {code}
          </div>
          <div className="text-sm text-ink/60 flex items-center justify-center space-x-1">
            {isCopied ? (
              <>
                <CheckCircleIcon className="h-4 w-4 text-green-400" />
                <span>Copied to clipboard</span>
              </>
            ) : (
              <>
                <DocumentDuplicateIcon className="h-4 w-4" />
                <span>Click to copy</span>
              </>
            )}
          </div>
        </div>
        
        <a
          href="#" // Replace with your shop URL
          className="inline-flex items-center justify-center w-full px-6 py-3 border border-transparent rounded-xl shadow-sm text-base font-medium text-ink bg-glz-honey hover:bg-glz-honey/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-glz-honey/50"
        >
          <ShoppingBagIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          Shop GLAZED Now
        </a>
        
        <p className="mt-4 text-sm text-ink/60">
          Thank you for your review! We appreciate your support. ❤️
        </p>
      </div>
    </div>
  );
}
