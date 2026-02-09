import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import compression from "vite-plugin-compression";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  build: {
    target: "ES2020",
    minify: "esbuild",
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-motion": ["framer-motion"],
          "vendor-ui": ["@radix-ui/react-dialog", "@radix-ui/react-dropdown-menu"],
          "vendor-query": ["@tanstack/react-query"],
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
  plugins: [
    react(),
    mode === "production" &&
      compression({
        algorithm: "brotliCompress",
        ext: ".br",
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
