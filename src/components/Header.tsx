"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full max-w-[100vw] overflow-hidden fixed top-0 left-0 right-0 bg-white dark:bg-black z-50">
  <div className="mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
    {/* Logo */}
    <div className="flex-shrink-0">Logo</div>

    {/* Desktop Nav */}
    <nav className="hidden md:flex space-x-6">Links</nav>

    {/* Mobile Menu Button */}
    <button
      className="md:hidden p-2 focus:outline-none"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      ☰
    </button>
  </div>

  {/* Drawer (mobile menu) */}
  {menuOpen && (
    <div className="fixed inset-0 z-40 bg-black bg-opacity-50">
      <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg p-6">
        <button
          className="mb-4 p-2"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>
        <nav className="flex flex-col space-y-4">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </div>
  )}
</header>

  );
}
