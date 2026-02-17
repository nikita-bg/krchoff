import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
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

export const metadata: Metadata = {
  title: "Nikita Kratcholov — AI Founder & Marketer",
  description:
    "Personal portfolio of Nikita Kratcholov. Building AI products that solve real problems.",
  authors: [{ name: "Nikita Kratcholov", url: "https://krchoff.com" }],
  creator: "Nikita Kratcholov",
  publisher: "Nikita Kratcholov",
  alternates: {
    canonical: "https://krchoff.com",
  },
  openGraph: {
    title: "Nikita Kratcholov — AI Founder & Marketer",
    description:
      "Personal portfolio of Nikita Kratcholov. Building AI products that solve real problems.",
    url: "https://krchoff.com",
    siteName: "krchoff.com",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikita Kratcholov — AI Founder & Marketer",
    description:
      "Personal portfolio of Nikita Kratcholov. Building AI products that solve real problems.",
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

  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
      <GoogleAnalytics gaId="G-NMWTC811CY" />
    </html>
  );
}
