import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

// --- Landing (dark luxe) fonts ---
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nikita Kratcholov — AI Founder & Marketer",
  description:
    "Personal portfolio of Nikita Kratcholov. AI automation consultant building intelligent solutions with Next.js, voice AI receptionists, and productivity tools for startups and businesses.",
  authors: [{ name: "Nikita Kratcholov", url: "https://krchoff.com" }],
  creator: "Nikita Kratcholov",
  publisher: "Nikita Kratcholov",
  alternates: {
    canonical: "https://krchoff.com",
  },
  openGraph: {
    title: "Nikita Kratcholov — AI Founder & Marketer",
    description:
      "AI automation consultant building intelligent solutions with Next.js, voice AI receptionists, and productivity tools for startups and businesses.",
    url: "https://krchoff.com",
    siteName: "krchoff.com",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikita Kratcholov — AI Founder & Marketer",
    description:
      "AI automation consultant building intelligent solutions with Next.js, voice AI receptionists, and productivity tools for startups and businesses.",
  },
  metadataBase: new URL("https://krchoff.com"),
  verification: {
    google: "ieNT64OpFIdNXWqJbr_tj7FWEAyHarB6G2WmYAdM590",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nikita Kratcholov",
    jobTitle: "AI Founder & Marketer",
    url: "https://krchoff.com",
    image: "https://krchoff.com/hero-nikita.png",
    description: "Building AI products that solve real problems.",
    sameAs: [
      "https://www.instagram.com/kracholoff.ai",
      "https://www.linkedin.com/in/nikita-kratcholov-a59651342/",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nikita Kratcholov Portfolio",
    url: "https://krchoff.com",
    description:
      "AI automation consultant and founder specializing in voice AI, productivity tools, and intelligent business solutions.",
    author: {
      "@type": "Person",
      name: "Nikita Kratcholov",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://krchoff.com/blog?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${playfair.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
      <GoogleAnalytics gaId="G-NMWTC811CY" />
    </html>
  );
}
