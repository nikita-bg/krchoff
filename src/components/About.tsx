"use client";

import Image from "next/image";
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

const stats = [
  { value: "2", label: "Companies" },
  { value: "3+", label: "Years" },
  { value: "BG", label: "Bulgaria" },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-28 lg:px-12 lg:py-36 xl:px-20">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:gap-24">
        {/* Left: Image */}
        <FadeInWhenVisible>
          <div className="relative aspect-[3/4] w-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80&fit=crop&crop=face"
              alt="Nikita working at his desk"
              fill
              className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </FadeInWhenVisible>

        {/* Right: Text */}
        <div className="flex flex-col justify-center">
          <FadeInWhenVisible delay={0.1}>
            <p className="font-sans text-xs uppercase tracking-wide-nav text-muted-foreground">
              <span className="mr-2 text-accent">&mdash;</span>
              About
            </p>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.2}>
            <h2 className="mt-6 font-serif text-4xl font-light leading-[1.2] tracking-editorial text-foreground md:text-5xl">
              Driven by curiosity,
              <br />
              built with purpose.
            </h2>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.3}>
            <p className="mt-8 max-w-md font-sans text-base leading-relaxed text-muted-foreground">
              I&apos;m Nikita Kratcholov, an AI entrepreneur and marketer based
              in Bulgaria. I build products at the intersection of artificial
              intelligence and real-world utility &mdash; things that people
              actually need and use every day.
            </p>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.4}>
            <p className="mt-4 max-w-md font-sans text-base leading-relaxed text-muted-foreground">
              My approach is simple: find the problem, understand it deeply, then
              craft an elegant solution. No noise, no hype &mdash; just products
              that work.
            </p>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.5}>
            <div className="mt-12 flex items-center gap-8 border-t border-border pt-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-serif text-2xl font-semibold tracking-editorial text-foreground">
                    {stat.value}
                  </p>
                  <p className="mt-1 font-sans text-xs uppercase tracking-wide-nav text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
}
