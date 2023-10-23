<template>
  <main class="main">
    <nav class="menu">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link :to="{ name: `projects` }">Projects</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Blog Posts' }">Blog</router-link>
      </li>
      <li>
        <router-link :to="{ name: `about` }">About</router-link>
      </li>
    </nav>

    <section class="container">
      <router-view :key="$route.path"></router-view>
    </section>
    <!--  named  router-->
    <router-view name="yt" class="named-views"></router-view>
    <Foot />
  </main>
</template>

<script>
module.exports = {
  data() {
    return {}
  },
  components: {
    Foot: httpVueLoader('/src/components/Footer.vue'),
    Busca: httpVueLoader('/src/components/Search.vue'),
  },
}
</script>
<style>
:root {
  --maxw: 75rem;
  color-scheme: dark;
  --search-links-color: rgb(58, 164, 255);
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
html {
  scroll-behavior: smooth;
}
body {
  min-width: 320px;
  max-width: var(--maxw);
  margin: 0 auto;
}
/* trick to keep footer on bottom and container get max-space */
.main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-height: 100dvh;
}
.container {
  flex: 1;
  /* max-width: var(--maxw); */
}
a {
  color: #05bdba;
}
a:hover {
  text-decoration: none;
}

#nprogress {
  position: relative;
  z-index: 9999999;
}

/* .block {
  max-width: 800px;
  min-width: 320px;
  margin: 0 auto;
} */

.menu {
  display: flex;
  max-width: var(--maxw);
  justify-content: space-evenly;
  width: 100%;
  padding: 15px 5px;
  position: sticky;
  top: 0;
  border-bottom: 2px solid #fff;
  backdrop-filter: blur(10px);
  z-index: 1; /* changed to 0 because nprogress */
  height: 55px;
}
.menu li {
  list-style: none;
  margin: 5px 0;
}

.menu a {
  text-decoration: none;
  /*  background: rgb(29, 27, 27); */
  padding: 5px 20px;
  border-radius: 5px;
  color: rgb(219, 216, 211);
  font-weight: bold;
  font-size: 14px;
}
.menu a:hover {
  color: rgb(68, 186, 246);
}
/* class named views */
.named-views {
  text-align: center;
  padding: 10px 0;
  color: #b9b3aa;
}

/* routes CSS */
.router-link-active {
  color: rgb(68, 186, 246);
}

/* for post images */

figure:has(figcaption) {
  text-align: center;
  color: white;
}
figure:has(img) {
  text-align: center;
  margin: 20px auto;
  width: 100%;
}
figure img {
  margin: 0 auto;
  width: 100%;
}

/* for Container components use this class */
.img-flex {
  max-width: 50%;
  margin: 0 auto;
  height: auto;
}

.btnDownload {
  cursor: pointer;
  text-align: center;
  font-size: 16px;
  background: #1a2b81;
  padding: 0.5em 3em;
  border: none;
  opacity: 0.8;
  border-radius: 10px;
  text-decoration: none;
}

nav:has(.btnDownload) {
  margin: 3em auto;
  max-width: fit-content;
}

nav:has(.btnDownload) a {
  display: block;
  margin: 15px 0;
}

.btnDownload:hover {
  box-shadow: 0 0 15px black;
  color: white;
  background: #0747a6;
  transition: 2s;
}

/* Desktop */
@media screen and (min-width: 650px) {
  .menu a {
    text-transform: uppercase; /* only desktop is upperCase menu */
  }
  figure img {
    max-width: 100%;
    display: block;
    width: 100%;
    height: auto;
    /*   overflow-clip-margin: content-box; */
    margin: 0 auto;
  }
  figure:has(img) {
    text-align: center;
  }
}
</style>
