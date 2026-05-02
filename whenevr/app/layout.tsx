import type { Metadata } from "next";
import { Fragment_Mono, Inter, Source_Serif_4 } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

import { framerAssets } from "@/lib/framer-assets";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  style: ["italic", "normal"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const fragmentMono = Fragment_Mono({
  subsets: ["latin"],
  variable: "--font-fragment",
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Whenevr® — Design subscription (demo)",
  description:
    "Mock rebuild of the Whenevr Framer subscription template layout for portfolio / learning purposes.",
  icons: {
    icon: [{ url: framerAssets.favicon, type: "image/png" }],
    apple: framerAssets.favicon,
  },
  openGraph: {
    images: [{ url: framerAssets.openGraph, width: 1200, height: 630, alt: "Whenevr" }],
  },
  twitter: {
    card: "summary_large_image",
    images: [framerAssets.openGraph],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sourceSerif.variable} ${fragmentMono.variable} antialiased`}
    >
      <body className={`${inter.className} min-h-dvh bg-canvas font-sans`}>
        {children}
      </body>
    </html>
  );
}
