"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function OurWorksPage() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const projects = [
    {
      title: "SK Manpower Solutions",
      desc: "A professional website for a leading manpower consultancy, designed for speed, clarity, and mobile-first responsiveness.",
      img: "/images/sk-manpower.jpg", // replace with actual screenshot
      link: "https://skmanpower.com",
      status: "Completed",
    },
    {
      title: "Upcoming Project",
      desc: "We’re currently building this project. Stay tuned for the launch!",
      img: "/images/placeholder-work.jpg", // placeholder image
      status: "In Progress",
    },
    {
      title: "Upcoming Project",
      desc: "Another exciting project under development.",
      img: "/images/placeholder-work.jpg",
      status: "In Progress",
    },
  ];

  return (
    <div className="bg-black text-white relative overflow-hidden">
      {/* Hero */}
      <section className="relative py-20 text-center px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Our Best Works</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-300">
          We’ve successfully delivered impactful solutions and are continuously
          building more for our clients worldwide.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="relative max-w-6xl mx-auto px-6 pb-24 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <div
            key={idx}
            data-aos="fade-up"
            className="group rounded-xl overflow-hidden backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/30 transition-all"
          >
            <div className="relative overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <span
                className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full ${
                  project.status === "Completed"
                    ? "bg-green-500/90 text-white"
                    : "bg-yellow-500/90 text-black"
                }`}
              >
                {project.status}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300">{project.desc}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-4 py-2 text-sm font-semibold bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors"
                >
                  View Project
                </a>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-500 via-indigo-500 to-orange-400 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Your Project Could Be Next
        </h2>
        <a
          href="/contact"
          className="px-10 py-4 bg-white text-gray-900 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-transform hover:scale-105"
        >
          Contact Betazu
        </a>
      </section>
    </div>
  );
}
