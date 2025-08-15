'use client';

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import Head from "next/head";
import Image from 'next/image';

export default function Home() {
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.default.init({   // ✅ Use AOS.default
        duration: 800,
        once: true,
      });
    });
  }, []);

  const services = [
    {
      id: "websites",
      title: "Custom Web Development",
      desc: "Lightning-fast, scalable, and beautiful websites that work flawlessly on any device.",
      points: ["Responsive design", "SEO-optimized", "E-commerce ready", "Custom platforms"],
      image: "/services/web-dev.png",
    },
    {
      id: "ai-tools",
      title: "AI Solutions & Chatbots",
      desc: "From GPT-powered assistants to AI-driven personalization, we bring intelligence to your workflows.",
      points: ["Conversational AI", "Voice assistants", "Custom AI tools"],
      image: "/services/ai.png",
    },
    {
      id: "automation",
      title: "API Integration & Automation",
      desc: "Connect your tools and automate workflows so your business runs while you sleep.",
      points: ["Payment gateways", "AI chatbots", "CRM sync", "Inventory automation"],
      image: "/services/api.png",
    },
    {
      id: "maintenance",
      title: "Maintenance & Support",
      desc: "Keep your digital products secure, fast, and ready for growth — 24/7.",
      points: ["Regular updates", "Security checks", "API monitoring", "Priority fixes"],
      image: "/services/maintenance.png",
    },
  ];
  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.yoursite.com/" />
        <meta name="robots" content="index, follow" />

        <title>Betazu – AI + Web for Bold Founders</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Bikram Mondal" />

        <meta
          name="description"
          content="Betazu builds custom AI tools, Next.js websites and automation systems for solo founders, creators and entrepreneurs."
        />
        <meta
          name="keywords"
          content="AI automation, Next.js websites, founder tools, solo business, web development"
        />
        <meta property="og:title" content="Betazu – AI + Web for Bold Founders" />
        <meta
          property="og:description"
          content="Custom AI workflows, websites and CRM portals for creators and solo founders."
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

<main className="flex flex-col min-h-screen bg-neutral-950 text-gray-100 font-sans overflow-x-hidden">

      {/* ================= HERO ================= */}
