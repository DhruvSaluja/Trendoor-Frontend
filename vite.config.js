import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // 👈 required for GitHub Pages
  plugins: [tailwindcss()],
  // server:{port :5174}
})
