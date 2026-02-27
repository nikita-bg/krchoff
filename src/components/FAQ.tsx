"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

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

const faqs = [
  {
    question: "What services does Nikita Kratcholov provide?",
    answer:
      "I specialize in AI automation consulting, building intelligent voice receptionists (SimplifyOpsCo), productivity tools (XPLife), and custom web applications using Next.js and modern technologies. I help businesses streamline operations through AI-powered solutions.",
  },
  {
    question: "What is SimplifyOpsCo?",
    answer:
      "SimplifyOpsCo is an AI voice receptionist system that handles customer calls 24/7, books appointments, answers questions, and reduces missed calls by up to 90%. It's designed for medical spas, dental practices, and service businesses.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "I primarily work with Next.js 16, React 19, TypeScript, Tailwind CSS, and various AI APIs (OpenAI, Anthropic Claude). I also have experience with n8n automation, Supabase, and voice AI technologies.",
  },
  {
    question: "How can AI automation help my business?",
    answer:
      "AI automation can save your team 2+ hours daily by handling repetitive tasks like customer inquiries, appointment booking, data entry, and follow-ups. This frees your team to focus on high-value work while improving customer response times.",
  },
  {
    question: "Do you work with clients internationally?",
    answer:
      "Yes, I work with clients globally. I'm based in Bulgaria but serve businesses worldwide, particularly in the US, Europe, and South Africa. All projects are delivered remotely with flexible communication.",
  },
  {
    question: "How do I get started with a project?",
    answer:
      "Reach out via the contact form or WhatsApp. We'll discuss your needs, goals, and timeline. I typically provide a proposal within 48 hours with clear deliverables, timeline, and pricing.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd) }}
      />
      <section className="px-6 py-28 lg:px-12 lg:py-36 xl:px-20">
        <div className="mx-auto max-w-4xl">
          <FadeInWhenVisible>
            <div className="text-center">
              <p className="font-sans text-xs uppercase tracking-wide-nav text-muted-foreground">
                <span className="mr-2 text-accent">&mdash;</span>
                Questions
              </p>
              <h2 className="mt-4 font-serif text-4xl font-light tracking-editorial text-foreground md:text-5xl">
                Frequently Asked
              </h2>
            </div>
          </FadeInWhenVisible>

          <div className="mt-16 space-y-4">
            {faqs.map((faq, i) => (
              <FadeInWhenVisible key={i} delay={i * 0.1}>
                <div className="border border-border">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="flex w-full items-center justify-between p-6 text-left transition-colors duration-300 hover:bg-muted/30"
                  >
                    <h3 className="font-serif text-xl font-normal tracking-editorial text-foreground md:text-2xl">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`h-5 w-5 flex-shrink-0 text-accent transition-transform duration-300 ${
                        openIndex === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openIndex === i ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <p className="px-6 pb-6 font-sans text-sm leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
