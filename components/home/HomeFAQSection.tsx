"use client";
import { useEffect, useRef, useState } from "react";

export default function HomeFAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openItems, setOpenItems] = useState<number[]>([]);

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

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What services does your agency offer?",
      answer:
        "We offer a comprehensive range of digital services including strategy and consulting, UX/UI design, web and mobile development, branding and identity, digital marketing, and ongoing support and maintenance. Our multidisciplinary team works collaboratively to deliver end-to-end solutions that drive real business results.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary depending on scope and complexity. A simple website might take 4-6 weeks, while a comprehensive digital platform could take 3-6 months. We'll provide a detailed timeline during our initial consultation, with clear milestones and regular check-ins throughout the process.",
    },
    {
      question: "What is your design and development process?",
      answer:
        "Our process is built around collaboration and transparency. We start with discovery and strategy, move through design and prototyping, then into development and testing. Throughout each phase, we maintain constant communication with our clients, ensuring alignment and incorporating feedback to deliver exceptional results.",
    },
    {
      question: "Do you work with startups or only established companies?",
      answer:
        "We work with organizations of all sizes, from innovative startups to Fortune 500 companies. Whether you're launching your first product or scaling an established business, we tailor our approach to meet your specific needs, budget, and timeline while delivering the same high-quality results.",
    },
    {
      question: "How do you ensure projects stay on budget and timeline?",
      answer:
        "We use detailed project planning, regular milestone reviews, and transparent communication to keep projects on track. Our team provides weekly updates, and we use project management tools that give you real-time visibility into progress. Any scope changes are discussed and approved before implementation.",
    },
    {
      question: "What happens after my project launches?",
      answer:
        "Launch is just the beginning of our partnership. We provide ongoing support, maintenance, and optimization services to ensure your digital products continue to perform at their best. We also offer analytics and performance monitoring to help you understand user behavior and identify growth opportunities.",
    },
    {
      question: "Can you help with existing projects or redesigns?",
      answer:
        "Absolutely! We frequently help companies improve existing digital products through redesigns, performance optimization, feature additions, or complete platform migrations. We'll audit your current setup and recommend the best path forward to achieve your goals.",
    },
    {
      question: "How do you measure project success?",
      answer:
        "Success metrics are defined collaboratively at the project's start and typically include user engagement, conversion rates, performance metrics, and business KPIs. We provide detailed analytics and reporting so you can see the tangible impact of our work on your business objectives.",
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="fade-in-element opacity-0 text-center mb-16 lg:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-[1.1] mb-8">
            Frequently asked{" "}
            <span className="italic font-light text-gray-600">questions</span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
            Everything you need to know about working with our team and our
            process. Can&apos;t find what you&apos;re looking for? Feel free to
            reach out.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="fade-in-element opacity-0 border border-gray-200 rounded-2xl overflow-hidden bg-white hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between group focus:outline-none"
                >
                  <h3 className="text-lg lg:text-xl font-bold text-black group-hover:text-gray-700 transition-colors duration-300 pr-4">
                    {faq.question}
                  </h3>
                  <div
                    className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-gray-200 transition-all duration-300 ${
                      openItems.includes(index)
                        ? "rotate-45 bg-black group-hover:bg-black"
                        : ""
                    }`}
                  >
                    <svg
                      className={`w-4 h-4 transition-colors duration-300 ${
                        openItems.includes(index) ? "text-white" : "text-black"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openItems.includes(index)
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-8 pb-6">
                    <div className="border-t border-gray-100 pt-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="fade-in-element opacity-0 mt-20 lg:mt-24 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-black mb-6">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-8">
              Our team is here to help. Get in touch and we&apos;ll get back to
              you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
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
              </a>
              <a
                href="mailto:hello@orbit.com"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-200 text-black font-medium rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 group"
              >
                Send us an email
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
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
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
