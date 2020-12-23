<template>
  <div class="pt-5 px-4 lg:px-8 ">
    <article>
      <h1 class="text-2xl font-bold text-center text-gray-600 py-2">Anime Series in Chronological Order</h1>
      <p class="font-medium">Never miss anything while watching your favorite Anime Series again. Browse our lists of Anime below to discover the proper chronological order to watch them, including episodes, OVA's, movies, and more! Check back often, we are constantly updating our list with new Anime and updated orders. Also subscribe to our mailing list to get updates when new items are published.</p>
    </article>
    <hr class="my-10">
    <section>
      <h2 class="text-lg tracking-tight font-bold text-gray-900 font-mono  mb-8">Featured
      </h2>
      <div class="grid grid-cols-2 justify-center sm:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 xl:gap-8 font-semibold text-gray-900 text-center  ">
        <div
          v-for="item in article"
          :key="item.title"
        >
          <!-- <div
            class=" bg-center bg-cover bg-no-repeat	div-block-2"
            :style="{ backgroundImage: 'url(' + item.image + ')' }"
          ></div> -->
          <div class="flex items-center"><a
              class="relative  "
              :href="'watch-order/'+item.slug"
            >
              <img
                :data-src="item.image"
                alt=""
                class="object-cover	rounded-xl shadow-sm bg-center w-64 h-72 md:h-96 lg:h-96"
                v-lazy-load
              >

              <span class="opacity-70 font-bold ">{{item.title}}</span> <span class="absolute bg-green-400  top-2 left-1 text-black font-bold rounded-full text-sm py-0.5 px-2  text-white">Current Popular</span></a>
          </div>

        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
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
    return { article };
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
