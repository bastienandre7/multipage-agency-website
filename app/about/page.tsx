import AboutComponent from "@/components/about/AboutComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the creative minds behind Orbit Agency. Learn about our mission, values, and the talented team that brings digital visions to life.",
  openGraph: {
    title: "About Us - Orbit Agency",
    description:
      "Meet the creative minds behind Orbit Agency. Learn about our mission, values, and the talented team that brings digital visions to life.",
    url: "https://orbit-agency.com/about",
  },
};

export default function AboutPage() {
  return <AboutComponent />;
}
