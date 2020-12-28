import getRoutes from "./utils/getRoutes";

export default {
  target: "static",

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Anime Series in Chronological Order | Episodes, Movies, OVAs",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Watch Anime In Chronological Order, including Episodes, OVAs, Movies, and more!"
      },
      // {
      //   property: "og:title",
      //   conetent: "Anime Series in Chronological Order | Episodes, Movies, OVAs"
      // },
      // {
      //   property: "og:description",
      //   conetent:
      //     "Watch Anime In Chronological Order, including Episodes, OVAs, Movies, and more!"
      // },
      // {
      //   property: "og:image",
      //   content: "/SageAnime.png"
      // },
      // {
      //   property: "og:url",
      //   content: "https://sageanime.com/"
      // },
      {
        name: "theme-color",
        content: "#6366f1"
      },
      {
        name: "google-site-verification",
        content: "uetl84zhqgERJw7QsqX0lFxwtOXz-DLdivcS5hSIiKk"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/SageAnime.png" },
      {
        rel: "shortcut icon",
        href: "/SageAnime.png"
      },
      {
        rel: "apple-touch-icon",
        href: "/SageAnime.png"
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],
  // serverMiddleware: ["~/api/nodemailer"],
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
  sitemap: {
    path: "/sitemap.xml",
    gzip: true,
    hostname: "https://sageanime.com/",
    routes: async () => {
      const { $content } = require("@nuxt/content");

      const posts = await $content("watch-order")
        .only(["path"])
        .fetch();

      return posts.map(p => p.path);
      // const { $content } = require("@nuxt/content");

      // const posts = await $content("watch-order").fetch();
      // // const works = await $content("works").fetch();

      // // Setup an empty array we will push to.
      // const routes = [];

      // // Add an entry for the item including lastmod and priorty
      // // works.forEach(w =>
      // //   routes.push({
      // //     url: w.path,
      // //     priority: 0.8,
      // //     lastmod: w.updatedAt
      // //   })
      // // );

      // posts.forEach(p =>
      //   routes.push({
      //     url: p.path,
      //     priority: 0.8,
      //     lastmod: p.updatedAt
      //   })
      // );

      // // return all routes
      // return routes;
    }
  },

  pwa: {
    workbox: {
      clientsClaim: false
    },
    manifest: {
      name: "SageAnime",
      short_name: "SageAnime",
      theme_color: "#6366f1",
      background_color: "#ffffff",
      icons: [
        {
          src: "/SageAnime.png",
          sizes: "72x72",
          type: "image/png"
        },
        {
          src: "/SageAnime.png",
          sizes: "96x96",
          type: "image/png"
        },
        {
          src: "/SageAnime.png",
          sizes: "128x128",
          type: "image/png"
        },
        {
          src: "/SageAnime.png",
          sizes: "144x144",
          type: "image/png"
        },
        {
          src: "/SageAnime.png",
          sizes: "152x152",
          type: "image/png"
        },
        {
          src: "/SageAnime.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "/SageAnime.png",
          sizes: "384x384",
          type: "image/png"
        },
        {
          src: "/SageAnime.png",
          sizes: "512x512",
          type: "image/png"
        }
      ]
    }
  },
  env: { baseUrl: process.env.BASE_URL || "http://sageanime.com/" },
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
    "nuxt-purgecss",
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    "@nuxtjs/sitemap",
    "@nuxtjs/dotenv",

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
  purgeCSS: {
    mode: "postcss",
    enabled: process.env.NODE_ENV === "production"
  },
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
