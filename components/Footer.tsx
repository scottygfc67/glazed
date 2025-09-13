import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4 group">
              <div className="relative w-10 h-10">
                <Image
                  src="/logotran.png"
                  alt="Glazed Hair Drizzle"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <span className="text-xl font-bold gradient-text">Glazed</span>
            </Link>
            <p className="text-muted mb-6 max-w-md">
              Transform your hair with our premium drizzle colors. Professional quality, 
              vibrant results, and endless possibilities for your unique style.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center hover:bg-glazed-blue hover:border-glazed-blue transition-all duration-200 group"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-foreground group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center hover:bg-glazed-blue hover:border-glazed-blue transition-all duration-200 group"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5 text-foreground group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.58.5 3.09 1.12 4.38.56 1.19 1.29 2.24 2.12 3.15.84.9 1.8 1.66 2.88 2.25.5.25 1.02.47 1.55.66.05-.5.08-1.01.08-1.52 0-2.5-.5-4.9-1.5-7.1-.5-1.1-1.2-2.1-2.1-2.9-.9-.8-1.9-1.4-3-1.8-1.1-.4-2.3-.6-3.5-.6-.1 0-.2 0-.3.01z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center hover:bg-glazed-blue hover:border-glazed-blue transition-all duration-200 group"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5 text-foreground group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/product" className="text-muted hover:text-glazed-blue transition-colors duration-200">
                  Shop Now
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted hover:text-glazed-blue transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted hover:text-glazed-blue transition-colors duration-200">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted hover:text-glazed-blue transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/shipping" className="text-muted hover:text-glazed-blue transition-colors duration-200">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-muted hover:text-glazed-blue transition-colors duration-200">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted hover:text-glazed-blue transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted hover:text-glazed-blue transition-colors duration-200">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted text-sm">
            © {currentYear} Glazed Hair Drizzle. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <span className="text-muted text-sm">Made with ❤️ for hair enthusiasts</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
