import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Portafolio/', // Asegura que coincida con el nombre de tu repositorio
  server: {
    port: process.env.PORT || 3000,
    host: '0.0.0.0',
  },
  build: {
    outDir: 'dist',
  }
})
