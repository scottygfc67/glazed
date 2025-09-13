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
};

export default function QRLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
