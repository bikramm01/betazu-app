'use client';

import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Heading on top */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Let’s Build Something{" "}
            <span className="text-orange-500">Amazing</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Have a project in mind? Let's discuss how Betazu can help you turn
            ideas into impactful solutions.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form - First in mobile */}
          <div className="bg-[#111] p-8 rounded-2xl shadow-lg border border-white/10 order-1 lg:order-2">
            {submitted && (
              <div className="mb-6 text-green-400 text-sm sm:text-base">
                ✅ Thank you! We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about your project..."
                value={form.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white font-semibold py-3 rounded-lg shadow-lg shadow-orange-500/20 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info - Second in mobile */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="flex items-center gap-4">
              <div className="bg-orange-500/10 p-3 rounded-lg">
                <MapPin className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="font-medium">Gurgaon, India</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-orange-500/10 p-3 rounded-lg">
                <Mail className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <a
                  href="mailto:contact@betazu.com"
                  className="font-medium hover:text-orange-400 transition-colors"
                >
                  contact@betazu.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-orange-500/10 p-3 rounded-lg">
                <Phone className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="font-medium">+91 62828 93208</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
