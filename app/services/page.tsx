import ServicesComponent from "@/components/services/ServicesComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Comprehensive digital services including web development, UI/UX design, branding, and digital strategy. Transform your business with our expertise.",
  openGraph: {
    title: "Our Services - Orbit Agency",
    description:
      "Comprehensive digital services including web development, UI/UX design, branding, and digital strategy. Transform your business with our expertise.",
    url: "https://orbit-agency.com/services",
  },
};

export default function ServicesPage() {
  return <ServicesComponent />;
}
