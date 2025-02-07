import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5111, // Change to an available port
    host: "0.0.0.0", // Allow access from any IP
  },
});
