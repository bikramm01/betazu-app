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
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);
  const loginRef = useRef(null);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);
// Inside your Header component
const [servicesOpen, setServicesOpen] = useState(false);
const servicesRef = useRef<HTMLDivElement | null>(null);

useEffect(() => {
  const handleClickOutside = (e: MouseEvent) => {
    if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
      setServicesOpen(false);
    }
  };
  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);


  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (loginRef.current && !(loginRef.current as any).contains(e.target)) {
        setShowLoginDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

const handleMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setMenuOpen(false);
    }, 3000); // 3 seconds
  };

  const handleMouseEnter = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
  };
  const placeholders = [
    "Search on Betazu AI...",
    "Type anything...",
    "Explore instantly...",
    "Your next idea starts here...",
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen || showSearch ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, showSearch]);

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
  }, []);

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
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Betazu Logo" width={36} height={36} />
            <span className="text-xl font-bold text-white">Betazu</span>
          </Link>

      <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
  <Link
    href="/betazuai"
    className="relative font-semibold text-transparent bg-gradient-to-r from-red-500 via-yellow-400 via-green-400 to-blue-500 bg-clip-text bg-[length:200%_200%] animate-gradient hover:opacity-90 transition"
  >
    Betazu AI
  </Link>

  {/* Services Dropdown */}
   <Link href="/" className="hover:text-blue-400">
    Home
  </Link>
<div
  className="relative"
  ref={servicesRef}
>
  {/* Trigger */}
  <div
    className="flex items-center gap-1 hover:text-blue-400 transition-colors duration-300 cursor-pointer"
    onMouseEnter={() => setServicesOpen(true)}
    onClick={() => setServicesOpen((prev) => !prev)}
  >
    <span className="font-medium">What We Do</span>
    <svg
      className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </div>

  {/* Dropdown */}
  {servicesOpen && (
    <div
      className="absolute top-8 left-0 
                 bg-[#1a1a1a] text-white rounded-xl shadow-lg shadow-blue-900/20 
                 py-3 px-4 w-52 cursor-default
                 animate-fade-in z-50"
      onMouseEnter={() => setServicesOpen(true)} // Keep open while hovering dropdown
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
          onClick={() => setServicesOpen(false)} // Close after click
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


          <div className="flex items-center gap-3">
            <button onClick={() => setShowSearch(true)} className="p-2">
              <Search className="w-5 h-5 text-white hover:text-orange-400" />
            </button>
<Link
  href="/free-audit"
  className="px-4 py-1.5 rounded-full text-sm bg-gradient-to-br from-blue-500 via-indigo-500 to-orange-400 text-white font-semibold shadow-xl hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition duration-300 ease-in-out cursor-pointer"
>
Claim Free Audit</Link>



            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="md:hidden text-gray-200 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

       {menuOpen && (
          <>
            <div
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />


            <div className="fixed top-0 right-0 z-50 h-100 w-70 bg-[#1a1a1a] shadow-2xl p-6 flex flex-col justify-between animate-slide-in transition-all duration-300">
              <div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-400 hover:text-white text-lg mb-6"
                >
                  ✕
                </button>

                <nav className="flex flex-col gap-5 text-lg font-small text-gray-300">
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
                  <Link href="/services" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">
                    What We Do
                  </Link>
                  <Link href="/our-works" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">
                    Our Works
                  </Link>
                  <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">
                    Contact Us
                  </Link>
                </nav>
              </div>

              <div className="mt-8">
                <Link
                  href="/betazuai"
                  onClick={() => setMenuOpen(false)}
                  className="block text-center w-full bg-gradient-to-br from-blue-500 via-indigo-500 to-orange-400 text-white font-semibold py-3 rounded-xl hover:opacity-90 transition"
                >
                  Login
                </Link>
              </div>
            </div>
          </>
        )}
      </header>

      {showSearch && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[999] transition-all duration-300">
          <div className="relative w-full max-w-2xl px-6">
         <button
        onClick={() => setShowSearch(false)}
        className="absolute -top-10 right-2 text-gray-300 text-xl hover:text-red-500 transition"
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
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}