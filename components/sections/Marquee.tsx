'use client'
import { useEffect, useRef } from 'react'

export default function Marquee() {
  const ref = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const el = ref.current!
    el.animate([
      { transform: 'translateX(0)' },
      { transform: 'translateX(-50%)' }
    ], { 
      duration: 16000, 
      iterations: Infinity 
    })
  }, [])
  
  return (
    <div className="overflow-hidden border-y border-line">
      <div className="flex gap-8 py-6 whitespace-nowrap" ref={ref}>
        {Array.from({ length: 20 }).map((_, i) => {
          const items = ['Vegan', 'Honey‑glow', 'Dermatologist Tested', 'Color‑safe']
          const item = items[i % items.length]
          return (
            <span key={i} className="text-lg text-muted flex items-center">
              {item}
              {i < 19 && <span className="mx-4">•</span>}
            </span>
          )
        })}
      </div>
    </div>
  )
}
