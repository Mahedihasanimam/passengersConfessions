import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5111, // Change to an available port
    host: "0.0.0.0", // Allow access from any IP
  },
  preview: {
    port: 5111, // Change to an available port
    host: "0.0.0.0", // Allow access from any IP
  },
});
