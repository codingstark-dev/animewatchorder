<template>
  <nav class="mt-4 lg:hidden">
    <h2 class="uppercase text-black font-h2 text-lg  tracking-wider text-gray-500 uppercase tracking-wider font-bold text-sm pb-4">
      JUMP ON THE POINT
    </h2>
    <ul>
      <li
        :class="{
                'pl-4': link.depth === 3
              }"
        class="toc-list"
        v-for="link of article.toc"
        :key="link.id"
      >
        <a
          role="button"
          class="transition-colors duration-75 text-base mb-2 block border-t border-dashed"
          :href="`#${link.id}`"
        >{{ link.text }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    article: { type: Object, required: true },
  },
};
</script>

<style lang="scss" scoped>
</style>