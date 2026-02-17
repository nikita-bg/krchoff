import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Nikita Kratcholov — AI Founder & Marketer",
  description:
    "Personal portfolio of Nikita Kratcholov. Building AI products that solve real problems.",
  openGraph: {
    title: "Nikita Kratcholov — AI Founder & Marketer",
    description:
      "Personal portfolio of Nikita Kratcholov. Building AI products that solve real problems.",
    url: "https://krchoff.com",
    siteName: "krchoff.com",
    type: "website",
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
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
      <GoogleAnalytics gaId="G-NMWTC811CY" />
    </html>
  );
}
