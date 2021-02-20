<template>
  <div class="container">

    <div class="antialiased">
      <div class="relative flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
        <div class="max-w-xl mx-auto sm:px-6 lg:px-8">
          <div
            class="flex items-center pt-8 sm:justify-start sm:pt-0"
            v-if="error.statusCode === 404"
          >
            <div class="px-4 text-lg text-gray-500 border-r border-gray-400 tracking-wider">
              404 Page Not Found </div>

            <div class="ml-4 text-lg text-gray-500 uppercase tracking-wider">
              <NuxtLink to="/">Go To Homepage</NuxtLink>
            </div>

          </div>
          <div
            class="flex items-center pt-8 sm:justify-start sm:pt-0"
            v-else
          >
            <div class="px-4 text-lg text-gray-500 border-r border-gray-400 tracking-wider">
              An error occurred </div>

            <div class="ml-4 text-lg text-gray-500 uppercase tracking-wider">
              <NuxtLink to="/">Go To Homepage</NuxtLink>
            </div>

          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "blog", // you can set a custom layout for the error page
};
</script>