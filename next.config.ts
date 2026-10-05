import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  devIndicators: false,

  output: "export",

  basePath: "/next",
  assetPrefix: "/next/",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
