"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled ? "bg-neutral-950/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[60px] sm:min-h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl font-bold text-white">Betazu</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-white hover:text-blue-400">Home</Link>
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 text-white hover:text-blue-400"
              >
                What We Do <ChevronDown size={16} />
              </button>
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-2 bg-neutral-900 text-white rounded-lg shadow-lg w-48"
                  >
                    <Link href="/ai-tools" className="block px-4 py-2 hover:bg-neutral-800">AI Tools</Link>
                    <Link href="/websites" className="block px-4 py-2 hover:bg-neutral-800">Websites</Link>
                    <Link href="/automation" className="block px-4 py-2 hover:bg-neutral-800">Automation</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link href="/about" className="text-white hover:text-blue-400">About</Link>
            <Link href="/contact" className="text-white hover:text-blue-400">Contact</Link>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Search Button */}
            <button
              aria-label="Open search"
              onClick={() => setShowSearch(true)}
              className="text-white hover:text-blue-400"
            >
              <Search size={20} />
            </button>

            {/* CTA */}
            <Link
              href="/audit"
              className="hidden sm:inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-md hover:from-blue-600 hover:to-purple-600"
            >
              Claim Free Audit
            </Link>

            {/* Mobile Hamburger */}
            <button
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white focus:outline-none"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />
            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              id="mobile-menu"
              className="fixed top-0 right-0 h-full w-[80%] max-w-xs bg-neutral-900 text-white p-6 z-50 shadow-2xl"
            >
              <nav className="flex flex-col gap-4">
                <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link href="/ai-tools" onClick={() => setMenuOpen(false)}>AI Tools</Link>
                <Link href="/websites" onClick={() => setMenuOpen(false)}>Websites</Link>
                <Link href="/automation" onClick={() => setMenuOpen(false)}>Automation</Link>
                <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
                <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                <Link
                  href="/audit"
                  className="mt-4 bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-lg text-center font-semibold shadow hover:from-blue-600 hover:to-purple-600"
                  onClick={() => setMenuOpen(false)}
                >
                  Claim Free Audit
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Search Overlay */}
      <AnimatePresence>
        {showSearch && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-neutral-950/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <div className="w-full max-w-lg">
              <input
                type="text"
                aria-label="Search"
                placeholder="Search Betazu..."
                className="w-full px-4 py-3 rounded-lg bg-neutral-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={() => setShowSearch(false)}
                className="mt-4 w-full bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-red-600 hover:to-pink-600"
              >
                Close Search
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
