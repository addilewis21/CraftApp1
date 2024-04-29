import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: process.env.NODE_ENV === 'production'
    ? '/CraftApp1/'
    : '/',
  build: {
    rollupOptions: {
      input: './index.html',
      external: ['/CraftApp1/assets/index-CUqjo9gl.js']
    }
  }
})