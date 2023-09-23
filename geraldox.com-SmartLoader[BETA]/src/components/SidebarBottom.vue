<template>
  <div>
    <h1>More from {{ currentcategory.category }}:</h1>

    <ul>
      <!-- <li v-for="post in onlyPostsCategory" :key="post.id">{{ post }}</li> -->
      <li v-for="relacionados in onlyPostsCategory" :key="relacionados.id">
        {{ relacionados.title }}
      </li>
    </ul>

    <ul>
      <li v-for="relac in onlyPostsCategory" :key="relac.id">
        <!--   <button
          class="btn results_links"
          @click="ClicktoRouterPush(relac.category, relac.slug)"
        >
          {{ relac.title.substring(0, 20) }}... - {{ relac.data }}
        </button> -->

        <hr />
        <router-link
          class="results_links"
          :to="{
            name: 'threads',
            params: { category: relac.category, slug: relac.slug },
          }"
        >
          {{ relac.title.substring(0, 20) }}... - {{ relac.data }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
module.exports = {
  props: {
    currentcategory: {
      type: Object,
    },
    allposts: {
      type: Array,
    },
  },
  data() {
    return {
      onlyPostsCategory: {},
    }
  },
  methods: {
    Filtro() {
      return (this.onlyPostsCategory = this.allposts.filter(
        (cat) => cat.category == this.currentcategory.category
      ))
    },
    ClicktoRouterPush(ca, sl) {
      this.$router.push({
        name: 'threads',
        params: { category: ca, slug: sl },
      })
      this.$router.go({
        name: 'threads',
        params: { category: ca, slug: sl },
      })
    },
  },
  watch: {
    /*  quando chegar dados chamar a fun */
    allposts() {
      if (this.allposts) {
        this.Filtro()
      }
    },
  },
}
</script>

<style scoped>
div {
  background: rgb(7, 10, 13);
  height: 350px;
  padding: 10px;
  margin-top: 20px;
}

.results_links {
  cursor: pointer;
}
</style>
