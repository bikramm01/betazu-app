"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function FreeAuditPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate with email / CRM backend
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/40 to-black animate-gradient" />
      <svg
        className="absolute -top-20 left-0 w-[150%] text-indigo-900/40"
        viewBox="0 0 1440 320"
        fill="currentColor"
      >
        <path d="M0,256L80,229.3C160,203,320,149,480,149.3C640,149,800,203,960,192C1120,181,1280,107,1360,69.3L1440,32V320H0Z" />
      </svg>

      {/* Page Content */}
      <div className="relative z-10 flex flex-col items-center px-6 py-25">
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-6 text-center"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #60a5fa, #a78bfa, #fb923c, #60a5fa)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Claim Your Free Website & AI Audit
        </motion.h1>

        <p className="text-gray-300 text-lg max-w-2xl text-center mb-10">
          Fill out the quick form below. We will analyze your website, show AI automation
          opportunities, and send you a custom strategy — all within 24 hours.
        </p>

        {/* Form or Thank You */}
        {!submitted ? (
          <motion.form
            onSubmit={handleSubmit}
            className="w-full max-w-lg bg-white/5 p-8 rounded-xl border border-white/10 backdrop-blur-md shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4">
              <label className="block mb-2 text-gray-300">Name</label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g. Rohan Lal"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-300">Email</label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-gray-300">Website URL</label>
              <input
                type="url"
                required
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="https://yourwebsite.com"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-gray-300">Main Goal</label>
              <select
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                defaultValue=""
              >
                <option value="" disabled>
                  Select your goal
                </option>
                <option value="sales">Increase sales</option>
                <option value="traffic">Get more traffic</option>
                <option value="branding">Improve branding</option>
                <option value="automation">Automate tasks</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-br from-blue-500 via-indigo-500 to-orange-400 font-semibold shadow-lg hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-transform"
            >
              Submit & Get My Audit
            </button>
          </motion.form>
        ) : (
          <motion.div
            className="bg-green-500/10 border border-green-500/20 p-8 rounded-xl text-center max-w-lg"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold text-green-400 mb-4">
              🎉 Thank You!
            </h2>
            <p className="text-gray-300">
              We haveve received your request. Our team will send your free audit within 24 hours.
              In the meantime, check out{" "}
              <a href="/our-works" className="text-blue-400 underline">
                our works
              </a>{" "}
              to see what we havve built.
            </p>
          </motion.div>
        )}
      </div>

      {/* CSS for gradient animation */}
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
      `}</style>
    </div>
  );
}
