/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Only add basePath when building for production (GitHub Pages)
  basePath: process.env.NODE_ENV === 'production' ? '/robertocaroca.github.io' : '',
}

module.exports = nextConfig 