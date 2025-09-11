"use client";
import { getFeaturedProjects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function HomeWorkSection() {
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

  const featuredProjects = getFeaturedProjects();
  const displayProjects = featuredProjects.slice(0, 4);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="fade-in-element opacity-0 mb-20 lg:mb-24">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-[1.1] mb-6">
                Selected{" "}
                <span className="italic font-light text-gray-600">work</span>
              </h2>
              <p className="text-xl lg:text-2xl text-gray-600 font-light leading-relaxed">
                A showcase of our recent projects, where creativity meets
                functionality to deliver exceptional digital experiences.
              </p>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center text-black font-medium hover:opacity-70 transition-opacity duration-300 group whitespace-nowrap"
            >
              View all work
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

        <div className="space-y-20 lg:space-y-32">
          {displayProjects[0] && (
            <div className="fade-in-element opacity-0">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-5 lg:order-1">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-500 font-medium">
                        {displayProjects[0].year}
                      </span>
                      <div className="flex gap-2">
                        {displayProjects[0].tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-black mb-2">
                        {displayProjects[0].title}
                      </h3>
                      <p className="text-lg text-gray-500 font-medium mb-4">
                        {displayProjects[0].subtitle}
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        {displayProjects[0].description}
                      </p>
                    </div>
                    <Link
                      href={`/work/${displayProjects[0].id}`}
                      className="inline-flex items-center text-black font-medium hover:opacity-70 transition-opacity duration-300 group"
                    >
                      View project
                      <svg
                        className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
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
                <div className="lg:col-span-7 lg:order-2">
                  <Link href={`/work/${displayProjects[0].id}`}>
                    <div className="relative group cursor-pointer overflow-hidden rounded-2xl">
                      <Image
                        src={displayProjects[0].image}
                        alt={displayProjects[0].title}
                        width={800}
                        height={600}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {displayProjects[1] && (
            <div className="fade-in-element opacity-0">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-7">
                  <Link href={`/work/${displayProjects[1].id}`}>
                    <div className="relative group cursor-pointer overflow-hidden rounded-2xl">
                      <Image
                        src={displayProjects[1].image}
                        alt={displayProjects[1].title}
                        width={700}
                        height={500}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    </div>
                  </Link>
                </div>
                <div className="lg:col-span-5">
                  <div className="space-y-6 lg:pl-8">
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-500 font-medium">
                        {displayProjects[1].year}
                      </span>
                      <div className="flex gap-2">
                        {displayProjects[1].tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-3xl lg:text-4xl font-bold text-black mb-2">
                        {displayProjects[1].title}
                      </h3>
                      <p className="text-lg text-gray-500 font-medium mb-4">
                        {displayProjects[1].subtitle}
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        {displayProjects[1].description}
                      </p>
                    </div>
                    <Link
                      href={`/work/${displayProjects[1].id}`}
                      className="inline-flex items-center text-black font-medium hover:opacity-70 transition-opacity duration-300 group"
                    >
                      View project
                      <svg
                        className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
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
              </div>
            </div>
          )}

          {displayProjects[2] && (
            <div className="fade-in-element opacity-0">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-4 mb-6">
                  <span className="text-sm text-gray-500 font-medium">
                    {displayProjects[2].year}
                  </span>
                  <div className="flex gap-2">
                    {displayProjects[2].tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="text-3xl lg:text-5xl font-bold text-black mb-2">
                  {displayProjects[2].title}
                </h3>
                <p className="text-lg text-gray-500 font-medium mb-4">
                  {displayProjects[2].subtitle}
                </p>
                <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
                  {displayProjects[2].description}
                </p>
                <Link
                  href={`/work/${displayProjects[2].id}`}
                  className="inline-flex items-center text-black font-medium hover:opacity-70 transition-opacity duration-300 group"
                >
                  View project
                  <svg
                    className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
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
              <Link href={`/work/${displayProjects[2].id}`}>
                <div className="relative group cursor-pointer overflow-hidden rounded-2xl max-w-5xl mx-auto">
                  <Image
                    src={displayProjects[2].image}
                    alt={displayProjects[2].title}
                    width={900}
                    height={700}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
              </Link>
            </div>
          )}

          {displayProjects[3] && (
            <div className="fade-in-element opacity-0">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                <div className="lg:col-span-4 lg:order-1">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-500 font-medium">
                        {displayProjects[3].year}
                      </span>
                      <div className="flex gap-2">
                        {displayProjects[3].tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-black mb-2">
                        {displayProjects[3].title}
                      </h3>
                      <p className="text-lg text-gray-500 font-medium mb-4">
                        {displayProjects[3].subtitle}
                      </p>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {displayProjects[3].description}
                      </p>
                    </div>
                    <Link
                      href={`/work/${displayProjects[3].id}`}
                      className="inline-flex items-center text-black font-medium hover:opacity-70 transition-opacity duration-300 group"
                    >
                      View project
                      <svg
                        className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
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
                <div className="lg:col-span-8 lg:order-2">
                  <Link href={`/work/${displayProjects[3].id}`}>
                    <div className="relative group cursor-pointer overflow-hidden rounded-2xl">
                      <Image
                        src={displayProjects[3].image}
                        alt={displayProjects[3].title}
                        width={600}
                        height={800}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
