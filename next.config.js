/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/cinelingo-landing' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/cinelingo-landing' : '',
}

module.exports = nextConfig 