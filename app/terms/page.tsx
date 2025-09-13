import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Glazed Hair Drizzle",
  description: "Read our terms of service and conditions for using our website and purchasing our products.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
          <p className="text-muted mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted mb-4">
                By accessing and using this website, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please 
                do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Use License</h2>
              <p className="text-muted mb-4">
                Permission is granted to temporarily download one copy of the materials on Glazed 
                Hair Drizzle's website for personal, non-commercial transitory viewing only. This 
                is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-muted space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Product Information</h2>
              <p className="text-muted mb-4">
                We strive to provide accurate product descriptions and images. However, we do not 
                warrant that product descriptions or other content is accurate, complete, reliable, 
                current, or error-free. Colors may vary slightly from what is displayed on your screen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Pricing and Payment</h2>
              <p className="text-muted mb-4">
                All prices are subject to change without notice. We reserve the right to modify 
                or discontinue any product at any time. Payment must be received before order 
                processing and shipping.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Shipping and Delivery</h2>
              <p className="text-muted mb-4">
                We will make every effort to ship orders within the timeframes specified. However, 
                delivery times are estimates and not guaranteed. We are not responsible for delays 
                caused by shipping carriers or circumstances beyond our control.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Returns and Refunds</h2>
              <p className="text-muted mb-4">
                We offer a 30-day return policy for unopened products in their original packaging. 
                For opened products, we offer a 30-day satisfaction guarantee. Return shipping 
                costs are the responsibility of the customer unless the return is due to our error.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. User Accounts</h2>
              <p className="text-muted mb-4">
                When you create an account with us, you must provide information that is accurate, 
                complete, and current at all times. You are responsible for safeguarding the password 
                and for all activities that occur under your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Prohibited Uses</h2>
              <p className="text-muted mb-4">You may not use our website:</p>
              <ul className="list-disc list-inside text-muted space-y-2">
                <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>To submit false or misleading information</li>
                <li>To upload or transmit viruses or any other type of malicious code</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Disclaimer</h2>
              <p className="text-muted mb-4">
                The information on this website is provided on an "as is" basis. To the fullest 
                extent permitted by law, this Company excludes all representations, warranties, 
                conditions and terms relating to our website and the use of this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Limitations</h2>
              <p className="text-muted mb-4">
                In no event shall Glazed Hair Drizzle or its suppliers be liable for any damages 
                (including, without limitation, damages for loss of data or profit, or due to 
                business interruption) arising out of the use or inability to use the materials 
                on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Governing Law</h2>
              <p className="text-muted mb-4">
                These terms and conditions are governed by and construed in accordance with the 
                laws of [Your State/Country] and you irrevocably submit to the exclusive jurisdiction 
                of the courts in that state or location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. Changes to Terms</h2>
              <p className="text-muted mb-4">
                We reserve the right to revise these terms of service at any time without notice. 
                By using this website, you are agreeing to be bound by the then current version 
                of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">13. Contact Information</h2>
              <p className="text-muted mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-card border border-border rounded-lg p-6">
                <p className="text-foreground font-semibold mb-2">Glazed Hair Drizzle</p>
                <p className="text-muted">Email: legal@glazed-hair.com</p>
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
