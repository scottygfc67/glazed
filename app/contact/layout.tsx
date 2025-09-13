import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Glazed Hair Drizzle",
  description: "Get in touch with our team for support, questions, or feedback about our hair colors.",
  openGraph: {
    title: "Contact Us - Glazed Hair Drizzle",
    description: "Get in touch with our team for support, questions, or feedback about our hair colors.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
