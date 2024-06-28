// vite.config.js
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";

const port = 5173;

export default defineConfig({
  plugins: [react(), eslint()],
  server: {
    open: false, // Disable the default open behavior
    port: port,
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/setupTests.js",
    exclude: ["**/node_modules/**", "**/dist/**"],
  },
  environmentOptions: {
    customExportConditions: ["node"],
  },
});
