<template>
  <article class=" lg:flex ">
    <div class=" text-center items-center  justify-center bg-blue-100 lg:bg-transparent">
      <br>
      <h1 class="text-2xl font-medium">{{article.title}}</h1>
      <br>
      <div
        class="cover-art fifty-fifty"
        :style="{ backgroundImage: 'url(' + article.image + ')' }"
      ></div><br>
    </div>
    <!-- <div class="pt-10 text-center items-center flex justify-center bg-blue-100"><img
        :src="article.image"
        alt=""
        class="rounded-xl shadow-sm bg-center bg-cover bg-no-repeat w-64 h-72 "
      ></div> -->
    <div class="  px-5 ">
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
            >{{ link.text }}</NuxtLink>
          </li>
        </ul>

      </nav>
      <nuxt-content :document="article" />
    </div>
  </article>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("watch-order", params.slug).fetch();

    return { article };
  },
};
</script>
<style >
@media screen and (max-width: 767px) {
  .cover-art {
    position: static;
    display: block;
    margin-right: auto;
    margin-bottom: 40px;
    margin-left: auto;
  }
}
.cover-art {
  margin-top: 10px;
  right: auto;
  bottom: auto;
  z-index: 5;
  width: 200px;
  height: 270px;
  border-radius: 18px;
  background-color: #e4e9f0;
  box-shadow: 0 20px 80px 0 rgba(74, 78, 84, 0.25);
  -webkit-filter: none;
  filter: none;
}
@media screen and (max-width: 991px) {
  .cover-art {
    left: 20px;
    background-image: none;
  }
}
.fifty-fifty,
.fifty-one-hundred {
  background-size: cover;
  background-repeat: no-repeat;
}
.fifty-fifty {
  background-position: 50% 50%;
}
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
</style>