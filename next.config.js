/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias.canvas = false;

    return config;
  },
  images: {
    domains: [
      // 'www.notion.so',
      // 'notion.so',
      'images.unsplash.com',
      // 'pbs.twimg.com',
      // 'abs.twimg.com',
      // 's3.us-west-2.amazonaws.com',
      // 'transitivebullsh.it',
      'media.giphy.com',
      'media3.giphy.com',
      'media.tenor.com',
      'www.sympathymessageideas.com',
    ],
  },
};

module.exports = nextConfig;
