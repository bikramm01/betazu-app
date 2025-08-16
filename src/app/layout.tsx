import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "Arial", "sans-serif"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["monospace", "Courier New", "monospace"],
});

export const metadata: Metadata = {
  title: "Betazu - AI + Web for Bold Founders",
  description: "Betazu builds modern AI-powered and web-based solutions for ambitious founders.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased flex flex-col min-h-screen overflow-x-hidden">
        {/* Header always full width */}
        <div className="w-full">
          <Header />
        </div>

        {/* Main content with same width rules */}
        <main className="flex-grow w-full">{children}</main>

        <div className="w-full">
          <Footer />
        </div>
      </body>
    </html>
  );
}
