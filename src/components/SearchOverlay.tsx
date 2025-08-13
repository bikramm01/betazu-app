'use client';

import { useEffect } from 'react';

export default function SearchOverlay({ show, onClose }: { show: boolean, onClose: () => void }) {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center">
      <div className="relative w-full max-w-2xl px-6">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 text-white text-3xl p-4 hover:text-red-500 transition"
        >
          ✕
        </button>
        <input
          type="text"
          placeholder="Search services..."
          className="w-full py-4 px-6 rounded-lg bg-white/20 text-white placeholder-gray-300 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}
