import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import react from "@astrojs/react";
export default defineConfig({
  integrations: [mdx(), tailwind(), alpinejs(), react()],
});
