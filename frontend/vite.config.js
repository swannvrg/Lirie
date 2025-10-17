import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/swannvrg.github.io/', // remplacez <repo> par le nom exact du dépôt
  build: { outDir: 'docs' }
})