import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React Strict Mode for better development experience
  reactStrictMode: true,

  // Optimize images
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.kleartreatment.com",
      },
    ],
  },

  // Enable experimental features for better performance
  experimental: {
    optimizeCss: true,
  },

  // Security headers are in vercel.json

  // Trailing slashes for consistent URLs
  trailingSlash: false,

  // Compress responses
  compress: true,
};

export default nextConfig;
