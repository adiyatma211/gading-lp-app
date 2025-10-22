import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export as a static site for shared hosting
  output: "export",
  // Run at site root ("/")
  basePath: undefined,
  assetPrefix: undefined,
  images: {
    // Required for static export when using next/image
    unoptimized: true,
  },
  // Optional: enable if your host prefers directory-style URLs
  // trailingSlash: true,
};

export default nextConfig;
