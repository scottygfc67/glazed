'use client'
import { useState, useEffect } from 'react'
import { getProduct } from '@/lib/shopify'
import Link from 'next/link'
import { cartPermalinkUrl } from '@/lib/checkout'

export default function ProductSpotlight() {
  const [product, setProduct] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true)
        const productData = await getProduct()
        if (productData) {
          setProduct(productData)
        }
      } catch (error) {
        console.error('Error fetching product:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [])

  if (loading) {
    return (
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="h-12 bg-gray-200 rounded mb-6 animate-pulse"></div>
              <div className="h-6 bg-gray-200 rounded mb-8 animate-pulse"></div>
              <div className="space-y-4 mb-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gray-200 rounded-full animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-48 animate-pulse"></div>
                  </div>
                ))}
              </div>
              <div className="flex gap-4">
                <div className="h-12 bg-gray-200 rounded w-32 animate-pulse"></div>
                <div className="h-12 bg-gray-200 rounded w-32 animate-pulse"></div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <div className="aspect-square bg-gray-200 rounded-xl mb-6 animate-pulse"></div>
                <div className="h-6 bg-gray-200 rounded mb-2 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded mb-4 animate-pulse"></div>
                <div className="flex justify-between items-center">
                  <div className="h-8 bg-gray-200 rounded w-24 animate-pulse"></div>
                  <div className="h-6 bg-gray-200 rounded w-16 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (!product) {
    return null
  }

  const firstVariant = product.variants?.edges?.[0]?.node
  const price = firstVariant?.price?.amount || '29.99'
  const compareAtPrice = firstVariant?.compareAtPrice?.amount
  const image = product.featuredImage?.url || '/hero.png'
  const title = product.title || 'Glazed Hair Drizzle'
  const description = product.description || 'Our revolutionary pre-wash treatment that melts knots, boosts shine, and revives dull hair from the very first use.'

  const handleBuyNow = () => {
    const variantId = process.env.NEXT_PUBLIC_SHOPIFY_VARIANT_ID || '51884459065681'
    const checkoutUrl = cartPermalinkUrl(variantId, 2)
    window.open(checkoutUrl, '_blank')
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-ink mb-6">
            The Drizzle that Does it All
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Discover our best-selling hair treatment that's transforming hair care routines worldwide
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Product Image */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-pink-50 to-blue-50 rounded-3xl p-8 shadow-2xl">
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -top-6 -right-6 bg-pink-500 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
                Best Seller
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-4xl sm:text-5xl font-bold text-ink mb-4">
                  {title}
                </h3>
                <p className="text-xl text-muted mb-6">
                  {description}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-pink-500 text-lg">✓</span>
                  </div>
                  <p className="text-lg text-muted">Clinically proven to improve hair health</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-pink-500 text-lg">✓</span>
                  </div>
                  <p className="text-lg text-muted">Safe for all hair types and colors</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-pink-500 text-lg">✓</span>
                  </div>
                  <p className="text-lg text-muted">30-day money-back guarantee</p>
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-muted mb-1">Special Offer</p>
                    <div className="flex items-center gap-3">
                      <span className="text-4xl font-bold text-pink-500">£{price}</span>
                      {compareAtPrice && (
                        <span className="text-xl text-muted line-through">£{compareAtPrice}</span>
                      )}
                    </div>
                  </div>
                  {compareAtPrice && (
                    <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-bold">
                      {Math.round((1 - parseFloat(price) / parseFloat(compareAtPrice)) * 100)}% Off
                    </div>
                  )}
                </div>
                <p className="text-sm text-muted mb-4">100ml • Pre-wash treatment</p>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleBuyNow}
                    className="flex-1 inline-flex items-center justify-center rounded-xl bg-pink-500 text-white px-8 py-4 shadow-soft hover:bg-pink-600 transition-colors font-bold text-lg"
                  >
                    Buy Now - 2 Bottles
                  </button>
                  <Link
                    href="/product"
                    className="flex-1 inline-flex items-center justify-center rounded-xl bg-white text-pink-500 px-8 py-4 shadow-soft hover:bg-gray-50 transition-colors font-bold text-lg border-2 border-pink-200"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
