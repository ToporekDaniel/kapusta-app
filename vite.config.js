import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    svgr()
  ],
  server: {
    port: 8000, // Tu możesz ustawić dowolny port, który chcesz użyć
  },
  // base: "/kapusta-app/",
});
