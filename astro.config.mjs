// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// For GitHub Pages: if deploying to root, use '/'
// If deploying to a subfolder (e.g., /frontkon-prototype/), set BASE_PATH to that folder name
// You can also set it via environment variable: BASE_PATH=/nazev-slozky/
const BASE_PATH =
  process.env.BASE_PATH ??
  (process.env.NODE_ENV === 'development' ? '/' : '/');

export default defineConfig({
  output: 'static',
  base: BASE_PATH,
  trailingSlash: 'always',
  integrations: [react()],
  srcDir: 'src',
  alias: {
    '@': './src',
  },
});
