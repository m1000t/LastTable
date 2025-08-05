import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

const withTM = require("next-transpile-modules")(["react-map-gl"]);

module.exports = withTM({
  reactStrictMode: true,
});
