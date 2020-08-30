const path = require("path")

// Plug-ins
const withPlugins = require("next-compose-plugins")
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})
const withImages = require("next-images")

// Combine an array of plug-ins with a Next.js configuration object
module.exports = withPlugins([[withImages], [withBundleAnalyzer]], {
  // Custom webpack configuration goes here 🤓
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: "empty",
      }
    }

    // Necessary for resolving our styles, etc
    config.resolve.modules.push(path.resolve("./"))

    // Return our custom webpack configuration
    return config
  },
})
