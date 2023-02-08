// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['nuxt-swiper'],
    css: ['@/assets/globalStyles/global.scss'],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/globalStyles/_variables.scss";',
                },
            },
        },
        server: {
            watch: {
                usePolling: true,
            },
        },
    },
})
