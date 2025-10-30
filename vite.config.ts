import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Enable minification and tree-shaking
    minify: 'terser',
    // Code splitting optimization
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-i18n': ['i18next', 'react-i18next'],
        },
      },
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Source maps for debugging (disable in production for smaller bundle)
    sourcemap: false,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'i18next', 'react-i18next'],
  },
  // Server configuration for development
  server: {
    port: 3000,
    open: true,
  },
  // Preview configuration
  preview: {
    port: 4173,
  },
})
