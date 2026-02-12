"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80&fit=crop",
    alt: "AI Art 1",
    label: "Neural Dreamscape",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=600&q=80&fit=crop",
    alt: "AI Art 2",
    label: "Digital Consciousness",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1676299081847-824916de030a?w=600&q=80&fit=crop",
    alt: "AI Art 3",
    label: "Synthetic Visions",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1681412332858-9e4dfb9e2bca?w=600&q=80&fit=crop",
    alt: "AI Art 4",
    label: "Abstract Intelligence",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1684487747720-1ba29cda82c8?w=600&q=80&fit=crop",
    alt: "AI Art 5",
    label: "Future Forms",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80&fit=crop",
    alt: "AI Art 6",
    label: "Machine Poetry",
    span: "",
  },
];

export default function Gallery() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="gallery"
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
            &mdash; Creative
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-light tracking-[0.03em] text-foreground md:text-5xl">
            AI Creative Work
          </h2>
        </motion.div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryItems.map((item, i) => (
            <GalleryItem key={item.alt} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryItem({
  item,
  index,
}: {
  item: (typeof galleryItems)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className="group relative mb-4 break-inside-avoid overflow-hidden"
    >
      <Image
        src={item.src}
        alt={item.alt}
        width={600}
        height={index % 3 === 0 ? 800 : 500}
        className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <p className="p-6 font-[family-name:var(--font-cormorant)] text-lg tracking-[0.05em] text-white">
          {item.label}
        </p>
      </div>
    </motion.div>
  );
}
