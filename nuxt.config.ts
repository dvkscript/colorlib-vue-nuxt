// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  srcDir: './src',
  css: ["~/assets/css/main.css"],
  modules: ['reka-ui/nuxt', "@nuxt/image"],
  alias: {
    "src": "./src",
  },
  dir: {
    public: "../public"
  },
  vite: {
    plugins: [
      tailwindcss()
    ]
  },
  app: {
    head: {
      title: 'Mondy | Real Estate HTML Template', // default fallback title
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico',  },
      ],
      meta: [
        // Open Graph Meta Tags (Facebook, Zalo, LinkedIn...)
        { property: 'og:title', content: 'Mondy | Real Estate HTML Template' },
        { property: 'og:description', content: 'Find your dream home with Mondy.' },
        { property: 'og:image', content: 'https://preview.colorlib.com/theme/mondy/img/hero-bg.jpg.webp' },
        { property: 'og:type', content: 'website' },

        // Twitter Card Meta Tags
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Mondy | Real Estate HTML Template' },
        { name: 'twitter:description', content: 'Find your dream home with Mondy.' },
        { name: 'twitter:image', content: 'https://preview.colorlib.com/theme/mondy/img/hero-bg.jpg.webp' }
      ]
    }
  }
})