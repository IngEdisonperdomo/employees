import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // Importar el módulo path

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "src/",
        replacement: `${path.resolve(__dirname, "src")}/`,
      },
      {
        find: "@shared",
        replacement: `${path.resolve(__dirname, "src/shared")}/`,
      },
    ],
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".scss"],
  },
  server: {
    port: 3000,
  },
});
