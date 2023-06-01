import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Front-end-BIP/",
  plugins: [react()],
  server: {
    port: 3000,
  },
});
