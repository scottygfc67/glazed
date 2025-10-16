"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Leaf,
  FlaskConical,
  ShieldCheck,
  Sparkles,
  Droplets,
  Sprout,
  Heart,
  ShoppingCart,
} from "lucide-react";

import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/Footer";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Highlight = {
  name: string;
  latin: string;
  icon: React.ElementType;
  tags: string[];
  summary: string;
};

// Full label list (verbatim – keep order)
const FULL_INGREDIENTS_TEXT =
  `Prunus Amygdalus Dulcis (Sweet Almond) Oil, Ricinus Communis (Castor) Seed Oil, ` +
  `Prunus Armeniaca (Apricot) Kernel Oil, Olea Europaea (Olive) Fruit Oil, Persea Gratissima (Avocado) Oil, ` +
  `Linum Usitatissimum (Flaxseed) Seed Oil, Helianthus Annuus (Sunflower) Seed Oil, Prunus Avium (Cherry) Seed Oil, ` +
  `Simmondsia Chinensis (Jojoba) Seed Oil, Argania Spinosa (Argan) Kernel Oil, Punica Granatum (Pomegranate) Seed Oil, ` +
  `Citrus Grandis (Pink Grapefruit) Peel Oil, Dunaliella Salina Extract, Daucus Carota Sativa (Carrot) Seed Oil, ` +
  `Tocopherol, Ascorbyl Palmitate. Allergens: Citral, d-Limonene, Linalool. Contains nuts & seeds.`;

const HIGHLIGHTS: Highlight[] = [
  {
    name: "Sweet Almond Oil",
    latin: "Prunus Amygdalus Dulcis",
    icon: Droplets,
    tags: ["Nourish", "Soften"],
    summary:
      "Silky, fast-absorbing base oil rich in fatty acids to cushion and smooth without a greasy feel.",
  },
  {
    name: "Jojoba Seed Oil",
    latin: "Simmondsia Chinensis",
    icon: Leaf,
    tags: ["Balance", "Lightweight"],
    summary:
      "Skin-compatible wax esters that help balance sebum and lock in hydration for all skin types.",
  },
  {
    name: "Argan Kernel Oil",
    latin: "Argania Spinosa",
    icon: Sprout,
    tags: ["Condition", "Glow"],
    summary:
      "Beloved for its conditioning profile—adds a healthy-looking sheen and a supple finish.",
  },
  {
    name: "Pomegranate Seed Oil",
    latin: "Punica Granatum",
    icon: Heart,
    tags: ["Antioxidant", "Plush"],
    summary:
      "Luxurious oil with punicic acid, used to support a plump, comfortable look and feel.",
  },
  {
    name: "Grapefruit Peel Oil",
    latin: "Citrus Grandis",
    icon: Sparkles,
    tags: ["Bright", "Aromatic"],
    summary:
      "Zesty aromatic note; used at a gentle level for a fresh, uplifting sensorial finish.",
  },
  {
    name: "Dunaliella Salina Extract",
    latin: "(Micro-algae)",
    icon: FlaskConical,
    tags: ["Pro-vitamin A", "Antioxidant"],
    summary:
      "Natural source of carotenoids (beta-carotene) that brings antioxidant support to the blend.",
  },
  {
    name: "Vitamin E",
    latin: "Tocopherol",
    icon: ShieldCheck,
    tags: ["Stability", "Care"],
    summary:
      "Antioxidant that helps protect the formula and supports skin conditioning.",
  },
];

const OBJECTIONS = [
  {
    q: "Is this suitable for daily use?",
    a: "Yes—designed for everyday application. Patch test first and consult your professional if pregnant, nursing, or managing a condition.",
  },
  {
    q: "Will it feel heavy or greasy?",
    a: "Thoughtfully weighted with quick-absorbing oils like jojoba and almond for a soft, comfortable finish.",
  },
  {
    q: "Fragrance concerns?",
    a: "A touch of natural grapefruit peel oil for freshness. Potential fragrance allergens listed: Citral, d-Limonene, Linalool.",
  },
  {
    q: "Sensitive skin?",
    a: "Always patch test. The formula avoids harsh actives and leans on well-tolerated emollients and antioxidants.",
  },
  {
    q: "What if I don’t love it?",
    a: "You’re covered by our 30-day money-back guarantee—no hoops.",
  },
];

export default function IngredientsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50/60 via-white to-white">
      {/* Your site header */}
      <Navbar />

      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60rem_60rem_at_60%_-10%,rgba(99,102,241,0.15),transparent)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Badge className="mb-4">Every drop explained</Badge>
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight">
              Ingredients, out in the open
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Transparent, high-performing oils and antioxidants—thoughtfully blended for a soft glow.
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/product" className="flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5" /> Shop the Formula
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link href="/guarantee">30-Day Guarantee</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOCUS BLEND */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-semibold">The focus blend</h2>
          <p className="mt-2 text-gray-600 max-w-2xl">
            A few standouts that define the feel and finish.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {HIGHLIGHTS.map((ing, i) => {
              const Icon = ing.icon;
              return (
                <motion.div
                  key={ing.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Card className="h-full">
                    <CardHeader className="flex flex-row items-center gap-3">
                      <div className="p-2 rounded-xl bg-indigo-600/10">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <CardTitle className="text-base">{ing.name}</CardTitle>
                        <p className="text-xs text-gray-500 italic">{ing.latin}</p>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm leading-relaxed">{ing.summary}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {ing.tags.map((t) => (
                          <Badge key={t} variant="secondary" className="rounded-full">
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FULL LIST */}
      <section className="py-10 sm:py-14 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-semibold">Full ingredient list</h2>
          <p className="mt-2 text-sm text-gray-600">
            Exactly what’s on the label, in order:
          </p>

          <Card className="mt-4">
            <CardContent className="pt-6">
              <p className="text-sm leading-7">{FULL_INGREDIENTS_TEXT}</p>
            </CardContent>
          </Card>

          <p className="mt-4 text-xs text-gray-500">
            Patch test before first use. External use only. Store cool &amp; dark.
          </p>
        </div>
      </section>

      {/* FAQs / OBJECTIONS */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-semibold">Good to know</h2>
          <Accordion
            type="single"
            collapsible
            className="mt-4 divide-y rounded-xl border"
          >
            {OBJECTIONS.map((o, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="text-left text-sm sm:text-base">
                  {o.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-7 text-gray-600">
                  {o.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden rounded-3xl p-8 sm:p-12 ring-1 ring-black/10 bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(40rem_40rem_at_80%_-20%,white,transparent)]" />
            <div className="relative z-10 grid items-center gap-6 lg:grid-cols-[1fr_auto]">
              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold">
                  Treat your skin to the good stuff
                </h3>
                <p className="mt-2 text-white/90">
                  Try it risk-free with our 30-day money-back guarantee.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild size="lg" variant="secondary" className="text-base">
                    <Link href="/product" className="flex items-center gap-2">
                      <ShoppingCart className="h-5 w-5" /> Get the Product
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white/20"
                  >
                    <Link href="/guarantee" className="flex items-center gap-2">
                      <ShieldCheck className="h-5 w-5" /> Read the Guarantee
                    </Link>
                  </Button>
                </div>
              </div>
              <ul className="grid gap-3 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" /> Cold-pressed & thoughtfully sourced
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" /> Listed allergens disclosed in full
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" /> Vegan • Cruelty-free • No microplastics
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Your site footer */}
      <Footer />
    </div>
  );
}
