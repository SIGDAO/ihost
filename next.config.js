
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  // for production to disable console.log
  // compiler: {
  //   removeConsole: true,
  // },
  reactStrictMode: false,
  serverExternalPackages: ["@codesandbox/sdk"],
  // swcMinify: false,
  images: {
    unoptimized: true,
  },
  env: {
    CHAIN_ID: process.env.CHAIN_ID,
    ENCRYPT_KEY: process.env.ENCRYPT_KEY,
    POSTHOG_KEY: process.env.POSTHOG_KEY,
    POSTHOG_PERSONAL_KEY: process.env.POSTHOG_PERSONAL_KEY,
    CREATE_WEBSITE_TOKEN: process.env.CREATE_WEBSITE_TOKEN,
    SOLANA_RPC_URL: process.env.SOLANA_RPC_URL,
    INFURA_ID: process.env.INFURA_ID,
  },
  // webpack: (config, options, { isServer }) => {
    webpack: (config, options) => {
    if (options.nextRuntime === "edge") {
      if (!config.resolve.conditionNames) {
        config.resolve.conditionNames = ["require", "node"];
      }
      if (!config.resolve.conditionNames.includes("worker")) {
        config.resolve.conditionNames.push("worker");
      }
    }
    // if (!isServer) {
    //   config.resolve.fallback = {
    //     stream: require.resolve('stream-browserify'),
    //     crypto: require.resolve('crypto-browserify'),
    //     http: require.resolve('stream-http'),
    //     https: require.resolve('https-browserify'),
    //     os: require.resolve('os-browserify'),
    //     path: require.resolve('path-browserify')
    //   };
    // }
    return config;
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "*",
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "*",
          },
        ],
      },
    ];
  },
});



