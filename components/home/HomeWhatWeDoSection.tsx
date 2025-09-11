"use client";
import { useEffect, useRef } from "react";

export default function HomeWhatWeDoSection() {
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
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="fade-in-element opacity-0 mb-16 lg:mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-[1.1] max-w-5xl">
              We build transformative{" "}
              <span className="italic font-light text-gray-600">
                digital experiences
              </span>{" "}
              for ambitious brands by blending{" "}
              <span className="italic font-light text-gray-600">AI</span>,{" "}
              design, and technology.
            </h2>
          </div>

          <div className="fade-in-element opacity-0 mb-20">
            <p className="text-xl lg:text-2xl text-gray-600 font-light leading-relaxed max-w-4xl">
              Every project we undertake is a partnership. We work closely with
              forward-thinking companies to create digital products that not
              only meet today&apos;s needs but anticipate tomorrow&apos;s
              opportunities.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="fade-in-element opacity-0">
              <div className="mb-6">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-black mb-4">
                Strategy & Innovation
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                We help brands navigate digital transformation through strategic
                thinking, user research, and innovative solutions that drive
                meaningful growth.
              </p>
              <div className="space-y-2">
                <div className="text-sm text-gray-500 font-medium">
                  Digital Strategy
                </div>
                <div className="text-sm text-gray-500 font-medium">
                  User Research
                </div>
                <div className="text-sm text-gray-500 font-medium">
                  Innovation Consulting
                </div>
              </div>
            </div>

            <div className="fade-in-element opacity-0">
              <div className="mb-6">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-black mb-4">
                Design & Experience
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                From brand identity to digital interfaces, we craft compelling
                experiences that engage users and communicate your brand&apos;s
                unique value proposition.
              </p>
              <div className="space-y-2">
                <div className="text-sm text-gray-500 font-medium">
                  UI/UX Design
                </div>
                <div className="text-sm text-gray-500 font-medium">
                  Brand Identity
                </div>
                <div className="text-sm text-gray-500 font-medium">
                  Prototyping
                </div>
              </div>
            </div>

            <div className="fade-in-element opacity-0">
              <div className="mb-6">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-black mb-4">
                Development & Technology
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                We build scalable, performant digital products using
                cutting-edge technologies, ensuring your vision becomes a robust
                reality that stands the test of time.
              </p>
              <div className="space-y-2">
                <div className="text-sm text-gray-500 font-medium">
                  Web Development
                </div>
                <div className="text-sm text-gray-500 font-medium">
                  Mobile Apps
                </div>
                <div className="text-sm text-gray-500 font-medium">
                  AI Integration
                </div>
              </div>
            </div>
          </div>

          <div className="fade-in-element opacity-0 mt-20 text-center">
            <p className="text-lg text-gray-600 mb-8">
              Ready to transform your digital presence?
            </p>
            <a
              href="/services"
              className="inline-flex items-center text-black font-medium hover:opacity-70 transition-opacity duration-300 group"
            >
              Explore our services
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
          </div>
        </div>
      </div>
    </section>
  );
}
