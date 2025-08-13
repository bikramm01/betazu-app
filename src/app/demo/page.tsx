// app/live-demo/page.tsx
import Image from "next/image";

export default function LiveDemoPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
        Live Demo
      </h1>
      <p className="text-gray-400 max-w-xl text-center mb-10">
        Experience our project in action — this animated preview gives you a real feel of how it works.
      </p>

      {/* Animated image container */}
      <div className="relative w-full max-w-4xl aspect-video overflow-hidden rounded-2xl shadow-lg">
        <div className="absolute inset-0 animate-kenburns">
          <Image
            src="/demo-screenshot.jpg" // Replace with your image path
            alt="Live Demo Screenshot"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </main>
  );
}
