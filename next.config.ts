import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel 배포를 위한 설정
  images: {
    unoptimized: false, // Vercel에서는 최적화된 이미지 사용 가능
  },
  // GitHub Pages용 설정 제거
  // output: 'export',
  // trailingSlash: true,
  // basePath: process.env.NODE_ENV === 'production' ? '/cinelingo-landing' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/cinelingo-landing/' : '',
};

export default nextConfig;
