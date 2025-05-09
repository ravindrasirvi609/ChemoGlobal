import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Remove the domains setting since we're no longer using external images
    unoptimized: true, // Use this for statically exported sites or with locally stored images
  },
};

export default nextConfig;
