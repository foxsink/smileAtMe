// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['@/assets/globalStyles/global.scss', '@/assets/globalStyles/_variables.scss'],
    vite: {
        server: {
            watch: {
                usePolling: true
            }
        }
    },
})

