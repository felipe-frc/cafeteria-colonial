/// <reference types="vitest/config" />

import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientRoot = path.resolve(__dirname, "client");

export default defineConfig({
  root: clientRoot,

  plugins: [react(), tailwindcss()],

  resolve: {
    alias: {
      "@": path.resolve(clientRoot, "src"),
    },
  },

  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },

  server: {
    host: true,
    port: 3000,
    strictPort: false,
    fs: {
      allow: [__dirname, clientRoot],
    },
  },

  optimizeDeps: {
    noDiscovery: true,
    include: [],
  },

  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: path.resolve(clientRoot, "src", "test", "setup.ts"),
    css: true,
  },
});
