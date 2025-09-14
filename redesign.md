# Glazed Drizzle — DTC Redesign Playbook

> **Goal:** Rebuild the hero, navbar, and homepage in a bold, glossy, Drunk-Elephant-inspired style—but with our **blue/pink** brand palette, buttery scroll animations, pro typography, and **blazing-fast performance**.
>
> **Stack:** Next.js (App Router), Tailwind CSS, shadcn/ui (Radix), Framer Motion, Lenis smooth scrolling, next/font, next/image, SVGR, Lucide icons, react-wrap-balancer, SWR/React Query, and Vercel for deploy.

---

## 0) TL;DR — Install Everything

```bash
# Create app
npx create-next-app@latest glazed-web --typescript --eslint --tailwind --app --src-dir --import-alias "@/*"
cd glazed-web

# UI + motion + utilities
npm i framer-motion @studio-freight/lenis clsx tailwind-merge react-wrap-balancer @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-navigation-menu @radix-ui/react-scroll-area @radix-ui/react-popover @radix-ui/react-separator

# Icons + forms + data
npm i lucide-react zod react-hook-form @hookform/resolvers swr

# Dev conveniences
npm i -D @types/node @types/react @types/react-dom autoprefixer postcss tailwind-merge prettier eslint-config-next
```

> If you want GSAP ScrollTrigger micro‑control, add `gsap@^3` (optional). The spec below uses **Framer Motion + Lenis** for most effects.

---

## 1) Brand System (Blue/Pink)

We’ll define CSS variables and Tailwind tokens to guarantee consistency.

### `/src/styles/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root{
  /* Brand */
  --brand-blue-50:#ebf5ff; --brand-blue-100:#d6eaff; --brand-blue-200:#a8d4ff;
  --brand-blue-300:#7bbdff; --brand-blue-400:#4da6ff; --brand-blue-500:#1f8fff; /* primary */
  --brand-blue-600:#0075e6; --brand-blue-700:#005db4; --brand-blue-800:#004282; --brand-blue-900:#002a52;

  --brand-pink-50:#fff0f7; --brand-pink-100:#ffd8eb; --brand-pink-200:#ffb4d8;
  --brand-pink-300:#ff8fc5; --brand-pink-400:#ff6ab2; --brand-pink-500:#ff469f; /* accent */
  --brand-pink-600:#e62c86; --brand-pink-700:#b81f69; --brand-pink-800:#8a154d; --brand-pink-900:#5c0b31;

  /* Neutral */
  --ink:#232325; --ink-2:#3b3b40; --muted:#6b7280; --line:#e5e7eb; --bg:#ffffff; --bg-2:#fafafa;

  /* Effects */
  --shadow-soft: 0 10px 30px rgba(31,143,255,.15);
  --radius-xl: 1.25rem; /* 20px */
}

html, body{ height:100%; background:var(--bg); }

/***** Typography helpers *****/
.lead{ @apply text-lg md:text-xl text-neutral-600; }
.eyebrow{ @apply uppercase tracking-widest text-sm text-brand-600; }

/***** Glass cards *****/
.glaze-card{ @apply rounded-2xl backdrop-blur bg-white/70 border border-white/50 shadow-lg; }

/***** Gradients *****/
.bg-glaze{ background: radial-gradient(1200px 600px at 0% 0%, var(--brand-pink-100), transparent 60%),
                      radial-gradient(1000px 600px at 100% 100%, var(--brand-blue-100), transparent 60%),
                      linear-gradient(#fff, #fff); }
```

### `tailwind.config.ts`

```ts
import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: 'var(--brand-blue-50)', 100:'var(--brand-blue-100)', 200:'var(--brand-blue-200)',
          300:'var(--brand-blue-300)', 400:'var(--brand-blue-400)', 500:'var(--brand-blue-500)',
          600:'var(--brand-blue-600)', 700:'var(--brand-blue-700)', 800:'var(--brand-blue-800)', 900:'var(--brand-blue-900)'
        },
        pink: {
          50:'var(--brand-pink-50)',100:'var(--brand-pink-100)',200:'var(--brand-pink-200)',
          300:'var(--brand-pink-300)',400:'var(--brand-pink-400)',500:'var(--brand-pink-500)',
          600:'var(--brand-pink-600)',700:'var(--brand-pink-700)',800:'var(--brand-pink-800)',900:'var(--brand-pink-900)'
        }
      },
      boxShadow: { soft: 'var(--shadow-soft)' },
      borderRadius: { xl: 'var(--radius-xl)' },
      container: { center: true, padding: '1rem', screens: { '2xl': '1280px' } },
    }
  },
  plugins: [],
}
export default config
```

### Fonts (Display + UI)

We’ll pair **Fraunces** (creamy display) with **Outfit** (clean geometric UI), loaded via `next/font`. Replace with your preferred duo anytime.

```tsx
// /src/app/fonts.ts
import { Fraunces, Outfit } from 'next/font/google'
export const display = Fraunces({ subsets:['latin'], variable:'--font-display', weight:['300','400','700','900'] })
export const ui = Outfit({ subsets:['latin'], variable:'--font-ui', weight:['300','400','500','600','700'] })
```

```tsx
// /src/app/layout.tsx
import './globals.css'
import { display, ui } from './fonts'
import { Providers } from './providers'

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="en" className={`${display.variable} ${ui.variable}`}>
      <body className="font-[var(--font-ui)] text-ink bg-glaze min-h-screen antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
