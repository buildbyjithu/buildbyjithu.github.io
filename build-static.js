import { build } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

async function buildStatic() {
  await build({
    plugins: [react()],
    base: '/',
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
      emptyOutDir: true,
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'client/index.html')
        }
      }
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './client/src'),
        '@assets': path.resolve(__dirname, './client/src/assets')
      }
    },
    root: 'client'
  })
}

buildStatic().catch(console.error)