/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export', // Enable static export
  basePath: isProd ? '/SimpleProject-matrix-like-grid-visualization-' : '', // Replace with your repo name
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;

