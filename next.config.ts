import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  devIndicators: false,

  output: "export",

  basePath: "/my-app",
  assetPrefix: "/my-app/",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
