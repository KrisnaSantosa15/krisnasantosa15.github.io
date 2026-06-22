import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// `base: '/'` is correct for a GitHub Pages *user/organization* site
// (https://<username>.github.io/), where assets resolve from the domain root.
export default defineConfig({
  plugins: [react()],
  base: '/',
})