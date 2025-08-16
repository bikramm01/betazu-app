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
  subsets: ["latin"],
  display: "swap",
  fallback: ["monospace", "Courier New", "monospace"],
});

export const metadata: Metadata = {
  title: "Betazu - AI + Web for Bold Founders",
  description:
    "Betazu builds modern AI-powered and web-based solutions for ambitious founders.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased flex flex-col min-h-screen bg-black text-white">
        {/* Fixed Header */}
        <Header />

        {/* Main content (with top padding so it doesn’t go under header) */}
        <main className="flex-grow pt-16 px-4 sm:px-6 lg:px-8">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
