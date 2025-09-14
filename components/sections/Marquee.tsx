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
      <div className="flex gap-24 py-6 whitespace-nowrap" ref={ref}>
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="text-lg text-muted">
            Vegan • Honey‑glow • Dermatologist Tested • Color‑safe
          </span>
        ))}
      </div>
    </div>
  )
}
