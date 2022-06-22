/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['http://rickandmortyapi.com'],
    loader: 'custom',
    path: "/"
  }
}

module.exports = nextConfig
