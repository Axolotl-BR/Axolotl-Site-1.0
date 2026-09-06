import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  // base relativa: funciona em /Axolotl-BR/, /Axolotlhub/ ou qualquer subpasta do Pages
  base: './',
  server: {
    port: 5173,
    open: true,
  },
})