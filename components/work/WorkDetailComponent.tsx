"use client";
import { getProjectById } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

interface ProjectDetailProps {
  id: string;
}

export default function WorkDetailComponent({ id }: ProjectDetailProps) {
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

  const project = getProjectById(id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link href="/work" className="text-blue-600 hover:underline">
            Back to work
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 lg:py-32 pt-20 bg-white"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in-element opacity-0 mb-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-black transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/work" className="hover:text-black transition-colors">
              Work
            </Link>
            <span>/</span>
            <span className="text-black">{project.title}</span>
          </nav>
        </div>

        <div className="fade-in-element opacity-0 mb-16">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 bg-black text-white text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                  <span className="text-gray-500">{project.year}</span>
                </div>

                <div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4 leading-tight">
                    {project.title}
                  </h1>
                  <p className="text-xl lg:text-2xl text-gray-500 font-medium mb-6">
                    {project.subtitle}
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {project.overview}
                  </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-gray-100">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Client</div>
                    <div className="font-medium text-black">
                      {project.client}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Duration</div>
                    <div className="font-medium text-black">
                      {project.duration}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Year</div>
                    <div className="font-medium text-black">{project.year}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Category</div>
                    <div className="font-medium text-black">
                      {project.category}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="fade-in-element opacity-0 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6">
                The Challenge
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {project.challenge}
              </p>
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-black mb-6">
                Our Solution
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {project.solution}
              </p>
            </div>
          </div>
        </div>

        <div className="fade-in-element opacity-0 mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-8 text-center">
            Results that{" "}
            <span className="italic font-light text-gray-600">matter</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.results.map(
              (result: { metric: string; value: string }, index: number) => (
                <div
                  key={index}
                  className="text-center p-6 bg-gray-50 rounded-2xl"
                >
                  <div className="text-3xl lg:text-4xl font-bold text-black mb-2">
                    {result.value}
                  </div>
                  <div className="text-gray-600">{result.metric}</div>
                </div>
              )
            )}
          </div>
        </div>

        <div className="fade-in-element opacity-0 mb-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.slice(1).map((image: string, index: number) => (
              <div
                key={index}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden"
              >
                <Image
                  src={image}
                  alt={`${project.title} - Image ${index + 2}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="fade-in-element opacity-0 mb-16">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-black mb-4">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-4">
                Team Involved
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.team.map((role: string) => (
                  <span
                    key={role}
                    className="px-3 py-1 bg-black text-white rounded-full text-sm"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="fade-in-element opacity-0 mb-16">
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 text-center">
            <blockquote className="text-xl lg:text-2xl font-light text-black mb-6 leading-relaxed">
              &quot;{project.testimonial.text}&quot;
            </blockquote>
            <div>
              <div className="font-medium text-black">
                {project.testimonial.author}
              </div>
              <div className="text-gray-500">
                {project.testimonial.position}
              </div>
            </div>
          </div>
        </div>

        <div className="fade-in-element opacity-0 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/work"
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
              Back to work
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 border border-gray-200 text-black font-medium rounded-full hover:border-black transition-all duration-300 hover:scale-105"
            >
              Start your project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
