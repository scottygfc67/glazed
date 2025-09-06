/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Required for static exports
  },
  webpack: (config) => {
    // Add path aliases to webpack
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': __dirname,
      '@/components': `${__dirname}/app/components`,
    };
    
    return config;
  },
  // Enable experimental features that might be needed
  experimental: {
    appDir: true,
  },
  // Disable static exports for development
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
};

module.exports = nextConfig;
