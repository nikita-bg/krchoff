"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const posts = [
  {
    title: "Why AI Agents Will Replace SaaS",
    date: "Coming soon",
    excerpt:
      "The next wave of software won't be apps — it will be autonomous agents.",
  },
  {
    title: "Building in Public: Lessons Learned",
    date: "Coming soon",
    excerpt:
      "What 3 years of building startups taught me about transparency.",
  },
  {
    title: "The Art of Simple Design",
    date: "Coming soon",
    excerpt:
      "Why removing features is harder — and more valuable — than adding them.",
  },
];

export default function Blog() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="blog"
      className="px-6 py-[120px] md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20 text-center"
        >
          <p className="font-[family-name:var(--font-dm-sans)] text-sm tracking-[0.2em] text-text-secondary">
            &mdash; Journal
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-light tracking-[0.03em] text-foreground md:text-5xl">
            Thoughts
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.2 + i * 0.15,
                ease: "easeOut",
              }}
              className="group cursor-pointer border border-divider p-8 transition-all duration-500 hover:border-accent"
            >
              <p className="font-[family-name:var(--font-dm-sans)] text-xs tracking-[0.15em] text-accent">
                {post.date}
              </p>
              <h3 className="mt-4 font-[family-name:var(--font-cormorant)] text-2xl font-light tracking-[0.02em] text-foreground">
                {post.title}
              </h3>
              <p className="mt-3 font-[family-name:var(--font-dm-sans)] text-sm leading-[1.7] text-text-secondary">
                {post.excerpt}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
