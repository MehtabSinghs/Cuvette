import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  base: 'https://mehtabsinghs.github.io/Cuvette', // Ensure this is set if deploying to GitHub Pages
});