<template>
  <div>
    <main class="mx-7 lg:mx-6 mt-32 flex-grow">
      <div class="max-w-5xl mx-auto">
        <div class="flex flex-wrap mx-2">

          <div
            class="w-full sm:w-1/2 md:w-1/3 self-stretch p-2 mb-2"
            v-for="(item, index) in tagsPost"
            :key="index"
          >
            <div class="rounded shadow-md h-full">
              <NuxtLink :to="item.path"><img
                  class="w-full m-0 rounded-t lazy h-52"
                  :src="item.image"
                  width="960"
                  height="500"
                  :alt="item.alt"
                ></NuxtLink>
              <div class="px-6 py-5">
                <div class="font-semibold text-lg mb-2">
                  <NuxtLink
                    :to="item.path"
                    class="text-gray-900 hover:text-gray-700"
                  >{{item.headline}}</NuxtLink>
                </div>
                <p
                  class="text-gray-700 mb-1"
                  title="Published date"
                >{{formatDate(item.updatedAt)}}</p>
                <p class="text-gray-800">{{item.description.substring(0,80) + "..."}}</p>
              </div>
            </div>
          </div>

        </div>

        <!-- <div class="mt-3 flow-root"><a
            href="javascript:void(0)"
            class="float-left bg-white font-semibold py-2 px-4 border rounded shadow-md text-gray-800 cursor-default text-opacity-75"
          >Previous</a> <a
            href="/page/2/"
            class="float-right bg-white font-semibold py-2 px-4 border rounded shadow-md text-gray-800 cursor-pointer hover:bg-gray-100"
          >Next</a></div> -->
      </div>
    </main>
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
    const tagsPost = await $content("watch-order")
      .where({ genres: { $containsAny: [params.tags] } })
      .fetch();
    if (!tagsPost.length) {
      return error({ statusCode: 404, message: "No posts found!" });
    }
    return {
      tagsPost,
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>