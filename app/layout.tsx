import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Glazed Hair Drizzle - Premium Hair Colors",
  description: "Transform your hair with our premium drizzle colors. Professional quality, vibrant results, and endless possibilities for your unique style.",
  keywords: "hair color, hair dye, professional hair color, vibrant hair, hair styling, beauty",
  authors: [{ name: "Glazed Hair Drizzle" }],
  creator: "Glazed Hair Drizzle",
  publisher: "Glazed Hair Drizzle",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://glazed-hair-drizzle.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Glazed Hair Drizzle - Premium Hair Colors",
    description: "Transform your hair with our premium drizzle colors. Professional quality, vibrant results, and endless possibilities for your unique style.",
    url: 'https://glazed-hair-drizzle.com',
    siteName: 'Glazed Hair Drizzle',
    images: [
      {
        url: '/grainy.jpg',
        width: 1200,
        height: 630,
        alt: 'Glazed Hair Drizzle - Premium Hair Colors',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Glazed Hair Drizzle - Premium Hair Colors",
    description: "Transform your hair with our premium drizzle colors. Professional quality, vibrant results, and endless possibilities for your unique style.",
    images: ['/grainy.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
