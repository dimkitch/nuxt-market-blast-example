require('dotenv').config();

const isDev = process.env.NODE_ENV !== 'production';

export default {
  ssr: true,

  server: {
    port: isDev ? process.env.PORT_DEVELOPMENT : process.env.PORT_PRODUCTION,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'market_ex',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon-32х32.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/less/index.less', 'swiper/swiper-bundle.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/dotenv',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/style-resources', 'lodash'],

  styleResources: {
    less: ['@/assets/less/utils/variables.less'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|less|vue)$/,
            chunks: 'all',
            enforce: true,
          },
        },
      },
    },
  },
};