<section className="relative z-10 flex-grow flex items-center justify-center py-16 px-4 sm:py-24 sm:px-6 md:py-32 md:px-12 bg-gradient-to-b from-neutral-950 to-neutral-900 overflow-hidden">

  {/* === Glowing background rings === */}
  <div className="absolute -z-10 inset-0 pointer-events-none">
    <div className="absolute top-1/3 left-1/4 w-[300px] sm:w-[500px] md:w-[600px] h-[300px] sm:h-[500px] md:h-[600px] bg-blue-500 opacity-10 rounded-full blur-[60px] sm:blur-[100px] md:blur-[120px] animate-pulse-slow" />
    <div className="absolute bottom-10 right-10 w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] bg-orange-400 opacity-10 rounded-full blur-[50px] sm:blur-[80px] md:blur-[100px] animate-pulse-slow" />
  </div>

  <div className="max-w-7xl grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center relative">

    {/* === Faces Illustration === */}
    <div className="order-1 lg:order-2 flex justify-center items-center relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,rgba(168,85,247,0.12)_35%,rgba(249,115,22,0.1)_70%,transparent_100%)] blur-xl sm:blur-2xl scale-110 sm:scale-125" />
      <div className="relative flex gap-3 sm:gap-6 md:gap-8 lg:gap-10" role="img" aria-label="Animated faces illustration">

        {/* === Glasses Face === */}
        <svg
          viewBox="0 0 200 200"
          className="w-20 sm:w-32 md:w-36 lg:w-40 h-20 sm:h-32 md:h-36 lg:h-40"
          aria-hidden="true"
        >
          <style>{`
            @keyframes glance {0%,100% { transform: translateX(0); }15% { transform: translateX(-6px); }35% { transform: translateX(6px); }55% { transform: translateX(-3px); }75% { transform: translateX(3px); }}
            @keyframes blinkOnce {0% { transform: scaleY(1); }50% { transform: scaleY(0.1); }100% { transform: scaleY(1); }}
            @keyframes blinkRepeat {0%,96% { transform: scaleY(1); }97%,98% { transform: scaleY(0.1); }99%,100% { transform: scaleY(1); }}
            @keyframes dropGlasses {to { opacity: 1; transform: translateY(0); }}
            @keyframes noseLift {to { transform: translateY(-4px); }}
            @keyframes mouthShift {30% { transform: translateY(6px); }100% { transform: translateY(0); }}
          `}</style>
          <path 
            d="M60,70 Q100,10 140,70 T130,150 Q100,190 70,150 T60,70 Z" 
            stroke="#ffffff33" 
            strokeWidth="2" 
            fill="#ffffff" 
          />
          <circle cx="72" cy="80" r="6" fill="#F97316" style={{
            animation: `glance 1.6s ease-in-out forwards, blinkOnce 0.6s ease 2.6s forwards`,
            transformOrigin: "center"
          }} />
          <circle cx="128" cy="80" r="6" fill="#3B82F6" style={{
            animation: `glance 1.6s ease-in-out forwards, blinkOnce 0.6s ease 2.6s forwards, blinkRepeat 5s ease-in-out 3s infinite`,
            transformOrigin: "center"
          }} />
          <line x1="100" y1="80" x2="100" y2="120" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round" style={{ animation: 'noseLift 0.6s ease 2.4s forwards' }} />
          <circle cx="100" cy="138" r="6" fill="#FACC15" style={{ animation: 'mouthShift 1.2s ease-in-out forwards' }} />
          <g style={{
            opacity: 0,
            transform: 'translateY(-40px)',
            animation: 'dropGlasses 0.6s ease-out 1.8s forwards'
          }}>
            <circle cx="72" cy="80" r="15" stroke="#F97316" strokeWidth="4" fill="none" />
            <circle cx="128" cy="80" r="15" stroke="#F97316" strokeWidth="4" fill="none" />
            <line x1="87" y1="80" x2="113" y2="80" stroke="#F97316" strokeWidth="4" />
          </g>
        </svg>

        {/* === Headphone Face === */}
        <svg
          viewBox="0 0 200 200"
          className="w-20 sm:w-32 md:w-36 lg:w-40 h-20 sm:h-32 md:h-36 lg:h-40"
          aria-hidden="true"
        >
          <style>{`
            @keyframes headLean {0%{transform:rotate(0);}30%{transform:rotate(-3deg);}60%{transform:rotate(1.5deg);}100%{transform:rotate(0);}}
            @keyframes mouthSpeak {0%,100%{transform:scaleY(1);}50%{transform:scaleY(1.1);}}
            @keyframes micWave {0%,100%{transform:rotate(0);}50%{transform:rotate(3deg);}}
          `}</style>
          <g style={{ animation: 'headLean 1s ease-in-out forwards', transformOrigin: 'center' }}>
            <path 
              d="M60,70 Q100,10 140,70 T130,150 Q100,190 70,150 T60,70 Z" 
              stroke="#ffffff33" 
              strokeWidth="2" 
              fill="#ffffff" 
            />
            <circle cx="72" cy="80" r="6" fill="#F97316" />
            <circle cx="128" cy="80" r="6" fill="#3B82F6" />
            <line x1="100" y1="80" x2="100" y2="120" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round" />
            <circle cx="100" cy="135" r="6" fill="#FACC15" style={{ animation: 'mouthSpeak 0.5s ease-in-out 1.8s infinite', transformOrigin: 'center' }} />
            <path d="M60 40 Q100 0 140 40" stroke="#3B82F6" strokeWidth="4" fill="none" />
            <ellipse cx="150" cy="80" rx="12" ry="20" fill="#3B82F6" stroke="#3B82F6" strokeWidth="4" />
            <g style={{ animation: 'micWave 1.8s ease-in-out 1.4s infinite', transformOrigin: '140px 120px' }}>
              <path d="M150 110 Q140 125 125 130" stroke="#3B82F6" strokeWidth="3" fill="none" />
              <circle cx="125" cy="130" r="6" fill="#3B82F6" stroke="#3B82F6" strokeWidth="2" />
            </g>
          </g>
        </svg>

        {/* === Sensor Face === */}
        <svg
          viewBox="0 0 200 200"
          className="w-20 sm:w-32 md:w-36 lg:w-40 h-20 sm:h-32 md:h-36 lg:h-40"
          aria-hidden="true"
        >
          <style>{`
            @keyframes glanceAround {0%,100%{transform:translateX(0);}33%{transform:translateX(-4px);}66%{transform:translateX(4px);}}
          `}</style>
          <path 
            d="M60,70 Q100,10 140,70 T130,150 Q100,190 70,150 T60,70 Z" 
            stroke="#ffffff33" 
            strokeWidth="2" 
            fill="#ffffff" 
          />
          <circle cx="72" cy="80" r="6" fill="#F97316" style={{ animation: 'glanceAround 3s ease-in-out infinite', transformOrigin: 'center' }} />
          <circle cx="128" cy="80" r="6" fill="#3B82F6" style={{ animation: 'glanceAround 3s ease-in-out infinite', transformOrigin: 'center' }} />
          <line x1="100" y1="80" x2="100" y2="120" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round" />
          <circle cx="100" cy="135" r="6" fill="#FACC15" />
        </svg>

      </div>
    </div>

    {/* === Text Column === */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="order-2 lg:order-1 text-center lg:text-left"
    >
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 sm:mb-6 md:mb-6 text-white leading-tight tracking-tight">
        <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-orange-400 text-transparent bg-clip-text">
          Betazu
        </span>{" "}
        – AI + Web for Bold Founders
      </h1>

      <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-10 text-gray-400 max-w-xl mx-auto lg:mx-0">
        Build smarter. Launch faster. <br className="hidden sm:block" />
        Custom AI tools and Next.js websites crafted by an Actor‑turned‑AI Entrepreneur for founders & creators.
      </p>

      <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
        <Link
          href="/startbetazufree"
          className="rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-orange-400 px-5 py-2.5 sm:px-6 sm:py-3 text-white font-semibold shadow-xl hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
        >
          Start Betazu Free
        </Link>
        <Link
          href="/demo"
          className="rounded-xl border border-white/10 px-5 py-2.5 sm:px-6 sm:py-3 text-gray-300 hover:bg-white/10 hover:backdrop-blur-md transition-colors"
        >
          Live Demo
        </Link>
      </div>
    </motion.div>
  </div>
</section>



        {/* ================= FEATURES ================= */}
<section className="py-20 px-6 md:px-12 bg-gradient-to-tr from-neutral-950 via-neutral-900 to-neutral-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-extrabold text-center text-white mb-16">
              What You Get
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "AI-Powered Websites",
                  desc: "Next.js + Tailwind websites with chatbots, analytics, and SEO built-in.",
                  svg: (
                    <svg viewBox="0 0 200 200" className="w-20 h-20 mx-auto">
                      <defs>
                        <linearGradient id="gradAI3" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#3B82F6" />
                          <stop offset="100%" stopColor="#F97316" />
                        </linearGradient>
                      </defs>
                      <circle cx="100" cy="100" r="90" fill="url(#gradAI3)" />
                      <path
                        d="M75 70 C60 85, 60 115, 75 130
                          C70 150, 95 155, 100 140
                          C105 155, 130 150, 125 130
                          C140 115, 140 85, 125 70
                          C130 55, 105 50, 100 65
                          C95 50, 70 55, 75 70Z"
                        fill="none"
                        stroke="white"
                        strokeWidth="4"
                      />
                      <circle cx="85" cy="80" r="5" fill="white" />
                      <circle cx="115" cy="80" r="5" fill="white" />
                      <circle cx="100" cy="100" r="6" fill="white" />
                      <circle cx="85" cy="120" r="5" fill="white" />
                      <circle cx="115" cy="120" r="5" fill="white" />
                      <line x1="85" y1="80" x2="100" y2="100" stroke="white" strokeWidth="3" />
                      <line x1="115" y1="80" x2="100" y2="100" stroke="white" strokeWidth="3" />
                      <line x1="85" y1="120" x2="100" y2="100" stroke="white" strokeWidth="3" />
                      <line x1="115" y1="120" x2="100" y2="100" stroke="white" strokeWidth="3" />
                    </svg>
                  )
                },
                {
                  title: "AI Chatbots & Assistants",
                  desc: "Custom GPT-powered bots for creators, coaches, and businesses.",
                  svg: (
                    <svg viewBox="0 0 200 200" className="w-20 h-20 mx-auto">
                      <rect x="30" y="50" width="140" height="100" rx="10" fill="#3B82F6" />
                      <rect x="45" y="65" width="110" height="15" fill="white" opacity="0.8" />
                      <rect x="45" y="90" width="80" height="10" fill="white" opacity="0.5" />
                    </svg>
                  )
                },
                {
                  title: "Workflow Automation",
                  desc: "Save time by automating content posting, lead follow-ups, and CRM tasks.",
                  svg: (
                    <svg viewBox="0 0 200 200" className="w-20 h-20 mx-auto">
                      <circle cx="100" cy="70" r="25" fill="#F97316" />
                      <rect x="50" y="110" width="100" height="60" rx="15" fill="#3B82F6" />
                    </svg>
                  )
                }
              ].map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl hover:scale-105 transition-transform"
                >
                  {f.svg}
                  <h3 className="text-xl font-bold mt-6 mb-3 text-white">{f.title}</h3>
                  <p className="text-gray-400">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


 <div className="bg-black text-white relative overflow-hidden">
      {/* Hero */}
      <section className="relative py-24 text-center">
        <h2 className="text-3xl font-extrabold text-center text-white mb-6">What We Do</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-300">
          We design, develop, and deliver digital solutions that make your business future-ready.
        </p>
      </section>

      {/* Timeline */}
      <section className="relative max-w-6xl mx-auto px-6 pb-24">

        {services.map((service, idx) => (
          <div
            id={service.id}
            key={service.id}
            className={`relative flex flex-col md:flex-row items-center gap-8 ${
              idx < services.length - 1 ? "mb-32 md:mb-40" : ""
            } ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            data-aos="fade-up"
          >
            {/* Number */}
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -top-6 z-20">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-red-500 to-blue-500 text-white font-bold shadow-lg">
                {idx + 1}
              </div>
            </div>

           {/* Image */}
<div className="flex-1 overflow-hidden rounded-2xl shadow-lg group">
  <Image
    src={service.image} // string path or imported static file
    alt={service.title}
    width={500}          // adjust width
    height={320}         // adjust height
    className="object-cover w-full h-[320px] transform transition-transform duration-700 group-hover:scale-105"
  />
</div>

            {/* Text Box */}
            <div className="flex-1 backdrop-blur-lg bg-white/10 rounded-xl shadow-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
              <p className="text-gray-300 mb-4">{service.desc}</p>
              <ul className="space-y-3 text-gray-300">
                {service.points.map((point, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-red-500 mr-3">✔</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
</div>


{/* ================= TIMELINE ================= */}
{/* ============ MODERN VERTICAL TIMELINE ============ */}
<section className="relative py-24 px-6 md:px-12 bg-gradient-to-b from-neutral-950 via-blue-900 to-neutral-950">
  {/* Glowing BG blob */}
  <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-blue-500 opacity-20 blur-[120px] rounded-full animate-pulse"></div>

  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl font-extrabold text-white mb-20">Launch in 3 Steps</h2>

    <div className="relative flex flex-col gap-20">
      {[
        { step: "1", title: "Strategy Call", desc: "We align on your vision, target audience, services, and tools." },
        { step: "2", title: "Build + Automate", desc: "We build your Next.js site and AI workflows." },
        { step: "3", title: "Launch", desc: "You launch with a full system to get your first clients." }
      ].map((s, i, arr) => (
        <div key={i} className="relative flex md:items-center items-start gap-6 md:gap-10">

          {/* === Left Side (Even: left, Odd: right) === */}
          {i % 2 === 0 ? (
            <>
              {/* Step Number */}
              <div className="shrink-0 relative">
                <div className="absolute inset-0 animate-ping bg-blue-500 opacity-10 blur-xl rounded-full" />
                <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white font-bold text-lg flex items-center justify-center shadow-lg">
                  {s.step}
                </div>
              </div>

              {/* Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl w-full md:w-2/3 backdrop-blur-sm text-left"
              >
                <h3 className="text-white text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-gray-400">{s.desc}</p>
              </motion.div>
            </>
          ) : (
            <>
              {/* Empty space for layout */}
              <div className="w-14" />
              {/* Card on right */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl w-full md:w-2/3 ml-auto backdrop-blur-sm text-left"
              >
                <h3 className="text-white text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-gray-400">{s.desc}</p>
              </motion.div>

              {/* Step Number */}
              <div className="shrink-0 relative ml-4">
                <div className="absolute inset-0 animate-ping bg-blue-500 opacity-10 blur-xl rounded-full" />
                <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white font-bold text-lg flex items-center justify-center shadow-lg">
                  {s.step}
                </div>
              </div>
            </>
          )}

          {/* Dotted Connector Below */}
          {i < arr.length - 1 && (
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-px h-12 border-l-2 border-dotted border-blue-400 opacity-50" />
          )}
        </div>
      ))}
    </div>
  </div>
</section>
<section className="py-24 px-6 md:px-12 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-transparent">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    className="max-w-4xl mx-auto text-center text-white"
  >
    {/* Client Logo - Rounded */}
    <div className="flex justify-center mb-6">
      <Image
        src="/clients/skmanpowersolutions.png" // Make sure this path is correct
        alt="Client Logo"
        width={80}
        height={80}
        className="object-contain rounded-full border border-white/20 shadow-md"
      />
    </div>

    <blockquote className="text-xl md:text-3xl font-semibold">
      “The new website transformed our online presence.
      Thanks to this web design service, SK Manpower Solutions
      now stands out as one of the best staffing service providers
      in Gurgaon.”
    </blockquote>
    <p className="mt-6 text-lg font-medium">— Santosh Tiwari (Operations Head)</p>
  </motion.div>
</section>

{/* ================= FAQ ================= */}
<section className="py-24 px-6 md:px-12 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-800">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-extrabold text-center text-white mb-16">
      Frequently Asked Questions
    </h2>

    <div className="space-y-6">
      {[
        {
          q: "Who is Betazu for?",
          a: "Betazu is built for founders, creators and small teams who want fast websites and AI-powered workflows without managing tech themselves."
        },
        {
          q: "Do I need to know coding?",
          a: "No. We build everything for you. You get a ready-to-launch system with clear instructions."
        },
        {
          q: "How long will my project take?",
          a: "Most Launch Packages take 3–4 weeks. Growth Packages typically take 5–6 weeks depending on complexity."
        },
        {
          q: "What tech stack do you use?",
          a: "We use Next.js, Tailwind CSS, OpenAI/GPT APIs, and secure cloud hosting. Everything is modern and scalable."
        },
        {
          q: "What happens after launch?",
          a: "We provide you with documentation, onboarding, and 14 days of support to ensure everything runs smoothly."
        }
      ].map((item, i) => (
        <details
          key={i}
          className="group border border-white/10 rounded-xl p-6 bg-white/5 hover:bg-white/10 transition-colors"
        >
          <summary className="cursor-pointer list-none flex justify-between items-center text-lg font-semibold text-white">
            {item.q}
            <span className="ml-4 transition-transform group-open:rotate-45 text-blue-400">+</span>
          </summary>
          <p className="mt-4 text-gray-400">{item.a}</p>
        </details>
      ))}
    </div>
  </div>
</section>


        {/* ================= FINAL CTA ================= */}
<section className="py-24 px-6 md:px-12 bg-gradient-to-br from-blue-600/30 via-purple-600/30 to-neutral-950 text-white text-center backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to launch smarter?</h2>
            <p className="text-lg mb-8">Book now – I only take 2 projects a month.</p>
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
              Start Your Project
            </Link>
          </motion.div>
        </section>
      </main>
      
    </>
  );
}
