/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp"],
    minimumCacheTTL: 31536000,
    deviceSizes: [360, 390, 640, 750, 828, 1080, 1200, 1440],
    imageSizes: [32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
