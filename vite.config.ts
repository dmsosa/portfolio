import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http',
        changeOrigin: true,
      },
    }
  },
  test: {
    exclude: ['portfolio-backend/*', 'node_modules'],
    setupFiles: ['./setup.ts'],
    environment: 'jsdom',
    globals: true,
  },
})
