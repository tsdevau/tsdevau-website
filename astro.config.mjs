import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import solidJs from "@astrojs/solid-js"
import tailwind from "@astrojs/tailwind"
import icons from "astro-icon"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
  site: "https://tsdev.au",
  server: {
    port: 4210,
  },
  vite: {
    plugins: [tsconfigPaths()],
  },
  integrations: [mdx(), sitemap(), solidJs(), tailwind({ applyBaseStyles: false }), icons()],
})
