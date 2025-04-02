import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
    include: /src\/.*\.[tj]sx?$/, // Ensure JSX and TSX files are included
  },
  optimizeDeps: {
    force: true
  }
}));
