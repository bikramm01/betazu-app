import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["i.pravatar.cc"], // ✅ Add allowed image domain
  },
};

export default nextConfig;
