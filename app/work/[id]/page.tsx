import WorkDetailComponent from "@/components/work/WorkDetailComponent";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function WorkDetailPage({ params }: PageProps) {
  const { id } = await params;
  return <WorkDetailComponent id={id} />;
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;

  const projectTitles: { [key: string]: string } = {
    "1": "Digital Transformation Platform - Orbit Agency",
    "2": "E-commerce Revolution - Orbit Agency",
    "3": "AI-Powered Analytics - Orbit Agency",
    "4": "Mobile Banking App - Orbit Agency",
    "5": "Healthcare Management - Orbit Agency",
    "6": "Smart City Dashboard - Orbit Agency",
    "7": "Social Media Management - Orbit Agency",
    "8": "Real Estate Platform - Orbit Agency",
  };

  return {
    title: projectTitles[id] || "Project - Orbit Agency",
    description:
      "Detailed case study of our latest project showcasing our expertise in digital innovation.",
  };
}

export function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
    { id: "7" },
    { id: "8" },
  ];
}
