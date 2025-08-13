// components/FAQ.tsx
'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We provide a complete range of event management services — including weddings, gaye holud/haldi, corporate events, photography, live music, and more. All services are tailored to suit both Indian traditions and modern international styles."
  },
  {
    question: "How can I book your services?",
    answer:
      "You can book us through our website’s contact form, by calling, or via WhatsApp. For international clients, we also offer Zoom/Google Meet consultations to discuss requirements before confirming."
  },
  {
    question: "Do you offer customized packages?",
    answer:
      "Yes. Whether you’re planning a traditional Indian wedding, a destination celebration, or a modern corporate event, we can create a package that matches your preferences, cultural needs, and budget."
  },
  {
    question: "Which locations do you cover?",
    answer:
      "We are based in Gurgaon, India, and work across all major Indian cities. For international clients, we can travel globally for destination events and also offer remote planning and coordination."
  },
  {
    question: "Do you require advance booking?",
    answer:
      "Yes, we recommend booking at least 2–3 weeks in advance for local events, and 2–3 months in advance for international or large-scale events, especially during peak wedding and festive seasons."
  },
  {
    question: "Do you work with NRI or overseas clients?",
    answer:
      "Absolutely. We specialize in working with Non-Resident Indians (NRIs) and overseas clients, managing everything from vendor coordination to cultural details, so your event feels like home no matter where it’s held."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-lg overflow-hidden"
            >
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold">{faq.question}</span>
                <span className="text-xl">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
