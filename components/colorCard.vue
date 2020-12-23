<template>
  <div>

    <div v-if="text !== undefined">
      <div
        v-for="(item, index) in text"
        :key="index"
        class="pb-5 lg:justify-center lg:flex "
      >

        <div
          :class="(item.includes('OVA')) ? colors[1] : item.includes('Manga') ? colors[3]:item.includes('Movie')?  colors[2] : colors[0]"
          class="w-full h-auto rounded-md flex items-center shadow-inner max-w-7xl flex-grow hover:opacity-80"
        >
          <div class="flex-none w-10 h-10 bg-white ml-3 text-center items-center pt-2 rounded-md shadow-inner font-medium">{{index+ind}}</div>
          <span class="pl-5  p-4 break-normal container-small font-medium">
            {{item}}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardColor",
  props: {
    ind: { default: 1, type: Number, required: false },

    text: {
      type: Array,
      required: true,
    },
    // color: { type: Number, required: true },
  },
  data() {
    return {
      colors: ["bg-blue-100", "bg-pink-200", "bg-yellow-100", "bg-green-200"],
    };
  },
};
</script>
