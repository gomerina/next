import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  devIndicators: false,

  output: "export",

  basePath: process.env.NEXT_BASE_PATH ?? "",

  images: {
    unoptimized: false,
  },
};

export default nextConfig;
