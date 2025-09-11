"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function AboutComponent() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedValue, setSelectedValue] = useState(0);

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

  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Founder & Creative Director",
      bio: "With over 12 years in digital design, Sarah leads our creative vision and strategic direction.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@orbit.com",
      },
    },
    {
      id: 2,
      name: "Marcus Chen",
      role: "Technical Director",
      bio: "Marcus brings deep technical expertise in AI and scalable architecture to every project.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      social: {
        linkedin: "#",
        github: "#",
        email: "marcus@orbit.com",
      },
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Strategy Lead",
      bio: "Emily helps brands navigate complex digital transformations with data-driven insights.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "emily@orbit.com",
      },
    },
    {
      id: 4,
      name: "David Kim",
      role: "Design Director",
      bio: "David crafts beautiful, intuitive experiences that users love and businesses need.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      social: {
        linkedin: "#",
        dribbble: "#",
        email: "david@orbit.com",
      },
    },
    {
      id: 5,
      name: "Lisa Park",
      role: "Head of Operations",
      bio: "Lisa ensures every project runs smoothly from concept to delivery and beyond.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80",
      social: {
        linkedin: "#",
        email: "lisa@orbit.com",
      },
    },
    {
      id: 6,
      name: "Alex Thompson",
      role: "Senior Developer",
      bio: "Alex brings cutting-edge development skills and a passion for clean, efficient code.",
      image:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      social: {
        linkedin: "#",
        github: "#",
        email: "alex@orbit.com",
      },
    },
  ];

  const methodology = [
    {
      phase: "01",
      title: "Discovery & Strategy",
      description:
        "We start by deeply understanding your business, users, and market landscape through research and strategic analysis.",
      deliverables: [
        "Market Research",
        "User Interviews",
        "Competitive Analysis",
        "Strategic Framework",
      ],
    },
    {
      phase: "02",
      title: "Design & Prototyping",
      description:
        "Our team creates compelling designs and interactive prototypes that bring your vision to life.",
      deliverables: [
        "Wireframes",
        "Visual Design",
        "Interactive Prototypes",
        "Design System",
      ],
    },
    {
      phase: "03",
      title: "Development & Testing",
      description:
        "We build robust, scalable solutions using modern technologies and rigorous testing practices.",
      deliverables: [
        "Frontend Development",
        "Backend Architecture",
        "Quality Assurance",
        "Performance Optimization",
      ],
    },
    {
      phase: "04",
      title: "Launch & Growth",
      description:
        "We ensure successful launches and provide ongoing support to help your product thrive in the market.",
      deliverables: [
        "Deployment",
        "Monitoring",
        "Analytics Setup",
        "Continuous Optimization",
      ],
    },
  ];

  const values = [
    {
      id: 1,
      title: "Human-Centered Design",
      description:
        "We believe great design starts with understanding people. Every decision we make is rooted in user needs and real-world impact.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Innovation Through Collaboration",
      description:
        "The best ideas emerge when diverse minds work together. We foster environments where creativity and technical excellence unite.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Sustainable Impact",
      description:
        "We're committed to creating digital solutions that are not just successful today, but contribute to a better tomorrow.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Transparent Partnership",
      description:
        "We believe in open communication, honest feedback, and building genuine partnerships that extend beyond project timelines.",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 lg:py-32 pt-20 bg-white"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in-element opacity-0 text-center mb-20 lg:mb-24">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black leading-[1.1] mb-8">
            We are{" "}
            <span className="italic font-light text-gray-600">Orbit</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto mb-12">
            A multidisciplinary team of strategists, designers, and developers
            united by a shared passion for creating exceptional digital
            experiences that matter.
          </p>
          <div className="grid sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-black mb-2">
                50+
              </div>
              <div className="text-gray-600">Projects delivered</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-black mb-2">
                6
              </div>
              <div className="text-gray-600">Global offices</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-black mb-2">
                25+
              </div>
              <div className="text-gray-600">Team members</div>
            </div>
          </div>
        </div>

        <div className="fade-in-element opacity-0 mb-20 lg:mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
              Our{" "}
              <span className="italic font-light text-gray-600">values</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we
              make.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {values.map((value, index) => (
              <div
                key={value.id}
                className="group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedValue(index)}
              >
                <div
                  className={`p-8 lg:p-10 rounded-2xl transition-all duration-300 ${
                    selectedValue === index
                      ? "bg-black text-white"
                      : "bg-gray-50 hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-start gap-6">
                    <div
                      className={`flex-shrink-0 transition-colors duration-300 ${
                        selectedValue === index ? "text-white" : "text-black"
                      }`}
                    >
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold mb-4">
                        {value.title}
                      </h3>
                      <p
                        className={`leading-relaxed ${
                          selectedValue === index
                            ? "text-white/90"
                            : "text-gray-600"
                        }`}
                      >
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="fade-in-element opacity-0 mb-20 lg:mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
              Our{" "}
              <span className="italic font-light text-gray-600">process</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that transforms ideas into impactful digital
              experiences.
            </p>
          </div>

          <div className="space-y-12 lg:space-y-16">
            {methodology.map((phase, index) => (
              <div
                key={index}
                className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div
                  className={`lg:col-span-5 ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl lg:text-6xl font-light text-gray-200">
                      {phase.phase}
                    </span>
                    <div className="h-px bg-gray-200 flex-1"></div>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-black mb-4">
                    {phase.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {phase.description}
                  </p>
                </div>

                <div
                  className={`lg:col-span-7 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <h4 className="font-bold text-black mb-4">
                      Key Deliverables:
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {phase.deliverables.map((deliverable, delIndex) => (
                        <div key={delIndex} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-black rounded-full flex-shrink-0"></div>
                          <span className="text-sm font-medium text-black">
                            {deliverable}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="fade-in-element opacity-0 mb-16 lg:mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
              Meet the{" "}
              <span className="italic font-light text-gray-600">team</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate individuals who bring diverse skills and perspectives
              to every project.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      {Object.entries(member.social).map(([platform, url]) => (
                        <a
                          key={platform}
                          href={url}
                          className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
                        >
                          {platform === "email"
                            ? "✉"
                            : platform === "linkedin"
                            ? "in"
                            : platform === "twitter"
                            ? "𝕏"
                            : platform === "github"
                            ? "gh"
                            : "dr"}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-xl lg:text-2xl font-bold text-black mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="fade-in-element opacity-0 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
              Ready to work{" "}
              <span className="italic font-light text-gray-600">together?</span>
            </h3>
            <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
              Let&apos;s start a conversation about your next project and
              explore how we can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-black text-white font-medium rounded-full hover:bg-black/90 transition-all duration-300 hover:scale-105 group"
              >
                Get in touch
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
                See our work
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
