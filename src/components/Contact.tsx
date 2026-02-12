"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

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

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormState({ name: "", email: "", message: "" });
  }

  return (
    <section id="contact" className="px-6 py-28 lg:px-12 lg:py-36 xl:px-20">
      <div className="mx-auto max-w-2xl text-center">
        <FadeInWhenVisible>
          <p className="font-sans text-xs uppercase tracking-wide-nav text-muted-foreground">
            <span className="mr-2 text-accent">&mdash;</span>
            Get in Touch
          </p>
          <h2 className="mt-4 font-serif text-5xl font-light tracking-editorial text-foreground md:text-6xl lg:text-7xl">
            Let&apos;s Talk
          </h2>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.15}>
          <a
            href="mailto:nikita@krchoff.com"
            className="mt-6 inline-block font-sans text-base text-muted-foreground underline decoration-accent/50 underline-offset-4 transition-colors duration-300 hover:text-foreground"
          >
            nikita@krchoff.com
          </a>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.25}>
          <form
            onSubmit={handleSubmit}
            className="mt-14 flex flex-col gap-6 text-left"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-2 block font-sans text-xs uppercase tracking-wide-nav text-muted-foreground"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                className="w-full border-b border-border bg-transparent px-0 py-3 font-sans text-sm text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground/50 focus:border-accent"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-sans text-xs uppercase tracking-wide-nav text-muted-foreground"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                className="w-full border-b border-border bg-transparent px-0 py-3 font-sans text-sm text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground/50 focus:border-accent"
                placeholder="Your email"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block font-sans text-xs uppercase tracking-wide-nav text-muted-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                className="w-full resize-none border-b border-border bg-transparent px-0 py-3 font-sans text-sm text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground/50 focus:border-accent"
                placeholder="Your message"
              />
            </div>

            <div className="mt-4 text-center">
              <button
                type="submit"
                className="inline-flex items-center border border-foreground px-10 py-3.5 font-sans text-xs uppercase tracking-wide-nav text-foreground transition-all duration-500 hover:bg-foreground hover:text-background"
              >
                {submitted ? "Message Sent" : "Send Message"}
              </button>
            </div>
          </form>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.35}>
          <div className="mt-14 flex justify-center">
            <a
              href="https://linkedin.com/in/nikita-kratcholov"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
