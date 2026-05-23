"use client";

import { useEffect, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import Image from "next/image";
import { Icon } from "./icons";
import {
  Reveal,
  ButtonGold,
  ButtonGhost,
  Eyebrow,
  SectionHead,
  PhoneFrame,
  PHONE,
  TG,
  TEL_HREF,
  IG_HREF,
  TG_HREF,
} from "./ui";

// 1. Sticky navigation
export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links: [string, string][] = [
    ["Проекти", "#portfolio"],
    ["Услуги", "#services"],
    ["Цени", "#pricing"],
    ["Контакт", "#contact"],
  ];
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "backdrop-blur-xl bg-ink-950/70 hairline" : "bg-transparent"}`}>
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-[68px] flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="relative grid place-items-center w-8 h-8 rounded-full hairline-gold">
            <span className="font-display text-gold text-[17px] leading-none">K</span>
            <span className="absolute -right-0.5 -top-0.5 w-1.5 h-1.5 rounded-full bg-gold" />
          </span>
          <span className="font-display text-[18px] tracking-tight">kracholoff<span className="text-gold">.ai</span></span>
        </a>

        <div className="hidden md:flex items-center gap-9 text-[14px] text-cream/80">
          {links.map(([t, h]) => (
            <a key={h} href={h} className="gold-link hover:text-cream transition-colors">{t}</a>
          ))}
        </div>

        <div className="hidden md:block">
          <ButtonGold href="#contact" icon="sparkles" className="!py-2.5 !px-4 !text-[13px]">Безплатна консултация</ButtonGold>
        </div>

        <button onClick={() => setOpen((v) => !v)} className="md:hidden w-10 h-10 grid place-items-center rounded-full hairline-strong" aria-label="Меню">
          <Icon name={open ? "close" : "menu"} />
        </button>
      </nav>
      {/* mobile menu */}
      <div className={`md:hidden overflow-hidden transition-[max-height] duration-500 ${open ? "max-h-96" : "max-h-0"}`}>
        <div className="px-5 pb-6 pt-2 flex flex-col gap-1 bg-ink-950/95 backdrop-blur-xl hairline">
          {links.map(([t, h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)} className="py-3 text-cream/85 border-b border-cream/5 last:border-0">{t}</a>
          ))}
          <ButtonGold href="#contact" icon="sparkles" className="mt-4">Безплатна консултация</ButtonGold>
        </div>
      </div>
    </header>
  );
}

// 2. Hero
export function Hero() {
  return (
    <section id="top" className="relative pt-32 sm:pt-40 pb-20 overflow-hidden grain">
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full opacity-40 pointer-events-none"
        style={{ background: "radial-gradient(closest-side, rgba(200,169,106,0.18), transparent 70%)" }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1.05fr_.95fr] gap-12 lg:gap-8 items-center">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full hairline-gold text-[11px] uppercase tracking-[0.22em] text-gold">
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-gold opacity-60 animate-ping" />
                <span className="relative w-2 h-2 rounded-full bg-gold" />
              </span>
              Свободен слот · юни 2026
            </div>
          </Reveal>

          <Reveal delay={1}>
            <h1 className="mt-7 font-display text-[44px] sm:text-[64px] lg:text-[78px] leading-[0.98] tracking-tight" style={{ textWrap: "balance" }}>
              Сайтове, които<br />
              <span className="italic text-gold-gradient">не просто изглеждат добре</span><br />
              — продават.
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <p className="mt-7 text-[18px] sm:text-[19px] leading-relaxed text-dim max-w-xl" style={{ textWrap: "pretty" }}>
              Бърз, модерен сайт + AI чатбот, който превръща посетителите в клиенти <span className="text-cream">24/7</span>. За хотели, клиники, агенции и локални бизнеси, които искат повече запитвания — без повече ръчна работа.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <ButtonGold href={TEL_HREF} icon="phone">Обади се</ButtonGold>
              <ButtonGhost href={IG_HREF} icon="instagram">Пиши в Instagram</ButtonGhost>
            </div>
          </Reveal>

          <Reveal delay={4}>
            <div className="mt-6 flex items-center gap-3 text-[13px] text-dim">
              <Icon name="bolt" className="w-4 h-4 text-gold" stroke={2} />
              <span>Готов за <span className="text-cream">дни</span>, не за месеци. Първи разговор — безплатен.</span>
            </div>
          </Reveal>
        </div>

        {/* Phone + chat bubbles */}
        <Reveal delay={2} className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <PhoneFrame tilt={-3}>
              <HeroPhoneScreen />
            </PhoneFrame>

            <div className="absolute -left-6 sm:-left-16 top-20 float-y" style={{ animationDelay: "0.2s" }}>
              <div className="bg-ink-800 hairline-strong rounded-2xl rounded-bl-sm px-4 py-2.5 max-w-[200px] shadow-soft-deep">
                <div className="text-[10px] uppercase tracking-widest text-gold/70 mb-1">Гост · 22:47</div>
                <div className="text-[13px] text-cream/90">Имате ли свободна стая за уикенда?</div>
              </div>
            </div>
            <div className="absolute -right-4 sm:-right-10 top-52 float-y" style={{ animationDelay: "1.4s" }}>
              <div
                className="rounded-2xl rounded-br-sm px-4 py-2.5 max-w-[220px] shadow-gold-glow"
                style={{ background: "linear-gradient(180deg, rgba(200,169,106,0.18), rgba(200,169,106,0.08))", boxShadow: "inset 0 0 0 1px rgba(200,169,106,0.4)" }}
              >
                <div className="text-[10px] uppercase tracking-widest text-gold mb-1 flex items-center gap-1">
                  <Icon name="sparkles" className="w-3 h-3" /> AI рецепционист
                </div>
                <div className="text-[13px] text-cream">Да — Deluxe стая, гледка море. Резервирам ли?</div>
              </div>
            </div>
            <div className="absolute -left-3 sm:-left-8 bottom-24 float-y" style={{ animationDelay: "2.6s" }}>
              <div className="bg-ink-800 hairline-strong rounded-2xl rounded-bl-sm px-4 py-2.5 max-w-[180px] shadow-soft-deep">
                <div className="text-[13px] text-cream/90 caret">Супер, да</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// Phone screen content — a mini website preview
function HeroPhoneScreen() {
  return (
    <div className="absolute inset-0 bg-gradient-to-b from-[#16161c] to-[#0c0c10] text-cream pt-10 px-3 pb-3 flex flex-col">
      <div className="flex items-center justify-between px-2 pt-1 text-[9px] text-dim font-mono">
        <span>9:41</span>
        <span>● ● ●</span>
      </div>
      <div className="mt-3 flex items-center justify-between px-1">
        <span className="font-display text-[12px]">Savanna<span className="text-gold">.</span></span>
        <span className="w-4 h-4 rounded-full hairline-strong grid place-items-center">
          <span className="block w-2.5 h-px bg-cream/70" />
        </span>
      </div>
      <div className="mt-4 px-1">
        <div className="font-display text-[18px] leading-tight">Where the<br /><em className="text-gold">savanna</em> meets the sea.</div>
        <div className="mt-2 text-[9px] text-dim leading-snug">Boutique safari resort · Zanzibar</div>
      </div>
      <div className="mt-3 rounded-xl overflow-hidden relative" style={{ height: 140 }}>
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #3a2e1f 0%, #1c1812 60%, #0c0a07 100%)" }} />
        <div className="absolute inset-0 placeholder-stripe opacity-40" />
        <div className="absolute bottom-2 left-2 right-2 flex items-end justify-between">
          <div>
            <div className="text-[8px] uppercase tracking-widest text-gold">Deluxe Suite</div>
            <div className="text-[10px] text-cream/90">от €280 / нощ</div>
          </div>
          <span className="text-[9px] px-2 py-0.5 rounded-full bg-gold text-ink-900 font-medium">Резервирай</span>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <div className="rounded-lg p-2 hairline-strong">
          <div className="text-[8px] text-dim">Спа</div>
          <div className="text-[10px] text-cream">от €60</div>
        </div>
        <div className="rounded-lg p-2 hairline-strong">
          <div className="text-[8px] text-dim">Сафари</div>
          <div className="text-[10px] text-cream">от €120</div>
        </div>
      </div>
      <div className="mt-auto pt-3">
        <div className="rounded-full hairline-gold px-3 py-2 flex items-center gap-2 bg-ink-900/80">
          <Icon name="sparkles" className="w-3 h-3 text-gold" stroke={2} />
          <span className="text-[9px] text-cream/70">Питай AI рецепционист…</span>
        </div>
      </div>
    </div>
  );
}

// 3. Trust strip — marquee of niches
export function TrustStrip() {
  const items = [
    "Луксозен хотел", "Гостенска къща", "Дентална клиника",
    "AI рецепционист", "Solar SaaS", "Mobile приложение",
    "Имотна агенция", "Медицинска клиника",
  ];
  const row = (
    <div className="flex items-center gap-12 px-6 shrink-0">
      {items.map((t, i) => (
        <span key={i} className="flex items-center gap-3 text-[15px] text-cream/70 whitespace-nowrap">
          <span className="w-1 h-1 rounded-full bg-gold/70" />
          {t}
        </span>
      ))}
    </div>
  );
  return (
    <section className="relative py-10 border-y border-cream/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-4">
        <Reveal><div className="text-[11px] uppercase tracking-[0.22em] text-dim">Реални проекти и ниши</div></Reveal>
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-950 to-transparent z-10 pointer-events-none" />
        <div className="flex marquee-track" style={{ width: "max-content" }}>
          {row}{row}{row}
        </div>
      </div>
    </section>
  );
}

// 4. Problem
export function Problem() {
  const items = [
    { icon: "snail", title: "Бавен и без мобилна версия", text: "Зарежда се по 6 секунди, на телефон е счупен. 70% от посетителите ти затварят преди дори да го видят." },
    { icon: "moon", title: "Няма кой да отговори вечер", text: "Запитване в 22:34? Изпуснато. Сутрин звъниш — клиентът вече е резервирал другаде." },
    { icon: "layers", title: "Изглежда от 2015", text: "Дизайнът сигнализира „евтино“ преди да си казал и дума за цена. Не вдъхва доверие, не отразява нивото ти." },
  ];
  return (
    <section id="problem" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHead
          kicker="Проблемът"
          title={<>Остарелият сайт ти<br /><span className="italic text-gold-gradient">коства клиенти</span> всеки ден.</>}
          sub="Не е въпрос дали — а колко. Всяко изпуснато запитване отива при конкурент, който е инвестирал в дигиталното си присъствие."
        />
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <Reveal key={i} delay={i + 1}>
              <div className="group relative h-full rounded-2xl p-7 bg-ink-900/60 hairline transition-all duration-500 hover:bg-ink-800/60 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl hairline-gold grid place-items-center text-gold mb-5">
                  <Icon name={it.icon} className="w-5 h-5" stroke={1.5} />
                </div>
                <h3 className="font-display text-[24px] leading-tight tracking-tight">{it.title}</h3>
                <p className="mt-3 text-[15px] text-dim leading-relaxed">{it.text}</p>
                <div className="absolute inset-x-7 bottom-7 h-px bg-gradient-to-r from-gold/0 via-gold/40 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChatBubble({ side, children, pending }: { side: "left" | "right"; children: ReactNode; pending?: boolean }) {
  return (
    <div className={`flex ${side === "right" ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[78%] rounded-2xl px-4 py-2.5 text-[14px] leading-snug ${side === "right" ? "rounded-br-sm text-ink-900" : "rounded-bl-sm bg-ink-800 hairline-strong text-cream/90"}`}
        style={side === "right" ? { background: "linear-gradient(180deg, #D8BE85, #C8A96A)" } : {}}
      >
        {children}
        {pending && <span className="caret" />}
      </div>
    </div>
  );
}

// 5. Solution
export function Solution() {
  const benefits = [
    { icon: "bolt", t: "Светкавично бърз", s: "Под 2 секунди зареждане. Google те харесва." },
    { icon: "smartphone", t: "Перфектен на телефон", s: "Mobile-first от първия пиксел. Никакви компромиси." },
    { icon: "bot", t: "AI продава вместо теб", s: "Отговаря, квалифицира, резервира — на всеки език, по всяко време." },
    { icon: "target", t: "Превръща трафика в клиенти", s: "Конверсионни секции, ясни CTA, доверие — на правилните места." },
  ];
  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <SectionHead
              kicker="Решението"
              title={<>AI сайт + чатбот,<br />който продава <span className="italic text-gold-gradient">вместо теб</span> — 24/7.</>}
              sub="Не просто красив сайт. Цялостна машина за запитвания: модерен дизайн, който вдъхва доверие, и AI асистент, който отговаря веднага — на български, английски, на всеки час от денонощието."
            />
            <div className="mt-10 grid sm:grid-cols-2 gap-3">
              {benefits.map((b, i) => (
                <Reveal key={i} delay={(i % 4) + 1}>
                  <div className="rounded-xl p-4 hairline bg-ink-900/40 flex gap-3">
                    <div className="shrink-0 w-9 h-9 rounded-lg hairline-gold grid place-items-center text-gold">
                      <Icon name={b.icon} className="w-4 h-4" stroke={1.75} />
                    </div>
                    <div>
                      <div className="font-medium text-[15px]">{b.t}</div>
                      <div className="text-[13px] text-dim leading-relaxed mt-0.5">{b.s}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Visual: chat conversation */}
          <Reveal delay={2}>
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl opacity-50 pointer-events-none" style={{ background: "radial-gradient(closest-side, rgba(200,169,106,0.18), transparent 70%)" }} />
              <div className="relative rounded-3xl bg-ink-900 hairline shadow-soft-deep p-6 sm:p-7">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full hairline-gold grid place-items-center text-gold"><Icon name="sparkles" className="w-4 h-4" stroke={2} /></div>
                    <div>
                      <div className="text-[14px]">AI Асистент <span className="text-gold">·</span> Smile Dental</div>
                      <div className="text-[11px] text-dim">Активен · отговаря за &lt; 1 сек</div>
                    </div>
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-gold/70">live</div>
                </div>

                <div className="space-y-3">
                  <ChatBubble side="left">Здравейте, имам остра зъбна болка — може ли спешно за утре?</ChatBubble>
                  <ChatBubble side="right">Разбира се. Имаме слот в <b>10:30</b> или <b>16:15</b>. Кой ви устройва?</ChatBubble>
                  <ChatBubble side="left">16:15. Покрива ли се от НЗОК?</ChatBubble>
                  <ChatBubble side="right">Прегледът — да. Лечението зависи от диагнозата. Запазвам ви <b>16:15</b> при д-р Петров и пращам напомняне в SMS. 🦷</ChatBubble>
                  <ChatBubble side="left" pending>Благодаря!</ChatBubble>
                </div>

                <div className="mt-6 pt-5 border-t border-cream/5 flex items-center gap-3 text-[12px] text-dim">
                  <div className="flex items-center gap-1.5"><Icon name="check" className="w-3.5 h-3.5 text-gold" stroke={2.5} /> Резервацията е в календара ти.</div>
                  <div className="flex items-center gap-1.5"><Icon name="bell" className="w-3.5 h-3.5 text-gold" stroke={2} /> Telegram нотификация изпратена.</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// 6. Portfolio
export function Portfolio() {
  const projects: { name: string; kind: string; tag: string; img: string | null; accent: string; form: "phone" | "laptop" }[] = [
    { name: "Savanna Bay", kind: "Луксозен бутиков хотел", tag: "Хотел", img: "/work-safari-hotel.jpg", accent: "#3a2e1f", form: "phone" },
    { name: "Highveld", kind: "Гостенска къща в планината", tag: "Къща за гости", img: "/work-highveld-guesthouse.jpg", accent: "#1f2a23", form: "laptop" },
    { name: "Smile Dental", kind: "Дентална клиника + AI рецепционист", tag: "Клиника", img: "/work-smile-dental.jpg", accent: "#1a1f2a", form: "phone" },
    { name: "SimplifyOps", kind: "AI рецепционист за операции", tag: "AI Asst.", img: "/work-simplifyops.jpg", accent: "#221a2a", form: "laptop" },
    { name: "XPLife", kind: "Lifestyle мобилно приложение", tag: "App", img: "/work-xplife.png", accent: "#2a1f1a", form: "phone" },
    { name: "PermitPilot", kind: "SaaS платформа за разрешителни", tag: "SaaS", img: null, accent: "#1a2622", form: "laptop" },
  ];
  return (
    <section id="portfolio" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHead
            kicker="Избрани проекти"
            title={<>Сайтове, които<br /><span className="italic text-gold-gradient">работят</span> за бизнеса.</>}
          />
          <Reveal delay={1}>
            <a href="https://krchoff.com" target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-[14px] text-dim hover:text-cream transition-colors">
              Виж всички на krchoff.com <Icon name="arrowUpRight" className="w-4 h-4" />
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) + 1}>
              <a href="#" className="group block rounded-2xl bg-ink-900/60 hairline overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-soft-deep">
                <div className="relative aspect-[4/3] overflow-hidden" style={{ background: `linear-gradient(135deg, ${p.accent} 0%, #0a0a0c 100%)` }}>
                  {p.img ? (
                    <>
                      <Image src={p.img} alt={p.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 placeholder-stripe opacity-30" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-36 h-24 rounded-md hairline-strong bg-ink-950/80 grid place-items-center transition-transform duration-700 group-hover:scale-110">
                          <Icon name="server" className="w-6 h-6 text-gold/80" />
                        </div>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 font-mono text-[9px] tracking-widest text-cream/40 uppercase">[ project preview ]</div>
                    </>
                  )}
                  <div className="absolute top-3 left-3 text-[10px] uppercase tracking-widest px-2 py-1 rounded-full bg-ink-950/70 backdrop-blur hairline-strong text-cream/80">{p.tag}</div>
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full hairline-gold grid place-items-center text-gold opacity-0 group-hover:opacity-100 transition-opacity bg-ink-950/60">
                    <Icon name="arrowUpRight" className="w-4 h-4" stroke={2} />
                  </div>
                </div>
                <div className="p-5">
                  <div className="font-display text-[22px] leading-tight tracking-tight">{p.name}</div>
                  <div className="mt-1 text-[13px] text-dim">{p.kind}</div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// 7. How it works — light section for contrast
export function HowItWorks() {
  const steps = [
    { n: "01", icon: "phone", t: "Безплатен разговор", s: "15–30 минути. Разбирам бизнеса, целите и какво трябва да реши сайтът. Получаваш ясно предложение." },
    { n: "02", icon: "pencil", t: "Дизайн и разработка", s: "За дни, не месеци. Получаваш първи преглед бързо, итерираме заедно до перфектно." },
    { n: "03", icon: "rocket", t: "Пускаме на живо + AI", s: "Качване, домейн, SEO основи, AI чатбот обучен с твоя контекст. Готов да приема клиенти." },
  ];
  return (
    <section id="process" className="relative py-24 sm:py-32 bg-cream-50 text-cream-900 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cream-900/15 to-transparent" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHead
          light
          kicker="Как работи"
          title={<>От обаждане до първи клиент —<br /><span className="italic" style={{ color: "#A9762F" }}>за по-малко от 2 седмици.</span></>}
          sub="Прост, изчистен процес. Без агенциен бюрократен ужас. Само резултат."
        />
        <div className="mt-16 grid md:grid-cols-3 gap-5 relative">
          <div className="hidden md:block absolute top-12 left-[14%] right-[14%] h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(169,118,47,0.5), transparent)" }} />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i + 1}>
              <div className="relative rounded-2xl p-7 bg-white/60 backdrop-blur" style={{ boxShadow: "inset 0 0 0 1px rgba(34,28,20,0.06), 0 20px 60px -30px rgba(34,28,20,0.15)" }}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full grid place-items-center" style={{ background: "linear-gradient(180deg, #D8BE85, #A9762F)", color: "#fff" }}>
                    <Icon name={s.icon} className="w-5 h-5" stroke={1.75} />
                  </div>
                  <div className="font-mono text-[11px] tracking-widest text-cream-900/40">STEP {s.n}</div>
                </div>
                <h3 className="mt-5 font-display text-[26px] leading-tight tracking-tight">{s.t}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-cream-900/70">{s.s}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// 8. Deliverables — what you get
export function Deliverables() {
  const items = [
    { icon: "bolt", t: "Светкавично бърз сайт", s: "Under 2s load. PageSpeed 90+." },
    { icon: "smartphone", t: "Работи на всеки телефон", s: "Mobile-first, ретина-перфектен." },
    { icon: "bot", t: "AI чатбот 24/7", s: "Обучен с твоето меню/услуги/политики." },
    { icon: "search", t: "SEO основи", s: "Schema, мета, sitemap, бърз индекс." },
    { icon: "bell", t: "Lead нотификации", s: "Telegram + Instagram DM веднага." },
    { icon: "server", t: "Hosting setup", s: "Домейн, SSL, бекъпи — настроени." },
  ];
  return (
    <section className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHead
          kicker="Какво получаваш"
          title={<>Всичко, което трябва.<br /><span className="italic text-gold-gradient">Нищо излишно.</span></>}
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-cream/5 rounded-2xl overflow-hidden hairline">
          {items.map((it, i) => (
            <Reveal key={i} delay={(i % 3) + 1}>
              <div className="bg-ink-950 p-7 h-full transition-colors hover:bg-ink-900">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-11 h-11 rounded-xl hairline-gold grid place-items-center text-gold">
                    <Icon name={it.icon} className="w-5 h-5" stroke={1.5} />
                  </div>
                  <div>
                    <div className="font-display text-[20px] leading-tight tracking-tight">{it.t}</div>
                    <div className="mt-1.5 text-[14px] text-dim leading-relaxed">{it.s}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// 9. Pricing
export function Pricing() {
  const tiers = [
    {
      name: "Старт", price: "€900", monthly: "€90", note: "от",
      desc: "За локален бизнес, който има нужда от модерно дигитално лице.",
      features: ["Модерен едностраничен сайт", "Mobile-first, перфектен на всеки екран", "Контакт бутони — тел / IG / Telegram", "SEO основи + бърз хостинг setup", "Готов за дни"],
      cta: "Запитай", featured: false,
    },
    {
      name: "Growth", price: "€2 000", monthly: "€290", note: "от",
      desc: "Най-популярен. Сайт, който продава, + AI чатбот, който никога не спи.",
      features: ["Многосекционен сайт, до 6 секции", "AI чатбот 24/7, обучен с твоя контекст", "Конверсионни секции + ясни CTA", "SEO + Schema + Open Graph", "Lead нотификации в Telegram / Instagram", "Аналитика + heatmap setup"],
      cta: "Запитай", featured: true,
    },
    {
      name: "Premium", price: "€4 500", monthly: "€700", note: "от",
      desc: "За бизнеси, които искат пълна автоматизация. Сайтът е само върхът.",
      features: ["Всичко от Growth +", "Автоматизации: резервации / календар / CRM", "AI асистент с памет и интеграции", "Съдържание + копирайт на български и английски", "Многоезичност", "Приоритетна поддръжка 30 дни"],
      cta: "Запитай", featured: false,
    },
  ];
  return (
    <section id="pricing" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] rounded-full opacity-20 pointer-events-none" style={{ background: "radial-gradient(closest-side, rgba(200,169,106,0.25), transparent 70%)" }} />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHead
          align="center"
          kicker="Цени"
          title={<>Ясно, честно,<br /><span className="italic text-gold-gradient">без изненади.</span></>}
          sub="Финална цена след кратък разговор — зависи от обхвата. Цените по-долу са отправни точки."
        />
        <div className="mt-16 grid lg:grid-cols-3 gap-5">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i + 1}>
              <div
                className={`relative h-full rounded-2xl p-7 sm:p-8 flex flex-col transition-all duration-500 hover:-translate-y-1 ${t.featured ? "bg-gradient-to-b from-[#1c1a14] to-[#13110c] shadow-gold-glow" : "bg-ink-900/50 hover:bg-ink-900"}`}
                style={t.featured ? { boxShadow: "inset 0 0 0 1px rgba(200,169,106,0.4), 0 30px 80px -30px rgba(200,169,106,0.25)" } : { boxShadow: "inset 0 0 0 1px rgba(245,241,232,0.06)" }}
              >
                {t.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.22em] font-medium text-ink-900" style={{ background: "linear-gradient(180deg, #E8CC8E, #C8A96A)" }}>
                    ★ Най-популярен
                  </div>
                )}
                <div className="flex items-baseline justify-between">
                  <div className="font-display text-[28px] tracking-tight">{t.name}</div>
                  {t.featured && <Icon name="sparkles" className="w-4 h-4 text-gold" />}
                </div>
                <div className="mt-1 text-[13px] text-dim">{t.desc}</div>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-[12px] text-dim uppercase tracking-widest">{t.note}</span>
                  <span className={`font-display text-[44px] leading-none tracking-tight ${t.featured ? "text-gold-gradient" : ""}`}>{t.price}</span>
                </div>
                <div className="mt-2 text-[13px] text-dim">+ {t.monthly}/мес AI грижа (по избор)</div>
                <div className="my-7 h-px bg-cream/5" />
                <ul className="space-y-3 text-[14px] flex-1">
                  {t.features.map((f, k) => (
                    <li key={k} className="flex items-start gap-3">
                      <span className={`shrink-0 mt-0.5 w-4 h-4 rounded-full grid place-items-center ${t.featured ? "bg-gold/15 text-gold" : "text-gold/80"}`}>
                        <Icon name="check" className="w-3 h-3" stroke={2.5} />
                      </span>
                      <span className="text-cream/85">{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className={`mt-8 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-medium text-[15px] transition-transform hover:-translate-y-[1px] ${t.featured ? "btn-gold shadow-gold-glow" : "btn-ghost hairline-strong"}`}>
                  {t.cta} <Icon name="arrowRight" className="w-4 h-4" stroke={2} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={2}>
          <div className="mt-10 rounded-2xl hairline bg-ink-900/40 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <div className="shrink-0 w-11 h-11 rounded-xl hairline-gold grid place-items-center text-gold">
              <Icon name="server" className="w-5 h-5" stroke={1.5} />
            </div>
            <div className="flex-1">
              <div className="font-display text-[18px]">Месечна грижа по избор</div>
              <div className="text-[14px] text-dim mt-0.5">Hosting, ъпдейти, AI поддръжка, малки промени — <span className="text-cream">от €90/мес.</span></div>
            </div>
            <ButtonGhost href="#contact" icon="arrowRight" className="!py-2.5 !text-[13px]">Разкажи ми</ButtonGhost>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// 10. Testimonials
export function Testimonials() {
  const quotes = [
    { name: "Мария Г.", role: "Управител, бутиков хотел", stars: 5, text: "За 9 дни ми построи сайт, който изглежда по-добре от тези на конкуренти, които плащат хиляди на агенция. AI рецепционистът поема резервации през нощта — реално работи." },
    { name: "д-р Петров", role: "Дентална клиника", stars: 5, text: "Получаваме 3x повече запитвания. Чатботът квалифицира пациента преди да дойде в клиниката — спестява време на администратора. Никита разбира от бизнес, не само от код." },
    { name: "Стефан И.", role: "Имотна агенция", stars: 5, text: "Премиум усещане на сайта. Клиентите ми реално го коментират на огледи. Това е като да отвориш бутик вместо магазин — задава нивото веднага." },
  ];
  return (
    <section className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHead
          kicker="Какво казват"
          title={<>Реални собственици.<br /><span className="italic text-gold-gradient">Реални резултати.</span></>}
        />
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {quotes.map((q, i) => (
            <Reveal key={i} delay={i + 1}>
              <div className="h-full rounded-2xl p-7 bg-ink-900/50 hairline relative">
                <Icon name="quote" className="absolute top-6 right-6 w-7 h-7 text-gold/30" stroke={1.25} />
                <div className="flex gap-0.5 text-gold">
                  {Array.from({ length: q.stars }).map((_, k) => (
                    <Icon key={k} name="star" className="w-4 h-4 fill-current" stroke={0} />
                  ))}
                </div>
                <p className="mt-5 text-[15px] leading-relaxed text-cream/90" style={{ textWrap: "pretty" }}>&ldquo;{q.text}&rdquo;</p>
                <div className="mt-6 pt-5 border-t border-cream/5 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full hairline-gold grid place-items-center font-display text-gold text-[14px]">{q.name[0]}</div>
                  <div>
                    <div className="text-[14px]">{q.name}</div>
                    <div className="text-[12px] text-dim">{q.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// 11. About
export function About() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid md:grid-cols-[280px_1fr] gap-10 md:gap-16 items-center">
        <Reveal>
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden hairline-gold relative">
              <Image src="/about-nikita.png" alt="Никита Кръчолов" fill sizes="280px" className="object-cover" />
            </div>
            <div className="absolute -bottom-3 -right-3 px-3 py-2 rounded-full bg-ink-900 hairline-gold text-[11px] uppercase tracking-[0.22em] text-gold">
              krchoff<span className="text-cream/60">.com</span>
            </div>
          </div>
        </Reveal>
        <div>
          <Reveal><Eyebrow>За мен</Eyebrow></Reveal>
          <Reveal delay={1}>
            <h2 className="mt-4 font-display text-[36px] sm:text-[48px] leading-[1.05] tracking-tight" style={{ textWrap: "balance" }}>
              Никита Кръчолов. Правя <span className="italic text-gold-gradient">AI сайтове</span> и автоматизации.
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 text-[17px] leading-relaxed text-dim max-w-xl" style={{ textWrap: "pretty" }}>
              Зад <span className="text-cream">krchoff.com</span> и десетки проекти — от бутикови хотели в Африка до SaaS платформи в САЩ. Работя бързо, говоря човешки, мисля като собственик на бизнес. Целта ми не е „да направя сайт“, а да ти донеса повече клиенти.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonGhost href={IG_HREF} icon="instagram">@kracholoff.ai</ButtonGhost>
              <ButtonGhost href="https://krchoff.com" icon="arrowUpRight">krchoff.com</ButtonGhost>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// 12. FAQ
export function FAQ() {
  const qs = [
    { q: "Колко време отнема?", a: "Зависи от обхвата. Едностраничен сайт — 5–10 дни. Многосекционен + AI чатбот — 2–3 седмици. Premium с автоматизации — 3–5 седмици. Старт давам същата седмица, в която ми пишеш." },
    { q: "Какво е AI чатбот и какво прави?", a: "Малък асистент в сайта ти, обучен с твоите услуги, цени, политики и тон. Отговаря на въпроси на български и английски, квалифицира клиенти, събира контакти, прави резервации и ти праща нотификация веднага в Telegram или Instagram. Работи 24/7." },
    { q: "Включен ли е hosting и домейн?", a: "Setup-ът е включен във всеки пакет. Реалните разходи за домейн (~€15/г.) и hosting (~€8–20/мес.) са към доставчик и са на твое име — ти си собственик. Мога да поема и грижата срещу месечен пакет от €90." },
    { q: "Мога ли да си редактирам сайта?", a: "Да. Текст, снимки, цени, нови секции — можеш да ги променяш сам през лесен админ панел. Ако предпочиташ да не се занимаваш — поемам го с месечната грижа." },
    { q: "Как се плаща?", a: "50% при старт, 50% при пускане на живо. Банков превод или Revolut. Издавам фактура. За проекти над €2000 можем да разделим на 3 части." },
  ];
  return (
    <section className="relative py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <SectionHead
          align="center"
          kicker="Често задавани въпроси"
          title={<>Преди да попиташ —<br /><span className="italic text-gold-gradient">вероятно е тук.</span></>}
        />
        <div className="mt-14 space-y-3">
          {qs.map((item, i) => (
            <Reveal key={i} delay={(i % 4) + 1}>
              <details className="group rounded-2xl bg-ink-900/50 hairline overflow-hidden transition-colors hover:bg-ink-900">
                <summary className="cursor-pointer p-6 sm:p-7 flex items-center justify-between gap-6">
                  <span className="font-display text-[19px] sm:text-[22px] tracking-tight">{item.q}</span>
                  <span className="shrink-0 w-9 h-9 rounded-full hairline-gold grid place-items-center text-gold faq-icon transition-transform duration-300">
                    <Icon name="plus" className="w-4 h-4" stroke={2} />
                  </span>
                </summary>
                <div className="px-6 sm:px-7 pb-6 sm:pb-7 -mt-1">
                  <p className="text-[15px] leading-relaxed text-dim" style={{ textWrap: "pretty" }}>{item.a}</p>
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// 13. Final CTA + mini callback form
export function FinalCTA() {
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (phone.trim().length >= 6) setSent(true);
  };
  return (
    <section id="contact" className="relative py-24 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 dot-grid opacity-50" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[700px] rounded-full" style={{ background: "radial-gradient(closest-side, rgba(200,169,106,0.22), transparent 70%)" }} />
      </div>
      <div className="relative max-w-5xl mx-auto px-5 sm:px-8 text-center">
        <Reveal><Eyebrow className="justify-self-center mx-auto">Готов ли си?</Eyebrow></Reveal>
        <Reveal delay={1}>
          <h2 className="mt-6 font-display text-[44px] sm:text-[68px] leading-[1.02] tracking-tight" style={{ textWrap: "balance" }}>
            Готов за сайт, който<br />
            <span className="italic text-gold-gradient">носи клиенти?</span> Да го направим.
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="mt-6 text-[17px] sm:text-[18px] text-dim max-w-xl mx-auto">
            Първият разговор е безплатен и без ангажимент. Ще ти кажа честно дали мога да помогна — и колко ще струва.
          </p>
        </Reveal>
        <Reveal delay={3}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <ButtonGold href={TEL_HREF} icon="phone">Обади се</ButtonGold>
            <ButtonGhost href={IG_HREF} icon="instagram">Instagram DM</ButtonGhost>
            <ButtonGhost href={TG_HREF} icon="telegram">Telegram</ButtonGhost>
          </div>
        </Reveal>
        <Reveal delay={4}>
          <div className="mt-12 max-w-md mx-auto">
            <div className="text-[11px] uppercase tracking-[0.22em] text-dim mb-3">или остави телефон — звъня обратно</div>
            {!sent ? (
              <form onSubmit={submit} className="flex gap-2 p-1.5 rounded-full hairline-strong bg-ink-900/60 backdrop-blur">
                <input
                  type="tel"
                  inputMode="tel"
                  placeholder="+359 ..."
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="flex-1 bg-transparent px-4 outline-none text-[15px] placeholder:text-dim/60"
                  required
                />
                <button type="submit" className="btn-gold px-5 py-2.5 rounded-full text-[14px] font-medium inline-flex items-center gap-2">
                  Звънни ми <Icon name="arrowRight" className="w-4 h-4" stroke={2} />
                </button>
              </form>
            ) : (
              <div className="rounded-full hairline-gold bg-ink-900/60 px-6 py-4 text-[15px] flex items-center justify-center gap-2 text-gold">
                <Icon name="check" className="w-4 h-4" stroke={2.5} /> Благодаря — звъня ти в рамките на деня.
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// 14. Footer
export function Footer() {
  return (
    <footer className="relative border-t border-cream/5 py-14">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid place-items-center w-8 h-8 rounded-full hairline-gold">
              <span className="font-display text-gold text-[17px] leading-none">K</span>
            </span>
            <span className="font-display text-[18px]">kracholoff<span className="text-gold">.ai</span></span>
          </div>
          <p className="mt-4 text-[14px] text-dim max-w-xs leading-relaxed">
            AI сайтове и чатботове за бизнеси, които искат да изглеждат и да продават като премиум.
          </p>
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-[0.22em] text-gold/80 mb-4">Контакт</div>
          <ul className="space-y-2.5 text-[14px]">
            <li><a href={TEL_HREF} className="text-cream/85 hover:text-gold transition-colors flex items-center gap-2"><Icon name="phone" className="w-4 h-4" /> {PHONE}</a></li>
            <li><a href={IG_HREF} className="text-cream/85 hover:text-gold transition-colors flex items-center gap-2"><Icon name="instagram" className="w-4 h-4" /> @kracholoff.ai</a></li>
            <li><a href={TG_HREF} className="text-cream/85 hover:text-gold transition-colors flex items-center gap-2"><Icon name="telegram" className="w-4 h-4" /> t.me/{TG}</a></li>
            <li><a href="https://krchoff.com" className="text-cream/85 hover:text-gold transition-colors flex items-center gap-2"><Icon name="arrowUpRight" className="w-4 h-4" /> krchoff.com</a></li>
          </ul>
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-[0.22em] text-gold/80 mb-4">Навигация</div>
          <ul className="space-y-2.5 text-[14px]">
            <li><a href="#portfolio" className="text-cream/85 hover:text-gold transition-colors">Проекти</a></li>
            <li><a href="#services" className="text-cream/85 hover:text-gold transition-colors">Услуги</a></li>
            <li><a href="#pricing" className="text-cream/85 hover:text-gold transition-colors">Цени</a></li>
            <li><a href="#contact" className="text-cream/85 hover:text-gold transition-colors">Контакт</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mt-12 pt-6 border-t border-cream/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-dim">
        <div>© 2026 Nikita Kratcholov · krchoff.com · Всички права запазени.</div>
        <div className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" /> Built with care in Sofia</div>
      </div>
    </footer>
  );
}

// Mobile sticky CTA bar
export function MobileBar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 520);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className={`md:hidden fixed bottom-3 left-3 right-3 z-40 transition-all duration-500 ${show ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0 pointer-events-none"}`}>
      <div className="rounded-full bg-ink-900/90 backdrop-blur-xl hairline-gold shadow-soft-deep grid grid-cols-3 p-1.5 gap-1.5">
        <a href={TEL_HREF} className="btn-gold rounded-full py-2.5 inline-flex items-center justify-center gap-1.5 text-[13px] font-medium">
          <Icon name="phone" className="w-4 h-4" stroke={2} /> Обади се
        </a>
        <a href={IG_HREF} className="rounded-full py-2.5 inline-flex items-center justify-center gap-1.5 text-[13px] text-cream hairline-strong">
          <Icon name="instagram" className="w-4 h-4" /> IG
        </a>
        <a href={TG_HREF} className="rounded-full py-2.5 inline-flex items-center justify-center gap-1.5 text-[13px] text-cream hairline-strong">
          <Icon name="telegram" className="w-4 h-4" /> Telegram
        </a>
      </div>
    </div>
  );
}
