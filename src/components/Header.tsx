"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";

const placeholders = [
  "Search on Betazu AI...",
  "Type anything...",
  "Explore instantly...",
  "Your next idea starts here...",
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [placeholderText, setPlaceholderText] = useState("");
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement | null>(null);

  // Close services dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Scroll background effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Typing effect for placeholder
  useEffect(() => {
    setPlaceholderText(placeholders[0]);
    let placeholderIndex = 0;
    let charIndex = 0;
    let typing = true;

    const typeInterval = setInterval(() => {
      const currentText = placeholders[placeholderIndex];
      if (typing) {
        if (charIndex < currentText.length) {
          setPlaceholderText(currentText.slice(0, charIndex + 1));
          charIndex++;
        } else {
          typing = false;
        }
      } else {
        if (charIndex > 0) {
          setPlaceholderText(currentText.slice(0, charIndex - 1));
          charIndex--;
        } else {
          typing = true;
          placeholderIndex = (placeholderIndex + 1) % placeholders.length;
        }
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, []);

  const handleSearch = () => {
    if (searchText.trim()) {
      console.log("Searching for:", searchText);
    }
  };

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full max-w-[100vw] z-50 transition-colors duration-300 ${
          menuOpen || scrolled
            ? "bg-blue/60 backdrop-blur-md shadow-md"
            : "bg-transparent backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Betazu Logo" width={30} height={30} />
              <span className="text-lg sm:text-xl font-bold text-white">Betazu</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
              <Link
                href="/betazuai"
                className="relative font-semibold text-transparent bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 to-blue-500 bg-clip-text bg-[length:200%_200%] animate-gradient hover:opacity-90 transition"
              >
                Betazu AI
              </Link>
              <Link href="/" className="hover:text-blue-400">Home</Link>

              {/* Services Dropdown */}
              <div className="relative" ref={servicesRef}>
                <div
                  className="flex items-center gap-1 hover:text-blue-400 cursor-pointer"
                  onMouseEnter={() => setServicesOpen(true)}
                  onClick={() => setServicesOpen(prev => !prev)}
                  aria-expanded={servicesOpen}
                >
                  <span className="font-medium">What We Do</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                {servicesOpen && (
                  <div className="absolute top-8 left-0 bg-[#1a1a1a] text-white rounded-xl shadow-lg py-3 px-4 w-52 animate-fade-in z-50">
                    {[
                      { href: "/#ai-tools", label: "AI Tools" },
                      { href: "/#websites", label: "Websites" },
                      { href: "/#automation", label: "Automation" },
                    ].map(({ href, label }) => (
                      <Link
                        key={href}
                        href={href}
                        onClick={() => setServicesOpen(false)}
                        className="block py-2 px-3 rounded-lg hover:bg-blue-500/10 hover:text-orange-400"
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/our-works" className="hover:text-blue-400">Our Works</Link>
              <Link href="/contact" className="hover:text-blue-400">Contact Us</Link>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search */}
              <button
                onClick={() => setShowSearch(true)}
                className="p-1.5 sm:p-2"
                aria-label="Open search"
              >
                <Search className="w-5 h-5 text-white hover:text-orange-400" />
              </button>

              {/* Claim Free Audit (desktop) */}
              <Link
                href="/free-audit"
                className="hidden md:inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm bg-gradient-to-br from-blue-500 via-indigo-500 to-orange-400 text-white font-semibold shadow-xl hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition"
              >
                Claim Free Audit
              </Link>

              {/* Hamburger */}
              <button
                onClick={() => setMenuOpen(prev => !prev)}
                className="md:hidden p-1.5 text-gray-200 focus:outline-none z-[110]"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  {menuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] transition-opacity"
        />
      )}

      {/* Mobile Drawer - now aligned with header */}
      <div
        className={`fixed top-0 right-0 h-screen w-[80%] max-w-xs bg-black text-white shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out z-[120] ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4 text-gray-300 hover:text-red-500 focus:outline-none"
          aria-label="Close menu"
        >
          ✕
        </button>

        {/* Nav */}
        <nav className="flex flex-col gap-5 text-lg font-medium px-6 pt-20 pb-6 overflow-y-auto">
          <Link
            href="/betazuai"
            onClick={() => setMenuOpen(false)}
            className="relative font-semibold text-transparent bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 to-blue-500 bg-clip-text animate-gradient"
          >
            Betazu AI
          </Link>
          <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Home</Link>
          {[
            { href: "/#ai-tools", label: "AI Tools" },
            { href: "/#websites", label: "Websites" },
            { href: "/#automation", label: "Automation" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-400"
            >
              {label}
            </Link>
          ))}
          <Link href="/our-works" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Our Works</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Contact Us</Link>

          {/* Claim Free Audit - Mobile */}
          <Link
            href="/free-audit"
            onClick={() => setMenuOpen(false)}
            className="mt-6 px-4 py-2 rounded-full text-sm bg-gradient-to-br from-blue-500 via-indigo-500 to-orange-400 text-white font-semibold text-center shadow-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition"
          >
            Claim Free Audit
          </Link>
        </nav>
      </div>

      {/* Search Overlay */}
      {showSearch && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[999]">
          <div className="relative w-[90%] max-w-sm sm:max-w-2xl px-4 sm:px-6">
            <button
              onClick={() => setShowSearch(false)}
              className="absolute -top-8 right-2 text-gray-300 text-lg sm:text-xl hover:text-red-500"
              aria-label="Close search"
            >
              ✕
            </button>
            <div className="relative">
              <input
                autoFocus
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full text-base sm:text-2xl px-4 sm:px-6 py-2 sm:py-4 rounded-full bg-white text-black shadow-lg pr-12 sm:pr-14"
                placeholder={placeholderText}
              />
              <button
                onClick={handleSearch}
                className="absolute top-1/2 right-3 sm:right-4 -translate-y-1/2 text-gray-700 hover:text-blue-600"
                aria-label="Search"
              >
                <Search className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
