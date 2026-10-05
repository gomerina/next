import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  devIndicators: false,
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
