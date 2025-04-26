/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Set the base path to match your repository name
  basePath: process.env.NODE_ENV === "production" ? "/country_list_doc" : "",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
