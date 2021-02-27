<template>

  <header class="pt-10">
    <div
      class="py-10 text-center space-y-5"
      :style="{'background-color': article.bgcolor}"
    >
      <h1 class="text-2xl font-medium">{{article.headline}}</h1>
      <img
        :src="article.image"
        :alt="article.alt"
        width="400"
        height="600"
        class=" object-cover  rounded-xl shadow-sm bg-center text-center  m-auto w-56 h-72 shadow-offset-black"
      >
    </div>
  </header>
</template>

<script>
export default {
  props: ["article"],
};
</script>

<style lang="scss" scoped>
</style>