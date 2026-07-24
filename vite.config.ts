import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Detect if we are building on GitHub Actions for Pages
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: isGitHubPages ? "/my-portfolio/" : "/",
})
