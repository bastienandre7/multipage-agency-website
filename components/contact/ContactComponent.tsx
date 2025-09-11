"use client";
import { useEffect, useRef } from "react";

export default function ContactComponent() {
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

  const offices = [
    {
      city: "London",
      address: "1 Canada Square,\nLondon E14 5AB, United Kingdom",
      timezone: "GMT",
    },
    {
      city: "Berlin",
      address: "Rosenthaler Str. 72A,\n10119 Berlin, Germany",
      timezone: "CET",
    },
    {
      city: "Paris",
      address: "10 Rue de la Paix,\n75002 Paris, France",
      timezone: "CET",
    },
    {
      city: "Tokyo",
      address: "Shibuya Scramble Square,\nShibuya City, Tokyo 150-0002, Japan",
      timezone: "JST",
    },
    {
      city: "Sydney",
      address: "161 Castlereagh St,\nSydney NSW 2000, Australia",
      timezone: "AEST",
    },
    {
      city: "Toronto",
      address: "100 King St W,\nToronto, ON M5X 1A9, Canada",
      timezone: "EST",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 lg:py-32 pt-20 bg-white"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in-element opacity-0 text-center mb-16 md:mb-20 lg:mb-24">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black leading-[1.1] mb-8">
            Let&apos;s start a{" "}
            <span className="italic font-light text-gray-600">
              conversation
            </span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto mb-12">
            Ready to transform your digital presence? We&apos;re here to help
            bring your vision to life. Get in touch and let&apos;s create
            something extraordinary together.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12">
            <a
              href="mailto:hey@orbit.com"
              className="inline-flex items-center text-xl lg:text-2xl font-medium text-black hover:text-gray-600 transition-colors duration-300 group"
            >
              <svg
                className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              hey@orbit.com
            </a>
            <a
              href="tel:+17478632329262"
              className="inline-flex items-center text-xl lg:text-2xl font-medium text-black hover:text-gray-600 transition-colors duration-300 group"
            >
              <svg
                className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              +1 747 863 2329 262
            </a>
          </div>
        </div>

        <div className="fade-in-element opacity-0">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black text-center mb-12 lg:mb-16">
            Our <span className="italic font-light text-gray-600">offices</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {offices.map((office, index) => (
              <div
                key={office.city}
                className="group"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="p-6 lg:p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 bg-white">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl lg:text-2xl font-bold text-black">
                      {office.city}
                    </h3>
                    <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {office.timezone}
                    </span>
                  </div>

                  <address className="not-italic text-sm lg:text-base text-gray-600 leading-relaxed whitespace-pre-line">
                    {office.address}
                  </address>

                  <div className="mt-6 pt-6 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center text-sm text-gray-500">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                      Open for business
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="fade-in-element opacity-0 text-center mt-16 lg:mt-20">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-6">
              Ready to{" "}
              <span className="italic font-light text-gray-600">
                get started?
              </span>
            </h3>
            <p className="text-base lg:text-lg text-gray-600 mb-8">
              Whether you&apos;re looking to launch a new project or transform
              an existing one, we&apos;re here to help. Let&apos;s discuss your
              vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hey@orbit.com"
                className="inline-flex items-center px-8 py-4 bg-black text-white font-medium rounded-full hover:bg-black/90 transition-all duration-300 hover:scale-105 group"
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
              </a>
              <a
                href="#"
                className="inline-flex items-center px-8 py-4 border border-gray-200 text-black font-medium rounded-full hover:border-black transition-all duration-300 hover:scale-105 group"
              >
                Schedule a call
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
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
