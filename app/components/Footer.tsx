import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-ink/90 text-white/60 mt-16 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-glz-honey rounded-full flex items-center justify-center">
                <span className="text-ink font-bold text-sm">G</span>
              </div>
              <span className="font-bold">GLAZED</span>
            </div>
            <p className="text-sm mt-1">© {currentYear} GLAZED. All rights reserved.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <Link href="/blog" className="text-sm hover:text-white transition-colors">
              Blog
            </Link>
            <Link href="/privacy" className="text-sm hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-sm hover:text-white transition-colors">
              Contact Us
            </Link>
            <Link href="#" className="text-sm hover:text-white transition-colors">
              Refund Policy
            </Link>
            <Link href="#" className="text-sm hover:text-white transition-colors">
              Shipping Policy
            </Link>
          </div>
          
          <div className="mt-4 md:mt-0">
            <p className="text-xs text-center md:text-right">
              TikTok is a trademark of TikTok Inc.<br />
              This promotion is not sponsored, endorsed, or administered by TikTok.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
