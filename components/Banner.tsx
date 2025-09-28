"use client";
import { motion, useReducedMotion } from "framer-motion";

const PINK = "#FF7DB9";

export default function Banner() {
  const r = useReducedMotion();

  return (
    <section className="relative overflow-hidden py-16">
      {/* Background */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full"
          style={{ 
            background: "linear-gradient(135deg, #FF7DB9, #FFB3D1, #FF7DB9)"
          }}
        />
        {/* Subtle pattern overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{ 
            backgroundImage: "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.2) 0%, transparent 50%)"
          }}
        />
      </div>

      <div className="relative mx-auto max-w-screen-lg px-4 text-center">
        <motion.div
          initial={r ? false : { opacity: 0, y: 20 }}
          whileInView={r ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get 2 Bottles + Free Worldwide Shipping
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Complete your hair transformation with our best-selling duo. 
            Plus 30-day money-back guarantee for complete peace of mind.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-white/90">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <span className="font-medium">2 Bottles</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <span className="font-medium">Free Worldwide Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <span className="font-medium">30-Day Money-Back Guarantee</span>
            </div>
          </div>

          <a 
            href="#bundle" 
            data-cta="banner_buy_now"
            className="inline-flex items-center rounded-full px-8 py-4 bg-white text-pink-600 font-semibold text-lg shadow-lg hover:opacity-90 transition-opacity"
          >
            Buy Now · £32.99
          </a>
        </motion.div>
      </div>
    </section>
  );
}
