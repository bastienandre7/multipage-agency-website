"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function NotFoundComponent() {
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

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gray-100 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-gray-200 rounded-full opacity-30 animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gray-150 rounded-full opacity-40 animate-pulse delay-500"></div>
        <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-gray-100 rounded-full opacity-20 animate-bounce delay-2000"></div>

        <div className="absolute inset-0 opacity-[0.02]">
          <div className="grid grid-cols-12 gap-4 h-full w-full max-w-7xl mx-auto px-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="bg-black"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in-element opacity-0 mb-8">
          <div className="relative">
            <h1 className="text-[12rem] sm:text-[16rem] lg:text-[20rem] font-black text-gray-100 leading-none select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black">
                Oops!
              </div>
            </div>
          </div>
        </div>

        <div
          className="fade-in-element opacity-0 space-y-8"
          style={{ animationDelay: "200ms" }}
        >
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight">
              Page{" "}
              <span className="italic font-light text-gray-600">not found</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
              The page you&apos;re looking for doesn&apos;t exist or has been
              moved.
              <br />
              Let&apos;s get you back on track.
            </p>
          </div>

          <div className="flex justify-center my-8">
            <div className="relative">
              <div className="w-24 h-24 border-4 border-gray-200 rounded-full animate-spin">
                <div className="w-6 h-6 bg-black rounded-full absolute top-2 left-2"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="group relative inline-flex items-center px-8 py-4 bg-black text-white font-medium rounded-full overflow-hidden hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10">Go back home</span>
              <svg
                className="ml-2 w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <Link
              href="/work"
              className="inline-flex items-center text-gray-600 font-medium hover:text-black transition-colors duration-300 group"
            >
              View our work
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

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
