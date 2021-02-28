<template>
  <div class="pt-20 px-4 lg:px-16 ">
    <article>
      <h1 class="text-2xl font-bold text-center text-gray-600 py-2">Anime Series in Chronological Order</h1>
      <client-only>
        <p class="font-medium">
          <nuxt-content
            :document="home"
            class="p-2"
          />
        </p>
      </client-only>

      <hr class="my-10">
      <section>
        <h2 class="text-lg tracking-tight font-bold text-gray-900 font-mono  mb-8">Featured
        </h2>
        <div class="grid grid-cols-2 justify-center sm:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 xl:gap-8 font-semibold text-gray-900 text-center py-5 ">
          <div
            v-for="item in article"
            :key="item.title"
          >
            <!-- <div
            class=" bg-center bg-cover bg-no-repeat	div-block-2"
            :style="{ backgroundImage: 'url(' + item.image + ')' }"
          ></div> -->
            <div class="flex items-center"><a
                class="relative"
                :href="'watch-order/'+item.slug"
              >
                <img
                  :data-src="item.image"
                  :alt="item.alt"
                  width="400"
                  height="600"
                  class="object-cover	rounded-xl shadow-sm bg-center w-64 h-72 md:h-96 lg:h-96"
                  v-lazy-load
                >

                <span class="opacity-70 font-bold ">{{item.subtitle}}</span> <span class="absolute bg-green-400  top-2 left-1 text-black font-bold rounded-full text-sm py-0.5 px-2  text-white">Current Popular</span></a>
            </div>

          </div>
        </div>
      </section>
    </article>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.home.title,
      titleTemplate: "%s - SageAnime",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.home.description,
        },
        // Open Graph
        { hid: "og:title", property: "og:title", content: this.home.title },
        {
          hid: "og:description",
          property: "og:description",
          content: this.home.description,
        },
        { hid: "og:type", property: "og:type", content: "home" },
        {
          hid: "og:image",
          property: "og:image",
          content: this.home.image,
        },
        // { property: "home:published_time", content: this.home.created },
        // { property: "home:modified_time", content: this.home.updated },
        // {
        //   property: "home:tag",
        //   content: this.home.tags ? this.home.tags.toString() : "",
        // },
        // Twitter
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.home.title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.home.description,
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: this.home.image,
        },
      ],
      link: [
        {
          rel: "canonical",
          href: `https://sageanime.com/`,
        },
      ],
    };
  },
  async asyncData({
    $content,
    isDev,
    route,
    store,
    env,
    params,
    query,
    req,
    res,
    redirect,
    error,
  }) {
    const article = await $content("watch-order").fetch();
    const home = await $content("home").fetch();
    return { article, home };
  },
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.div-block-2 {
  width: 20vw;
  height: 45vh;
  max-height: 45vh;
  max-width: 16vw;
  min-height: 345px;
  min-width: 200px;
  background-color: #e4e9f0;
}
</style>
