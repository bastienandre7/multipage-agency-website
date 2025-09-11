import WorkComponent from "@/components/work/WorkComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore our portfolio of digital projects. From enterprise platforms to mobile apps, see how we've helped businesses transform their digital presence.",
  openGraph: {
    title: "Our Work - Orbit Agency",
    description:
      "Explore our portfolio of digital projects. From enterprise platforms to mobile apps, see how we've helped businesses transform their digital presence.",
    url: "https://orbit-agency.com/work",
  },
};

export default function WorkPage() {
  return <WorkComponent />;
}
