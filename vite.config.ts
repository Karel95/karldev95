import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Para asegurarse de que las rutas relativas funcionen
  build: {
    outDir: 'dist', // Ruta donde se genera el build
  },
})
