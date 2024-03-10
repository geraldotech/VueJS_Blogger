<template>
  <div>
    <h2>Search Constructor - Advanced Search</h2>
    <label for="opt">Categoria:</label>
    <select
      id="opt"
      v-model="searchCat">
      <option
      name="all"
      value="all"
        selected>All Categorias</option>
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
      placeholder="post title"
      required />
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
    /* mounted call fetch to get auto api data  */
    this.fetchData()
    /*     console.log(this.$route.query.category ?? null)
    console.log(this.$route.query.hasOwnProperty('category')) */
   
  },
  data() {
    return {
      searchCat: 'all',
      searchTitle: '',
      rawData: [],
      filteredPosts: '',
    }
  },
  methods: {
    navigateToHandlerFilter() {
      if (this.searchTitle === '') {
        return alert('digite alguma coia')
      }
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
            /* IF SEARCHCAT SEARCH BY CAT AND TITLE ELSE SEARCH ALL CATEGORIOS BY TITLE */
            (this.filteredPosts = response.data?.blog.posts.filter((post) =>  this.searchCat != 'all' ? post.category == this.$route.query.category && post.title.toLowerCase().includes(this.$route.query.title) :  post.title.toLowerCase().includes(this.$route.query.title) ))
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
        category:  this.searchCat,
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
    searchCat(){   
     console.log( this.searchCat)
    }
  },
}
</script>

<style scoped>
ul {
  padding: 1.5rem;
}
ul li {
  padding-block: 0.5rem;
}
input,
select {
  padding: 0.2rem;
}
</style>
