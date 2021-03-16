<template>
  <div
    class="shadow-outline shadow-md h-auto  w-auto m-2 rounded-3xl"
    v-if="article.length"
  >
    <h6 class="text-lg font-bold p-4">You May Also Like
    </h6>
    <div class=" lg:flex">
      <span
        v-for="(item, index) in article"
        :key="index"
      >
        <NuxtLink
          :to="item.path"
          ref="d"
          class="flex pb-4 px-4"
        >
          <div v-if="item.Aimage">
            <img
              class="rounded object-fill h-16"
              :src="item.Aimage"
              :alt="item.Aalt"
              width="100px"
            >
          </div>
          <div v-else>
            <img
              class="rounded object-fill h-16"
              :src="item.image"
              :alt="item.alt"
              width="100px"
            >
          </div>

          <h6 class="self-center font-semibold p-1 ">
            {{item.headline}}
          </h6>
        </NuxtLink>
      </span>
      <!-- <span class="pb-4 px-4 flex">
                  <img
                    class="rounded"
                    src="https://www.otakukan.com/wp-content/uploads/2021/03/Red-and-Black-Dark-Gamer-Sports-YouTube-Thumbnail-280x210.png.webp"
                    alt=""
                    width="100px"
                  >
                  <h6 class="self-center p-1 font-semibold">
                    Upcoming Anime Releases In March 2021
                  </h6>
                </span> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Array,
      default: () => null,
    },
  },
};
</script>

