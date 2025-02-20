import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/porfolio-omc/', // Assure-toi que ce chemin est correct
  plugins: [react()],
})

