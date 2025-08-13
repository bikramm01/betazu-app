"use client";

import {
  Lightbulb,
  Rocket,
  Globe,
  Users,
  Award,
  ShieldCheck,
} from "lucide-react";

export default function AboutUs() {
  const features = [
    {
      title: "Our Mission",
      desc: "To create human-centric technology solutions that inspire action, spark creativity, and deliver measurable impact across industries.",
      icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
    },
    {
      title: "Our Vision",
      desc: "To be a leading innovator in delivering technology that bridges the gap between creativity and functionality.",
      icon: <Rocket className="w-8 h-8 text-red-400" />,
    },
    {
      title: "Global Reach",
      desc: "Serving clients and audiences worldwide with impactful, scalable solutions.",
      icon: <Globe className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "Client Focus",
      desc: "We prioritize understanding our clients’ needs and delivering beyond expectations.",
      icon: <Users className="w-8 h-8 text-green-400" />,
    },
    {
      title: "Excellence",
      desc: "Our commitment to quality ensures that every project exceeds industry standards.",
      icon: <Award className="w-8 h-8 text-purple-400" />,
    },
    {
      title: "Trust",
      desc: "We uphold integrity, transparency, and security in all our services.",
      icon: <ShieldCheck className="w-8 h-8 text-pink-400" />,
    },
  ];

  return (
    <section className="relative bg-black text-white py-16">
      {/* Background overlay for texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-90"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12">
          We combine creativity, innovation, and technology to craft solutions
          that empower businesses and inspire individuals worldwide.
        </p>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-gray-700 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
