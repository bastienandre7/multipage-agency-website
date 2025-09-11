export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  year: string;
  client: string;
  featured: boolean;
}

export interface ProjectDetail extends Project {
  duration: string;
  category: string;
  overview: string;
  challenge: string;
  solution: string;
  results: Array<{
    metric: string;
    value: string;
  }>;
  images: string[];
  technologies: string[];
  team: string[];
  testimonial: {
    text: string;
    author: string;
    position: string;
  };
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Digital Transformation Platform",
    subtitle: "Enterprise SaaS",
    description:
      "A comprehensive digital transformation platform that helped a Fortune 500 company streamline their operations and increase efficiency by 40%.",
    image: "https://picsum.photos/800/600?random=1",
    tags: ["Strategy", "Design", "Development"],
    year: "2024",
    client: "TechCorp Industries",
    featured: true,
  },
  {
    id: 2,
    title: "E-commerce Revolution",
    subtitle: "Retail Platform",
    description:
      "Complete redesign and rebuild of a major retail platform, resulting in 65% increase in conversions and improved user experience.",
    image: "https://picsum.photos/700/500?random=2",
    tags: ["UX/UI", "E-commerce", "Mobile"],
    year: "2024",
    client: "RetailMax",
    featured: true,
  },
  {
    id: 3,
    title: "AI-Powered Analytics",
    subtitle: "Data Visualization",
    description:
      "Advanced analytics dashboard powered by machine learning algorithms, providing real-time insights and predictive analytics.",
    image: "https://picsum.photos/900/700?random=3",
    tags: ["AI", "Analytics", "Dashboard"],
    year: "2023",
    client: "DataFlow Inc",
    featured: true,
  },
  {
    id: 4,
    title: "Mobile Banking App",
    subtitle: "Fintech Innovation",
    description:
      "Next-generation mobile banking application with biometric security, AI-powered financial insights, and seamless UX.",
    image: "https://picsum.photos/600/800?random=4",
    tags: ["Mobile", "Fintech", "Security"],
    year: "2023",
    client: "NeoBank",
    featured: true,
  },
  {
    id: 5,
    title: "Healthcare Management",
    subtitle: "Digital Health",
    description:
      "Comprehensive healthcare platform connecting patients, providers, and administrators with improved satisfaction by 45%.",
    image: "https://picsum.photos/750/550?random=5",
    tags: ["Healthcare", "Design", "Integration"],
    year: "2024",
    client: "MediCore Systems",
    featured: true,
  },
  {
    id: 6,
    title: "Smart City Dashboard",
    subtitle: "IoT Platform",
    description:
      "Real-time city monitoring platform utilizing IoT sensors and machine learning for urban planning decisions.",
    image: "https://picsum.photos/650/450?random=6",
    tags: ["IoT", "Analytics", "Government"],
    year: "2023",
    client: "Metro City Council",
    featured: false,
  },
  {
    id: 7,
    title: "Social Media Management",
    subtitle: "Creator Economy",
    description:
      "All-in-one platform for content creators to manage, schedule, and monetize their social media presence across multiple channels.",
    image: "https://picsum.photos/580/420?random=7",
    tags: ["Social", "Creator", "Analytics"],
    year: "2024",
    client: "CreatorHub",
    featured: false,
  },
  {
    id: 8,
    title: "Real Estate Platform",
    subtitle: "PropTech Solution",
    description:
      "Modern real estate platform with virtual tours, AI-powered property matching, and seamless transaction management.",
    image: "https://picsum.photos/680/520?random=8",
    tags: ["PropTech", "VR", "Machine Learning"],
    year: "2023",
    client: "PropertyFlow",
    featured: false,
  },
];

