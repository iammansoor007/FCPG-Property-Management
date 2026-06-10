/** @type {import('next').NextConfig} */
const nextConfig = {
  // Compress all HTTP responses with Gzip
  compress: true,

  // Aggressive image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000, // 1 year
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  },

  // Reduce JS bundle size
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Enable experimental optimizations
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
