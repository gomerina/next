import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  reactCompiler: true,

  devIndicators: false,


  // Для сервера убрать output и images
  //output: "export",
  //images: {
  //  unoptimized: true,
  //},
  basePath,


};

export default nextConfig;
