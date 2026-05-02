import type { Metadata } from "next";
import { Fragment_Mono, Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";

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
