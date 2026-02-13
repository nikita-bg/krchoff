"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { BlogPost } from "@/lib/blog";

function FadeInWhenVisible({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

const placeholderPosts = [
  {
    slug: "",
    title: "Why AI Products Fail (And How to Fix It)",
    date: "",
    excerpt:
      "Most AI startups solve problems nobody has. Here\u2019s what actually matters.",
  },
  {
    slug: "",
    title: "The Minimalist Founder\u2019s Playbook",
    date: "",
    excerpt:
      "Building with constraints isn\u2019t a limitation \u2014 it\u2019s a superpower.",
  },
  {
    slug: "",
    title: "From Idea to Revenue in 90 Days",
    date: "",
    excerpt:
      "A practical framework for shipping products that generate real income.",
  },
];

export default function Blog({ posts }: { posts: BlogPost[] }) {
  const hasPosts = posts.length > 0;
  const displayPosts = hasPosts ? posts : placeholderPosts;

  return (
    <section className="px-6 py-28 lg:px-12 lg:py-36 xl:px-20">
      <div className="mx-auto max-w-7xl">
        <FadeInWhenVisible>
          <div className="text-center">
            <p className="font-sans text-xs uppercase tracking-wide-nav text-muted-foreground">
              <span className="mr-2 text-accent">&mdash;</span>
              Journal
            </p>
            <h2 className="mt-4 font-serif text-4xl font-light tracking-editorial text-foreground md:text-5xl">
              Thoughts
            </h2>
          </div>
        </FadeInWhenVisible>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {displayPosts.map((post, i) => (
            <FadeInWhenVisible key={post.slug || post.title} delay={i * 0.12}>
              {hasPosts ? (
                <Link href={`/blog/${post.slug}`}>
                  <article className="group flex h-full flex-col border border-border p-8 transition-all duration-500 hover:border-accent/40">
                    <p className="font-sans text-xs uppercase tracking-wide-nav text-accent">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <h3 className="mt-4 font-serif text-xl font-normal leading-snug tracking-editorial text-foreground">
                      {post.title}
                    </h3>
                    <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <span className="mt-6 inline-block font-sans text-xs uppercase tracking-wide-nav text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Read More &rarr;
                    </span>
                  </article>
                </Link>
              ) : (
                <article className="group flex h-full flex-col border border-border p-8 transition-all duration-500 hover:border-accent/40">
                  <p className="font-sans text-xs uppercase tracking-wide-nav text-accent">
                    Coming Soon
                  </p>
                  <h3 className="mt-4 font-serif text-xl font-normal leading-snug tracking-editorial text-foreground">
                    {post.title}
                  </h3>
                  <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                </article>
              )}
            </FadeInWhenVisible>
          ))}
        </div>

        {hasPosts && (
          <FadeInWhenVisible delay={0.4}>
            <div className="mt-16 text-center">
              <Link
                href="/blog"
                className="inline-block font-sans text-xs uppercase tracking-wide-nav text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                View All Posts &rarr;
              </Link>
            </div>
          </FadeInWhenVisible>
        )}
      </div>
    </section>
  );
}
