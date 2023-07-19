<template>
  <div>
    <nav>
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
    <!-- <hr /> -->
    <!-- <div>  <Busca/></div> -->
    <section>
      <router-view></router-view>
      <!--  router named -->
      <router-view name="yt" class="named-views"></router-view>
    </section>

    <Foot />
  </div>
</template>

<script>
module.exports = {
  data() {
    return {};
  },
  components: {
    Foot: httpVueLoader("/src/components/Footer.vue"),
    Busca: httpVueLoader("/src/components/Search.vue"),
  },
};
</script>
<style>
:root {
  --maxw: 75rem;
  color-scheme: dark;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
body {
  min-width: 320px;
  max-width: var(--maxw);
  margin: 0 auto;
  min-height: 100vh;
}

nav {
  display: flex;
  max-width: var(--maxw);
  justify-content: space-evenly;
  width: 100%;
  padding: 15px 5px;
  position: sticky;
  top: 0;
  background: rebeccapurple;
  border-bottom: 2px solid #fff;
}
nav li {
  list-style: none;
}

nav a {
  text-decoration: none;
  background: rgb(29, 27, 27);
  padding: 5px 20px;
  border-radius: 5px;
}
section {
  max-width: var(--maxw);
}
/* class named views */
.named-views {
  text-align: center;
  padding: 10px 0;
  border-bottom: 1px solid red;
}
.block {
  font-size: 1.2rem;
  text-align: center;
  min-height: 80vh;
  margin-top: 20px;
}
/* routes CSS */
.router-link-active {
  color: green;
}

/* for post images */
figure:has(figcaption) {
  text-align: center;
  color: white;
}
figure:has(img) {
  text-align: center;
  margin: 0 auto;
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

/* for desktop */
@media screen and (min-width: 650px) {
  nav a {
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
