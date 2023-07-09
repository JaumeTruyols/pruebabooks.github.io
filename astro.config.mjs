import { defineConfig } from 'astro/config';
import node from "@astrojs/node";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  output: "dist", // Asegúrate de tener esta opción configurada
  adapter: node({
    mode: "standalone"
  }),
  integrations: [tailwind()],
site: 'https://jaumetruyols.github.io',
  base: '/pruebabooks.github.io'
});
