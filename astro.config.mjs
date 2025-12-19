// astro.config.mjs (NEUER ANSATZ)
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'; // Import für Vite Plugin

// https://astro.build/config
export default defineConfig({
  // KEINE Tailwind-Integration hier im 'integrations' Array!
  integrations: [], 

  // Konfiguration über Vite
  vite: { 
    plugins: [tailwindcss()] 
  }
});