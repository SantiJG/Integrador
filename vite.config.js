import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://ivanhutch.github.io/react-ricky-and-morty/",
  plugins: [react()],
})
