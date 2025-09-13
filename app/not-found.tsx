import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found - Glazed Hair Drizzle",
  description: "The page you're looking for doesn't exist.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-9xl font-bold gradient-text mb-4">404</h1>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Oops! Page Not Found
            </h2>
            <p className="text-xl text-muted mb-8">
              The page you're looking for doesn't exist or has been moved. 
              Don't worry, let's get you back on track!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/"
              className="gradient-bg text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-glazed-blue/25 transition-all duration-300 transform hover:scale-105"
            >
              Go Home
            </Link>
            <Link
              href="/product"
              className="bg-card border border-border text-foreground px-8 py-4 rounded-full font-bold text-lg hover:border-glazed-blue/50 transition-all duration-300"
            >
              Shop Now
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link
              href="/product"
              className="bg-card border border-border rounded-2xl p-6 hover:border-glazed-blue/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-glazed-blue rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Shop Products</h3>
              <p className="text-muted text-sm">Browse our collection of premium hair colors</p>
            </Link>

            <Link
              href="/faq"
              className="bg-card border border-border rounded-2xl p-6 hover:border-glazed-pink/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-glazed-pink rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Get Help</h3>
              <p className="text-muted text-sm">Find answers to common questions</p>
            </Link>

            <Link
              href="/contact"
              className="bg-card border border-border rounded-2xl p-6 hover:border-glazed-blue/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-glazed-blue rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Contact Us</h3>
              <p className="text-muted text-sm">Get in touch with our support team</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
