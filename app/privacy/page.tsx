import type { Metadata } from "next";
import Announcement from '@/components/nav/Announcement'
import Navbar from '@/components/nav/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: "Privacy Policy - Glazed Hair Drizzle",
  description: "Learn how we collect, use, and protect your personal information.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Announcement />
      <Navbar />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 sm:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold text-ink mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-muted mb-8">
                Learn how we collect, use, and protect your personal information.
              </p>
              <p className="text-sm text-muted">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 sm:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">

              <div className="space-y-12">
                <section className="bg-white rounded-2xl p-8 shadow-soft">
                  <h2 className="text-2xl font-bold text-ink mb-6">1. Information We Collect</h2>
                  <p className="text-muted mb-6">
                    We collect information you provide directly to us, such as when you create an account, 
                    make a purchase, or contact us for support.
                  </p>
                  <ul className="list-disc list-inside text-muted space-y-3 ml-4">
                    <li>Personal information (name, email address, phone number)</li>
                    <li>Payment information (processed securely through Shopify)</li>
                    <li>Shipping and billing addresses</li>
                    <li>Communication preferences</li>
                    <li>Product reviews and feedback</li>
                  </ul>
                </section>

                <section className="bg-white rounded-2xl p-8 shadow-soft">
                  <h2 className="text-2xl font-bold text-ink mb-6">2. How We Use Your Information</h2>
                  <p className="text-muted mb-6">We use the information we collect to:</p>
                  <ul className="list-disc list-inside text-muted space-y-3 ml-4">
                    <li>Process and fulfill your orders</li>
                    <li>Send you order confirmations and shipping updates</li>
                    <li>Provide customer support</li>
                    <li>Send you marketing communications (with your consent)</li>
                    <li>Improve our products and services</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </section>

                <section className="bg-white rounded-2xl p-8 shadow-soft">
                  <h2 className="text-2xl font-bold text-ink mb-6">3. Information Sharing</h2>
                  <p className="text-muted mb-6">
                    We do not sell, trade, or otherwise transfer your personal information to third parties, 
                    except in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-muted space-y-3 ml-4">
                    <li>With service providers who assist us in operating our website and conducting our business</li>
                    <li>When required by law or to protect our rights</li>
                    <li>In connection with a business transfer or acquisition</li>
                    <li>With your explicit consent</li>
                  </ul>
                </section>

                <section className="bg-white rounded-2xl p-8 shadow-soft">
                  <h2 className="text-2xl font-bold text-ink mb-6">4. Data Security</h2>
                  <p className="text-muted">
                    We implement appropriate security measures to protect your personal information against 
                    unauthorized access, alteration, disclosure, or destruction. However, no method of 
                    transmission over the internet is 100% secure.
                  </p>
                </section>

                <section className="bg-white rounded-2xl p-8 shadow-soft">
                  <h2 className="text-2xl font-bold text-ink mb-6">5. Cookies and Tracking</h2>
                  <p className="text-muted">
                    We use cookies and similar tracking technologies to enhance your browsing experience, 
                    analyze site traffic, and personalize content. You can control cookie settings through 
                    your browser preferences.
                  </p>
                </section>

                <section className="bg-white rounded-2xl p-8 shadow-soft">
                  <h2 className="text-2xl font-bold text-ink mb-6">6. Your Rights</h2>
                  <p className="text-muted mb-6">You have the right to:</p>
                  <ul className="list-disc list-inside text-muted space-y-3 ml-4">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Delete your personal information</li>
                    <li>Opt out of marketing communications</li>
                    <li>Data portability</li>
                    <li>Withdraw consent</li>
                  </ul>
                </section>

                <section className="bg-white rounded-2xl p-8 shadow-soft">
                  <h2 className="text-2xl font-bold text-ink mb-6">7. Third-Party Services</h2>
                  <p className="text-muted">
                    Our website may contain links to third-party websites. We are not responsible for 
                    the privacy practices of these external sites. We encourage you to review their 
                    privacy policies.
                  </p>
                </section>

                <section className="bg-white rounded-2xl p-8 shadow-soft">
                  <h2 className="text-2xl font-bold text-ink mb-6">8. Children's Privacy</h2>
                  <p className="text-muted">
                    Our services are not directed to children under 13. We do not knowingly collect 
                    personal information from children under 13. If you believe we have collected 
                    such information, please contact us immediately.
                  </p>
                </section>

                <section className="bg-white rounded-2xl p-8 shadow-soft">
                  <h2 className="text-2xl font-bold text-ink mb-6">9. Changes to This Policy</h2>
                  <p className="text-muted">
                    We may update this privacy policy from time to time. We will notify you of any 
                    changes by posting the new policy on this page and updating the "Last updated" date.
                  </p>
                </section>

                <section className="bg-white rounded-2xl p-8 shadow-soft">
                  <h2 className="text-2xl font-bold text-ink mb-6">10. Contact Us</h2>
                  <p className="text-muted mb-6">
                    If you have any questions about this privacy policy or our data practices, 
                    please contact us at:
                  </p>
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                    <p className="text-ink font-bold mb-2">Glazed Hair Drizzle</p>
                    <p className="text-muted mb-1">Email: privacy@glazed-hair.com</p>
                    <p className="text-muted mb-1">Phone: 1-800-GLAZED-1</p>
                    <p className="text-muted">Address: [Your Business Address]</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
