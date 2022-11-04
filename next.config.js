/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    domains : [
      'imagetracker.org'
    ]
  }
}

module.exports = nextConfig
