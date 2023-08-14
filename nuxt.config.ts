// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/eslint-module'
  ],
  components: {
    dirs: [
      { path: '~/components/atoms', extensions: ['vue'], prefix: 'a' },
      { path: '~/components/molecules', extensions: ['vue'], prefix: 'm' },
      { path: '~/components/organisms', extensions: ['vue'], prefix: 'o' },
    ]
  },
  googleFonts: {
    families: {
      'Nunito+Sans': [400,600]
    }
  }
})
