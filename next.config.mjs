/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: './',
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  swcMinify: true,
};

export default nextConfig;
