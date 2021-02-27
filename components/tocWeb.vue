<template>
  <aside class="hidden md:block md:hidden col-span-1 lg:flex lg:flex-col block">
    <div class="sticky top-16 ">

      <h2 class="uppercase text-black font-h2 text-lg lg:mt-8 tracking-wider text-gray-500 uppercase tracking-wider font-bold text-sm ">
        JUMP ON THE POINT
      </h2>
      <nav class="mt-4">
        <ul>
          <li
            @click="tableOfContentsHeadingClick(link)"
            :class="{
                'pl-4': link.depth === 3
              }"
            class="toc-list"
            v-for="link of article.toc"
            :key="link.id"
          >
            <a
              :class="{
                  'text-indigo-600 hover:text-indigo-700':
                    link.id === currentlyActiveToc,
                  'text-black hover:gray-900': link.id !== currentlyActiveToc
                }"
              role="button"
              class="transition-colors duration-75 text-base mb-2 block border-t border-dashed"
              :href="`#${link.id}`"
            >{{ link.text }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script>
export default {
  props: {
    article: { type: Object, required: true },
  },
  data() {
    return {
      currentlyActiveToc: "",
      isClickScrolling: false,
      observer: null,
      observerOptions: {
        root: null,
        rootMargin: "-100px",
        threshold: 0,
      },
    };
  },
  mounted() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        if (entry.isIntersecting && !this.isClickScrolling) {
          this.currentlyActiveToc = id;
        }
      });
    }, this.observerOptions);

    // Track all sections that have an `id` applied
    document
      .querySelectorAll(".nuxt-content h2[id], .nuxt-content h3[id]")
      .forEach((section) => {
        this.observer.observe(section);
      });
  },
  beforeDestroy() {
    this.observer.disconnect();
  },
  methods: {
    tableOfContentsHeadingClick(link) {
      this.isClickScrolling = true;
      this.currentlyActiveToc = link.id;

      setTimeout(() => {
        this.isClickScrolling = false;
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>