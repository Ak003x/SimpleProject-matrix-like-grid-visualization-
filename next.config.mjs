/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

export default {
  output: 'export',
  basePath: isProd ? '/SimpleProject-matrix-like-grid-visualization-' : '',
  // assetPrefix: isProd ? '/SimpleProject-matrix-like-grid-visualization-' : '',
};

