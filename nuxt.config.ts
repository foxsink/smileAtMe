// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {

    },
    alias: {
        src: './src/',
    },
    vite: {
        server: {
            watch: {
                usePolling: true
            }
        }
    },
})
