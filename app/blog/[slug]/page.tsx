'use client'

import Announcement from '@/components/nav/Announcement'
import Navbar from '@/components/nav/Navbar'
import Footer from '@/components/Footer'
import { getPostBySlug } from '@/content/blog'

type Params = {
  params: {
    slug: string
  }
}

export default function BlogArticlePage({ params }: Params) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return (
      <>
        <Announcement />
        <Navbar />
        <main className="min-h-screen flex items-center justify-center">
          <div className="text-center max-w-xl px-6 py-20">
            <h1 className="text-2xl font-semibold mb-2">Article not found</h1>
            <p className="text-ink/70">The blog post you’re looking for doesn’t exist.</p>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Announcement />
      <Navbar />
      <main className="min-h-screen bg-white">
        <section className="relative py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="mb-3 text-xs text-ink/60">{new Date(post.date).toLocaleDateString()}</div>
              <h1 className="text-3xl sm:text-4xl font-bold text-ink mb-4">{post.title}</h1>
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {post.tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-ink/5 text-ink/70">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* eslint-disable-next-line react/no-danger */}
              <div 
                className="prose prose-ink max-w-none" 
                style={{
                  lineHeight: '1.7',
                  fontSize: '16px'
                }}
                dangerouslySetInnerHTML={{ __html: post.content }} 
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}



