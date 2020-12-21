<template>
  <client-only>
    <div>
      <div class="pb-5 lg:justify-center lg:flex ">
        <div
          :class="colors[color]"
          class="w-full h-auto rounded-md flex items-center shadow-inner max-w-5xl flex-grow "
        >
          <div class="flex-none w-10 h-10 bg-white ml-3 text-center items-center pt-2 rounded-md shadow-inner font-medium">{{num}}</div>
          <span class="pl-5  p-4 break-normal container-small font-medium">
            <slot></slot>
          </span>
        </div>
      </div>
    </div>
  </client-only>
</template>

<script>
export default {
  name: "cardColor",
  props: {
    num: {
      type: Number,
      required: true,
    },
    color: { type: Number, required: true },
  },
  data() {
    return {
      colors: ["bg-blue-100", "bg-pink-200", "bg-yellow-100", "bg-green-200"],
    };
  },
};
</script>
