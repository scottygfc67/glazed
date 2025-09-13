import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Glazed Hair Drizzle",
  description: "Find answers to frequently asked questions about our hair colors, application, and care instructions.",
  openGraph: {
    title: "FAQ - Glazed Hair Drizzle",
    description: "Find answers to frequently asked questions about our hair colors, application, and care instructions.",
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
