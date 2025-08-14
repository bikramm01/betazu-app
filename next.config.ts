import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["i.pravatar.cc"], // ✅ Add allowed image domain
  },
  env: {
    RESEND_API_KEY: process.env.RESEND_API_KEY, // ✅ Expose the key to server-side code
  },
};

export default nextConfig;
