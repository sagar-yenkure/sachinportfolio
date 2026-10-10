/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    serverActions: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dja2zi1g7/image/upload/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