```

```css
/* globals.css */
:root{ --font-display: 'Fraunces', ui-sans-serif; --font-ui: 'Outfit', ui-sans-serif; }
.h1{ @apply font-[var(--font-display)] text-4xl md:text-6xl leading-[1.05] tracking-tight; }
.h2{ @apply font-[var(--font-display)] text-3xl md:text-5xl tracking-tight; }
```

---

## 2) App Providers (Lenis + Motion)

```tsx
// /src/app/providers.tsx
'use client'
import { ReactNode, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Lenis from '@studio-freight/lenis'

export function Providers({ children }: { children: ReactNode }){
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true, wheelMultiplier: 1.1 })
    function raf(time:number){ lenis.raf(time); requestAnimationFrame(raf) }
    requestAnimationFrame(raf)
    return () => { // cleanup
      // @ts-ignore
      lenis.destroy?.()
    }
  }, [])

  return <AnimatePresence mode="wait">{children}</AnimatePresence>
}
```

---

## 3) Reusable Motion Primitives

```tsx
// /src/components/motion.tsx
'use client'
import { motion, Variants } from 'framer-motion'

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22,1,0.36,1] } }
}

export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: .5 } }
}

export const stagger = (stagger=0.08): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: .1 } }
})

export const M = motion
```

---

## 4) Navigation Stack

### Announcement Bar + Sticky Navbar + Mobile Drawer + Megamenu

```tsx
// /src/components/nav/Announcement.tsx
export default function Announcement(){
  return (
    <div className="bg-pink-100 text-pink-800 text-center text-sm py-2">
      Enjoy **free shipping** over £49 + 30‑day money back.
    </div>
  )
}
```

```tsx
// /src/components/nav/Navbar.tsx
'use client'
import Link from 'next/link'
import { ShoppingBag, Search, User, Menu } from 'lucide-react'
import { useState } from 'react'
import clsx from 'clsx'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-white/60">
      <nav className="container flex items-center justify-between h-16">
        <button className="md:hidden p-2" aria-label="Open menu" onClick={() => setOpen(true)}>
          <Menu className="h-6 w-6" />
        </button>
        <Link href="/" className="font-[var(--font-display)] text-xl tracking-tight">GLAZED</Link>
        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link href="/shop">Shop</Link>
          <Link href="/about">About</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="flex items-center gap-4">
          <button aria-label="Search"><Search className="h-5 w-5"/></button>
          <Link aria-label="Account" href="/account"><User className="h-5 w-5"/></Link>
          <Link aria-label="Cart" href="/cart" className="relative"><ShoppingBag className="h-5 w-5"/><span className="absolute -top-2 -right-2 text-[10px] bg-brand-500 text-white rounded-full px-[6px] py-[1px]">2</span></Link>
        </div>
      </nav>

      {/* mobile drawer */}
      <div className={clsx('fixed inset-0 z-40 bg-black/40 transition-opacity md:hidden', open ? 'opacity-100 pointer-events-auto':'opacity-0 pointer-events-none')} onClick={() => setOpen(false)} />
      <aside className={clsx('fixed left-0 top-0 bottom-0 z-50 w-80 bg-white p-6 transform transition-transform md:hidden', open ? 'translate-x-0':'-translate-x-full')}>
        <nav className="flex flex-col gap-4 text-lg">
          <Link href="/shop" onClick={()=>setOpen(false)}>Shop</Link>
          <Link href="/about" onClick={()=>setOpen(false)}>About</Link>
          <Link href="/faq" onClick={()=>setOpen(false)}>FAQ</Link>
          <Link href="/contact" onClick={()=>setOpen(false)}>Contact</Link>
        </nav>
      </aside>
    </header>
  )
}
```

---

## 5) Hero Section (Layered, Glossy, Responsive)

### Features

* Split layout (text left, product imagery right) with **floating donuts/confetti** accents.
* **Motion on enter** + parallax on scroll.
* Blue/Pink gradient background and subtle drop shadows.

```tsx
// /src/components/hero/Hero.tsx
'use client'
import Image from 'next/image'
import { M, fadeUp, stagger, popIn } from '@/components/motion'
import Balancer from 'react-wrap-balancer'

