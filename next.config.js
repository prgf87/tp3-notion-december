/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    config.module.rules.push({
      test: /\.(png|jpe?g)$/,
      loaders: [
        '@docusaurus/lqip-loader',
        {
          loader: 'url-loader',
          options: {
            limit: 8000,
          },
        },
      ],
    });

    return config;
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'media.giphy.com',
      },
      {
        protocol: 'https',
        hostname: 'media3.giphy.com',
      },
      {
        protocol: 'https',
        hostname: 'media.tenor.com',
      },
      {
        protocol: 'https',
        hostname: 'www.sympathymessageideas.com',
      },
    ],
  },
};

module.exports = nextConfig;
