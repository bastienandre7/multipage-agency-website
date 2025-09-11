import HomeClientsSection from "@/components/home/HomeClientsSection";
import HomeFAQSection from "@/components/home/HomeFAQSection";
import HomeHeroSection from "@/components/home/HomeHeroSection";
import HomeLastNewsSection from "@/components/home/HomeLastNewsSection";
import HomeServicesAboutSection from "@/components/home/HomeServicesAboutSection";
import HomeWhatWeDoSection from "@/components/home/HomeWhatWeDoSection";
import HomeWorkSection from "@/components/home/HomeWorkSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Innovation & Design Studio",
  description:
    "Transform your business with cutting-edge digital solutions. We specialize in web development, UI/UX design, and digital transformation.",
  openGraph: {
    title: "Orbit Agency - Digital Innovation & Design Studio",
    description:
      "Transform your business with cutting-edge digital solutions. We specialize in web development, UI/UX design, and digital transformation.",
    url: "https://orbit-agency.com",
  },
};

export default function Home() {
  return (
    <div>
      <HomeHeroSection />
      <HomeWhatWeDoSection />
      <HomeClientsSection />
      <HomeWorkSection />
      <HomeServicesAboutSection />
      <HomeLastNewsSection />
      <HomeFAQSection />
    </div>
  );
}
