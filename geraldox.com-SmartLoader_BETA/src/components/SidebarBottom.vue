<template>
  <!-- avoid show if not has related posts -->
  <div class="sidebottom">
    <p>By: <router-link to="/about">Geraldo Filho</router-link></p>
    <p>A Frontend Developer with more than half a decade of experience.</p>
    <h1>
      More from
      <router-link
        class="category"
        :to="`/categories/${$route.params.category}`"
        >{{ $route.params.category }}</router-link
      >:
    </h1>

    <section v-if="RelatedPosts.length">
      <ul>
        <li v-for="postrela in RelatedPosts" :key="postrela.id">
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

<script>
module.exports = {
  props: {
    allposts: {
      type: Array,
    },
  },
  data() {
    return {}
  },
  methods: {},
  computed: {
    RelatedPosts() {
      // 1.pega somente os posts com a categoria da rota atual informado by props
      // 2.inves de ter duas props 1 para cat e outra para todos os posts, pode ter apenas uma com todos os posts, a categoria atual pode ser acessada por router.params.category

      // show show show de success!! filter somente posts cat atual && exclua o post da rota atual, isso evita exibir o mesmo link para a pagina atual
      const OnlyPostRalated = this.allposts.filter(
        (cat) =>
          cat.category == this.$route.params.category &&
          !cat.slug.includes(this.$route.params.slug)
      )
      return OnlyPostRalated
    },
  },
  watch: {},
}
</script>

<style scoped>
div {
  height: 320px;
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
  height: 50px;
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
