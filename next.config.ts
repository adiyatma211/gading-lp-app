import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Export as a static site for shared hosting
  output: "export",
  // Serve under /gading when deployed to the host
  basePath: isProd ? "/gading" : undefined,
  assetPrefix: isProd ? "/gading/" : undefined,
  images: {
    // Required for static export when using next/image
    unoptimized: true,
  },
  // Optional: enable if your host prefers directory-style URLs
  // trailingSlash: true,
};

export default nextConfig;
