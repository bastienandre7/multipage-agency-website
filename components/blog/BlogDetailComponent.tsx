"use client";
import { getBlogPostBySlug, getRelatedPosts } from "@/data/blogPosts";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

interface BlogDetailProps {
  slug: string;
}

export default function BlogDetailComponent({ slug }: BlogDetailProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".fade-in-element");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const post = getBlogPostBySlug(slug);
  const relatedPosts = getRelatedPosts(slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Article not found</h1>
          <Link href="/blog" className="text-blue-600 hover:underline">
            Back to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article
      ref={sectionRef}
      className="py-16 md:py-24 lg:py-32 pt-20 bg-white"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in-element opacity-0 mb-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-black transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-black transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-black">{post.title}</span>
          </nav>
        </div>

        <header className="fade-in-element opacity-0 mb-12">
          <div className="mb-6">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-black text-white text-sm font-medium rounded-full">
                {post.category}
              </span>
              <span className="text-gray-500 text-sm">{post.readTime}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-4 pb-8 border-b border-gray-100">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div>
                <div className="font-medium text-black">{post.author.name}</div>
                <div className="text-sm text-gray-500">
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="fade-in-element opacity-0 mb-12">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
        </div>

        <div className="fade-in-element opacity-0 mb-16">
          <div
            className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-black prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-strong:text-black"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        <div className="fade-in-element opacity-0 mb-12">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <div className="fade-in-element opacity-0 mb-16">
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-start gap-6">
              <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-2">
                  About {post.author.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {post.author.bio}
                </p>
              </div>
            </div>
          </div>
        </div>

        {relatedPosts.length > 0 && (
          <div className="fade-in-element opacity-0 mb-16">
            <h3 className="text-2xl font-bold text-black mb-8">
              Related Articles
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group block"
                >
                  <article className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs text-gray-500">
                          {relatedPost.category}
                        </span>
                        <span className="text-xs text-gray-400">•</span>
                        <span className="text-xs text-gray-500">
                          {relatedPost.readTime}
                        </span>
                      </div>
                      <h4 className="font-bold text-black mb-2 line-clamp-2 group-hover:text-gray-700 transition-colors">
                        {relatedPost.title}
                      </h4>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="fade-in-element opacity-0 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="inline-flex items-center px-8 py-4 bg-black text-white font-medium rounded-full hover:bg-black/90 transition-all duration-300 hover:scale-105 group"
            >
              <svg
                className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to blog
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 border border-gray-200 text-black font-medium rounded-full hover:border-black transition-all duration-300 hover:scale-105"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
