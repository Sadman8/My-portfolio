import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './MAIN.html'
      }
    }
  },
  server: {
    open: '/MAIN.html'
  }
})