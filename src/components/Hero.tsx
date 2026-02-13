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

        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="inline-flex w-fit items-center gap-2 border border-foreground px-8 py-3.5 font-sans text-xs uppercase tracking-wide-nav text-foreground transition-all duration-500 hover:bg-foreground hover:text-background"
          >
            Discover my work
            <span className="text-sm">&#8595;</span>
          </a>
          <a
            href="https://wa.me/27792847889"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 border border-foreground/20 px-8 py-3.5 font-sans text-xs uppercase tracking-wide-nav text-muted-foreground transition-all duration-500 hover:border-foreground hover:text-foreground"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
        </motion.div>
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
