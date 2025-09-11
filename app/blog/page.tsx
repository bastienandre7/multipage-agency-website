import BlogComponent from "@/components/blog/BlogComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Stay updated with the latest insights on web development, design trends, and digital innovation. Expert thoughts and practical tips from our team.",
  openGraph: {
    title: "Blog - Orbit Agency",
    description:
      "Stay updated with the latest insights on web development, design trends, and digital innovation. Expert thoughts and practical tips from our team.",
    url: "https://orbit-agency.com/blog",
  },
};

export default function BlogPage() {
  return <BlogComponent />;
}