export default function Hero(){
  return (
    <section className="relative overflow-hidden">
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-[28rem] w-[28rem] rounded-full blur-3xl bg-pink-200/60"/>
      <div className="pointer-events-none absolute -bottom-32 -right-24 h-[32rem] w-[32rem] rounded-full blur-3xl bg-brand-200/70"/>

      <div className="container grid items-center gap-12 py-16 md:py-28 md:grid-cols-2">
        <M.div variants={stagger()} initial="hidden" animate="show" className="order-2 md:order-1">
          <M.p variants={fadeUp} className="eyebrow">New • Limited • Glossy</M.p>
          <M.h1 variants={fadeUp} className="h1 max-w-xl">
            <Balancer>Transform your hair with <span className="text-pink-600">Glazed Drizzle</span> colors</Balancer>
          </M.h1>
          <M.p variants={fadeUp} className="lead max-w-lg mt-4">
            Professional-quality shades with a sweet, long‑lasting shine. Kind to scalp. Wow from the first wash.
          </M.p>
          <M.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#shop" className="inline-flex items-center justify-center rounded-xl bg-brand-600 text-white px-6 py-3 shadow-soft hover:bg-brand-700 transition">Shop now</a>
            <a href="#learn" className="inline-flex items-center justify-center rounded-xl bg-white text-ink px-6 py-3 border hover:shadow-soft">Learn more</a>
          </M.div>

          <M.div variants={stagger(.06)} className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
            {[
              ['25k+','Happy Customers'],
              ['4.9★','Avg Rating'],
              ['30‑Day','Money Back']
            ].map(([k,v])=> (
              <M.div key={k} variants={popIn} className="glaze-card p-4 text-center">
                <p className="text-xl font-semibold">{k}</p>
                <p className="text-sm text-neutral-500">{v}</p>
              </M.div>
            ))}
          </M.div>
        </M.div>

        {/* hero art */}
        <M.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:.7 }} className="relative order-1 md:order-2">
          <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
            <Image src="/images/hero-bottle.png" alt="Glazed Runny Honey" fill priority className="object-contain drop-shadow-2xl"/>
            {/* floating sprinkle */}
            <M.img src="/images/donut.png" alt="donut" className="absolute -left-10 -top-10 w-24" initial={{ y:-10 }} animate={{ y:[-10,6,-10] }} transition={{ duration:4, repeat:Infinity }}/>
            <M.img src="/images/confetti.png" alt="confetti" className="absolute -right-8 bottom-6 w-20" initial={{ y:0 }} animate={{ y:[0,-8,0] }} transition={{ duration:5, repeat:Infinity }}/>
          </div>
        </M.div>
      </div>
    </section>
  )
}
```

> Replace `/images/*` with your own assets (export WebP/AVIF at multiple sizes).

---

## 6) Section Blocks with Scroll Animations

### A) Zig‑zag Feature Rows

```tsx
// /src/components/sections/FeatureRow.tsx
'use client'
import Image from 'next/image'
import { M, fadeUp } from '@/components/motion'

export function FeatureRow({ title, copy, img, reverse=false }:{ title:string; copy:string; img:string; reverse?:boolean }){
  return (
    <section className="container py-20">
      <div className={`grid gap-10 md:grid-cols-2 items-center ${reverse ? 'md:[&>*:first-child]:order-2' : ''}`}>
        <M.div initial="hidden" whileInView="show" viewport={{ once:true, amount:.3 }} variants={fadeUp}>
          <h2 className="h2 mb-4">{title}</h2>
          <p className="lead">{copy}</p>
        </M.div>
        <M.div initial={{ opacity:0, scale:.96 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }} transition={{ duration:.6 }}>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-soft">
            <Image src={img} alt="" fill className="object-cover"/>
          </div>
        </M.div>
      </div>
    </section>
  )
}
```

### B) Marquee (“as seen in” / perks)

```tsx
// /src/components/sections/Marquee.tsx
'use client'
import { useEffect, useRef } from 'react'

export default function Marquee(){
  const ref = useRef<HTMLDivElement>(null)
  useEffect(()=>{
    const el = ref.current!
    el.animate([
      { transform:'translateX(0)' },
      { transform:'translateX(-50%)' }
    ], { duration:16000, iterations: Infinity })
  },[])
  return (
    <div className="overflow-hidden border-y">
      <div className="flex gap-16 py-6 whitespace-nowrap" ref={ref}>
        {Array.from({length:12}).map((_,i)=> (
          <span key={i} className="text-lg text-neutral-600">Vegan • Honey‑glow • Dermatologist Tested • Color‑safe</span>
        ))}
      </div>
    </div>
  )
}
```

### C) Animated Product Cards (hover lift + quick add)

```tsx
// /src/components/product/Card.tsx
'use client'
import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'

export default function ProductCard(){
  return (
    <article className="group relative rounded-2xl border bg-white p-4 transition shadow-sm hover:shadow-soft hover:-translate-y-1">
      <div className="relative aspect-square rounded-xl overflow-hidden">
        <Image src="/images/bottle-blue.webp" alt="Runny Honey" fill className="object-cover transition-transform group-hover:scale-[1.03]"/>
        <button className="absolute bottom-3 left-3 right-3 hidden sm:flex items-center justify-center gap-2 rounded-xl bg-brand-600 text-white py-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition">
          <ShoppingCart className="h-4 w-4"/> Quick add
        </button>
      </div>
      <div className="mt-4 flex items-baseline justify-between">
        <h3 className="font-medium">Runny Honey Drizzle</h3>
        <span className="text-sm text-neutral-500">£19</span>
      </div>
      <p className="text-sm text-neutral-600">Tangles? Gone. Shine? Instant.</p>
    </article>
  )
}
```

---

## 7) Homepage Example (App Router)

```tsx
// /src/app/page.tsx
import Announcement from '@/components/nav/Announcement'
import Navbar from '@/components/nav/Navbar'
import Hero from '@/components/hero/Hero'
import { FeatureRow } from '@/components/sections/FeatureRow'
import Marquee from '@/components/sections/Marquee'
import ProductCard from '@/components/product/Card'

export default function Home(){
  return (
    <>
      <Announcement />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <FeatureRow title="Rain‑glow, fast" copy="An advanced hydration serum that lights skin & scalp with instant opalescence." img="/images/feature-rain.webp" />
        <FeatureRow reverse title="Honey‑sweet science" copy="Derm‑tested, pH‑balanced and cruelty‑free. Powered by ceramides and honey sugars." img="/images/feature-lab.webp" />
        <section className="container py-24">
          <div className="flex items-end justify-between mb-8">
            <h2 className="h2">Best sellers</h2>
            <a href="/shop" className="text-brand-700 font-medium">Shop all →</a>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({length:8}).map((_,i)=> <ProductCard key={i}/>) }
          </div>
        </section>
      </main>
    </>
  )
}
```

---

## 8) Footer (CTA + Trust)

```tsx
// /src/components/Footer.tsx
export default function Footer(){
  return (
    <footer className="mt-24 border-t bg-white">
      <div className="container py-14 grid gap-10 md:grid-cols-4">
        <div>
          <h4 className="font-semibold mb-3">Glazed</h4>
          <p className="text-sm text-neutral-600">Glow today, glaze tomorrow.</p>
        </div>
        <div>
          <h5 className="font-medium mb-2">Shop</h5>
          <ul className="space-y-2 text-sm text-neutral-700">
            <li><a href="/shop">All products</a></li>
            <li><a href="/collections/new">New</a></li>
            <li><a href="/collections/bestsellers">Bestsellers</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium mb-2">Help</h5>
          <ul className="space-y-2 text-sm text-neutral-700">
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/shipping">Shipping & Returns</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <form className="glaze-card p-4">
          <p className="font-medium">Ready for 15% off?</p>
          <div className="mt-3 flex gap-2">
            <input placeholder="Email" className="flex-1 rounded-lg border px-3 py-2"/>
            <button className="rounded-lg bg-pink-500 text-white px-4">Sign up</button>
          </div>
          <p className="mt-2 text-xs text-neutral-500">No spam. Unsubscribe anytime.</p>
        </form>
      </div>
      <div className="border-t py-6 text-center text-xs text-neutral-500">© {new Date().getFullYear()} Glazed Ltd.</div>
    </footer>
  )
}
```

---

## 9) Image Strategy (Speed = LCP Wins)

* Use `next/image` for **all** imagery. Export **AVIF** (1x) + **WebP** (fallback) in `/public/images` at `320/640/960/1280/1600` widths.
* Mark the primary hero image with `priority` and **exact aspect ratio**.
* Use `sizes` prop to hint layout; example: `sizes="(max-width:768px) 100vw, 50vw"`.
* Lazy‑load everything below the fold.

```tsx
<Image src="/images/hero-bottle.avif" alt="" fill priority sizes="(max-width: 768px) 100vw, 44vw"/>
```

---

## 10) SEO + Performance Budget

* `<link rel="preconnect" href="https://cdn.shopify.com"/>` (if external assets)
* No third‑party fonts (we already inline with `next/font`).
* Cap JS bundle: avoid large UI libraries. shadcn/ui is tree‑shaken.
* Turn on **Vercel Image Optimization**.
* Lighthouse targets: LCP ≤ 2.2s, CLS ≤ 0.02, TBT ≤ 150ms.

### `next.config.js`

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { formats: ['image/avif','image/webp'] },
  experimental: { optimizeCss: true },
}
module.exports = nextConfig
```

---

## 11) Micro‑Interactions & Scroll Goodies

* **Lenis** smooth scroll already added.
* Use `whileInView` + `viewport={{ once:true }}` for performance friendly reveals.
* Floating items: looped keyframe animations or Framer `animate` arrays.
* **Reduced motion:** Respect users with `@media (prefers-reduced-motion)`.

```css
@media (prefers-reduced-motion: reduce){
  *{ animation: none !important; transition: none !important; }
}
```

---

## 12) Accessibility

* AA color contrast (brand‑600 on white is safe; avoid brand‑500 for body text).
* Focus states on links/buttons: Tailwind `focus-visible:ring-2 ring-brand-400`.
* Alt text for informative imagery; `alt=""` for decorative.

---

## 13) Optional: Newsletter Modal (15% Off)

```tsx
// /src/components/marketing/SignupModal.tsx
'use client'
import * as Dialog from '@radix-ui/react-dialog'

export default function SignupModal(){
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="hidden" aria-hidden />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40" />
        <Dialog.Content className="fixed left-1/2 top-1/2 w-[min(92vw,560px)] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-2xl">
          <h3 className="h2">Ready for 15% off?</h3>
          <p className="mt-2 text-neutral-600">Sign up today and we’ll email your code.</p>
          <form className="mt-4 flex gap-2">
            <input placeholder="First name" className="flex-1 rounded-lg border px-3 py-2"/>
            <input placeholder="Email" className="flex-1 rounded-lg border px-3 py-2"/>
            <button className="rounded-lg bg-pink-500 text-white px-4">Sign up</button>
          </form>
          <Dialog.Close className="absolute right-3 top-3">✕</Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
```

---

## 14) Page Speed Checklist (do this!)

* ✅ `next/font` for zero‑FOIT fonts.
* ✅ Defer all non‑critical scripts; use `strategy="lazyOnload"` with `<Script>`.
* ✅ Avoid heavy Lottie/GSAP unless necessary.
* ✅ Inline SVG icons (Lucide) and ship only used icons.
* ✅ Preload **hero** image and set **explicit dimensions** on containers.
* ✅ Cache‑friendly CDN (Vercel). ISR for product lists if using headless CMS/Shopify.

---

## 15) Files to Create (Summary)

```
src/
  app/
    layout.tsx
    page.tsx
    providers.tsx
    fonts.ts
  components/
    motion.tsx
    nav/Announcement.tsx
    nav/Navbar.tsx
    hero/Hero.tsx
    sections/FeatureRow.tsx
    sections/Marquee.tsx
    product/Card.tsx
    marketing/SignupModal.tsx
  styles/globals.css
```

---

## 16) What I Need From You

1. **Brand assets**: final logo SVG, product cutouts (PNG/WEBP/AVIF), background shapes.
2. **Copy** for hero headline + 3 value props.
3. **Product data source**: JSON, Shopify, Sanity—your pick. (I can wire SWR + API route.)
4. Confirm color tokens above match your **blue/pink** exactly (send hex values if different).

---

### Done right, this will feel playful and premium—big type, creamy motion, and snack‑able speed.\*\*
