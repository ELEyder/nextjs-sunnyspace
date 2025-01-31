const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  assetPrefix: isProd ? '/nextjs-sunnyspace/' : '',
  images: {
    unoptimized: true,
  },
};