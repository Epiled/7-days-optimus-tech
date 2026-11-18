import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"],
    coverage: {
      provider: "v8",

      reporter: ["text", "html"],

      include: ["src/**/*.{ts,tsx}"],

      exclude: [
        "src/**/*.test.{ts,tsx}",
        "src/**/*.spec.{ts,tsx}",
        "src/**/*.type.ts",
        "src/**/*.types.ts",
        "src/**/*.d.ts",
        "src/types/**",
        "src/interfaces/**",
        "src/main.tsx",
        "src/App.tsx",
      ],
    },
  },
});
