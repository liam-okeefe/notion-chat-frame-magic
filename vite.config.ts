
import { defineConfig } from 'vite'
import react from '@vitejs/react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // Add base path for GitHub Pages deployment
  base: './'
})
