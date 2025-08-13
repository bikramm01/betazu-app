'use client';

import { motion } from 'framer-motion';

export default function ServiceSection({ id, title, description }: { id: string, title: string, description: string }) {
  return (
    <motion.section
      id={id}
      className="py-20 px-6 max-w-5xl mx-auto border-b border-gray-800"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
      <p className="text-gray-300 text-lg leading-relaxed">{description}</p>
    </motion.section>
  );
}
