/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // For GitHub Pages deployment
  basePath: process.env.NODE_ENV === 'production' ? '/because-we-are-tk' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/because-we-are-tk/' : '',
}

module.exports = nextConfig
