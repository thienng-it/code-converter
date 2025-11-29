import { defineConfig } from 'vite';

export default defineConfig({
  base: '/code-converter/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          'monaco': ['monaco-editor']
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true
  },
  optimizeDeps: {
    include: ['monaco-editor']
  }
});
