"use client";

import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-950 via-purple-950 to-neutral-900 px-6">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          <span className="relative font-semibold text-transparent bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 to-blue-500 bg-clip-text bg-[length:200%_200%] animate-gradient hover:opacity-90 transition">
            Betazu AI
          </span>
        </h1>

        <p className="text-gray-300 text-lg max-w-xl mx-auto mb-8">
          Our Website Generative AI is almost ready.  
          A new way to create websites instantly — launching soon!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-orange-400 px-6 py-3 text-white font-semibold shadow-lg hover:scale-105 transition-transform hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
          >
            Back to Home
          </Link>
          <Link
            href="/free-audit"
            className="rounded-xl border border-white/20 px-6 py-3 text-white font-semibold hover:bg-white/10 transition"
          >
            Notify Me
          </Link>
        </div>
      </div>
    </main>
  );
}
