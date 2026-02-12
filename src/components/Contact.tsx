"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, FormEvent } from "react";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // EmailJS integration — replace with your actual service/template/public key
      const emailjs = await import("@emailjs/browser");
      await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        e.currentTarget,
        "YOUR_PUBLIC_KEY"
      );
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="px-6 py-[120px] md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="font-[family-name:var(--font-dm-sans)] text-sm tracking-[0.2em] text-text-secondary">
            &mdash; Connect
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-5xl font-light tracking-[0.03em] text-foreground md:text-6xl">
            Let&apos;s Talk
          </h2>

          <a
            href="mailto:nikita@krchoff.com"
            className="mt-6 inline-block font-[family-name:var(--font-dm-sans)] text-base tracking-[0.05em] text-accent transition-colors duration-300 hover:text-foreground"
          >
            nikita@krchoff.com
          </a>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-16 flex flex-col gap-6 text-left"
        >
          <div>
            <label
              htmlFor="name"
              className="mb-2 block font-[family-name:var(--font-dm-sans)] text-xs tracking-[0.15em] text-text-secondary"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              required
              className="w-full border-b border-divider bg-transparent py-3 font-[family-name:var(--font-dm-sans)] text-base text-foreground outline-none transition-colors duration-300 placeholder:text-divider focus:border-accent"
              placeholder="Your name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block font-[family-name:var(--font-dm-sans)] text-xs tracking-[0.15em] text-text-secondary"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              required
              className="w-full border-b border-divider bg-transparent py-3 font-[family-name:var(--font-dm-sans)] text-base text-foreground outline-none transition-colors duration-300 placeholder:text-divider focus:border-accent"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block font-[family-name:var(--font-dm-sans)] text-xs tracking-[0.15em] text-text-secondary"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full resize-none border-b border-divider bg-transparent py-3 font-[family-name:var(--font-dm-sans)] text-base text-foreground outline-none transition-colors duration-300 placeholder:text-divider focus:border-accent"
              placeholder="Tell me about your project..."
            />
          </div>

          <div className="mt-4 flex flex-col items-center gap-4">
            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="border border-foreground px-10 py-3 font-[family-name:var(--font-dm-sans)] text-[13px] tracking-[0.15em] text-foreground transition-all duration-500 hover:bg-foreground hover:text-background disabled:opacity-50"
            >
              {status === "idle" && "Send Message"}
              {status === "sending" && "Sending..."}
              {status === "sent" && "Message Sent"}
              {status === "error" && "Try Again"}
            </button>

            {status === "sent" && (
              <p className="font-[family-name:var(--font-dm-sans)] text-sm text-accent">
                Thank you! I&apos;ll get back to you soon.
              </p>
            )}
          </div>
        </motion.form>

        {/* LinkedIn */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-16"
        >
          <a
            href="https://linkedin.com/in/nikita-kratcholov"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-[family-name:var(--font-dm-sans)] text-sm tracking-[0.1em] text-text-secondary transition-colors duration-300 hover:text-foreground"
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
