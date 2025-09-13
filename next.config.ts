import type { NextConfig } from "next";

const nextConfig: NextConfig = {
<<<<<<< HEAD
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        port: '',
        pathname: '/s/files/**',
      },
      {
        protocol: 'https',
        hostname: '**.myshopify.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
=======
  /* config options here */
>>>>>>> 930945056a68ddd4da0346fdc74fff18f6f5c66e
};

export default nextConfig;
