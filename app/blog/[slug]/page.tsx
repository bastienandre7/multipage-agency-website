import BlogDetailComponent from "@/components/blog/BlogDetailComponent";
import { getAllBlogPosts, getBlogPostBySlug } from "@/data/blogPosts";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  return <BlogDetailComponent slug={slug} />;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article not found - Orbit Agency",
      description: "The requested blog article could not be found.",
    };
  }

  return {
    title: `${post.title} - Orbit Agency Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
