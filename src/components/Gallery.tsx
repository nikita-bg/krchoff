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

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80&fit=crop",
    alt: "AI-generated surreal landscape",
    caption: "Dreamscape Series",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1547954575-855750c57bd3?w=600&q=80&fit=crop",
    alt: "AI-generated abstract portrait",
    caption: "Digital Consciousness",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80&fit=crop",
    alt: "AI-generated futuristic architecture",
    caption: "Future Forms",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=600&q=80&fit=crop",
    alt: "AI-generated cosmic art",
    caption: "Cosmic Echoes",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80&fit=crop",
    alt: "AI-generated still life",
    caption: "Golden Hour",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80&fit=crop",
    alt: "AI-generated nature macro",
    caption: "Micro Worlds",
    tall: false,
  },
];

export default function Gallery() {
  return (
    <section className="px-6 py-28 lg:px-12 lg:py-36 xl:px-20">
      <div className="mx-auto max-w-7xl">
        <FadeInWhenVisible>
          <div className="text-center">
            <p className="font-sans text-xs uppercase tracking-wide-nav text-muted-foreground">
              <span className="mr-2 text-accent">&mdash;</span>
              Creative
            </p>
            <h2 className="mt-4 font-serif text-4xl font-light tracking-editorial text-foreground md:text-5xl">
              AI Creative Work
            </h2>
          </div>
        </FadeInWhenVisible>

        {/* Masonry Grid */}
        <div className="mt-20 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryItems.map((item, i) => (
            <FadeInWhenVisible key={item.src} delay={i * 0.08}>
              <div className="group relative mb-4 break-inside-avoid overflow-hidden">
                <div
                  className={`relative w-full ${item.tall ? "aspect-[3/4]" : "aspect-square"}`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-end bg-foreground/0 p-6 transition-all duration-500 group-hover:bg-foreground/30">
                    <p className="translate-y-4 font-sans text-sm tracking-wide-nav text-background opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}
