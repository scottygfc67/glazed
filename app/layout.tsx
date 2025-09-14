import type { Metadata } from "next";
import "./globals.css";
import { display, ui } from "./fonts";
import { Providers } from "./providers";

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
    <html lang="en" className={`${display.variable} ${ui.variable} scroll-smooth`}>
      <body
        className="font-ui text-ink bg-glaze min-h-screen antialiased"
        suppressHydrationWarning={true}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
