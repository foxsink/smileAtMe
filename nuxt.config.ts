// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    plugins: ['~/plugins/scrollPageOnWheel.client.ts'],
    modules: ['nuxt-swiper'],
    swiper: {

    },
    css: ['@/assets/globalStyles/global.scss'],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/globalStyles/_variables.scss";'
                }
            }
        },
        server: {
            watch: {
                usePolling: true
            }
        }
    },
})
