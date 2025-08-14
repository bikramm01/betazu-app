"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [placeholderText, setPlaceholderText] = useState("");
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement | null>(null);

  const placeholders = [
    "Search on Betazu AI...",
    "Type anything...",
    "Explore instantly...",
    "Your next idea starts here...",
  ];

  // Handle click outside services dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Initialize placeholder
  useEffect(() => {
    setPlaceholderText(placeholders[0]);
  }, [placeholders]);

  // Typing animation
  useEffect(() => {
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
  }, [placeholders]);

  const handleSearch = () => {
    if (searchText.trim()) {
      console.log("Searching for:", searchText);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          menuOpen || scrolled
            ? "bg-blue/60 backdrop-blur-md shadow-md"
            : "bg-transparent backdrop-blur-lg"
        }`}
      >
        <div className="max-w-9xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Betazu Logo" width={36} height={36} />
            <span className="text-xl font-bold text-white">Betazu</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
            <Link
              href="/betazuai"
              className="relative font-semibold text-transparent bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 to-blue-500 bg-clip-text bg-[length:200%_200%] animate-gradient hover:opacity-90 transition"
            >
              Betazu AI
            </Link>
            <Link href="/" className="hover:text-blue-400">
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative" ref={servicesRef}>
              <div
                className="flex items-center gap-1 hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                onMouseEnter={() => setServicesOpen(true)}
                onClick={() => setServicesOpen((prev) => !prev)}
                aria-expanded={servicesOpen}
              >
                <span className="font-medium">What We Do</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {servicesOpen && (
                <div
                  className="absolute top-8 left-0 bg-[#1a1a1a] text-white rounded-xl shadow-lg shadow-blue-900/20 py-3 px-4 w-52 cursor-default animate-fade-in z-50"
                  onMouseEnter={() => setServicesOpen(true)}
                >
                  {[
                    { href: "/#ai-tools", label: "AI Tools" },
                    { href: "/#websites", label: "Websites" },
                    { href: "/#automation", label: "Automation" },
                  ].map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className="block py-2 px-3 rounded-lg hover:bg-blue-500/10 hover:text-orange-400 transition-colors duration-200 cursor-pointer"
                      onClick={() => setServicesOpen(false)}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/our-works" className="hover:text-blue-400">
              Our Works
            </Link>
            <Link href="/contact" className="hover:text-blue-400">
              Contact Us
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowSearch(true)}
              className="p-2"
              aria-label="Open search"
            >
              <Search className="w-5 h-5 text-white hover:text-orange-400" />
            </button>
            <Link
              href="/free-audit"
              className="px-4 py-1.5 rounded-full text-sm bg-gradient-to-br from-blue-500 via-indigo-500 to-orange-400 text-white font-semibold shadow-xl hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition duration-300 ease-in-out cursor-pointer"
            >
              Claim Free Audit
            </Link>

            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="md:hidden text-gray-200 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
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

        {/* Mobile Drawer */}
        {menuOpen && (
          <>
            <div
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            <div className="fixed top-0 right-0 z-50 h-screen w-72 bg-black text-white shadow-2xl p-6 flex flex-col overflow-y-auto animate-slide-in">
              <button
                onClick={() => setMenuOpen(false)}
                className="text-gray-400 hover:text-white text-lg mb-6"
                aria-label="Close menu"
              >
                ✕
              </button>
              <nav className="flex flex-col gap-5 text-lg font-medium">
                <Link
                  href="/betazuai"
                  onClick={() => setMenuOpen(false)}
                  className="relative font-semibold text-transparent bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 to-blue-500 bg-clip-text bg-[length:200%_200%] animate-gradient hover:opacity-90 transition"
                >
                  Betazu AI
                </Link>
                <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">
                  Home
                </Link>
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
                <Link
                  href="/our-works"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-blue-400"
                >
                  Our Works
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-blue-400"
                >
                  Contact Us
                </Link>
              </nav>
            </div>
          </>
        )}
      </header>

      {/* Search Overlay */}
      {showSearch && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[999] transition-all duration-300">
          <div className="relative w-full max-w-2xl px-6">
            <button
              onClick={() => setShowSearch(false)}
              className="absolute -top-10 right-2 text-gray-300 text-xl hover:text-red-500 transition"
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
                className="w-full text-2xl px-6 py-4 rounded-full bg-white text-black placeholder-gray-500 shadow-lg focus:outline-none pr-14"
                placeholder={placeholderText}
              />
              <button
                onClick={handleSearch}
                className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-700 hover:text-blue-600 transition"
                aria-label="Search"
              >
                <Search className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
