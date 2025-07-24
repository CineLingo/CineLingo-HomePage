/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/CineLingo-HomePage' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/CineLingo-HomePage' : '',
}

module.exports = nextConfig 