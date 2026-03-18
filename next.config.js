/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Base path for GitHub Pages - update this if deploying to a repo subdirectory
  // basePath: '/repository-name',
  // For custom domain, leave basePath commented out
};

module.exports = nextConfig;
