export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  category: string;
  tags: string[];
  publishedAt: string;
  readTime: string;
  image: string;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "future-of-web-development",
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt:
      "Explore the latest trends shaping web development, from AI integration to progressive web apps and the rise of edge computing.",
    content: `
      <p>The web development landscape is evolving at an unprecedented pace. As we navigate through 2024, several key trends are reshaping how we build and experience digital products.</p>
      
      <h2>AI-Powered Development</h2>
      <p>Artificial Intelligence is no longer just a buzzword—it's becoming an integral part of the development process. From code generation tools like GitHub Copilot to AI-powered design systems, developers are leveraging machine learning to accelerate their workflows.</p>
      
      <p>We're seeing AI being used for:</p>
      <ul>
        <li>Automated code reviews and bug detection</li>
        <li>Dynamic content personalization</li>
        <li>Performance optimization recommendations</li>
        <li>Accessibility improvements</li>
      </ul>
      
      <h2>The Rise of Edge Computing</h2>
      <p>Edge computing is bringing computation closer to users, reducing latency and improving performance. This shift is particularly important for:</p>
      <ul>
        <li>Real-time applications</li>
        <li>IoT integrations</li>
        <li>Global content delivery</li>
        <li>Privacy-conscious applications</li>
      </ul>
      
      <h2>Progressive Web Apps (PWAs)</h2>
      <p>PWAs continue to bridge the gap between web and native applications. With improved capabilities and better browser support, they're becoming the go-to solution for businesses wanting to provide native-like experiences without the complexity of app store distribution.</p>
      
      <h2>Conclusion</h2>
      <p>The future of web development is exciting and full of possibilities. By staying informed about these trends and continuously learning, developers can create more efficient, user-friendly, and innovative digital experiences.</p>
    `,
    author: {
      name: "Sarah Chen",
      avatar: "https://picsum.photos/100/100?random=1",
      bio: "Senior Frontend Developer with 8+ years of experience in modern web technologies and AI integration.",
    },
    category: "Technology",
    tags: ["Web Development", "AI", "Trends", "PWA"],
    publishedAt: "2024-01-15",
    readTime: "5 min read",
    image: "https://picsum.photos/800/400?random=1",
    featured: true,
  },
  {
    id: 2,
    slug: "design-systems-scale",
    title: "Building Design Systems That Scale: A Complete Guide",
    excerpt:
      "Learn how to create robust design systems that grow with your organization and maintain consistency across all your digital products.",
    content: `
      <p>Design systems have become essential for organizations looking to maintain consistency, improve efficiency, and scale their design and development processes.</p>
      
      <h2>What Makes a Great Design System?</h2>
      <p>A successful design system goes beyond just a collection of components. It should include:</p>
      <ul>
        <li>Clear design principles and guidelines</li>
        <li>Reusable UI components</li>
        <li>Comprehensive documentation</li>
        <li>Governance and maintenance processes</li>
      </ul>
      
      <h2>Starting Small, Thinking Big</h2>
      <p>The best design systems start with a focused approach. Begin by identifying the most commonly used components in your product, such as buttons, forms, and navigation elements. Build these with scalability in mind.</p>
      
      <h2>Documentation is Key</h2>
      <p>Your design system is only as good as its documentation. Ensure that every component has:</p>
      <ul>
        <li>Clear usage guidelines</li>
        <li>Code examples</li>
        <li>Visual examples</li>
        <li>Accessibility considerations</li>
      </ul>
      
      <h2>Governance and Evolution</h2>
      <p>A design system is a living entity that needs proper governance. Establish clear processes for proposing changes, reviewing updates, and communicating modifications to your team.</p>
    `,
    author: {
      name: "Michael Rodriguez",
      avatar: "https://picsum.photos/100/100?random=2",
      bio: "Design Systems Lead with expertise in building scalable design infrastructures for enterprise applications.",
    },
    category: "Design",
    tags: ["Design Systems", "UI/UX", "Scalability", "Documentation"],
    publishedAt: "2024-01-10",
    readTime: "7 min read",
    image: "https://picsum.photos/800/400?random=2",
    featured: true,
  },
  {
    id: 3,
    slug: "performance-optimization-guide",
    title: "Website Performance Optimization: A Developer's Handbook",
    excerpt:
      "Master the art of web performance with practical techniques, tools, and strategies that will make your websites lightning fast.",
    content: `
      <p>Website performance directly impacts user experience, conversion rates, and search engine rankings. This comprehensive guide covers everything you need to know about optimizing your web applications.</p>
      
      <h2>Core Web Vitals</h2>
      <p>Google's Core Web Vitals are essential metrics for measuring user experience:</p>
      <ul>
        <li><strong>Largest Contentful Paint (LCP):</strong> Measures loading performance</li>
        <li><strong>First Input Delay (FID):</strong> Measures interactivity</li>
        <li><strong>Cumulative Layout Shift (CLS):</strong> Measures visual stability</li>
      </ul>
      
      <h2>Image Optimization</h2>
      <p>Images often account for the majority of a webpage's file size. Optimize them by:</p>
      <ul>
        <li>Using modern formats like WebP and AVIF</li>
        <li>Implementing responsive images</li>
        <li>Lazy loading non-critical images</li>
        <li>Proper image compression</li>
      </ul>
      
      <h2>Code Splitting and Lazy Loading</h2>
      <p>Break your JavaScript into smaller chunks that can be loaded on demand. This reduces initial bundle size and improves load times.</p>
      
      <h2>Caching Strategies</h2>
      <p>Implement effective caching at multiple levels:</p>
      <ul>
        <li>Browser caching</li>
        <li>CDN caching</li>
        <li>Service worker caching</li>
        <li>Server-side caching</li>
      </ul>
    `,
    author: {
      name: "David Kim",
      avatar: "https://picsum.photos/100/100?random=3",
      bio: "Performance Engineer specializing in web optimization and scalable architecture solutions.",
    },
    category: "Performance",
    tags: ["Performance", "Optimization", "Web Vitals", "Speed"],
    publishedAt: "2024-01-05",
    readTime: "8 min read",
    image: "https://picsum.photos/800/400?random=3",
    featured: false,
  },
  {
    id: 4,
    slug: "react-best-practices-2024",
    title: "React Best Practices for Modern Applications",
    excerpt:
      "Discover the latest React patterns, hooks, and techniques that will help you build maintainable and performant applications.",
    content: `
      <p>React continues to evolve, bringing new features and patterns that help developers build better applications. Here are the essential best practices for 2024.</p>
      
      <h2>Custom Hooks for Reusability</h2>
      <p>Custom hooks are one of React's most powerful features for code reuse. They allow you to extract component logic into reusable functions.</p>
      
      <h2>State Management Strategies</h2>
      <p>Choose the right state management approach for your application:</p>
      <ul>
        <li>useState for local state</li>
        <li>useContext for shared state</li>
        <li>useReducer for complex state logic</li>
        <li>External libraries for global state (Redux, Zustand)</li>
      </ul>
      
      <h2>Performance Optimization</h2>
      <p>Key techniques for optimizing React applications:</p>
      <ul>
        <li>React.memo for component memoization</li>
        <li>useMemo and useCallback for expensive computations</li>
        <li>Code splitting with React.lazy</li>
        <li>Virtualization for large lists</li>
      </ul>
      
      <h2>Testing Strategies</h2>
      <p>Comprehensive testing ensures your React applications are reliable and maintainable. Focus on:</p>
      <ul>
        <li>Unit tests for individual components</li>
        <li>Integration tests for component interactions</li>
        <li>End-to-end tests for complete user flows</li>
      </ul>
    `,
    author: {
      name: "Emily Johnson",
      avatar: "https://picsum.photos/100/100?random=4",
      bio: "Senior React Developer and open-source contributor with a passion for clean, maintainable code.",
    },
    category: "Development",
    tags: ["React", "JavaScript", "Best Practices", "Hooks"],
    publishedAt: "2024-01-01",
    readTime: "6 min read",
    image: "https://picsum.photos/800/400?random=4",
    featured: false,
  },
  {
    id: 5,
    slug: "ai-ux-design-future",
    title: "How AI is Transforming UX Design",
    excerpt:
      "Explore how artificial intelligence is revolutionizing user experience design and what it means for designers and users alike.",
    content: `
      <p>Artificial Intelligence is fundamentally changing how we approach user experience design. From automated design generation to personalized user interfaces, AI is opening new possibilities for creating more intuitive and effective user experiences.</p>
      
      <h2>AI-Powered Design Tools</h2>
      <p>Modern AI tools are helping designers work more efficiently:</p>
      <ul>
        <li>Automated layout generation</li>
        <li>Color palette suggestions</li>
        <li>Content generation and optimization</li>
        <li>Accessibility improvements</li>
      </ul>
      
      <h2>Personalized User Experiences</h2>
      <p>AI enables unprecedented levels of personalization by analyzing user behavior and preferences to create tailored experiences for each individual user.</p>
      
      <h2>Predictive UX</h2>
      <p>Machine learning algorithms can predict user needs and intentions, allowing interfaces to adapt proactively rather than reactively.</p>
      
      <h2>Challenges and Considerations</h2>
      <p>While AI offers many benefits, designers must also consider:</p>
      <ul>
        <li>Privacy and data protection</li>
        <li>Bias in AI algorithms</li>
        <li>Maintaining human-centered design principles</li>
        <li>Transparency in AI-driven decisions</li>
      </ul>
    `,
    author: {
      name: "Alex Thompson",
      avatar: "https://picsum.photos/100/100?random=5",
      bio: "UX Research Lead focused on emerging technologies and human-computer interaction.",
    },
    category: "Design",
    tags: ["AI", "UX Design", "Machine Learning", "Personalization"],
    publishedAt: "2023-12-28",
    readTime: "5 min read",
    image: "https://picsum.photos/800/400?random=5",
    featured: false,
  },
  {
    id: 6,
    slug: "serverless-architecture-guide",
    title: "Serverless Architecture: Benefits and Best Practices",
    excerpt:
      "Learn when and how to implement serverless architecture for scalable, cost-effective applications.",
    content: `
      <p>Serverless architecture has gained tremendous popularity for its ability to reduce operational overhead while providing automatic scaling and cost optimization.</p>
      
      <h2>What is Serverless?</h2>
      <p>Despite the name, serverless doesn't mean no servers. Instead, it means that developers don't need to manage servers directly. The cloud provider handles all server management tasks.</p>
      
      <h2>Key Benefits</h2>
      <ul>
        <li><strong>Cost Efficiency:</strong> Pay only for what you use</li>
        <li><strong>Automatic Scaling:</strong> Handle traffic spikes effortlessly</li>
        <li><strong>Reduced Maintenance:</strong> Focus on code, not infrastructure</li>
        <li><strong>Faster Time to Market:</strong> Deploy applications quickly</li>
      </ul>
      
      <h2>Common Use Cases</h2>
      <p>Serverless works particularly well for:</p>
      <ul>
        <li>API endpoints and microservices</li>
        <li>Event-driven processing</li>
        <li>Data transformation tasks</li>
        <li>Static website hosting</li>
      </ul>
      
      <h2>Best Practices</h2>
      <ul>
        <li>Keep functions small and focused</li>
        <li>Optimize cold start performance</li>
        <li>Implement proper error handling</li>
        <li>Monitor and log function performance</li>
      </ul>
    `,
    author: {
      name: "Roberto Silva",
      avatar: "https://picsum.photos/100/100?random=6",
      bio: "Cloud Architecture Specialist with expertise in serverless technologies and distributed systems.",
    },
    category: "Architecture",
    tags: ["Serverless", "Cloud", "Architecture", "Scalability"],
    publishedAt: "2023-12-25",
    readTime: "7 min read",
    image: "https://picsum.photos/800/400?random=6",
    featured: false,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | null {
  return blogPosts.find((post) => post.slug === slug) || null;
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getFeaturedBlogPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.featured);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category === category);
}

export function getBlogCategories(): string[] {
  return [...new Set(blogPosts.map((post) => post.category))];
}

export function getRelatedPosts(
  currentSlug: string,
  limit: number = 3
): BlogPost[] {
  const currentPost = getBlogPostBySlug(currentSlug);
  if (!currentPost) return [];

  return blogPosts
    .filter(
      (post) =>
        post.slug !== currentSlug &&
        (post.category === currentPost.category ||
          post.tags.some((tag) => currentPost.tags.includes(tag)))
    )
    .slice(0, limit);
}
