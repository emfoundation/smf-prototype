module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "smf",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "SMF Prototype" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.0.10/css/all.css",
        crossorigin: "anonymous"
      },
      { rel: "stylesheet", href: "https://use.typekit.net/rtq3bmi.css" }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#383838" },

  /*
  ** Customize routing behavior
  */
  router: {
    // always scroll back to top when navigating
    scrollBehavior: function(to, from, savedPosition) {
      return { x: 0, y: 0 };
    }
  },

  /*
  ** Build configuration
  */
  build: {
    // turn this on to start the analyzer on build
    // analyze: true,
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        });
      }
    },
    // to get rid of warning messages when postcss tries to parse css variables
    postcss: {
      plugins: {
        "postcss-custom-properties": false
      }
    }
  },
  /*
  ** SASS compilation
  */
  css: ["@/assets/scss/main.scss"],

  /*
  ** Modules
  */
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/dotenv",
    ["@nuxtjs/google-tag-manager", { id: "GTM-KQ278ZX" }],
    ["nuxt-sass-resources-loader", "@/assets/scss/_global.scss"]
  ],

  axios: {
    // proxyHeaders: false
  },

  /*
  ** Plugins & Filters
  */
  plugins: ["~plugins/filters.js"]
};
