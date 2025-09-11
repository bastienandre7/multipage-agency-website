"use client";
import { getFeaturedProjects, getRegularProjects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function WorkComponent() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

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
  const regularProjects = getRegularProjects();

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 lg:py-32 pt-20 bg-white"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in-element opacity-0 text-center mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black leading-[1.1] mb-6">
            Selected{" "}
            <span className="italic font-light text-gray-600">work</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto mb-8">
            A curated collection of projects that showcase our passion for
            creating exceptional digital experiences that drive real results.
          </p>
          <div className="flex items-center justify-center gap-8">
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-black">
                50+
              </div>
              <div className="text-sm text-gray-500">Projects</div>
            </div>
            <div className="w-px h-8 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-black">
                98%
              </div>
              <div className="text-sm text-gray-500">Success Rate</div>
            </div>
            <div className="w-px h-8 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold text-black">
                24
              </div>
              <div className="text-sm text-gray-500">Awards</div>
            </div>
          </div>
        </div>

        <div className="fade-in-element opacity-0 mb-12 md:mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`mb-16 ${index > 0 ? "md:mb-20" : ""}`}
            >
              <div
                className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div
                  className={`lg:col-span-7 ${
                    index % 2 === 1 ? "lg:col-start-6" : ""
                  }`}
                >
                  <Link
                    href={`/work/${project.id}`}
                    className="group block"
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className={`object-cover transition-all duration-700 ${
                          hoveredProject === project.id
                            ? "scale-105 brightness-90"
                            : "scale-100"
                        }`}
                        sizes="(max-width: 1024px) 100vw, 58vw"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                      <div className="absolute top-6 left-6">
                        <span className="px-3 py-1 bg-black text-white text-xs font-medium rounded-full">
                          Featured
                        </span>
                      </div>

                      <div className="absolute top-6 right-6 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                        <svg
                          className="w-5 h-5 text-black"
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
                  </Link>
                </div>

                <div
                  className={`lg:col-span-5 ${
                    index % 2 === 1 ? "lg:col-start-1" : ""
                  }`}
                >
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-gray-500">
                        {project.year}
                      </span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                      <span className="text-sm font-medium text-gray-500">
                        {project.client}
                      </span>
                    </div>

                    <div>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-3 leading-tight">
                        {project.title}
                      </h2>
                      <p className="text-lg text-gray-500 font-medium mb-4">
                        {project.subtitle}
                      </p>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex gap-2 flex-wrap mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/work/${project.id}`}
                      className="inline-flex items-center text-black font-medium hover:opacity-70 transition-opacity duration-300 group"
                    >
                      View case study
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
          ))}
        </div>

        <div className="fade-in-element opacity-0">
          <h3 className="text-2xl lg:text-3xl font-bold text-black mb-8 text-center">
            More{" "}
            <span className="italic font-light text-gray-600">projects</span>
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {regularProjects.map((project, index) => (
              <article
                key={project.id}
                className={`group ${
                  index < 2 ? "sm:col-span-2 lg:col-span-2" : ""
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <Link href={`/work/${project.id}`} className="block">
                  <div className="relative bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className={`object-cover transition-all duration-500 ${
                          hoveredProject === project.id
                            ? "scale-105"
                            : "scale-100"
                        }`}
                        sizes={
                          index < 2
                            ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                            : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        }
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex gap-2 mb-2">
                          {project.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 text-xs bg-white/20 backdrop-blur-sm rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-gray-500">
                          {project.year}
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

                      <h3 className="text-lg font-bold text-black mb-2 leading-tight">
                        {project.title}
                      </h3>

                      <p className="text-sm text-gray-500 mb-3">
                        {project.subtitle}
                      </p>

                      <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 mb-4">
                        {project.description}
                      </p>

                      <div className="flex gap-1 flex-wrap">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs bg-gray-50 text-gray-600 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>

        <div className="fade-in-element opacity-0 text-center mt-16 lg:mt-20">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
              Ready to create something{" "}
              <span className="italic font-light text-gray-600">amazing?</span>
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Let&apos;s discuss how we can help bring your vision to life with
              the same level of creativity and expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-black text-white font-medium rounded-full hover:bg-black/90 transition-all duration-300 hover:scale-105 group"
              >
                Start your project
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

              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 border border-gray-200 text-black font-medium rounded-full hover:border-black transition-all duration-300 hover:scale-105"
              >
                Our services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
