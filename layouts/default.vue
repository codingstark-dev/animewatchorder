<template>
  <div>
    <navbar />
    <Nuxt />
    <footerbar></footerbar>
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.nuxt-content h3::after {
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
  font-weight: 500;
  line-height: 1.625;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  margin-bottom: 0.5rem;
  /* opacity: 0.75; */
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
  margin-top: 1rem;
  margin-bottom: 2rem;
}
.nuxt-content h1 {
  position: relative;
  font-size: 1.5rem;
  display: table;
  margin-top: 1rem;
  margin-bottom: 2rem;
}
.nuxt-content h4 {
  position: relative;
  font-size: 1.5rem;
  display: table;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.nuxt-content h4::after {
  content: " ";
  width: 80%;
  display: block;

  --border-opacity: 1;

  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
  border-radius: 0.25rem;
  border: 2px solid #4f46e5;
}
.nuxt-content a {
  color: #4f46e5;
}
.nuxt-content a:hover {
  color: #4f46e5;
  opacity: 0.8;
}
.nuxt-content h2::after {
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
  margin-top: 1rem;
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
