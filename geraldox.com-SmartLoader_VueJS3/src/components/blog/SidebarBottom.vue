<script>
import { ref, computed } from 'vue'
export default {
  props: {
    allposts: {
      type: Array,
    },
  },
  setup(props, { emit }) {
    // Route
    const useRoute = VueRouter.useRoute()

    const RelatedPosts = computed((val) => {
      // 1.pega somente os posts com a categoria da rota atual informado by props: allprops
      // 2.inves de ter duas props 1 para cat e outra para todos os posts, pode ter apenas uma com todos os posts, a categoria atual pode ser acessada por router.params.category

      // show show show de success!! filter somente posts cat atual && exclua o post da rota atual, isso evita exibir o mesmo link para a pagina atual
      const OnlyPostRelated = props.allposts.filter((cat) => cat.category == useRoute.params.category && !cat.slug.includes(useRoute.params.slug))
      // set a limit posts
      return OnlyPostRelated.slice(0, 4)
    })

    return { RelatedPosts }
  },
}
</script>

<template>
  <!-- avoid show if not has related posts -->
  <div class="sidebottom">
    <p>By: <router-link to="/about">Geraldo Filho</router-link></p>
    <p>A Frontend Developer with more than half a decade of experience, I write about the things I like. Coding, tech writing, Linux, Android, Windows and other tech stuff...</p>
    <h3>
      More from
      <router-link
        class="category"
        :to="{ name: 'category', params: $route.params.category }"
        >{{ $route.params.category }}</router-link
      >:
    </h3>
    <section v-if="RelatedPosts.length">
      <ul>
        <li
          v-for="postrela in RelatedPosts"
          :key="postrela.id">
          <router-link
            :to="{
              name: 'threads',
              params: { category: postrela.category, slug: postrela.slug },
            }"
            >{{ postrela.title.substring(0, 40) }}
          </router-link>
        </li>
      </ul>
    </section>
    <p v-else>No Related Posts!</p>
  </div>
</template>

<style scoped>
h3 {
  margin-block: 15px;
}
div {
  border-top: 1px solid;
  margin-top: 50px;
}

ul li {
  padding: 5px;
  margin-left: 10px;
}
div h1 {
  margin: 20px 0;
}
div p {
  background: rgb(34, 34, 34);
  padding: 5px;

  display: flex;
  gap: 5px;
  width: 100%;
  align-items: center;
}
.category {
  text-transform: uppercase;
  text-decoration: none;
}

@media (max-width: 650px) {
  .sidebottom p {
    font-size: 1rem;
  }
}
</style>
