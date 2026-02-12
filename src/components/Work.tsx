"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

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

const projects = [
  {
    title: "SimplifyOpsCo",
    tagline: "AI Voice Receptionist",
    description:
      "An intelligent voice AI system that handles customer calls, books appointments, and streamlines business operations around the clock.",
    image: "/work-simplifyops.jpg",
    link: "https://simplifyopsco.com/",
  },
  {
    title: "XPLife",
    tagline: "AI Productivity App",
    description:
      "A smart productivity platform powered by AI that helps users organize their lives, track goals, and build better habits.",
    image: "/work-xplife.png",
    link: "https://xplife.app/",
  },
];

export default function Work() {
  return (
    <section id="work" className="px-6 py-28 lg:px-12 lg:py-36 xl:px-20">
      <div className="mx-auto max-w-7xl">
        <FadeInWhenVisible>
          <div className="text-center">
            <p className="font-sans text-xs uppercase tracking-wide-nav text-muted-foreground">
              <span className="mr-2 text-accent">&mdash;</span>
              Portfolio
            </p>
            <h2 className="mt-4 font-serif text-4xl font-light tracking-editorial text-foreground md:text-5xl">
              Selected Work
            </h2>
          </div>
        </FadeInWhenVisible>

        <div className="mt-20 flex flex-col gap-20">
          {projects.map((project, i) => (
            <FadeInWhenVisible key={project.title} delay={i * 0.15}>
              <article className="group">
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={`${project.title} - ${project.tagline}`}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    sizes="(max-width: 1280px) 100vw, 1280px"
                  />
                </div>

                <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="font-sans text-xs uppercase tracking-wide-nav text-accent">
                      {project.tagline}
                    </p>
                    <h3 className="mt-2 font-serif text-3xl font-light tracking-editorial text-foreground md:text-4xl">
                      {project.title}
                    </h3>
                    <p className="mt-3 max-w-lg font-sans text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                  </div>

                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 whitespace-nowrap border-b border-foreground pb-1 font-sans text-xs uppercase tracking-wide-nav text-foreground transition-all duration-300 hover:gap-3 hover:border-accent hover:text-accent"
                  >
                    Visit
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}
