"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  // Rotate search placeholder text
  const placeholders = [
    "Search properties...",
    "Search by city...",
    "Search by price...",
  ];
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setSearchText(placeholders[index]);
      index = (index + 1) % placeholders.length;
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close services dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || menuOpen ? "bg-white/80 backdrop-blur-md shadow" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={140} height={40} priority />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <div className="relative" ref={servicesRef}>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="hover:text-blue-600"
            >
              Services
            </button>
            {servicesOpen && (
              <div className="absolute top-full mt-2 w-48 bg-white shadow-lg rounded-lg py-2">
                <Link href="/buy" className="block px-4 py-2 hover:bg-gray-100">Buy</Link>
                <Link href="/rent" className="block px-4 py-2 hover:bg-gray-100">Rent</Link>
                <Link href="/sell" className="block px-4 py-2 hover:bg-gray-100">Sell</Link>
              </div>
            )}
          </div>
          <Link href="/about" className="hover:text-blue-600">About</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        </nav>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => setShowSearch(true)}
            className="p-2 rounded-full hover:bg-gray-200"
          >
            <Search className="w-5 h-5" />
          </button>
          <Link
            href="/claim"
            className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:opacity-90"
          >
            Claim Free Audit
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden p-2 rounded hover:bg-gray-200"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/50" onClick={() => setMenuOpen(false)}>
          <div
            className="absolute top-0 right-0 w-72 h-full bg-white shadow-lg p-6 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <Image src="/logo.png" alt="Logo" width={120} height={30} />
              <button onClick={() => setMenuOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="flex flex-col space-y-4">
              <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="text-left"
              >
                Services
              </button>
              {servicesOpen && (
                <div className="ml-4 flex flex-col space-y-2">
                  <Link href="/buy" onClick={() => setMenuOpen(false)}>Buy</Link>
                  <Link href="/rent" onClick={() => setMenuOpen(false)}>Rent</Link>
                  <Link href="/sell" onClick={() => setMenuOpen(false)}>Sell</Link>
                </div>
              )}
              <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            </nav>
            <Link
              href="/claim"
              className="mt-auto px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:opacity-90 text-center"
              onClick={() => setMenuOpen(false)}
            >
              Claim Free Audit
            </Link>
          </div>
        </div>
      )}

      {/* Search Overlay */}
      {showSearch && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-lg p-6">
            <div className="flex items-center">
              <input
                type="text"
                placeholder={searchText}
                className="flex-1 p-3 border border-gray-300 rounded-l-lg focus:outline-none"
              />
              <button
                className="bg-blue-600 text-white px-4 py-3 rounded-r-lg"
                onClick={() => setShowSearch(false)}
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
            <button
              className="mt-4 text-gray-600 hover:text-gray-900"
              onClick={() => setShowSearch(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
