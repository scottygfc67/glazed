'use client'
import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'

export default function ProductCard() {
  return (
    <article className="group relative rounded-2xl border border-line bg-white p-4 transition-all shadow-sm hover:shadow-soft hover:-translate-y-1">
      <div className="relative aspect-square rounded-xl overflow-hidden">
        <Image 
          src="/hero.png" 
          alt="Glazed Hair Drizzle" 
          fill 
          className="object-cover transition-transform group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        <button className="absolute bottom-3 left-3 right-3 hidden sm:flex items-center justify-center gap-2 rounded-xl bg-brand-500 text-white py-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all font-medium">
          <ShoppingCart className="h-4 w-4" />
          Quick add
        </button>
      </div>
      <div className="mt-4 flex items-baseline justify-between">
        <h3 className="font-medium text-ink">Glazed Hair Drizzle</h3>
        <span className="text-sm text-muted">£19</span>
      </div>
      <p className="text-sm text-muted">Tangles? Gone. Shine? Instant.</p>
    </article>
  )
}
