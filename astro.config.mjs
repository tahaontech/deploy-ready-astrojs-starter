import node from "@astrojs/node";
import { defineConfig } from "astro/config";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: node({
    mode: 'middleware'
  }),
  vite: {
    mode: 'production',
    // logLevel: '',
    cacheDir: './temps'
  }
});