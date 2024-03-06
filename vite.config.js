/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svg from 'vite-plugin-svgr';
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  plugins: [
    react(),
    svg(),
  ],
});
