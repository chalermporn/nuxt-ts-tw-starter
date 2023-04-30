// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    tailwindcss: {
        // add '~tailwind.config` alias
        exposeConfig: true
    }
})