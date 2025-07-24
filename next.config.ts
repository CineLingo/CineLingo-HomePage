import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel 배포를 위한 설정
  basePath: process.env.NODE_ENV === 'production' ? '/cinelingo-landing' : '',
  images: {
    unoptimized: false, // Vercel에서는 최적화된 이미지 사용 가능
  },
  // 환경 변수 설정
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
};

export default nextConfig;
