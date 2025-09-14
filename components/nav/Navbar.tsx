'use client'
import Link from 'next/link'
import Image from 'next/image'
import { ShoppingBag, Search, User, Menu, X } from 'lucide-react'
import { useState } from 'react'
import clsx from 'clsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-white/60">
      <nav className="container flex items-center justify-between h-16">
        <button 
          className="md:hidden p-2" 
          aria-label="Open menu" 
          onClick={() => setOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
        
        <Link href="/" className="flex items-center">
          <Image 
            src="/logotran.png" 
            alt="Glazed" 
            width={120}
            height={48}
            className="h-12 w-auto"
          />
        </Link>
        
        <div className="hidden md:flex items-center gap-8 font-medium">
          <Link href="/product" className="text-ink hover:text-brand-500 transition-colors">
            Shop
          </Link>
          <Link href="/about" className="text-ink hover:text-brand-500 transition-colors">
            About
          </Link>
          <Link href="/faq" className="text-ink hover:text-brand-500 transition-colors">
            FAQ
          </Link>
          <Link href="/contact" className="text-ink hover:text-brand-500 transition-colors">
            Contact
          </Link>
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            aria-label="Search" 
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Search className="h-5 w-5" />
          </button>
          <Link 
            aria-label="Account" 
            href="/account"
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <User className="h-5 w-5" />
          </Link>
          <Link 
            aria-label="Cart" 
            href="/cart" 
            className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -top-2 -right-2 text-[10px] bg-brand-500 text-white rounded-full px-[6px] py-[1px]">
              2
            </span>
          </Link>
        </div>
      </nav>

      {/* Mobile drawer overlay */}
      <div 
        className={clsx(
          'fixed inset-0 z-40 bg-black/40 transition-opacity md:hidden',
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )} 
        onClick={() => setOpen(false)} 
      />
      
      {/* Mobile drawer */}
      <aside 
        className={clsx(
          'fixed left-0 top-0 bottom-0 z-50 w-80 bg-white p-6 transform transition-transform md:hidden',
          open ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-xl font-bold text-ink">Menu</h2>
          <button 
            onClick={() => setOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <nav className="flex flex-col gap-4 text-lg">
          <Link 
            href="/product" 
            onClick={() => setOpen(false)}
            className="text-ink hover:text-brand-500 transition-colors py-2"
          >
            Shop
          </Link>
          <Link 
            href="/about" 
            onClick={() => setOpen(false)}
            className="text-ink hover:text-brand-500 transition-colors py-2"
          >
            About
          </Link>
          <Link 
            href="/faq" 
            onClick={() => setOpen(false)}
            className="text-ink hover:text-brand-500 transition-colors py-2"
          >
            FAQ
          </Link>
          <Link 
            href="/contact" 
            onClick={() => setOpen(false)}
            className="text-ink hover:text-brand-500 transition-colors py-2"
          >
            Contact
          </Link>
        </nav>
      </aside>
    </header>
  )
}
