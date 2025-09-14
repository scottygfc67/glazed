'use client'
import Image from 'next/image'
import { M, fadeUp } from '@/components/motion'

export function FeatureRow({ 
  title, 
  copy, 
  img, 
  reverse = false 
}: { 
  title: string
  copy: string
  img: string
  reverse?: boolean 
}) {
  return (
    <section className="container py-20">
      <div className={`grid gap-10 md:grid-cols-2 items-center ${reverse ? 'md:[&>*:first-child]:order-2' : ''}`}>
        <M.div 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true, amount: 0.3 }} 
          variants={fadeUp}
        >
          <h2 className="h2 mb-4 text-ink">{title}</h2>
          <p className="lead text-muted">{copy}</p>
        </M.div>
        <M.div 
          initial={{ opacity: 0, scale: 0.96 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
        >
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft">
            <Image 
              src={img} 
              alt="" 
              fill 
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </M.div>
      </div>
    </section>
  )
}
