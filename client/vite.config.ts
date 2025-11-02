import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { Server } from 'http'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/": "http://127.0.0.1:5000"
    }
  }
})
