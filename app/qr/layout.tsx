import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'GLAZED: 40% Off — Thanks for Your Review!',
  description: 'Leave a 5‑star TikTok Shop review for GLAZED. Upload a quick screenshot to unlock a 40% off coupon instantly.',
  themeColor: '#29B7E6',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
};

export default function QRLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-blue-50 text-gray-900 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
