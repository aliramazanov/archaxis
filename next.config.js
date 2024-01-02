/** @type {import('next').NextConfig} */
const nextConfig = {};
const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer(nextConfig);
