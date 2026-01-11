import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  // Allow deploying under a subpath by setting VITE_BASE
  // e.g. VITE_BASE="/my-site/" in Netlify env vars
  base: process.env.VITE_BASE?.trim() || "/",
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
});
