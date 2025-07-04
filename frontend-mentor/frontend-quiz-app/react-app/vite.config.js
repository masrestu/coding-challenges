import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        tailwindcss()
    ],
    build: {
        outDir: path.resolve('../preview'),
        emptyOutDir: true,
    },
    base: 'coding-challenges/frontend-mentor/frontend-quiz-app/preview/'
})
