// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css'
  ],
  app: {
    head: {
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      // script: [
      //   // <script src="https://myawesome-lib.js"></script>
      //   { src: 'https://awesome-lib.js' }
      // ],
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
        { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.15.4/css/all.css' }
      ],
    }
  }
  
})
