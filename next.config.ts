import type { NextConfig } from "next";
import withSerwistInit from "@serwist/next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {},
};

/** DO NOT TOUCH */
const withSerwist = withSerwistInit({
  swSrc: "src/sw.ts",
  swDest: "public/sw.js",
  disable: process.env.NODE_ENV !== "production",
});

export default withSerwist(nextConfig);