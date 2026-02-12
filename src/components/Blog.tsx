"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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

const posts = [
  {
    title: "Why AI Products Fail (And How to Fix It)",
    date: "Coming Soon",
    excerpt:
      "Most AI startups solve problems nobody has. Here\u2019s what actually matters.",
  },
  {
    title: "The Minimalist Founder\u2019s Playbook",
    date: "Coming Soon",
    excerpt:
      "Building with constraints isn\u2019t a limitation \u2014 it\u2019s a superpower.",
  },
  {
    title: "From Idea to Revenue in 90 Days",
    date: "Coming Soon",
    excerpt:
      "A practical framework for shipping products that generate real income.",
  },
];

export default function Blog() {
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
          {posts.map((post, i) => (
            <FadeInWhenVisible key={post.title} delay={i * 0.12}>
              <article className="group flex h-full flex-col border border-border p-8 transition-all duration-500 hover:border-accent/40">
                <p className="font-sans text-xs uppercase tracking-wide-nav text-accent">
                  {post.date}
                </p>
                <h3 className="mt-4 font-serif text-xl font-normal leading-snug tracking-editorial text-foreground">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
              </article>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}
