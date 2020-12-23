<template>
  <div>
    <nav class="w-full border-b bg-gradient-to-r from-indigo-500 to-indigo-600 shadow border-transparent">
      <div class="container mx-auto flex-1 px-4 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="lg:w-1/5 flex items-center pr-4"><a
              aria-label="Nuxt TailwindCSS Logo"
              class="flex-shrink-0 flex-1 font-bold text-xl nuxt-link-active text-white text-black shadow-underline"
              href="/"
            >
              SageAnime
            </a></div>
          <div class="flex-1 flex justify-start w-4/6">
            <div class="w-full relative flex flex-col justify-between hidden lg:block">
              <div class="w-full relative"><label
                  for="search"
                  class="sr-only"
                >Search</label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><svg
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="h-5 w-5 text-gray-500"
                    >
                      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg></div> <input
                    id="search"
                    placeholder="Search the docs (Press &quot;/&quot; to focus)"
                    type="search"
                    autocomplete="off"
                    class="block w-full pl-10 pr-3 py-2 truncate leading-5 placeholder-gray-500 border border-transparent text-gray-700 dark:text-white dark-focus:text-white focus:border-gray-300 dark-focus:border-gray-700 rounded-md focus:outline-none focus:bg-white dark-focus:bg-gray-900 bg-gray-200 dark:bg-gray-800"
                  >
                </div>
              </div>
              <ul
                class="z-10 absolute w-full flex-1 top-0 bg-white dark:bg-gray-900 rounded-md border border-gray-300 dark:border-gray-700 overflow-hidden"
                style="margin-top:37px;display:none"
              >
                <!---->
              </ul>
            </div>
          </div>
          <div class="lg:w-1/5 flex items-center pl-4 lg:pl-8 justify-between">

            <div class="flex items-center"><a
                href="https://twitter.com/nuxt_js"
                target="_blank"
                rel="noopener noreferrer"
                title="Twitter"
                name="Twitter"
                class="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark-hover:text-primary-500 ml-4 hidden lg:block"
              ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-twitter w-5 h-5"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg></a> <a
                href="https://github.com/nuxt-community/tailwindcss-module"
                target="_blank"
                rel="noopener noreferrer"
                title="Github"
                name="Github"
                class="text-gray-700 dark:text-gray-300 hover:text-primary-500 dark-hover:text-primary-500 ml-4 hidden lg:block"
              ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-github w-5 h-5"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg></a> <button
                aria-label="Menu"
                @click="isOpen = !isOpen"
                class="lg:hidden p-2 rounded-md text-white  focus:outline-none -mr-2"
              ><svg
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg></button></div>
          </div>
        </div>
      </div>

      <transition
        name="slide"
        class="lg:sticky lg:top-16 overflow-y-auto h-full lg:h-auto lg:max-h-(screen-16)"
      >
        <div v-if="isOpen">
          <div
            :class="isOpen ? 'block' : 'hidden' "
            class="px-2 pt-2 pb-4 bg-gradient-to-r from-indigo-500 to-indigo-600 "
          >

            <div class="mb-4 lg:hidden">
              <div class="w-full relative flex flex-col justify-between">
                <div class="w-full relative"><label
                    for="search"
                    class="sr-only"
                  >Search</label>
                  <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><svg
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="h-5 w-5 text-gray-500"
                      >
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                      </svg></div> <input
                      id="search"
                      placeholder="Search the docs (Press &quot;/&quot; to focus)"
                      type="search"
                      autocomplete="off"
                      class="block w-full pl-10 pr-3 py-2 truncate leading-5 placeholder-gray-500 border border-transparent text-gray-700 dark:text-white dark-focus:text-white focus:border-gray-300 dark-focus:border-gray-700 rounded-md focus:outline-none focus:bg-white dark-focus:bg-gray-900 bg-gray-200 dark:bg-gray-800"
                    >
                  </div>
                </div>

              </div>
            </div>

            <a
              href="#"
              class="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-600"
            >gon</a>
            <a
              href="#"
              class="mt-1 block px-2 py-1 text-white font-semibold rounded  hover:bg-gray-600"
            >tanjiro</a>
            <a
              href="#"
              class="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-600"
            >killua</a>
            <hr class="my-4">
            <div class="lg:hidden space-x-2">
              <!-- <p class="mb-2 text-white uppercase tracking-wider font-bold text-sm lg:text-xs">More</p> -->
              <div class="flex items-center space-x-4 "><a
                  href="https://twitter.com/nuxt_js"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Twitter"
                  name="Twitter"
                  class="inline-flex text-white 0 hover:text-primary-500"
                ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-twitter w-5 h-5"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg></a> <a
                  href="https://github.com/nuxt-community/tailwindcss-module"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Github"
                  name="Github"
                  class="inline-flex text-white dark:text-gray-300 hover:text-primary-500"
                ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-github w-5 h-5"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg></a>
                <!----> <span class="inline-flex"><button
                    aria-label="Color Mode"
                    class="rounded-md  text-white hover:text-primary-500 focus:outline-none transition ease-in-out duration-150"
                  ><svg
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                    </svg></button></span>
              </div>
            </div>
          </div>

        </div>
      </transition>

    </nav>

  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>
<style >
.slide-enter-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: ease-in;
  -webkit-transition-timing-function: ease-in;
  -o-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}

.slide-leave-active {
  -moz-transition-duration: 0.3s;
  -webkit-transition-duration: 0.3s;
  -o-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to,
.slide-leave {
  max-height: 100px;
  overflow: hidden;
}

.slide-enter,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
}
</style>