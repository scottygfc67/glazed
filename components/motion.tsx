'use client'
import { motion, Variants } from 'framer-motion'

// Optimized animations for better performance
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.4, ease: "easeOut" } 
  }
}

export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  show: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.3, ease: "easeOut" } 
  }
}

export const stagger = (stagger = 0.05): Variants => ({
  hidden: {},
  show: { 
    transition: { 
      staggerChildren: stagger, 
      delayChildren: 0.05 
    } 
  }
})

// Lazy load motion components for better performance
export const M = motion
