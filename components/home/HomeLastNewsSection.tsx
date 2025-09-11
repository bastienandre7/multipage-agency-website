"use client";
import { getAllBlogPosts } from "@/data/blogPosts"; // ✅ Import depuis data/blog.ts
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function HomeLastNewsSection() {
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

  const blogPosts = getAllBlogPosts().slice(0, 3);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="fade-in-element opacity-0 mb-16 lg:mb-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-[1.1] mb-6">
                Latest{" "}
                <span className="italic font-light text-gray-600">
                  insights
                </span>
              </h2>
              <p className="text-xl lg:text-2xl text-gray-600 font-light leading-relaxed">
                Stay ahead with our thoughts on design, technology, and digital
                innovation.
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center text-black font-medium hover:opacity-70 transition-opacity duration-300 group whitespace-nowrap"
            >
              View all articles
              <svg
                className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group block"
            >
              <article className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-gray-500">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-500">
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <h3 className="font-bold text-black mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="fade-in-element opacity-0 mt-20 lg:mt-24 text-center">
          <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100">
            <h3 className="text-2xl lg:text-3xl font-bold text-black mb-4">
              Stay in the loop
            </h3>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter and get the latest insights on design,
              technology, and digital innovation delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black/20 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-black/90 transition-all duration-300 hover:scale-105 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
