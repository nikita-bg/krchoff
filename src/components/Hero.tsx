"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.3 + i * 0.15,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Left Content */}
      <div className="relative z-10 flex w-full flex-col justify-center px-6 py-32 lg:w-[45%] lg:px-12 xl:pl-20">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-serif text-sm uppercase tracking-wide-nav text-muted-foreground"
        >
          AI Founder & Marketer
        </motion.p>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-6 font-serif text-6xl font-light leading-[1.1] tracking-editorial text-foreground md:text-7xl lg:text-[96px]"
        >
          Nikita
          <br />
          Kratcholov
        </motion.h1>

        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="my-8 h-px w-16 bg-accent"
        />

        <motion.p
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-sm font-sans text-base leading-relaxed text-muted-foreground"
        >
          Building AI products that solve real problems.
        </motion.p>

        <motion.a
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          href="#work"
          className="mt-10 inline-flex w-fit items-center gap-2 border border-foreground px-8 py-3.5 font-sans text-xs uppercase tracking-wide-nav text-foreground transition-all duration-500 hover:bg-foreground hover:text-background"
        >
          Discover my work
          <span className="text-sm">&#8595;</span>
        </motion.a>
      </div>

      {/* Right Image — Desktop */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-0 top-0 hidden h-full w-[55%] lg:block"
      >
        <Image
          src="/hero-nikita.png"
          alt="Nikita Kratcholov portrait"
          fill
          priority
          className="object-cover object-[center_20%]"
          sizes="55vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/30 to-transparent" />
      </motion.div>

      {/* Mobile hero image */}
      <div className="absolute inset-0 -z-10 lg:hidden">
        <Image
          src="/hero-nikita.png"
          alt=""
          fill
          priority
          className="object-cover object-top opacity-20"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
