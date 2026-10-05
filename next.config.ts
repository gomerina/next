import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  devIndicators: false,

  output: "export",

  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
