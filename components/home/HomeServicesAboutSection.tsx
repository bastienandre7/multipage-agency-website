"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function HomeServicesAboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

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

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer && isClient) {
      let scrollAmount = 0;
      const scroll = () => {
        scrollAmount += 1;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
        scrollContainer.scrollLeft = scrollAmount;
      };

      const intervalId = setInterval(scroll, 30);
      return () => {
        clearInterval(intervalId);
        observer.disconnect();
      };
    }

    return () => observer.disconnect();
  }, [isClient]);

  const carouselImages = [
    {
      src: "https://picsum.photos/300/400?random=11",
      alt: "Team member with branded bag",
      width: 300,
      height: 400,
    },
    {
      src: "https://picsum.photos/400/300?random=12",
      alt: "Team members on stairs",
      width: 400,
      height: 350,
    },
    {
      src: "https://picsum.photos/350/300?random=13",
      alt: "City view",
      width: 350,
      height: 300,
    },
    {
      src: "https://picsum.photos/280/450?random=14",
      alt: "Team member with camera",
      width: 280,
      height: 450,
    },
    {
      src: "https://picsum.photos/320/380?random=15",
      alt: "Office bookshelf",
      width: 320,
      height: 380,
    },
    {
      src: "https://picsum.photos/380/320?random=16",
      alt: "Team working in office",
      width: 380,
      height: 320,
    },
    {
      src: "https://picsum.photos/290/400?random=17",
      alt: "Team member with laptop",
      width: 290,
      height: 400,
    },
    {
      src: "https://picsum.photos/360/280?random=18",
      alt: "Rainbow balloon",
      width: 360,
      height: 280,
    },
    {
      src: "https://picsum.photos/310/420?random=19",
      alt: "Designer with tablet",
      width: 310,
      height: 420,
    },
    {
      src: "https://picsum.photos/330/360?random=20",
      alt: "Team member with flag",
      width: 330,
      height: 360,
    },
    {
      src: "https://picsum.photos/340/340?random=21",
      alt: "Book on table",
      width: 340,
      height: 340,
    },
    {
      src: "https://picsum.photos/300/450?random=22",
      alt: "Team collaboration",
      width: 300,
      height: 450,
    },
  ];

  const duplicatedImages = [
    ...carouselImages,
    ...carouselImages,
    ...carouselImages,
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 bg-white overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="fade-in-element opacity-0 text-center mb-16 lg:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-[1.1] mb-8 max-w-4xl mx-auto">
            We transform companies through{" "}
            <span className="italic font-light text-gray-600">
              design innovation
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto mb-12">
            We design and develop cutting-edge digital solutions that elevate
            brands and create lasting impact across all channels.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-4 bg-black text-white font-medium rounded-full hover:bg-black/90 transition-all duration-300 hover:scale-105 group"
          >
            View our services
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

      <div className="fade-in-element opacity-0 mb-16 lg:mb-20">
        {!isClient ? (
          <div className="h-96 bg-gray-100 rounded-2xl mx-6 flex items-center justify-center">
            <span className="text-gray-400">Loading carousel...</span>
          </div>
        ) : (
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-hidden"
            style={{
              scrollBehavior: "auto",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {duplicatedImages.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 relative overflow-hidden rounded-2xl group cursor-pointer"
                style={{
                  width: `${image.width}px`,
                  height: `${image.height}px`,
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 400px) 250px, 400px"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="fade-in-element opacity-0 text-center">
          <p className="text-xl lg:text-2xl text-gray-600 font-light leading-relaxed max-w-4xl mx-auto mb-12">
            Our multidisciplinary team unites strategy, branding, UX design, and
            technology to deliver fast and meaningful results. By collaborating
            closely with our clients, we blend human creativity with AI-powered
            efficiency to consistently go beyond expectations.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center text-black font-medium hover:opacity-70 transition-opacity duration-300 group"
          >
            Get to know us
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
    </section>
  );
}
