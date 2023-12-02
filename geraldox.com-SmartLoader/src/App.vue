<template>
  <div>
    <nav class="top-nav">
      <section class="menu">
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
      </section>
      <section class="top-search">
        <img
          @click="isModalVisible = !isModalVisible"
          src="../src/assets/icons/searchsvg.svg"
          alt="Make Search" />
      </section>
    </nav>
    <main class="main">
      <router-view :key="$route.path" class="router-view"></router-view>

      <Modal v-show="isModalVisible" @close="closeModal">
        <template v-slot:header> </template>

        <template v-slot:body>
          <!-- receive a click event and call fun to close modal -->
          <Searchauto v1 @cancloseafterclick="closeModal" />
        </template>

        <template v-slot:footer> This is a new modal footer. </template>
      </Modal>
      <!--  named  router-->
      <router-view name="yt" class="named-views"></router-view>
    </main>
    <Foot />
    <!-- before wrapper in main, now to get full width is outside -->
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
      isModalVisible: false,
    }
  },
  components: {
    Foot: httpVueLoader('/src/components/Footer.vue'),
    Busca: httpVueLoader('/src/components/Search.vue'),
    Searchauto: httpVueLoader('../src/components/SearchAuto.vue'),
    Modal: httpVueLoader('../src/components/Modal.vue'),
  },
  methods: {
    showModal() {
      this.isModalVisible = true
    },
    closeModal() {
      this.isModalVisible = false
    },
    CloseModal() {
      console.log(`pai here`)
    },
  },
}
</script>
<style>
:root {
  --maxw: auto; /* set max in footer either */
  --maxwmain: 90rem;
  color-scheme: dark;
  --search-links-color: #05bdba;
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
  line-height: 1.5;
  /*  background: rgb(0, 12, 21); */
}
/* trick to keep footer on bottom and container get max-space */
.main {
  margin: 0 auto; /* before is body */
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-height: 100dvh;
}

.main-post {
  min-height: 30vh;
}

.container {
  flex: 1;
  /* max-width: var(--maxw); */
}
/* class for router-view */
.router-view {
  padding-inline: 0.5rem;
  flex: 1;
  padding-block: 15px;
}
/* before existia .container thath wrapper the router-view o que será rederizado tbm pode ser selecionado com :first-child */
.container > :first-child {
  /*  border: 1px solid red; */ /* uncomment for test purpose */
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

.top-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--maxw);
  position: sticky;
  top: 0;
  margin: 0 auto;
  backdrop-filter: blur(10px);
  width: 100%;
  border-bottom: 2px solid #fff;
  z-index: 2;
}

.menu {
  display: flex;
  max-width: 550px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 55px;
  margin-right: 50px;
  margin-left: 10px;
}
.menu li {
  list-style: none;
}

.menu a {
  text-decoration: none;
  /*  background: rgb(29, 27, 27); */

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
.menu .router-link-exact-active {
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
code {
  color: dodgerblue;
  font-weight: bold;
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

.top-search img {
  cursor: pointer;
  margin-right: 10px;
}

/* Desktop */
@media screen and (min-width: 650px) {
  .menu a {
    text-transform: uppercase; /* only desktop is upperCase menu */
    padding: 5px 10px; /* increase area click */
  }
  .menu a:hover {
    background: #333;
    transition: 500ms ease-in;
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
  .main {
    margin: 0 auto;
    max-width: var(--maxwmain); /* before was body */
  }
  .router-view {
    padding-inline: 0.5rem;
  }
}
</style>
