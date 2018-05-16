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
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [
      {
        defer: true,
        src: "https://use.fontawesome.com/releases/v5.0.13/js/all.js",
        crossorigin: "anonymous"
      }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#383838" },
  /*
  ** Build configuration
  */
  build: {
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
  modules: ["@nuxtjs/axios", "@nuxtjs/dotenv"],

  axios: {
    // proxyHeaders: false
  },

  /*
  ** Plugins & Filters
  */
  plugins: ["~plugins/filters.js"]
};
