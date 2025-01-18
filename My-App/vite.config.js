import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 3000, // Usa el puerto proporcionado por Render o el puerto 3000 por defecto
    host: '0.0.0.0', // Asegúrate de que Vite escuche en todas las interfaces
  },
})
