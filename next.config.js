/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    domains : [
      'imagetracker.org'
    ],
    unoptimized : true
  }
}

module.exports = nextConfig