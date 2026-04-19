import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
    base: "/iteration-2-build-with-style-group-2/",
    server: {
        port: 3000
    },
    plugins: [
        react(),
        babel({ presets: [reactCompilerPreset()] })
    ],
})
