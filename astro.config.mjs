// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  image: {
    formats: ['webp', 'avif'],
    quality: 80
  },
  build: {
    inlineStylesheets: 'auto'
  }
});