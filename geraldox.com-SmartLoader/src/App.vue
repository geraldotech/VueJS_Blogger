<template>
  <div>
    <!-- ONLY SHOW != Home Page -->
    <nav
      class="top-nav"
      v-if="$route.name != 'Home Page'">
      <section class="menu">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <!--  
        <li>         <router-link :to="{ name: `projects` }">Projects</router-link>
        </li> -->
        <li>
          <router-link :to="{ name: 'Blog Posts' }">Blog</router-link>
        </li>
        <!--  <li>
          <router-link :to="{ name: `about` }">About</router-link>
        </li> -->
      </section>
      <section class="top-nav_search__icon">
        <!--   <img
          @click="isModalVisible = !isModalVisible"
          src="./src/assets/icons/searchsvg.svg"
          alt="search icon" /> -->
        <svg
          @click="isModalVisible = !isModalVisible"
          viewBox="0 0 24 24"
          height="24"
          width="24"
          preserveAspectRatio="xMidYMid meet"
          version="1.1"
          x="0px"
          y="0px"
          enable-background="new 0 0 24 24">
          <title>search-alt</title>
          <path
            fill="currentColor"
            d="M15.9,14.3H15L14.7,14c1-1.1,1.6-2.7,1.6-4.3c0-3.7-3-6.7-6.7-6.7S3,6,3,9.7 s3,6.7,6.7,6.7c1.6,0,3.2-0.6,4.3-1.6l0.3,0.3v0.8l5.1,5.1l1.5-1.5L15.9,14.3z M9.7,14.3c-2.6,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6 s4.6,2.1,4.6,4.6S12.3,14.3,9.7,14.3z"
            data-darkreader-inline-fill=""
            style="--darkreader-inline-fill: currentColor"></path>
        </svg>
      </section>
    </nav>

    <!-- ONLY SHOW IN HOME PAGE -->
    <nav
      class="top-homepage"
      v-if="$route.name == 'Home Page'">
      <li class="logo">
        <a href="/">GPX</a>
      </li>
      <div
        class="items_menu"
        @click="clickCloseMenu">
        <li>
          <a href="#projects">Projetos</a>
        </li>
        <li>
          <a href="#experiences">Experiência</a>
        </li>
        <li>
          <a href="#skills">Habilidades</a>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
        <li>
          <router-link
            :to="{ name: 'Blog Posts' }"
            @click.native="clickCloseMenu"
            >Blog</router-link
          >
        </li>
      </div>
      <label>
        <input
          type="checkbox"
          id="toggleMenu"
          @change="handleMenuChangeIcon"
          v-model="menustate" />
        <span class="menuicon">
          <i class="fa-solid fa-bars"></i>
        </span>
      </label>
    </nav>
    <!-- if route is HomePage not apply this class name, so HomePage gets full-width -->

    <!--  <main :class="($route.name = checkCurrentRouterApplyClass() ? '' : 'main')"> -->
    <main :class="currentRouterToApplyClass()">
      <router-view
        :key="$route.path"
        class="router-view"></router-view>

      <Modal
        v-show="isModalVisible"
        @close="closeModal">
        <template v-slot:header> </template>

        <template v-slot:body>
          <!-- click event and call fun to close modal -->
          <Searchauto
            v1
            @cancloseafterclick="toggleModal" />
        </template>

        <template v-slot:footer> This is a new modal footer. </template>
      </Modal>
      <!--  named  router-->
      <router-view
        name="homeBottom"
        class="named-views"></router-view>
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
      menustate: false,
    }
  },
  components: {
    Foot: httpVueLoader('/src/components/blog/Footer.vue'),
    Busca: httpVueLoader('/src/components/Search.vue'),
    Searchauto: httpVueLoader('../src/components/blog/SearchAuto.vue'),
    Modal: httpVueLoader('../src/components/blog/Modal.vue'),
  },
  methods: {
    clickCloseMenu() {
      this.menustate = !this.menustate

      // call handleMenuChange to changeIcon
      this.handleMenuChangeIcon()
    },
    showModal() {
      this.isModalVisible = true
    },
    closeModal() {
      this.isModalVisible = false
    },
    toggleModal() {
      this.isModalVisible = !this.isModalVisible
    },
    currentRouterToApplyClass() {
      const RouterNames = ['Home Page', 'OldHome']

      // if have not a named router
      const currentRouter = this.$route?.name ?? ''

      const result = RouterNames.some((val) => currentRouter.includes(val))
      if (!result) {
        return 'main'
      }
      return 'full-width'
    },
    handleMenuChangeIcon() {
      const menuicon = document.querySelector('.menuicon')
      menuicon.innerHTML = this.menustate ? `<i class="fa-solid fa-x"></i>` : `<i class="fa-solid fa-bars"></i>`
    },
  },
  watch: {
    $route(to, from) {
      // console.log(to)
      if (to.name == 'Blog Posts') {
        // alert(`Bem vindo ao Blog`)
      }
      // of to goingo Home and from from blog router
      if (to.name == 'Home Page' && from.path == '/blog') {
        // close menu
        this.menustate = !this.menustate
      }
    },
  },
}
</script>
<style>
:root {
  --maxw: auto; /* set max in footer either */
  --maxwmain: 90rem;

  --search-links-color: #05bdba;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}
body {
  min-width: 320px;
  background: #181818;
  color: #fff;
  line-height: 1.5;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
/* trick to keep footer on bottom and container get max-space */
.main {
  margin: 0 auto; /* before was body */
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-height: 100dvh;
}

.main a {
  color: #05bdba;
}
.main a:hover {
  text-decoration: none;
}

.main-post {
  min-height: 30vh;
}

.container {
  flex: 1;
  /* max-width: var(--maxw); */
}

/* VUE ROUTER-VIEW  */
.main > .router-view {
  padding-inline: 0.5rem;
  flex: 1;
  padding-block: 15px;
}
/* before existia .container thath wrapper the router-view o que será rederizado tbm pode ser selecionado com :first-child */
.container > :first-child {
  /*  border: 1px solid red; */ /* uncomment for test purpose */
}

#nprogress {
  position: relative;
  z-index: 9999999;
}

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
.top-nav_search__icon {
  cursor: pointer;
  width: 50px;
  display: flex;
}

.menu {
  display: flex;
  max-width: 550px;
  justify-content: space-evenly;
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

/* TOP HOME PAGE */
.top-homepage {
  display: flex;
  list-style-type: none;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 8vh;
  z-index: 3;
  background-color: #000000;
}

.top-homepage .items_menu {
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-family: 'Anta', sans-serif;
  gap: 2.8em;
  padding: 1rem;
}
.items_menu a {
  text-decoration: none;
  color: #878787;
  font-size: 1.3rem;
  padding: 1rem;
  &:hover {
    color: #fff;
  }
}
.top-homepage .logo {
  font-weight: 900;
  font-family: 'Anta', sans-serif;
  font-size: 2.5em;
  & a {
    text-decoration: none;
    color: #fff;
  }
}

#toggleMenu,
label:has(#toggleMenu) {
  display: none;
  cursor: pointer;
}
label i {
  font-size: 2rem;
}

@media (max-width: 900px) {
  label:has(#toggleMenu) {
    display: block;
  }
  .top-homepage {
    position: sticky;
    display: flex;
    top: 0;
    justify-content: space-between;
    padding-inline: 0.2rem;
  }
  .top-homepage .items_menu {
    position: absolute;
    top: 50px;
    z-index: 1;
    right: 0;
    flex-direction: column;
    justify-content: flex-start;
    overflow: hidden;
    gap: 3rem;

    /*   visibility: hidden;   
     */
    opacity: 0;
    height: 0;
    width: 100vw;
    transition: all 500ms ease-in-out;
  }

  /* === WHEN MENU IS CHECKED === */
  .top-homepage:has(#toggleMenu:checked) .items_menu {
    top: 8vh;
    height: 100vh;
    overflow: hidden;
    /*   
 visibility: visible;
    */
    background-color: #000000;
    transition: all 500ms linear;
    opacity: 1;
  }
}

/* === TOP HOME PAGE === */

/* === Desktop === */
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
  .main > .router-view {
    padding-inline: 0.5rem;
  }
}

button {
  padding: 5px 10px;
}

:target {
  scroll-margin-top: 100px;
}
</style>
