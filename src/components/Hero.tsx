"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen flex-col-reverse lg:flex-row"
    >
      {/* Left — Text */}
      <div className="flex w-full flex-col justify-center px-6 py-20 md:px-12 lg:w-[45%] lg:px-20 lg:py-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="max-w-md"
        >
          <p className="font-[family-name:var(--font-cormorant)] text-sm tracking-[0.2em] text-text-secondary">
            AI Founder & Marketer
          </p>

          <h1 className="mt-6 font-[family-name:var(--font-cormorant)] text-6xl font-light leading-[1.1] tracking-[0.03em] text-foreground md:text-7xl lg:text-[96px]">
            Nikita
            <br />
            Kratcholov
          </h1>

          <div className="my-8 h-px w-16 bg-divider" />

          <p className="font-[family-name:var(--font-dm-sans)] text-base leading-relaxed text-text-secondary">
            Building AI products that solve real problems.
          </p>

          <a
            href="#work"
            className="mt-10 inline-block border border-foreground px-8 py-3 font-[family-name:var(--font-dm-sans)] text-[13px] tracking-[0.15em] text-foreground transition-all duration-500 hover:bg-foreground hover:text-background"
          >
            Discover my work&ensp;&darr;
          </a>
        </motion.div>
      </div>

      {/* Right — Image with parallax */}
      <div className="relative h-[60vh] w-full overflow-hidden lg:h-auto lg:w-[55%]">
        <motion.div style={{ y: imageY }} className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80&fit=crop"
            alt="Nikita Kratcholov"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
        </motion.div>
      </div>
    </section>
  );
}
