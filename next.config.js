const path = require('path');

module.exports = {
  experimental: { granularChunks: true },
  webpack: (config) => {
    config.resolve.modules.push(path.resolve('./'));
    return config;
  },
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  async exportPathMap() {
    const paths = {
      '/': { page: '/' },
      '/cs': { page: '/cs' },
      '/bio': { page: '/bio' },
      '/econ': { page: '/econ' },
      '/eess': { page: '/eess' },
      '/math': { page: '/math' },
      '/physics': { page: '/physics' },
      '/stat': { page: '/stat' },
      '/about': { page: '/about' },
      '/upload': { page: '/upload' },
      '/finance': { page: '/finance' },
      '/new': { page: '/new' },
    };
    return paths;
  },
};
