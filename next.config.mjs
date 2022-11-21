/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: './',
  swcMinify: true,
};

export default nextConfig;
