import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import alpinejs from "@astrojs/alpinejs";

export default defineConfig({
  integrations: [
    mdx(),
    tailwind(),
    alpinejs(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp", // Menggunakan loader Sharp untuk optimasi gambar
    }),
  ],
});
