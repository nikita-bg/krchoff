import type { Metadata } from "next";
import {
  Nav,
  Hero,
  TrustStrip,
  Problem,
  Solution,
  Portfolio,
  HowItWorks,
  Deliverables,
  Pricing,
  Testimonials,
  About,
  FAQ,
  FinalCTA,
  Footer,
  MobileBar,
} from "@/components/landing/sections";

export const metadata: Metadata = {
  title: "Nikita Kratcholov — AI сайтове + чатботове за бизнеси",
  description:
    "Премиум AI сайтове и чатботове, които превръщат посетителите в клиенти 24/7. За хотели, клиники, агенции и локални бизнеси в България.",
};

export default function Page() {
  return (
    <div className="landing-root bg-ink-950 text-cream min-h-screen antialiased">
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <Problem />
        <Solution />
        <Portfolio />
        <HowItWorks />
        <Deliverables />
        <Pricing />
        <Testimonials />
        <About />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileBar />
    </div>
  );
}
