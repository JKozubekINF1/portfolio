import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Upewnij się, że to jest ustawione
  build: {
    outDir: 'docs', // DODAJ LUB ZMIEŃ TĘ LINIĘ
  },
})