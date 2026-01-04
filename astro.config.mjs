// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// For GitHub Pages: if deploying to root, use '/'
// If deploying to a subfolder (e.g., /frontkon-prototype/), set BASE_PATH to that folder name
// You can also set it via environment variable: BASE_PATH=/nazev-slozky/
const BASE_PATH =
  process.env.BASE_PATH ??
  (process.env.NODE_ENV === 'development' ? '/' : '/');

// #region agent log
fetch('http://127.0.0.1:7242/ingest/9c55aa30-6c7e-43a2-85cd-23c1bf7aa929',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'astro.config.mjs:11',message:'BASE_PATH configured',data:{basePath:BASE_PATH,envBasePath:process.env.BASE_PATH,nodeEnv:process.env.NODE_ENV},timestamp:Date.now(),sessionId:'debug-session',runId:'deploy-check',hypothesisId:'A'})}).catch(()=>{});
// #endregion

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
