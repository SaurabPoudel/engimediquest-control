import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";
import checker from "vite-plugin-checker";

function resolveAliases(aliases: string[]) {
  return aliases.map((alias) => {
    return {
      find: alias,
      replacement: path.resolve(__dirname, `./src/${alias}`),
    };
  });
}

export default defineConfig({
  plugins: [react(), checker({ typescript: true })],
  resolve: {
    alias: resolveAliases([
      "locale",
      "components",
      "pages",
      "services",
      "types",
      "utils",
      "global-states",
      "assets",
      "config",
    ]),
  },
  server: {
    port: 3000,
  },
});
