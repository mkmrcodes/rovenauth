/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com',
      'scontent-ort2-1.xx.fbcdn.net',
      'scontent-iad3-1.xx.fbcdn.net',
    ],
  },
};

module.exports = nextConfig;
