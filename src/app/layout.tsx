import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nikita Kratcholov — AI Founder & Marketer",
  description:
    "Building AI products that solve real problems. Founder of SimplifyOpsCo and XPLife.",
  keywords: [
    "Nikita Kratcholov",
    "AI Founder",
    "AI Products",
    "SimplifyOpsCo",
    "XPLife",
    "Bulgaria",
  ],
  openGraph: {
    title: "Nikita Kratcholov — AI Founder & Marketer",
    description:
      "Building AI products that solve real problems. Founder of SimplifyOpsCo and XPLife.",
    url: "https://krchoff.com",
    siteName: "Nikita Kratcholov",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikita Kratcholov — AI Founder & Marketer",
    description:
      "Building AI products that solve real problems. Founder of SimplifyOpsCo and XPLife.",
  },
  metadataBase: new URL("https://krchoff.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${cormorant.variable} ${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
