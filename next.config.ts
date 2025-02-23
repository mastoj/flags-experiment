import withVercelToolbar from "@vercel/toolbar/plugins/next";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    useCache: true,
    //    dynamicIO: true,
    ppr: true,
  },
};

export default withVercelToolbar()(nextConfig);
