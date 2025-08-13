"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Rocket, Cpu, LineChart, ShieldCheck } from "lucide-react";

export default function FreeStartPage() {
  const benefits = [
    {
      icon: <Rocket size={40} className="icon-gradient" />,
      title: "Full Website Health Check",
      desc: "We review your site for speed, mobile optimization, SEO, and design polish."
    },
    {
      icon: <Cpu size={40} className="icon-gradient" />,
      title: "AI Automation Insights",
      desc: "Identify how AI tools and workflows can save time and boost your business."
    },
    {
      icon: <LineChart size={40} className="icon-gradient" />,
      title: "Custom Strategy Plan",
      desc: "You’ll get actionable steps to improve, expand, and scale your online presence."
    },
    {
      icon: <ShieldCheck size={40} className="icon-gradient" />,
      title: "Zero Cost, No Strings",
      desc: "Completely free, with no obligation — we just want to show you what’s possible."
    }
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/40 to-black animate-gradient" />

      {/* SVG Decorative Background */}
      <svg
        className="absolute -top-20 left-0 w-[150%] text-indigo-900/40"
        viewBox="0 0 1440 320"
        fill="currentColor"
      >
        <path d="M0,256L80,229.3C160,203,320,149,480,149.3C640,149,800,203,960,192C1120,181,1280,107,1360,69.3L1440,32V320H0Z" />
      </svg>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 py-20 min-h-screen">
        {/* Hero Section */}
        <motion.section
          className="text-center max-w-3xl mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-6"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #60a5fa, #a78bfa, #fb923c, #60a5fa)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              backgroundSize: "300% 300%"
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%"]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            Start Betazu Free
          </motion.h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Get a{" "}
            <span className="text-indigo-400 font-semibold">
              Free Website & AI Audit
            </span>{" "}
            plus a{" "}
            <span className="text-orange-400 font-semibold">
              30-Minute Strategy Call
            </span>{" "}
            to unlock growth opportunities for your business.
          </p>
        </motion.section>

        {/* Benefits Grid */}
        <motion.section
          className="grid gap-8 md:grid-cols-2 max-w-4xl w-full mb-12"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all shadow-lg"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(255,255,255,0.15)"
              }}
            >
              <motion.div
                className="mb-4"
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Link
            href="/free-audit"
            className="rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-orange-400 px-8 py-4 text-white font-semibold shadow-xl hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] transition-transform"
          >
            Claim My Free Audit
          </Link>
          <Link
            href="/our-works"
            className="rounded-xl border border-white/10 px-8 py-4 text-gray-300 hover:bg-white/10 hover:backdrop-blur-md transition-colors"
          >
            View Our Works
          </Link>
        </motion.div>
      </div>

      {/* CSS for Gradient Animation & Icon Gradient */}
      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          background-size: 400% 400%;
          animation: gradientShift 12s ease infinite;
        }
        .icon-gradient {
          background: linear-gradient(135deg, #60a5fa, #a78bfa, #fb923c);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </div>
  );
}
