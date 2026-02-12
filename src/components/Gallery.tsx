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
    src: "/gallery-igloo.png",
    alt: "Nikita in igloo with Porsche GT3",
    caption: "Arctic GT3",
    tall: true,
  },
  {
    src: "/gallery-hammer.png",
    alt: "Sledgehammer impact",
    caption: "Breaking Ground",
    tall: true,
  },
  {
    src: "/gallery-tshirt.png",
    alt: "Vintage band tee close-up",
    caption: "Worn Stories",
    tall: false,
  },
  {
    src: "/gallery-amour.png",
    alt: "Amour perfume Valentine's edition",
    caption: "Amour",
    tall: true,
  },
  {
    src: "/gallery-porsche-flowers.png",
    alt: "Porsche with wildflowers in trunk",
    caption: "Desert Bloom",
    tall: true,
  },
  {
    src: "/gallery-sewing.png",
    alt: "Hands sewing traditional Bulgarian carpet",
    caption: "Heritage Craft",
    tall: true,
  },
  {
    src: "/gallery-studio.png",
    alt: "Studio shoot with carpet and AMG",
    caption: "East Meets West",
    tall: true,
  },
  {
    src: "/gallery-rain.png",
    alt: "Tropical resort in the rain",
    caption: "Monsoon Season",
    tall: true,
  },
  {
    src: "/gallery-porsche-wide.png",
    alt: "Porsche with daisies wide angle",
    caption: "Wildflower Porsche",
    tall: false,
  },
  {
    src: "/gallery-extra.png",
    alt: "Creative direction",
    caption: "Creative Direction",
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
              Visual Journal
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
