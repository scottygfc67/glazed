'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero.png"
          alt="Glazed Hair Drizzle - Premium Hair Colors"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your Hair with
            <span className="block text-yellow-300">
              Glazed Drizzle Colors
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
            Professional-quality hair colors that deliver vibrant, long-lasting results.
            Express your unique style with our premium collection.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/product"
              className="bg-yellow-500 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Shop Now
            </Link>

            <Link
              href="#features"
              className="bg-blue-600 text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Learn More
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">25,000+</div>
              <div className="text-white/80">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">4.9★</div>
              <div className="text-white/80">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">30-Day</div>
              <div className="text-white/80">Money Back</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}