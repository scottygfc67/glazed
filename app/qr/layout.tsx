<<<<<<< HEAD
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get 30% Off - GLAZED Hair Drizzle",
  description: "Leave a TikTok review and get 30% off your next GLAZED order",
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
  },
=======
import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'GLAZED: 40% Off — Thanks for Your Review!',
  description: 'Leave a 5‑star TikTok Shop review for GLAZED. Upload a quick screenshot to unlock a 40% off coupon instantly.',
  themeColor: '#29B7E6',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
>>>>>>> 930945056a68ddd4da0346fdc74fff18f6f5c66e
};

export default function QRLayout({
  children,
}: {
  children: React.ReactNode;
}) {
<<<<<<< HEAD
  return children;
=======
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-blue-50 text-gray-900 font-sans antialiased">
        {children}
      </body>
    </html>
  );
>>>>>>> 930945056a68ddd4da0346fdc74fff18f6f5c66e
}
