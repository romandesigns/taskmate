import path from "path";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import dns from "node:dns";

dns.setDefaultResultOrder("verbatim");

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables based on the mode (development or production)
  const env = loadEnv(mode, process.cwd());

  // Merge loaded environment variables into process.env
  process.env = { ...process.env, ...env };

  return {
    plugins: [react()],
    server: {
      port: 8080,
      proxy: {
        "/api": {
          target: process.env.VITE_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, "/api"),
        },
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"), // Setting up alias for the src directory
      },
    },
  };
});
