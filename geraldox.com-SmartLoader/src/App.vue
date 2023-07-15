<template>
  <div>
    <nav>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link :to="{name: `projects`}">Projects</router-link>
        </li>  
      <li>
        <router-link :to="{name: 'Blog Posts'}">Blog</router-link>
      </li>    
      <li>
        <router-link :to="{name: `about`}">About</router-link>
        </li>  
    </nav>
     <!-- <hr /> -->
    <!-- <div>  <Busca/></div> -->
   <section>
      <router-view></router-view>
    <!--  router named -->
   <router-view name="yt" class="named-views"></router-view>
   </section>
  
    <Foot>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {};
  },
  components: {
    Foot: httpVueLoader("./components/Footer.vue"),
    Busca: httpVueLoader("./components/Search.vue"),
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

/* for desktop */
@media screen and (min-width: 650px) {
  /* only desktop is upperCase menu */
  nav a {
    text-transform: uppercase;
  }
}
</style>
