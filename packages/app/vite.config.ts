import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  esbuild: {
    jsxInject: `import React from 'react'`
  },
  // base: '/es/',
  // publicDir: './dist',
  resolve: {
    alias: {
      '@learn-vite/core': resolve(__dirname, '../core/src')
    }
  }
})
