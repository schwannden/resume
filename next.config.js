/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export configuration for GitHub Pages deployment
  output: "export",

  // Disable image optimization for static export compatibility
  images: {
    unoptimized: true,
  },

  // Note: Turbopack is enabled by default in Next.js 16

  // Base path configuration (configure in resume.config.ts or use environment variables)
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",

  // Asset prefix (configure in resume.config.ts or use environment variables)
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX || "",

  // Trailing slash for static export
  trailingSlash: true,

  // Disable server-side features for static export
  distDir: "out",
}

module.exports = nextConfig
