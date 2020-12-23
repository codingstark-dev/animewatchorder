export default {
  target: "static",
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "animewatchorder",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      // {
      //   property: "og:image",
      //   content: "/favicon.webp"
      // },
      // {
      //   property: "og:url",
      //   content: "https://instareel.site/"
      // },
      {
        name: "theme-color",
        content: "#6366f1"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: "~/plugins/card.js", mode: "client" },
    { src: "~/plugins/disqus.js" }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/pwa"
  ],
  pwa: {
    workbox: {
      clientsClaim: false
    }
  },
  tailwindcss: {
    config: {
      theme: {},
      variants: {},
      plugins: [],
      purge: {
        enabled: process.env.NODE_ENV === "production",

        content: [
          "content/**/**.md",
          "components/**/*.vue",
          "layouts/**/*.vue",
          "pages/**/*.vue",
          "plugins/**/*.js",
          "nuxt.config.js"
        ]
      }
    }
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    "nuxt-lazy-load",
    [
      "nuxt-compress",
      {
        gzip: {
          cache: true
        },
        brotli: {
          threshold: 10240
        }
      }
    ]
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: true,

    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true,
        minifyURLs: true,
        removeComments: true,
        removeEmptyElements: true
      }
    }
  }
};
