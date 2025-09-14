import { Fraunces, Outfit } from 'next/font/google'

export const display = Fraunces({ 
  subsets: ['latin'], 
  variable: '--font-display', 
  weight: ['400', '700'], // Reduced weights
  display: 'swap', // Optimize font loading
  preload: true,
})

export const ui = Outfit({ 
  subsets: ['latin'], 
  variable: '--font-ui', 
  weight: ['400', '600'], // Reduced weights
  display: 'swap', // Optimize font loading
  preload: true,
})
