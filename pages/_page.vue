<template>
  <div>
    <nuxt-content
      :document="article"
      class="pt-16 p-4"
    />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.article.title,
      titleTemplate: "%s » 🥇 SageAnime",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.article.description,
        },
        // Open Graph
        { hid: "og:title", property: "og:title", content: this.article.title },
        {
          hid: "og:description",
          property: "og:description",
          content: this.article.description,
        },
        { hid: "og:type", property: "og:type", content: "article" },
        {
          hid: "og:site_name",
          property: "og:site_name",
          content: "SageAnime",
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "article",
        },
        {
          hid: "og:locale",
          property: "og:locale",
          content: "en_US",
        },
        { property: "article:published_time", content: this.article.createdAt },
        { property: "article:modified_time", content: this.article.updatedAt },
        // {
        //   property: "article:tag",
        //   content: this.article.tags ? this.article.tags.toString() : "",
        // },
        // Twitter
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.article.title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.article.description,
        },
      ],
      link: [
        {
          rel: "canonical",
          href: `https://sageanime.com/${this.$route.path}`,
        },
      ],
    };
  },
  async asyncData({ $content, params }) {
    const article = await $content("pages", params.page).fetch();
    return {
      article,
    };
  },
};
</script>

<style>
</style>