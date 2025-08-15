/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export configuration for GitHub Pages deployment
  output: "export",

  // Disable image optimization for static export compatibility
  images: {
    unoptimized: true,
  },

  // Note: Turbopack is enabled automatically in Next.js 15 with --turbo flag

  // Base path configuration for GitHub Pages (uncomment when deploying to GitHub Pages)
  // basePath: '/resume',

  // Asset prefix for GitHub Pages (uncomment when deploying to GitHub Pages)
  // assetPrefix: '/resume/',

  // Trailing slash for static export
  trailingSlash: true,

  // Disable server-side features for static export
  distDir: "out",
}

module.exports = nextConfig
