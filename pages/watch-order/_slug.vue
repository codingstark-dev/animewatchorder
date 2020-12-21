<template>
  <article class="  overflow-hidden  ">

    <!-- <div class=" text-center items-center  justify-center bg-blue-100 lg:bg-transparent">
      <br>
      <h1 class="text-2xl font-medium">{{article.title}}</h1>
      <br>
      <div
        class="cover-art fifty-fifty"
        :style="{ backgroundImage: 'url(' + article.image + ')' }"
      ></div><br>
    </div> -->
    <div class="py-10 text-center space-y-5  bg-blue-100">
      <h1 class="text-2xl   font-medium">{{article.headline}}</h1>
      <img
        :src="article.image"
        alt=""
        class=" object-cover rounded-xl shadow-sm bg-center text-center  m-auto w-56 h-72 "
      >
    </div>
    <hr>
    <div class="flex flex-col  space-y-3 sm:flex-row text-xs sm:space-y-0 sm:space-x-4 p-5 ">
      <!-- <div class="w-32 flex-shrink-0">
        <div class="h-10 flex flex-col justify-center">
          <div class="text-sm font-semibold text-gray-900">Yellow</div>
          <div><code class="text-xs text-gray-500">colors.amber</code></div>
        </div>
      </div> -->
      <div class="w-full   flex grid justify-evenly grid-cols-2  lg:grid-cols-4 gap-x-4 gap-y-3 2xl:gap-x-2 m-auto lg:pl-20">
        <div class="space-x-1.5 flex items-center">
          <div class="h-10 w-10 rounded-md ring-1 ring-inset ring-black ring-opacity-0 bg-blue-100"></div>

          <div class="font-bold text-sm">Episodes</div>

        </div>
        <div class="space-x-1.5 lg:col-auto  flex items-center   col-span-2 ">
          <div class="h-10 w-10 rounded-md ring-1 ring-inset ring-black ring-opacity-0 bg-pink-200"></div>

          <div class="font-bold text-sm">Original Video Animation (OVA)
          </div>

        </div>
        <div class="space-x-1.5 flex items-center">
          <div class="h-10 w-10 rounded-md ring-1 ring-inset ring-black ring-opacity-0 bg-yellow-100"></div>

          <div class="font-bold text-sm">Movie</div>

        </div>

        <div class="space-x-1.5 flex items-center">
          <div class="h-10 w-10 rounded-md ring-1 ring-inset ring-black ring-opacity-0 bg-green-200"></div>

          <div class="font-bold text-sm">Manga</div>

        </div>
      </div>
    </div>
    <hr>
    <div class="px-5">
      <nav class="py-4 lg:py-8 lg:pl-8 lg:pr-2">
        <p class="mb-3 lg:mb-2 text-gray-500 uppercase tracking-wider font-bold text-sm lg:text-xs">On this page</p>
        <ul>
          <li
            v-for="link of article.toc"
            :key="link.id"
            class="text-gray-700 dark:text-gray-300 border-t border-dashed dark:border-gray-800 first:border-t-0"
            :class="{ 'toc2': link.depth === 2, 'toc3': link.depth === 3 }"
          >
            <NuxtLink
              :to="`#${link.id}`"
              class="block text-sm scrollactive-item transition-padding ease-in-out duration-300 hover:pl-1 py-2 text-primary-500"
            >{{ link.text  }}</NuxtLink>
          </li>
        </ul>

      </nav>

      <nuxt-content :document="article" />
    </div>
  </article>
</template>
<script>
import colorCard from "~/components/colorCard";

export default {
  components: {
    colorCard,
  },
  async asyncData({ $content, params }) {
    const article = await $content("watch-order", params.slug).fetch();

    return { article };
  },
};
</script>
<style >
.nuxt-content h3:after {
  content: " ";
  width: 80%;
  display: block;
  --border-opacity: 1;
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
  border-radius: 0.25rem;
  border: 2px solid #4f46e5;
}
.nuxt-content p {
  line-height: 1.625;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  margin-bottom: 0.5rem;
  transition-property: background-color, border-color, color, fill, stroke;
  transition-duration: 0.3s;
  transition-timing-function: linear;
}
blockquote,
dd,
dl,
figure,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
pre {
  margin: 0;
}
.nuxt-content h2 {
  position: relative;
  font-size: 1.5rem;
  display: table;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.nuxt-content h2:after {
  content: " ";
  width: 80%;
  display: block;
  --border-opacity: 1;
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
  border-radius: 0.25rem;
  border: 2px solid #4f46e5;
}
.nuxt-content h3 {
  position: relative;
  font-size: 1.25rem;
  display: table;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}
ol,
ul {
  list-style: none;
}

fieldset,
ol,
ul {
  margin: 0;
  padding: 0;
}
</style>