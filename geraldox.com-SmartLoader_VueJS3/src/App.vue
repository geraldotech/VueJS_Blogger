<script setup lang="jsx">
/* import Foo from '../src/components/footer.vue'
import MyHeader from '../src/components/Header.vue' */
</script>

<template>
  <div>
    <nav
      class="top-homepage">
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
           />
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
</style>
