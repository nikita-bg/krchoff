"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const projects = [
  {
    title: "SimplifyOpsCo",
    subtitle: "AI Voice Receptionist",
    description:
      "An AI-powered voice receptionist that handles customer calls, books appointments, and answers questions — 24/7, in any language.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1400&q=80&fit=crop",
    link: "#",
  },
  {
    title: "XPLife",
    subtitle: "AI Productivity App",
    description:
      "A smart productivity platform that uses AI to help you plan, focus, and accomplish more — turning everyday tasks into achievements.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1400&q=80&fit=crop",
    link: "#",
  },
];

export default function Work() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="work"
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
            &mdash; Portfolio
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-light tracking-[0.03em] text-foreground md:text-5xl">
            Selected Work
          </h2>
        </motion.div>

        <div className="flex flex-col gap-20">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: "easeOut",
      }}
      className="group"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          sizes="(max-width: 1400px) 100vw, 1400px"
        />
      </div>

      <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-light tracking-[0.03em] text-foreground md:text-4xl">
            {project.title}
          </h3>
          <p className="mt-1 font-[family-name:var(--font-dm-sans)] text-sm tracking-[0.1em] text-text-secondary">
            {project.subtitle}
          </p>
          <p className="mt-4 max-w-xl font-[family-name:var(--font-dm-sans)] text-base leading-[1.7] text-text-secondary">
            {project.description}
          </p>
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex shrink-0 items-center gap-2 border border-foreground px-6 py-3 font-[family-name:var(--font-dm-sans)] text-[13px] tracking-[0.15em] text-foreground transition-all duration-500 hover:bg-foreground hover:text-background md:mt-0"
        >
          Visit&ensp;&rarr;
        </a>
      </div>

      {index === 0 && (
        <div className="mt-20 h-px w-full bg-divider" />
      )}
    </motion.div>
  );
}
