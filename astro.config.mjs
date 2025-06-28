// astro.config.mjs
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)), //  ← maps "@/…" to /src/…
      },
    },
  },
});