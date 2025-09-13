'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative w-16 h-16">
              <Image
                src="/logotran.png"
                alt="Glazed Hair Drizzle"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-200"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link
              href="/product"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Product
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              About
            </Link>
            <Link
              href="/faq"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/product"
              className="bg-glazed-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Shop Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/product"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Product
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/faq"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/product"
                className="bg-glazed-blue text-white px-6 py-3 rounded-lg font-semibold w-full text-center mt-4 hover:bg-blue-700 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop Now
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}