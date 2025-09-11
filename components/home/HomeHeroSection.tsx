"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function HomeHeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        console.log("Autoplay prevented");
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-0">
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
          <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100" />
        </video>
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white leading-[0.9] mb-8">
            We are a <span className="italic font-light">digital</span>
            <br />
            product studio
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-white/80 font-light leading-relaxed mb-12 max-w-4xl mx-auto">
            We partner with ambitious brands and organizations to create
            exceptional digital experiences that drive growth and engagement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-black text-lg font-medium rounded-full hover:bg-white/90 transition-all duration-300 hover:scale-105 group"
            >
              Start a project
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
              href="/work"
              className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white text-lg font-medium rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 group"
            >
              View our work
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

          <div className="mt-20 lg:mt-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  150+
                </div>
                <div className="text-white/70 text-lg font-light">
                  Projects delivered
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  50+
                </div>
                <div className="text-white/70 text-lg font-light">
                  Happy clients
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  5+
                </div>
                <div className="text-white/70 text-lg font-light">
                  Years of experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center text-white/60">
          <span className="text-sm font-light mb-4 tracking-wider">SCROLL</span>
          <div className="w-[1px] h-12 bg-white/30 relative">
            <div className="absolute top-0 w-full h-6 bg-gradient-to-b from-white/60 to-transparent animate-pulse" />
          </div>
        </div>
      </div>

      <div className="absolute top-1/4 left-8 w-2 h-2 bg-white/20 rounded-full animate-pulse" />
      <div className="absolute top-1/3 right-12 w-3 h-3 border border-white/20 rounded-full animate-pulse delay-1000" />
      <div className="absolute bottom-1/4 left-16 w-1 h-8 bg-white/10" />
    </section>
  );
}
