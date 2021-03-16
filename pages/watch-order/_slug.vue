<template>
  <div>
    <blogheader :article="article" />
    <hr>
    <anime-blog-index />
    <hr>

    <main class="pt-4 pb-20 lg:pt-8 lg:pb-28 relative">

      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid gap-24 grid-cols-1 lg:grid-cols-3 article-toc">
          <section class="block col-span-1 lg:col-span-2 mt-0">
            <article class="prose lg:prose-xl">
              <div class="flex text-center flex-wrap p-4 ">
                <div
                  class=" justify-center items-center m-1 font-medium py-1 px-2 bg-white rounded-full text-white bg-indigo-600 border border-indigo-200 "
                  v-for="(item, index) in article.genres"
                  :key="index"
                >
                  <NuxtLink :to="'/watch-order/tags/'+item">
                    <div class=" text-xs font-normal leading-none max-w-full flex-initial">{{item}}</div>
                  </NuxtLink>
                </div>
              </div>
              <hr>
              <div class="px-5">

                <toc-mob :article="article" />
                <hr>
                <br>
                <p class="font-semibold opacity-70">How to watch the {{article.subtitle}} series in Chronological order, including Episodes, Movies, OVA’s and Fillers. This is the best sequence that i got of {{article.subtitle}}, If {{article.subtitle}} is in wrong order please notify us via <a
                    class="text-indigo-600"
                    :href="'mailto:sageanime.com@gmail.com?subject=Wrong%20watch%20order%20of' +' ' + article.subtitle"
                  >Mail</a>.

                </p>
                <br>
                <hr>
                <div v-if="article.Aimage">
                  <img
                    :src="article.Aimage"
                    class="my-4"
                    :alt="article.Aalt"
                  >
                  <hr>
                </div>

                <nuxt-content :document="article" />
              </div>
              <hr>

              <div class="bg-infoblue dark:bg-tokyosky border-2 text-white p-4 my-4 infobox overflow-hidden shadow-sm rounded-lg twitter-cta cvis border-infoblue">
                <p class="m-0 text-black text-sm md:text-2xl text-center text-base">Enjoyed the article? Consider sharing on Social Media!</p>
              </div>
              <client-only>
                <social-share
                  :description="article.description"
                  :shareLink="`https://sageanime.com${article.path}`"
                />
              </client-only>
              <br>
              <div class="flex justify-between">
                <div class="flex flex-col dark:text-gray-300 text-gray-900">
                  <p class="text-lg mb-0 uppercase">Last updated</p> <span class="text-gray-600">{{formatDate(article.updatedAt)}}</span>
                </div>

              </div>
              <br>
              <hr>

              <client-only>

                <also-read :article="alsoLike" />
                <br>
                <!-- <prev-next
                  :nameRoute="'watch-order'"
                  :prev="prev"
                  :next="next"
                /> -->
                <div class="p-8">

                  <Disqus />
                </div>
              </client-only>

            </article>
          </section>

          <toc-web :article="article" />
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import colorCard from "~/components/colorCard";
import SocialShare from "~/components/socialShare.vue";

export default {
  data() {
    return {
      colors: ["bg-blue-100", "bg-pink-200", "bg-yellow-100", "bg-green-200"],
    };
  },
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
          hid: "og:image",
          property: "og:image",
          content: this.article.Aimage ?? this.article.image,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.article.keyword,
        },
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
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: this.article.image,
        },
      ],
      link: [
        {
          rel: "canonical",
          href: `https://sageanime.com${this.$route.path}`,
        },
      ],
    };
  },

  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },

  components: {
    colorCard,
    SocialShare,
  },

  // computed: {
  //   disqusConfig() {
  //     return {
  //       url: `https://sageanime.com/watch-order/${this.$route.path}`,
  //       identifier: this.article.slug,
  //       title: this.article.headline,
  //     };
  //   },
  // },
  async asyncData({ $content, params }) {
    var alsoLike = [];
    const article = await $content("watch-order", params.slug).fetch();
    const relatedPost = await $content("watch-order")
      .where({ genres: { $containsAny: article.genres } })
      .limit(4)
      .fetch();
    relatedPost.forEach((element) => {
      if (element.slug !== article.slug) {
        alsoLike.push(element);
        // console.log(element);
      }
      // alsoLike.push(element);
    });
    // const [prev, next] = await $content("watch-order")
    //   .only(["title", "slug"])
    //   .sortBy("createdAt", "asc")
    //   .surround(params.slug)
    //   .fetch();
    return { article, alsoLike };
  },
};
</script>
<style >
.nuxt-content p {
  font-weight: 500;
  line-height: 1.625;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  margin-bottom: 0.5rem;
  opacity: 0.75;
  transition-property: background-color, border-color, color, fill, stroke;
  transition-duration: 0.3s;
  transition-timing-function: linear;
}
</style>