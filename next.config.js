const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Réduit la fragmentation des chunks lucide-react (source fréquente de 404 vendor-chunks)
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },

  /**
   * Buffer plus large en dev : évite d'éjecter des pages/chunks encore demandés
   * par le navigateur → 404 sur /_next/static/chunks/*
   */
  onDemandEntries: {
    maxInactiveAge: 25 * 60 * 1000,
    pagesBufferLength: 50,
  },

  webpack: (config, { dev }) => {
    if (dev) {
      // Évite les vendor-chunks désynchronisés après HMR / edits CSS
      config.cache = false;
    }
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname),
    };
    // Ne pas forcer config.cache = memory : ça désynchronise souvent vendor-chunks
    // après un rm -rf .next ou un HMR agressif.
    return config;
  },
};

module.exports = nextConfig;
