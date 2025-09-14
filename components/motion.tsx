'use client'
import { motion, Variants } from 'framer-motion'

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  }
}

export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.5 } 
  }
}

export const stagger = (stagger = 0.08): Variants => ({
  hidden: {},
  show: { 
    transition: { 
      staggerChildren: stagger, 
      delayChildren: 0.1 
    } 
  }
})

export const M = motion
