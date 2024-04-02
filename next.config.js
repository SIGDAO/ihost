const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  reactStrictMode: false,
  swcMinify: false,
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
});
