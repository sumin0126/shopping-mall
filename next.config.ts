import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'shopping-mall-images.s3.ap-northeast-2.amazonaws.com',
        pathname: '/products/**',
      },
    ],
  },
};

export default nextConfig;
