'use client';

import Image from 'next/image';

export default function QRHero() {
  return (
    <div className="relative py-8 text-center">
      {/* Simple Logo */}
      <div className="mb-6">
        <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-full p-4 shadow-lg">
          <Image
            src="/logotran.png"
            alt="Glazed Hair Drizzle"
            width={64}
            height={64}
            className="w-full h-full object-contain"
            priority
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Headline */}
        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          Get 30% Off Your Next Order 🎉
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-lg leading-relaxed mb-6 max-w-sm mx-auto">
          Thanks for trying GLAZED. Leave an honest TikTok review of your purchase, upload a quick screenshot here, and we'll instantly unlock a 30% thank-you code.
        </p>

        {/* Trust Indicators */}
        <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <span>🔒</span>
            <span>Secure</span>
          </div>
          <div className="flex items-center space-x-1">
            <span>⚡</span>
            <span>Instant</span>
          </div>
          <div className="flex items-center space-x-1">
            <span>🎁</span>
            <span>30% Off</span>
          </div>
        </div>
      </div>
    </div>
  );
}