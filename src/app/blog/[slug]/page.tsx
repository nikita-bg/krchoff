import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} — Nikita Kratcholov`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["Nikita Kratcholov"],
      url: `/blog/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Nikita Kratcholov",
      url: "https://krchoff.com",
    },
    url: `https://krchoff.com/blog/${slug}`,
  };

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
        <Link
          href="/"
          className="font-serif text-2xl font-semibold tracking-editorial text-foreground transition-opacity duration-300 hover:opacity-70"
        >
          NK
        </Link>
        <Link
          href="/blog"
          className="font-sans text-xs uppercase tracking-wide-nav text-muted-foreground transition-colors duration-300 hover:text-foreground"
        >
          &larr; All Posts
        </Link>
      </nav>

      <main className="mx-auto max-w-3xl px-6 pb-28 pt-12 lg:px-12 lg:pb-36">
        <header className="text-center">
          <p className="font-sans text-xs uppercase tracking-wide-nav text-accent">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <h1 className="mt-4 font-serif text-3xl font-light tracking-editorial text-foreground md:text-5xl">
            {post.title}
          </h1>
        </header>

        <article
          className="prose-blog mt-16"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </main>
    </div>
  );
}
