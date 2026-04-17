import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Relative base keeps assets working on both custom domains and /repo GitHub Pages URLs.
export default defineConfig({
  base: './',
  plugins: [react()],
})
