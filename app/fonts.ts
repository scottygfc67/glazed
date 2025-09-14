import { Fraunces, Outfit } from 'next/font/google'

export const display = Fraunces({ 
  subsets: ['latin'], 
  variable: '--font-display', 
  weight: ['300', '400', '700', '900'] 
})

export const ui = Outfit({ 
  subsets: ['latin'], 
  variable: '--font-ui', 
  weight: ['300', '400', '500', '600', '700'] 
})
