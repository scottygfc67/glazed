import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Glazed Hair Drizzle",
  description: "Learn about our mission to provide premium hair colors that empower self-expression and creativity.",
  openGraph: {
    title: "About Us - Glazed Hair Drizzle",
    description: "Learn about our mission to provide premium hair colors that empower self-expression and creativity.",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-glazed-blue/10 to-glazed-pink/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              About <span className="gradient-text">Glazed</span>
            </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              We're passionate about empowering self-expression through vibrant, 
              professional-quality hair colors that make you feel confident and beautiful.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-muted mb-6">
                  At Glazed, we believe that hair color is more than just a cosmetic choice—it's 
                  a form of self-expression, creativity, and confidence. Our mission is to provide 
                  premium-quality hair colors that empower you to express your unique style and 
                  personality.
                </p>
                <p className="text-lg text-muted mb-6">
                  We understand that every person is different, and that's why we've created a 
                  diverse range of vibrant colors that cater to all hair types and styles. 
                  Whether you're looking for a subtle change or a bold transformation, 
                  we have the perfect shade for you.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-glazed-blue rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Quality First</h3>
                    <p className="text-muted">Professional-grade formulas</p>
                  </div>
                </div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="aspect-square bg-gradient-to-br from-glazed-blue/20 to-glazed-pink/20 rounded-xl flex items-center justify-center">
                  <svg className="w-24 h-24 text-glazed-blue/50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Our Values
              </h2>
              <p className="text-xl text-muted max-w-3xl mx-auto">
                These core values guide everything we do and every product we create.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-glazed-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Quality</h3>
                <p className="text-muted">
                  We use only the finest ingredients and professional-grade formulas 
                  to ensure exceptional results every time.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-glazed-pink rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Innovation</h3>
                <p className="text-muted">
                  We continuously innovate and improve our products to stay at the 
                  forefront of hair color technology.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-glazed-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H5V21H19V9Z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Accessibility</h3>
                <p className="text-muted">
                  We believe everyone deserves access to high-quality hair colors, 
                  regardless of their background or experience level.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-glazed-pink rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Sustainability</h3>
                <p className="text-muted">
                  We're committed to sustainable practices and environmentally 
                  friendly packaging wherever possible.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-glazed-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Community</h3>
                <p className="text-muted">
                  We foster a supportive community where hair enthusiasts can 
                  share tips, inspiration, and celebrate their unique styles.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-glazed-pink rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Empowerment</h3>
                <p className="text-muted">
                  We believe in empowering individuals to express their authentic 
                  selves through bold, beautiful hair colors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Ready to Express Yourself?
            </h2>
            <p className="text-xl text-muted mb-8">
              Join thousands of satisfied customers who have discovered the magic of Glazed hair colors.
            </p>
            <a
              href="/product"
              className="gradient-bg text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-glazed-blue/25 transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Shop Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
