'use client'

import Announcement from '@/components/nav/Announcement'
import Navbar from '@/components/nav/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { getAllPosts } from '@/content/blog'

export default function BlogIndexPage() {
  const posts = getAllPosts()

  return (
    <>
      <Announcement />
      <Navbar />

      <main className="min-h-screen bg-white">
        {/* Hero-like extra section */}
        <section className="relative py-20 sm:py-28 bg-glaze">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold text-ink mb-4">Blog</h1>
              <p className="text-lg text-ink/80">
                Practical hair care answers about pre-wash oils, detangling, shine, and routine.
              </p>
            </div>
          </div>
        </section>

        {/* Posts list */}
        <section className="py-20 sm:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
              {posts.map((post) => (
                <article key={post.slug} className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="mb-2 text-xs text-ink/60">{new Date(post.date).toLocaleDateString()}</div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-ink mb-2">
                    <Link href={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-ink/80 mb-4">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="text-brand-600 font-medium hover:underline">
                    Read more →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}



