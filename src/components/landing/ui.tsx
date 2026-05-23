"use client";

import { useEffect, useRef } from "react";
import type { AnchorHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import { Icon } from "./icons";

// --- Contact constants ---
export const PHONE = "+359 877 455 192";
export const TG = "Kracholoff";
export const TEL_HREF = "tel:+359877455192";
export const IG_HREF = "https://instagram.com/kracholoff.ai";
export const TG_HREF = "https://t.me/Kracholoff";

// Reveal-on-scroll wrapper
export function Reveal({
  delay = 0,
  className = "",
  children,
  ...rest
}: { delay?: number } & HTMLAttributes<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reveal = () => {
      el.classList.add("in");
      io.disconnect();
    };
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) reveal();
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    io.observe(el);
    // Fallback: reveal immediately if already in viewport on mount.
    const raf = requestAnimationFrame(() => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) reveal();
    });
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);
  const delayClass = delay ? `reveal-delay-${delay}` : "";
  return (
    <div ref={ref} className={`reveal ${delayClass} ${className}`} {...rest}>
      {children}
    </div>
  );
}

type ButtonProps = { href: string; icon?: string } & AnchorHTMLAttributes<HTMLAnchorElement>;

export function ButtonGold({ href, children, icon, className = "", ...rest }: ButtonProps) {
  return (
    <a
      href={href}
      className={`btn-gold inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-medium text-[15px] tracking-tight transition-transform hover:-translate-y-[1px] shadow-gold-glow ${className}`}
      {...rest}
    >
      {icon && <Icon name={icon} className="w-4 h-4" stroke={2} />}
      <span>{children}</span>
    </a>
  );
}

export function ButtonGhost({ href, children, icon, className = "", ...rest }: ButtonProps) {
  return (
    <a
      href={href}
      className={`btn-ghost hairline-strong inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-medium text-[15px] tracking-tight transition-colors ${className}`}
      {...rest}
    >
      {icon && <Icon name={icon} className="w-4 h-4" stroke={1.75} />}
      <span>{children}</span>
    </a>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-gold/90 ${className}`}>
      <span className="inline-block w-6 h-px bg-gold/60" />
      {children}
    </div>
  );
}

export function SectionHead({
  kicker,
  title,
  sub,
  align = "left",
  light = false,
}: {
  kicker?: ReactNode;
  title: ReactNode;
  sub?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {kicker && (
        <Reveal>
          <Eyebrow>{kicker}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={1}>
        <h2
          className={`mt-4 font-display text-[40px] sm:text-[52px] leading-[1.05] tracking-tight ${light ? "text-cream-900" : "text-cream"}`}
          style={{ textWrap: "balance" }}
        >
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={2}>
          <p
            className={`mt-5 text-[17px] leading-relaxed ${light ? "text-cream-900/70" : "text-dim"} max-w-2xl ${align === "center" ? "mx-auto" : ""}`}
            style={{ textWrap: "pretty" }}
          >
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  );
}

// Phone mockup frame — used in hero.
export function PhoneFrame({ children, className = "", tilt = 0 }: { children?: ReactNode; className?: string; tilt?: number }) {
  return (
    <div className={`relative ${className}`} style={{ transform: `rotate(${tilt}deg)` }}>
      <div className="relative mx-auto" style={{ width: 280, height: 580 }}>
        <div className="absolute inset-0 rounded-[44px] bg-gradient-to-b from-[#2a2a32] to-[#0d0d11] shadow-soft-deep" />
        <div className="absolute inset-[3px] rounded-[42px] bg-[#0a0a0c]" />
        <div className="absolute inset-[10px] rounded-[34px] overflow-hidden bg-ink-900">
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-30" />
          {children}
        </div>
        <div className="absolute left-[-3px] top-28 w-[3px] h-8 bg-[#1a1a20] rounded-l" />
        <div className="absolute left-[-3px] top-44 w-[3px] h-14 bg-[#1a1a20] rounded-l" />
        <div className="absolute right-[-3px] top-36 w-[3px] h-20 bg-[#1a1a20] rounded-r" />
      </div>
    </div>
  );
}
