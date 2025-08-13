// components/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-gray-400 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid gap-12 md:grid-cols-4">

          {/* Logo + Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Betazu Logo"
                width={40}
                height={40}
                className="rounded-xl"
              />
              <span className="text-white font-semibold text-lg">Betazu</span>
            </Link>
            <p className="mt-4 max-w-xs text-center md:text-left text-sm text-gray-500">
Betazu blends AI and web innovation to build future-ready solutions for bold founders who think big and move fast.            </p>
          </div>

          {/* Footer Nav Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/our-works" className="hover:text-white">Our Works</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#ai-tools" className="hover:text-white">AI Tools</Link></li>
              <li><Link href="/#websites" className="hover:text-white">Websites</Link></li>
              <li><Link href="/#automation" className="hover:text-white">Automation</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blogs" className="hover:text-white">Blog</Link></li>
              <li><Link href="/resources/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link href="/resources/terms" className="hover:text-white">Terms</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-12 flex justify-center gap-6 text-xl">
          <Link href="https://twitter.com" target="_blank" className="hover:text-white">
            <FaTwitter />
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="hover:text-white">
            <FaLinkedin />
          </Link>
          <Link href="https://github.com" target="_blank" className="hover:text-white">
            <FaGithub />
          </Link>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Betazu Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
