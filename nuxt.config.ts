// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['@/assets/globalStyles/_variables.scss', '@/assets/globalStyles/global.scss'],
    vite: {
        server: {
            watch: {
                usePolling: true
            }
        }
    },
})

