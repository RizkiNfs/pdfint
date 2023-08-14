import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    Vue(),
  ],
  test: {
    setupFiles: ['./vitest.setup.js'],
    environment: 'jsdom',
    globals: true,
    coverage: {
      provider: 'v8',
      include: [
        '**',
        '*/app.vue',
      ]
    }
  },
})