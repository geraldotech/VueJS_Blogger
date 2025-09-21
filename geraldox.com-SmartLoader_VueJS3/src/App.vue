<script setup>
/* import Foo from '../src/components/footer.vue'
import MyHeader from '../src/components/Header.vue' */
import { ref, watch, onMounted, defineComponent } from 'vue'
const content = ref('')

onMounted(() => {})
</script>

<template>
  <div class="app__wrapper">
    <nav class="top-homepage">
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
          id="toggleMenu" />
        <span class="menuicon">
          <i class="menuiconelement fa-solid fa-bars"></i>
        </span>
      </label>
    </nav>

    <router-view></router-view>
  </div>
</template>

<style>
* {
  color-scheme: dark;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.hello {
  background-color: rgb(31, 31, 13);
  color: white;
}

h4 {
  color: orange;
}

ul li,
p {
  color: dodgerblue;
}
.top-homepage {
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background-color: #3e2773;
  padding: 10px;
}


html,
body {
  margin: 0;
  padding: 0;
}

.items_menu {
  display: flex;
  flex-basis: 650px;
  width: 100%;
  justify-content: space-between;
  & li {
    list-style: none;
    color: #000;
  }
  & li:hover{
  color: #120f19;    
  }
}

/* BLOGGER */
.single_post {
  display: flex;
  /* margin: 5px 15px; */ /* margin do body posts, now get margin from .main parent */
}
.article:first-letter,
.single_post article > p:first-letter {
  /*  font-size: 2.6rem; */
  margin-left: 1rem;
}

.single_post h2 {
  padding: 10px 0;
}
.single_post ul {
  margin-top: 20px;
  padding-left: 15px;
}

/* for desktop */
@media screen and (min-width: 990px) {
  .single_post {
    display: flex;
    margin-top: 10px;
    gap: 20px;
  }
  /* controla largura */
  .single_post main {
    flex: 1 0 80%;
  }
  article h1 {
    font-size: 2em;
  }
  .single_post {
    margin: 0; /* margin do body posts */
  }
}
</style>
