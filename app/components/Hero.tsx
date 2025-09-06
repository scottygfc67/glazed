import Image from 'next/image';

export default function Hero() {
  return (
    <section className="honey-card relative overflow-hidden mb-12">
      <div className="honey-drip">
        <div className="container mx-auto px-6 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-ink">
                Get 40% OFF — Just For Your 5★ TikTok Review
              </h1>
              <p className="text-lg text-ink/90 mb-6">
                Post your review, upload a quick screenshot here, and your 40% code appears instantly.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-ink">
                  &lt; 60s to complete
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-ink">
                  Instant code
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-ink">
                  Secure upload
                </span>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="relative aspect-square w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-glz-honey/20 to-glz-rose/20 rounded-2xl transform rotate-6 scale-95"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 p-4">
                  {/* Placeholder for product image - replace with actual image */}
                  <div className="w-full h-full bg-gray-100/20 rounded-lg flex items-center justify-center">
                    <span className="text-ink/40">Product Image</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
