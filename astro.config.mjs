import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify/functions";

import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  integrations: [svelte(), mdx()]
});