export const projectsDetails: { [key: string]: ProjectDetail } = {
  "1": {
    ...projects[0],
    duration: "8 months",
    category: "Enterprise",
    overview:
      "TechCorp Industries approached us with a challenge: their legacy systems were holding back growth and innovation. We designed and built a comprehensive digital transformation platform that revolutionized their operations.",
    challenge:
      "The client was struggling with outdated processes, disconnected systems, and inefficient workflows that were costing them millions in lost productivity and missed opportunities.",
    solution:
      "We created an integrated platform that unified their operations, automated key processes, and provided real-time analytics to drive data-driven decision making.",
    results: [
      { metric: "Efficiency Increase", value: "40%" },
      { metric: "Cost Reduction", value: "35%" },
      { metric: "User Adoption", value: "98%" },
      { metric: "ROI", value: "250%" },
    ],
    images: [
      "https://picsum.photos/1200/800?random=1",
      "https://picsum.photos/800/600?random=11",
      "https://picsum.photos/900/700?random=12",
      "https://picsum.photos/1000/750?random=13",
    ],
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "Docker",
      "TypeScript",
    ],
    team: [
      "Product Strategy",
      "UX/UI Design",
      "Frontend Development",
      "Backend Development",
      "DevOps",
    ],
    testimonial: {
      text: "Orbit transformed our entire operation. The platform they built exceeded our expectations and delivered results beyond what we thought possible.",
      author: "Sarah Chen",
      position: "CTO, TechCorp Industries",
    },
  },
  "2": {
    ...projects[1],
    duration: "6 months",
    category: "E-commerce",
    overview:
      "RetailMax needed a complete overhaul of their e-commerce platform to compete in the modern retail landscape. We delivered a cutting-edge solution that transformed their business.",
    challenge:
      "Poor mobile experience, slow loading times, and a confusing checkout process were causing high cart abandonment rates and lost revenue.",
    solution:
      "We rebuilt the platform from the ground up with mobile-first design, optimized performance, and streamlined user journeys that guide customers to purchase.",
    results: [
      { metric: "Conversion Rate", value: "+65%" },
      { metric: "Mobile Sales", value: "+120%" },
      { metric: "Page Speed", value: "+85%" },
      { metric: "Cart Abandonment", value: "-45%" },
    ],
    images: [
      "https://picsum.photos/1200/800?random=2",
      "https://picsum.photos/800/600?random=21",
      "https://picsum.photos/900/700?random=22",
      "https://picsum.photos/1000/750?random=23",
    ],
    technologies: [
      "Next.js",
      "Shopify Plus",
      "Tailwind CSS",
      "Stripe",
      "Algolia",
      "Vercel",
    ],
    team: [
      "E-commerce Strategy",
      "UX/UI Design",
      "Frontend Development",
      "Performance Optimization",
    ],
    testimonial: {
      text: "The new platform completely transformed our business. Sales increased dramatically and our customers love the new experience.",
      author: "Mike Rodriguez",
      position: "VP of Digital, RetailMax",
    },
  },
  "3": {
    ...projects[2],
    duration: "5 months",
    category: "Technology",
    overview:
      "DataFlow Inc needed a sophisticated analytics platform to help their clients make sense of complex data. We created an AI-powered solution that transforms raw data into actionable insights.",
    challenge:
      "Complex data visualization requirements, real-time processing needs, and the challenge of making AI insights accessible to non-technical users.",
    solution:
      "We developed an intuitive dashboard with AI-powered analytics, real-time data processing, and automated insights generation with natural language explanations.",
    results: [
      { metric: "Data Processing Speed", value: "+300%" },
      { metric: "User Engagement", value: "+180%" },
      { metric: "Decision Speed", value: "+250%" },
      { metric: "Accuracy Rate", value: "99.2%" },
    ],
    images: [
      "https://picsum.photos/1200/800?random=3",
      "https://picsum.photos/800/600?random=31",
      "https://picsum.photos/900/700?random=32",
      "https://picsum.photos/1000/750?random=33",
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "React",
      "D3.js",
      "Redis",
      "Apache Kafka",
    ],
    team: [
      "Data Science",
      "AI/ML Engineering",
      "Frontend Development",
      "Backend Development",
    ],
    testimonial: {
      text: "The analytics platform has revolutionized how we understand our data. The AI insights are incredibly accurate and easy to understand.",
      author: "David Kim",
      position: "Head of Analytics, DataFlow Inc",
    },
  },
  "4": {
    ...projects[3],
    duration: "10 months",
    category: "Fintech",
    overview:
      "NeoBank wanted to disrupt traditional banking with a mobile-first approach. We created a comprehensive banking app that combines security, functionality, and exceptional user experience.",
    challenge:
      "Building a secure, compliant banking application while maintaining an intuitive user experience and integrating advanced AI features for financial insights.",
    solution:
      "We developed a cutting-edge mobile app with biometric authentication, AI-powered spending insights, and a seamless interface that makes banking effortless.",
    results: [
      { metric: "App Store Rating", value: "4.9/5" },
      { metric: "User Acquisition", value: "2M+" },
      { metric: "Transaction Volume", value: "+400%" },
      { metric: "Security Incidents", value: "0" },
    ],
    images: [
      "https://picsum.photos/1200/800?random=4",
      "https://picsum.photos/800/600?random=41",
      "https://picsum.photos/900/700?random=42",
      "https://picsum.photos/1000/750?random=43",
    ],
    technologies: [
      "React Native",
      "Node.js",
      "PostgreSQL",
      "AWS",
      "Biometric APIs",
      "Machine Learning",
    ],
    team: [
      "Fintech Strategy",
      "Mobile Development",
      "Security Engineering",
      "AI/ML Development",
      "Compliance",
    ],
    testimonial: {
      text: "This app has set a new standard for mobile banking. Our customers love the experience and our security team is impressed with the robust architecture.",
      author: "Jennifer Walsh",
      position: "CEO, NeoBank",
    },
  },
  "5": {
    ...projects[4],
    duration: "12 months",
    category: "Healthcare",
    overview:
      "MediCore Systems wanted to revolutionize healthcare delivery through technology. We created a comprehensive platform that connects all stakeholders in the healthcare ecosystem.",
    challenge:
      "Fragmented systems, poor communication between providers and patients, and inefficient administrative processes were impacting care quality and satisfaction.",
    solution:
      "We developed an integrated platform that streamlines patient care, improves communication, and automates administrative tasks while maintaining strict security and compliance standards.",
    results: [
      { metric: "Patient Satisfaction", value: "+45%" },
      { metric: "Administrative Efficiency", value: "+60%" },
      { metric: "Provider Productivity", value: "+35%" },
      { metric: "Cost Savings", value: "$2.3M" },
    ],
    images: [
      "https://picsum.photos/1200/800?random=5",
      "https://picsum.photos/800/600?random=51",
      "https://picsum.photos/900/700?random=52",
      "https://picsum.photos/1000/750?random=53",
    ],
    technologies: [
      "React",
      "Django",
      "PostgreSQL",
      "AWS",
      "HIPAA Compliance",
      "Socket.io",
    ],
    team: [
      "Healthcare Strategy",
      "UX/UI Design",
      "Frontend Development",
      "Backend Development",
      "Security",
    ],
    testimonial: {
      text: "This platform has transformed how we deliver care. Our patients are happier, our staff is more efficient, and we're providing better outcomes.",
      author: "Dr. Amanda Foster",
      position: "Chief Medical Officer, MediCore Systems",
    },
  },
  "6": {
    ...projects[5],
    duration: "7 months",
    category: "Government",
    overview:
      "Metro City Council needed a comprehensive platform to monitor and manage city operations in real-time. We created an IoT-powered dashboard that helps make data-driven urban planning decisions.",
    challenge:
      "Integrating thousands of IoT sensors, processing massive amounts of real-time data, and creating an intuitive interface for city administrators.",
    solution:
      "We built a scalable IoT platform with real-time data processing, predictive analytics, and an intuitive dashboard that provides actionable insights for city management.",
    results: [
      { metric: "Response Time", value: "-40%" },
      { metric: "Energy Savings", value: "25%" },
      { metric: "Traffic Efficiency", value: "+30%" },
      { metric: "Citizen Satisfaction", value: "+55%" },
    ],
    images: [
      "https://picsum.photos/1200/800?random=6",
      "https://picsum.photos/800/600?random=61",
      "https://picsum.photos/900/700?random=62",
      "https://picsum.photos/1000/750?random=63",
    ],
    technologies: [
      "React",
      "Node.js",
      "InfluxDB",
      "Apache Kafka",
      "Docker",
      "Kubernetes",
    ],
    team: [
      "IoT Engineering",
      "Data Architecture",
      "Frontend Development",
      "DevOps",
      "Urban Planning",
    ],
    testimonial: {
      text: "This platform has transformed how we manage our city. We can now make informed decisions based on real-time data and predictive insights.",
      author: "Maria Rodriguez",
      position: "Smart City Director, Metro City Council",
    },
  },
  "7": {
    ...projects[6],
    duration: "6 months",
    category: "Social Media",
    overview:
      "CreatorHub wanted to empower content creators with professional tools to manage and monetize their social media presence. We built a comprehensive platform that simplifies creator workflows.",
    challenge:
      "Creating a unified interface for multiple social platforms, implementing advanced scheduling features, and building monetization tools that creators actually want to use.",
    solution:
      "We developed an all-in-one platform with multi-platform publishing, AI-powered content optimization, advanced analytics, and integrated monetization features.",
    results: [
      { metric: "Creator Adoption", value: "500K+" },
      { metric: "Content Engagement", value: "+85%" },
      { metric: "Revenue Generation", value: "+200%" },
      { metric: "Time Saved", value: "15hrs/week" },
    ],
    images: [
      "https://picsum.photos/1200/800?random=7",
      "https://picsum.photos/800/600?random=71",
      "https://picsum.photos/900/700?random=72",
      "https://picsum.photos/1000/750?random=73",
    ],
    technologies: [
      "Next.js",
      "GraphQL",
      "MongoDB",
      "Redis",
      "Social Media APIs",
      "Stripe",
    ],
    team: [
      "Product Strategy",
      "Social Media Development",
      "AI/ML Engineering",
      "Payment Integration",
    ],
    testimonial: {
      text: "CreatorHub has completely changed my content creation workflow. I'm more productive and earning more than ever before.",
      author: "Alex Thompson",
      position: "Content Creator & Influencer",
    },
  },
  "8": {
    ...projects[7],
    duration: "8 months",
    category: "PropTech",
    overview:
      "PropertyFlow wanted to revolutionize the real estate experience with cutting-edge technology. We created a comprehensive platform that makes property discovery and transactions seamless.",
    challenge:
      "Integrating virtual tour technology, building sophisticated property matching algorithms, and creating a streamlined transaction management system.",
    solution:
      "We developed a modern PropTech platform with immersive virtual tours, AI-powered property recommendations, and end-to-end transaction management.",
    results: [
      { metric: "Property Views", value: "+300%" },
      { metric: "Transaction Speed", value: "+50%" },
      { metric: "User Satisfaction", value: "4.8/5" },
      { metric: "Agent Productivity", value: "+70%" },
    ],
    images: [
      "https://picsum.photos/1200/800?random=8",
      "https://picsum.photos/800/600?random=81",
      "https://picsum.photos/900/700?random=82",
      "https://picsum.photos/1000/750?random=83",
    ],
    technologies: [
      "React",
      "Three.js",
      "Python",
      "TensorFlow",
      "PostgreSQL",
      "AWS S3",
    ],
    team: [
      "PropTech Strategy",
      "VR Development",
      "AI/ML Engineering",
      "Transaction Systems",
    ],
    testimonial: {
      text: "This platform has transformed our real estate business. The virtual tours and AI matching have significantly improved our client satisfaction and sales.",
      author: "Robert Chen",
      position: "CEO, PropertyFlow",
    },
  },
};

export function getProjectById(id: string): ProjectDetail | null {
  return projectsDetails[id] || null;
}

export function getAllProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getRegularProjects(): Project[] {
  return projects.filter((project) => !project.featured);
}
