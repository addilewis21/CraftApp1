import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: './', // base public path when served in production
  build: {
    outDir: 'dist', // specify the output directory
    rollupOptions: {
      input: './index.html', // specify the entry point
    },
  },
  server: {
    host: 'localhost', // specify the server host
    port: 3000, // specify the server port
  },
})