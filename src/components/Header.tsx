"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        menuOpen || scrolled
          ? "bg-blue/60 backdrop-blur-md shadow-md"
          : "bg-transparent backdrop-blur-md"
      }`}
    >
      {/* Container matches section widths */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Betazu Logo" width={30} height={30} />
          <span className="text-lg sm:text-xl font-bold text-white">Betazu</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-white">
          <Link href="/" className="hover:text-gray-300 transition">Home</Link>
          <Link href="/about" className="hover:text-gray-300 transition">About</Link>
          <Link href="/services" className="hover:text-gray-300 transition">Services</Link>
          <Link href="/contact" className="hover:text-gray-300 transition">Contact</Link>
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="hover:text-gray-300 transition"
          >
            <Search size={20} />
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-md text-white px-6 py-4 space-y-4">
          <Link href="/" className="block hover:text-gray-300 transition">Home</Link>
          <Link href="/about" className="block hover:text-gray-300 transition">About</Link>
          <Link href="/services" className="block hover:text-gray-300 transition">Services</Link>
          <Link href="/contact" className="block hover:text-gray-300 transition">Contact</Link>
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="block hover:text-gray-300 transition"
          >
            Search
          </button>
        </div>
      )}

      {/* Search Bar */}
      {showSearch && (
        <div className="absolute top-16 left-0 w-full bg-black/90 px-6 py-3">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:outline-none"
          />
        </div>
      )}
    </header>
  );
}
