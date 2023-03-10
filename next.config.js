/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  i18n,
  distDir: "build",
  images: {
    domains: ["images.unsplash.com", "cropx.com"],
  },
};

module.exports = nextConfig;
