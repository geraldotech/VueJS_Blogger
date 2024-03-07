<template>
  <div>
    <h2>Search Constructor - Advanced Search</h2>
    <label for="opt">Categoria:</label>
    <select
      id="opt"
      v-model="searchCat">
      <option
        value=""
        disabled></option>
      <option value="android">Android</option>
      <option value="developer">Developer</option>
      <option value="drivers">Drivers</option>
      <option value="linux">Linux</option>
      <option value="network">Network</option>
      <option value="windows">Windows</option>
    </select>
    <input
      type="search"
      v-model="searchTitle"
      placeholder="post title" />
    <input
      type="button"
      value="Search"
      @click="navigateToHandlerFilter" />

    <ul>
      <li
        v-for="single in filteredPosts"
        :key="single.id">
        <router-link :to="{ name: 'threads', params: { category: single.category, slug: single.slug } }">
          {{ single.title }}
        </router-link>
      </li>
    </ul>

    <!-- <h2>{{handlerFilter}}</h2> -->
  </div>
</template>

<script>
const API = '../src/db/data.json'

module.exports = {
  mounted() {
    this.fetchData()
    console.log(this.$route.query.category ?? null)
    console.log(this.$route.query.hasOwnProperty('category'))
  },
  data() {
    return {
      searchCat: '',
      searchTitle: '',
      rawData: [],
      filteredPosts: '',
    }
  },
  methods: {
    navigateToHandlerFilter() {
      window.location.href = this.handlerFilter

      this.fetchData()
    },
    /* VAI FAZER O FETCH QUANDO FOR REQUISITADO */
    fetchData() {
      axios
        .get(API)
        .then(
          (response) =>
            //console.log(response.data.blog.posts)
            (this.filteredPosts = response.data?.blog.posts.filter((post) => post.category == this.$route.query.category && post.title.toLowerCase().includes(this.$route.query.title)))
        )
        .catch((error) => {
          console.error('Error fetching data:', error)
        })
    },
  },
  computed: {
    handlerFilter() {
      const producOrDevMode = location.port != ''
      const baseURL = producOrDevMode ? 'index.html#/blog/searchconstructor' : 'https://geraldox.com/blog/searchconstructor'

      const queryParams = {
        category: this.searchCat,
        title: this.searchTitle,
      }
      const queryParamsDone = new URLSearchParams(queryParams).toString()
      return `${baseURL}?${queryParamsDone}`
    },
  },
  watch: {
    $route(to, from) {
      console.log(`to`, to)
      console.log(`from`, from)
    },
  },
}
</script>

<style scoped>
ul {
  padding: 1.5rem;
}
ul li {
  padding-block: .5rem;
}
input, select{
  padding: .5rem;
}
</style>
