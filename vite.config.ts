import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  plugins: [react()],
  publicDir: "./static",
  base: "./",
  server: {
    port: 5173,
    host: "localhost",
    hmr: {
      host: "localhost",
      port: 5173,
    },
    proxy: {
      "/github-api": {
        target: "https://api.github.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/github-api/, ""),
      },
      "/contributions-api": {
        target: "https://github-contributions.vercel.app",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/contributions-api/, ""),
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
