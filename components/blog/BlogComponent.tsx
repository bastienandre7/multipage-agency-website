"use client";
import {
  getAllBlogPosts,
  getBlogCategories,
  getFeaturedBlogPosts,
} from "@/data/blogPosts";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function BlogComponent() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);

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

  const allPosts = getAllBlogPosts();
  const featuredPosts = getFeaturedBlogPosts();
  const categories = ["All", ...getBlogCategories()];

  const filteredPosts =
    selectedCategory === "All"
      ? allPosts
      : allPosts.filter((post) => post.category === selectedCategory);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 lg:py-32 pt-20 bg-white"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in-element opacity-0 text-center mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black leading-[1.1] mb-6">
            Latest{" "}
            <span className="italic font-light text-gray-600">insights</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto mb-8">
            Thoughts, insights, and perspectives on design, technology, and the
            future of digital experiences.
          </p>
          <div className="flex items-center justify-center gap-8">
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-black">
                {allPosts.length}+
              </div>
              <div className="text-sm text-gray-500">Articles</div>
            </div>
            <div className="w-px h-8 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-black">
                {categories.length - 1}
              </div>
              <div className="text-sm text-gray-500">Categories</div>
            </div>
            <div className="w-px h-8 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-black">
                Weekly
              </div>
              <div className="text-sm text-gray-500">Updates</div>
            </div>
          </div>
        </div>

        {featuredPosts.length > 0 && (
          <div className="fade-in-element opacity-0 mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold text-black mb-8">
              Featured{" "}
              <span className="italic font-light text-gray-600">articles</span>
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group block"
                  onMouseEnter={() => setHoveredPost(post.id)}
                  onMouseLeave={() => setHoveredPost(null)}
                >
                  <article className="relative bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className={`object-cover transition-all duration-700 ${
                          hoveredPost === post.id
                            ? "scale-105 brightness-90"
                            : "scale-100"
                        }`}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                      <div className="absolute top-6 left-6">
                        <span className="px-3 py-1 bg-black text-white text-xs font-medium rounded-full">
                          Featured
                        </span>
                      </div>

                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center gap-2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                            {post.category}
                          </span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-sm text-gray-500">
                          {new Date(post.publishedAt).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                        <span className="text-sm text-gray-500">
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="text-xl lg:text-2xl font-bold text-black mb-3 leading-tight group-hover:text-gray-700 transition-colors duration-300">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed mb-6 line-clamp-2">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="relative w-8 h-8 rounded-full overflow-hidden">
                            <Image
                              src={post.author.avatar}
                              alt={post.author.name}
                              fill
                              className="object-cover"
                              sizes="32px"
                            />
                          </div>
                          <span className="text-sm font-medium text-gray-700">
                            {post.author.name}
                          </span>
                        </div>

                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
                          <svg
                            className="w-4 h-4"
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
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="fade-in-element opacity-0 mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="fade-in-element opacity-0">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
                onMouseEnter={() => setHoveredPost(post.id)}
                onMouseLeave={() => setHoveredPost(null)}
              >
                <article className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className={`object-cover transition-all duration-500 ${
                        hoveredPost === post.id ? "scale-105" : "scale-100"
                      }`}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                          {post.category}
                        </span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-500">
                        {new Date(post.publishedAt).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          }
                        )}
                      </span>
                      <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
                        <svg
                          className="w-3 h-3"
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
                      </div>
                    </div>

                    <h3 className="font-bold text-black mb-2 leading-tight group-hover:text-gray-700 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-2">
                      <div className="relative w-6 h-6 rounded-full overflow-hidden">
                        <Image
                          src={post.author.avatar}
                          alt={post.author.name}
                          fill
                          className="object-cover"
                          sizes="24px"
                        />
                      </div>
                      <span className="text-sm text-gray-500">
                        {post.author.name}
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>

        <div className="fade-in-element opacity-0 text-center mt-16 lg:mt-20">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
              Stay in the{" "}
              <span className="italic font-light text-gray-600">loop</span>
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Subscribe to our newsletter and get the latest insights, trends,
              and updates delivered directly to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 border border-gray-200 rounded-full focus:outline-none focus:border-black transition-colors duration-300"
              />
              <button className="px-8 py-4 bg-black text-white font-medium rounded-full hover:bg-black/90 transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
