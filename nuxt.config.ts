// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    plugins: ['~/plugins/scrollPageOnWheel.client.ts'],
    modules: ['nuxt-swiper'],
    swiper: {

    },
    css: ['@/assets/globalStyles/_variables.scss', '@/assets/globalStyles/global.scss'],
    vite: {
        server: {
            watch: {
                usePolling: true
            }
        }
    },
})

