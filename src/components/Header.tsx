"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all ${
          scrolled ? "bg-black/70 backdrop-blur-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between overflow-x-hidden">
          {/* LOGO */}
          <Link
            href="/"
            className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text 
            bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 
            animate-[gradient_5s_linear_infinite] whitespace-nowrap"
          >
            Betazu
          </Link>

          {/* NAV LINKS (Desktop) */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </Link>

            {/* Dropdown */}
            <div className="relative group">
              <button className="text-gray-300 hover:text-white transition-colors">
                What We Do
              </button>
              <div
                className="absolute top-8 left-0 w-52 max-w-[90vw] bg-black/80 backdrop-blur-lg 
                rounded-lg shadow-lg opacity-0 group-hover:opacity-100 
                invisible group-hover:visible transition-all"
              >
                <Link
                  href="/services"
                  className="block px-4 py-2 text-gray-300 hover:text-white"
                >
                  Services
                </Link>
                <Link
                  href="/products"
                  className="block px-4 py-2 text-gray-300 hover:text-white"
                >
                  Products
                </Link>
              </div>
            </div>

            <Link
              href="/about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Right Side (Search + Menu) */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowSearch(true)}
              className="text-gray-300 hover:text-white"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={() => setMenuOpen(true)}
              className="text-gray-300 hover:text-white md:hidden"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-lg z-40 transform transition-transform duration-300 
        ${menuOpen ? "translate-x-0" : "translate-x-full"} md:hidden overflow-x-hidden`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-gray-300 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-6 mt-10">
          <Link
            href="/"
            className="text-gray-300 hover:text-white text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-gray-300 hover:text-white text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/products"
            className="text-gray-300 hover:text-white text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            href="/about"
            className="text-gray-300 hover:text-white text-lg"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-300 hover:text-white text-lg"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* SEARCH OVERLAY */}
      {showSearch && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-lg z-50 flex items-center justify-center p-4 overflow-x-hidden">
          <div className="w-full max-w-lg">
            <input
              type="text"
              placeholder="Search..."
              autoFocus
              className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white placeholder-gray-400 focus:outline-none"
            />
            <button
              onClick={() => setShowSearch(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
