"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const stats = [
  "2 Companies",
  "3+ Years",
  "Bulgaria",
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="about"
      className="px-6 py-[120px] md:px-12 lg:px-20"
    >
      <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-2 lg:gap-24">
        {/* Left — Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative aspect-[3/4] w-full overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80&fit=crop"
            alt="About Nikita"
            fill
            className="object-cover transition-transform duration-700 hover:scale-[1.02]"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>

        {/* Right — Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col justify-center"
        >
          <p className="font-[family-name:var(--font-dm-sans)] text-sm tracking-[0.2em] text-text-secondary">
            &mdash; About
          </p>

          <h2 className="mt-6 font-[family-name:var(--font-cormorant)] text-4xl font-light tracking-[0.03em] text-foreground md:text-5xl">
            Turning ideas into
            <br />
            AI-powered reality
          </h2>

          <div className="my-8 h-px w-16 bg-divider" />

          <p className="font-[family-name:var(--font-dm-sans)] text-base leading-[1.8] text-text-secondary">
            I&apos;m Nikita — a founder, marketer, and builder based in
            Bulgaria. I create AI products that simplify complex workflows
            and help businesses operate smarter. My approach blends
            technology with clean design and a relentless focus on real
            user problems.
          </p>

          <p className="mt-6 font-[family-name:var(--font-dm-sans)] text-base leading-[1.8] text-text-secondary">
            When I&apos;m not building, you&apos;ll find me exploring new
            AI tools, reading about growth strategy, or working on
            creative projects that push boundaries.
          </p>

          {/* Stats */}
          <div className="mt-12 flex items-center gap-4 font-[family-name:var(--font-dm-sans)] text-sm tracking-[0.1em] text-foreground">
            {stats.map((stat, i) => (
              <span key={stat} className="flex items-center gap-4">
                {i > 0 && (
                  <span className="text-divider">&middot;</span>
                )}
                {stat}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
