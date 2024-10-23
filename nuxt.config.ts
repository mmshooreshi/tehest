// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/global-styles.css'],
  build: {
    transpile: ['gsap'],
  },
  devtools: { enabled: true },
  modules: ["@hypernym/nuxt-gsap","nuxt-headlessui","@nuxt/ui"],
  gsap: {
    composables: true,
    extraPlugins: {
      scrollTrigger: true,
      scrollTo: true
    }

    // Module options
  },
  headlessui: {
    prefix: 'Headless'
}


})