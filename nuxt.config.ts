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
})