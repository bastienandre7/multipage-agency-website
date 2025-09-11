"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function ServicesComponent() {
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

  const services = [
    {
      id: 1,
      icon: (
        <svg
          className="w-8 h-8 text-white"
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
      ),
      title: "Strategy & Innovation",
      description:
        "We help brands navigate digital transformation through strategic thinking, user research, and innovative solutions that drive meaningful growth.",
      features: [
        "Digital Strategy",
        "User Research",
        "Innovation Consulting",
        "Market Analysis",
        "Competitive Intelligence",
        "Business Model Innovation",
      ],
      processes: [
        {
          step: "01",
          name: "Discovery",
          description:
            "Deep dive into your business goals, challenges, and market landscape.",
        },
        {
          step: "02",
          name: "Strategy",
          description:
            "Develop comprehensive digital strategies aligned with your objectives.",
        },
        {
          step: "03",
          name: "Innovation",
          description:
            "Identify opportunities for breakthrough solutions and competitive advantage.",
        },
      ],
    },
    {
      id: 2,
      icon: (
        <svg
          className="w-8 h-8 text-white"
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
      ),
      title: "Design & Experience",
      description:
        "From brand identity to digital interfaces, we craft compelling experiences that engage users and communicate your brand's unique value proposition.",
      features: [
        "UI/UX Design",
        "Brand Identity",
        "Prototyping",
        "Design Systems",
        "User Testing",
        "Interaction Design",
      ],
      processes: [
        {
          step: "01",
          name: "Research",
          description:
            "Understanding your users, their needs, and behavioral patterns.",
        },
        {
          step: "02",
          name: "Design",
          description:
            "Creating intuitive interfaces and compelling brand experiences.",
        },
        {
          step: "03",
          name: "Validate",
          description:
            "Testing and refining designs based on user feedback and data.",
        },
      ],
    },
    {
      id: 3,
      icon: (
        <svg
          className="w-8 h-8 text-white"
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
      ),
      title: "Development & Technology",
      description:
        "We build scalable, performant digital products using cutting-edge technologies, ensuring your vision becomes a robust reality that stands the test of time.",
      features: [
        "Web Development",
        "Mobile Apps",
        "AI Integration",
        "Cloud Architecture",
        "API Development",
        "Performance Optimization",
      ],
      processes: [
        {
          step: "01",
          name: "Architecture",
          description:
            "Planning scalable and maintainable technical foundations.",
        },
        {
          step: "02",
          name: "Development",
          description:
            "Building robust applications with modern technologies and best practices.",
        },
        {
          step: "03",
          name: "Deploy",
          description:
            "Launching and optimizing for performance, security, and scalability.",
        },
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 lg:py-32 pt-20 bg-white"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in-element opacity-0 text-center mb-16 md:mb-20 lg:mb-24">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black leading-[1.1] mb-6">
            Our{" "}
            <span className="italic font-light text-gray-600">services</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto">
            We combine strategic thinking, creative design, and cutting-edge
            technology to transform businesses and create exceptional digital
            experiences.
          </p>
        </div>

        <div className="space-y-20 md:space-y-24 lg:space-y-32">
          {services.map((service, index) => (
            <div key={service.id} className="fade-in-element opacity-0">
              <div
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16 ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                      {service.icon}
                    </div>
                    <span className="text-6xl font-light text-gray-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="bg-gray-50 rounded-2xl p-8 lg:p-10">
                    <h3 className="text-xl lg:text-2xl font-bold text-black mb-6">
                      What we deliver
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-3 p-3 bg-white rounded-lg"
                        >
                          <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                          <span className="text-sm font-medium text-black">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-16">
                <h3 className="text-2xl lg:text-3xl font-bold text-black mb-12 text-center">
                  Our{" "}
                  <span className="italic font-light text-gray-600">
                    process
                  </span>
                </h3>
                <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                  {service.processes.map((process, processIndex) => (
                    <div
                      key={processIndex}
                      className="text-center group"
                      style={{
                        animationDelay: `${processIndex * 200}ms`,
                      }}
                    >
                      <div className="relative mb-6">
                        <div className="w-16 h-16 bg-gray-100 group-hover:bg-black rounded-full flex items-center justify-center mx-auto transition-colors duration-300">
                          <span className="text-xl font-bold text-black group-hover:text-white transition-colors duration-300">
                            {process.step}
                          </span>
                        </div>
                        {processIndex < service.processes.length - 1 && (
                          <div className="hidden md:block absolute top-8 left-1/2 w-full h-px bg-gray-200 transform translate-x-8"></div>
                        )}
                      </div>
                      <h4 className="text-xl font-bold text-black mb-3">
                        {process.name}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {process.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="fade-in-element opacity-0 text-center mt-20 lg:mt-24">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
              Ready to{" "}
              <span className="italic font-light text-gray-600">
                get started?
              </span>
            </h3>
            <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
              Let&apos;s discuss how we can help transform your business through
              strategic design and innovative technology solutions.
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
                href="/work"
                className="inline-flex items-center px-8 py-4 border border-gray-200 text-black font-medium rounded-full hover:border-black transition-all duration-300 hover:scale-105 group"
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
          </div>
        </div>
      </div>
    </section>
  );
}
