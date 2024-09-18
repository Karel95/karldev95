import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './https://karel95.github.io/karldev95', // Para asegurarse de que las rutas relativas funcionen
})
