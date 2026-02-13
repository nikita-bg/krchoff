import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog — Nikita Kratcholov",
  description: "Thoughts on AI products, startups, and building with purpose.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-background">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
        <Link
          href="/"
          className="font-serif text-2xl font-semibold tracking-editorial text-foreground transition-opacity duration-300 hover:opacity-70"
        >
          NK
        </Link>
        <Link
          href="/"
          className="font-sans text-xs uppercase tracking-wide-nav text-muted-foreground transition-colors duration-300 hover:text-foreground"
        >
          &larr; Back
        </Link>
      </nav>

      <main className="mx-auto max-w-7xl px-6 pb-28 pt-12 lg:px-12 lg:pb-36">
        <div className="text-center">
          <p className="font-sans text-xs uppercase tracking-wide-nav text-muted-foreground">
            <span className="mr-2 text-accent">&mdash;</span>
            Journal
          </p>
          <h1 className="mt-4 font-serif text-4xl font-light tracking-editorial text-foreground md:text-5xl">
            All Posts
          </h1>
        </div>

        {posts.length === 0 ? (
          <p className="mt-20 text-center font-sans text-sm text-muted-foreground">
            No posts yet. Check back soon.
          </p>
        ) : (
          <div className="mt-20 grid gap-8 md:grid-cols-3">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="group flex h-full flex-col border border-border p-8 transition-all duration-500 hover:border-accent/40">
                  <p className="font-sans text-xs uppercase tracking-wide-nav text-accent">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <h2 className="mt-4 font-serif text-xl font-normal leading-snug tracking-editorial text-foreground">
                    {post.title}
                  </h2>
                  <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <span className="mt-6 inline-block font-sans text-xs uppercase tracking-wide-nav text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Read More &rarr;
                  </span>
                </article>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
