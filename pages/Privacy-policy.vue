<template>
  <div>
    <nuxt-content
      :document="article"
      class="p-4"
    />

  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("pages/Privacy").fetch();

    return { article };
  },
};
</script>

<style >
</style>