'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      setMessage('Please enter your email address')
      return
    }

    setIsSubmitting(true)
    setMessage('')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (data.success) {
        setMessage('Success! Check your email for confirmation.')
        setEmail('')
      } else {
        setMessage(data.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setMessage('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="mt-24 border-t border-line bg-white">
      <div className="container py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="mb-3">
            <Image 
              src="/logotran.png" 
              alt="Glazed" 
              width={120} 
              height={40}
              className="h-8 w-auto"
            />
          </div>
          <p className="text-sm text-muted">Glow today, glaze tomorrow.</p>
        </div>
        <div>
          <h5 className="font-medium mb-2 text-ink">Shop</h5>
          <ul className="space-y-2 text-sm text-muted">
            <li>
              <a href="/shop" className="hover:text-brand-600 transition-colors">
                All products
              </a>
            </li>
            <li>
              <a href="/collections/new" className="hover:text-brand-600 transition-colors">
                New
              </a>
            </li>
            <li>
              <a href="/collections/bestsellers" className="hover:text-brand-600 transition-colors">
                Bestsellers
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium mb-2 text-ink">Help</h5>
          <ul className="space-y-2 text-sm text-muted">
            <li>
              <a href="/faq" className="hover:text-brand-600 transition-colors">
                FAQ
              </a>
            </li>
            <li>
              <a href="/shipping" className="hover:text-brand-600 transition-colors">
                Shipping
              </a>
            </li>
            <li>
              <a href="/returns" className="hover:text-brand-600 transition-colors">
                Returns
              </a>
            </li>
            <li>
              <a href="/money-back-guarantee" className="hover:text-brand-600 transition-colors">
                Money Back Guarantee
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-brand-600 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-medium mb-2 text-ink">Company</h5>
          <ul className="space-y-2 text-sm text-muted">
            <li>
              <a href="/about" className="hover:text-brand-600 transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-brand-600 transition-colors">
                Contact
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-brand-600 transition-colors">
                Terms of Service
              </a>
            </li>
            <li>
              <Link href="/blog" className="hover:text-brand-600 transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <a href="/privacy" className="hover:text-brand-600 transition-colors">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <form onSubmit={handleSubmit} className="glaze-card p-4">
          <p className="font-medium text-ink">Ready for 15% off?</p>
          <div className="mt-3 flex gap-2">
            <input 
              type="email"
              placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-lg border border-line px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-400"
              required
            />
            <button 
              type="submit"
              disabled={isSubmitting}
              className="rounded-lg bg-pink-500 text-white px-4 py-2 text-sm font-medium hover:bg-pink-600 transition-colors disabled:opacity-50"
            >
              {isSubmitting ? '...' : 'Sign up'}
            </button>
          </div>
          {message && (
            <p className={`mt-2 text-xs ${message.includes('Success') ? 'text-green-600' : 'text-red-600'}`}>
              {message}
            </p>
          )}
          <p className="mt-2 text-xs text-muted">No spam. Unsubscribe anytime.</p>
        </form>
      </div>
      <div className="border-t border-line py-6 text-center text-xs text-muted">
        © {new Date().getFullYear()} Glazed Ltd.
      </div>
    </footer>
  )
}