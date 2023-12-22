/** @type {import('next').NextConfig} */

const { withContentlayer } = require("next-contentlayer");
const withNextIntl = require('next-intl/plugin')();

const nextConfig = {
  compiler: {
    removeConsole: false,
  },
}

module.exports = withNextIntl(withContentlayer({...nextConfig}));