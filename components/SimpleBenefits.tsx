"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, Link2, Scissors, Droplets, Leaf, ShowerHead } from "lucide-react";

const PINK = "#FF7DB9";
const HONEY = "#F5A623";

const benefits = [
  { icon: Sparkles, title: "Detangles Fast", sub: "Slip for painless comb-through" },
  { icon: Link2, title: "Fills Fragile Spots", sub: "Batana-like support for fuller feel" },
  { icon: Sparkles, title: "Shine in One Wash", sub: "Glossy, touchable hair today" },
  { icon: Scissors, title: "Less Breakage", sub: "Reduces snap from week one" },
  { icon: Droplets, title: "Curl & Color Safe", sub: "Definition without crunch or fade" },
  { icon: ShowerHead, title: "Lightweight Rinse", sub: "Non-greasy, no residue" },
];

export default function SimpleBenefits() {
  const r = useReducedMotion();

  return (
    <section id="benefits" className="mx-auto max-w-screen-lg px-4 py-12">
      <motion.div
        initial={r ? false : { opacity: 0, y: 20 }}
        whileInView={r ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4 }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl font-bold text-[#0F0B16] mb-3">What you get in one wash</h2>
        <p className="text-lg text-[#0F0B16]/70 max-w-2xl mx-auto">
          Six key benefits that transform your hair from the very first use
        </p>
      </motion.div>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-3">
        {benefits.map((benefit, i) => (
          <motion.div
            key={benefit.title}
            initial={r ? false : { opacity: 0, y: 30 }}
            whileInView={r ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="text-center relative"
          >
            {/* Icon Circle */}
            <div className="relative mb-4">
              <div 
                className="mx-auto w-14 h-14 rounded-full flex items-center justify-center"
                style={{ 
                  background: "linear-gradient(135deg, #FFF5E7, #FFE7C5)",
                  boxShadow: "0 4px 12px rgba(245, 166, 35, 0.25)"
                }}
              >
                <benefit.icon className="h-7 w-7" style={{ color: HONEY }} />
              </div>
            </div>
            
            {/* Content */}
            <h3 className="text-lg font-semibold text-[#0F0B16] mb-2">{benefit.title}</h3>
            <p className="text-sm text-[#0F0B16]/80 leading-relaxed">{benefit.sub}</p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
