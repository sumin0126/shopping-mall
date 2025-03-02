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
  webpack(config) {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true, // 소스맵 활성화 (디버깅 용도)
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;
