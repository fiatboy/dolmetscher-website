// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://zehra-yacine.de',

  // du brauchst hier weiterhin keine Tailwind-Integration
  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});