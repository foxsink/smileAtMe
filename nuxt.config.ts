// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {

    },
    alias: {
        srcDir: 'src/',
        components: "~/src/components",
        assets: "assets",
    },
    runtimeConfig: {
        database: {
            baseURL: 'localhost:5432',
        }
    }
})
