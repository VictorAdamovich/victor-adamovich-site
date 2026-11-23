import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

// Doto (SIL OFL) — dot-matrix display face, self-hosted
const doto = localFont({
  src: "./fonts/Doto-Bold.woff2",
  weight: "700",
  variable: "--font-doto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Victor Adamovich — Frontend developer",
  description:
    "Frontend developer with 4.5 years in React and Next.js. DeFi swaps, wallet connections, checkouts and subscription flows.",
};

export const viewport: Viewport = {
  themeColor: "#EDEDEA",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${doto.variable} ${GeistSans.variable} ${GeistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
