import type { Metadata } from "next";

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
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
          <p className="text-muted mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
              <p className="text-muted mb-4">
                We collect information you provide directly to us, such as when you create an account, 
                make a purchase, or contact us for support.
              </p>
              <ul className="list-disc list-inside text-muted space-y-2">
                <li>Personal information (name, email address, phone number)</li>
                <li>Payment information (processed securely through Shopify)</li>
                <li>Shipping and billing addresses</li>
                <li>Communication preferences</li>
                <li>Product reviews and feedback</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. How We Use Your Information</h2>
              <p className="text-muted mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-muted space-y-2">
                <li>Process and fulfill your orders</li>
                <li>Send you order confirmations and shipping updates</li>
                <li>Provide customer support</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our products and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Information Sharing</h2>
              <p className="text-muted mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties, 
                except in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-muted space-y-2">
                <li>With service providers who assist us in operating our website and conducting our business</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or acquisition</li>
                <li>With your explicit consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Data Security</h2>
              <p className="text-muted mb-4">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of 
                transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Cookies and Tracking</h2>
              <p className="text-muted mb-4">
                We use cookies and similar tracking technologies to enhance your browsing experience, 
                analyze site traffic, and personalize content. You can control cookie settings through 
                your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Your Rights</h2>
              <p className="text-muted mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-muted space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Delete your personal information</li>
                <li>Opt out of marketing communications</li>
                <li>Data portability</li>
                <li>Withdraw consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Third-Party Services</h2>
              <p className="text-muted mb-4">
                Our website may contain links to third-party websites. We are not responsible for 
                the privacy practices of these external sites. We encourage you to review their 
                privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Children's Privacy</h2>
              <p className="text-muted mb-4">
                Our services are not directed to children under 13. We do not knowingly collect 
                personal information from children under 13. If you believe we have collected 
                such information, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Changes to This Policy</h2>
              <p className="text-muted mb-4">
                We may update this privacy policy from time to time. We will notify you of any 
                changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contact Us</h2>
              <p className="text-muted mb-4">
                If you have any questions about this privacy policy or our data practices, 
                please contact us at:
              </p>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-foreground font-semibold mb-2">Glazed Hair Drizzle</p>
                <p className="text-muted">Email: privacy@glazed-hair.com</p>
                <p className="text-muted">Phone: 1-800-GLAZED-1</p>
                <p className="text-muted">Address: [Your Business Address]</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
