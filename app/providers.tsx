'use client'
import { ReactNode, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Lenis from 'lenis'
import { CartProvider } from '@/lib/cart-context'

export function Providers({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({ 
      lerp: 0.1, 
      smoothWheel: true, 
      wheelMultiplier: 1.1 
    })
    
    function raf(time: number) { 
      lenis.raf(time)
      requestAnimationFrame(raf) 
    }
    
    requestAnimationFrame(raf)
    
    return () => {
      lenis.destroy?.()
    }
  }, [])

  return (
    <CartProvider>
      <AnimatePresence mode="wait">{children}</AnimatePresence>
    </CartProvider>
  )
}
