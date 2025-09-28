"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Droplets, Scissors, Sparkles } from "lucide-react";

const PINK = "#FF7DB9";
const HONEY = "#F5A623";

export default function HowTo(){
  const steps = [
    { 
      number: "01",
      icon: Droplets,
      title: "Drizzle", 
      description: "Apply to dry hair before shampooing",
      detail: "Focus on mid-lengths to ends for best results"
    },
    { 
      number: "02",
      icon: Scissors,
      title: "Detangle", 
      description: "Comb through and leave for 60 seconds",
      detail: "5 minutes if hair is extra dry or damaged"
    },
    { 
      number: "03",
      icon: Sparkles,
      title: "Rinse & Shine", 
      description: "Shampoo as normal for glossy finish",
      detail: "Air-dry or style as usual - that's it!"
    },
  ];
  
  const r = useReducedMotion();
  
  return (
    <section id="how-to" className="mx-auto max-w-screen-lg px-4 py-16">
      <motion.div
        initial={r ? false : { opacity: 0, y: 20 }}
        whileInView={r ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-[#0F0B16] mb-4">How to use</h2>
        <p className="text-lg text-[#0F0B16]/70 max-w-2xl mx-auto">
          Three simple steps to transform your hair in just 60 seconds
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            initial={r ? false : { opacity: 0, y: 30 }}
            whileInView={r ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="text-center relative"
          >
            {/* Step Number */}
            <div className="relative mb-6">
              <div 
                className="mx-auto w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white"
                style={{ background: PINK }}
              >
                {step.number}
              </div>
              {/* Icon */}
              <div 
                className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: HONEY }}
              >
                <step.icon className="w-4 h-4 text-white" />
              </div>
            </div>
            
            {/* Content */}
            <h3 className="text-xl font-semibold text-[#0F0B16] mb-3">{step.title}</h3>
            <p className="text-[#0F0B16]/80 mb-2 leading-relaxed">{step.description}</p>
            <p className="text-sm text-[#0F0B16]/60 italic">{step.detail}</p>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={r ? false : { opacity: 0, y: 20 }}
        whileInView={r ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="text-center mt-12"
      >
        <p className="text-sm text-[#0F0B16]/60 mb-6">
          Works with all hair types, protective styles & color-treated hair
        </p>
        <a 
          href="#bundle" 
          data-cta="howto_duo_anchor" 
          className="inline-flex items-center rounded-full px-8 py-4 text-white font-semibold text-lg shadow-lg hover:opacity-90 transition-opacity" 
          style={{ background: PINK }}
        >
          Get Your Glow · £32.99
        </a>
      </motion.div>
    </section>
  );
}
