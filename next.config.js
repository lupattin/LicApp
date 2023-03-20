/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nutriloca.com',
        port: '',
        pathname: '/wp-content/uploads/2021/05/aboutme-10.png',
      },
    ],
  },
}

module.exports = nextConfig
