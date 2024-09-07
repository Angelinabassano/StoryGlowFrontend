import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr';
import path from 'path'
import { defineConfig } from 'vite';


export default defineConfig ({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
  },
})