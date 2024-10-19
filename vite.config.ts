import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import sassGlobImports from 'vite-plugin-sass-glob-import'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '')
    return {
        plugins: [vue(), sassGlobImports()],
        define: {
            __APP_ENV__: env.APP_ENV,
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        server: {
            port: 5173,
            host: '0.0.0.0',
            watch: {
                usePolling: true,
            },
        },
        base: './',
    }
})
