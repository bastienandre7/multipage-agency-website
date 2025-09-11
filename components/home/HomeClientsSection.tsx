"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function HomeClientsSection() {
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

  const clients = [
    { name: "Microsoft", logo: "/logos/microsoft.svg" },
    { name: "Google", logo: "/logos/google.svg" },
    { name: "Apple", logo: "/logos/apple.svg" },
    { name: "Amazon", logo: "/logos/amazon.svg" },
    { name: "Netflix", logo: "/logos/netflix.svg" },
    { name: "Spotify", logo: "/logos/spotify.svg" },
    { name: "Adobe", logo: "/logos/adobe.svg" },
    { name: "Shopify", logo: "/logos/shopify.svg" },
    { name: "Stripe", logo: "/logos/stripe.svg" },
    { name: "Airbnb", logo: "/logos/airbnb.svg" },
    { name: "Uber", logo: "/logos/uber.svg" },
    { name: "Twitter", logo: "/logos/facebook.svg" },
  ];

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="fade-in-element opacity-0 text-center mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-6">
            Trusted by industry leaders
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            We&apos;ve had the privilege of partnering with some of the
            world&apos;s most innovative companies to create exceptional digital
            experiences.
          </p>
        </div>

        <div className="fade-in-element opacity-0">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 lg:gap-12">
            {clients.map((client, index) => (
              <div
                key={client.name}
                className="flex items-center justify-center p-6 group cursor-pointer transition-all duration-300 hover:scale-105"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="relative w-full h-16 flex items-center justify-center">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    fill
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="fade-in-element opacity-0 mt-20 lg:mt-24 pt-16 lg:pt-20 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-black mb-2">
                98%
              </div>
              <div className="text-gray-600 font-light">
                Client satisfaction rate
              </div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-black mb-2">
                150+
              </div>
              <div className="text-gray-600 font-light">
                Successful projects delivered
              </div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-black mb-2">
                5+
              </div>
              <div className="text-gray-600 font-light">
                Years of partnership experience
              </div>
            </div>
          </div>
        </div>

        <div className="fade-in-element opacity-0 text-center mt-16 lg:mt-20">
          <p className="text-lg text-gray-600 mb-8">
            Ready to join our growing list of success stories?
          </p>
          <a
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
          </a>
        </div>
      </div>
    </section>
  );
}
