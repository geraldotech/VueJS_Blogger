<template>
  <div>
    <h2>Advanced Search Constructor</h2>
    <label for="opt">Categoria:</label>
    <select
      id="opt"
      v-model="searchCat">
      <option
        name="all"
        value="all"
        selected>
        All Categorias
      </option>
      <option v-for="cat in getCategories(allPosts)" :value="cat" :key="cat.id">
        {{cat.split('')[0].toUpperCase() + cat.slice(1)}}
      </option>
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

    
  </div>
</template>

<script>
const API = '../src/db/data.json'

module.exports = {
  created(){
  },
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
      allPosts: [],
    }
  },
  methods: {
    navigateToHandlerFilter() {
      if (this.searchTitle === '') {
        return alert('type something')
      }
     window.history.pushState({}, '', this.handlerFilter);


      this.fetchData()

      /* IF SEARCH CAT SEARCH BY CAT AND TITLE ELSE SEARCH ALL CATEGORIOS BY TITLE */
      this.filteredPosts = this.allPosts.filter((post) =>
        this.searchCat != 'all' ? post.category == this.$route.query.category && post.title.toLowerCase().includes(this.$route.query.title) : post.title.toLowerCase().includes(this.$route.query.title)
      )
    },
    /* FAZER O FETCH QUANDO FOR REQUISITADO */
    fetchData() {
      axios
        .get(API)
        .then(
          (response) =>
            //console.log(response.data.blog.posts)

            (this.allPosts = response.data?.blog.posts)
        )
        .catch((error) => {
          console.error('Error fetching data:', error)
        })
    },
    getCategories(posts){
      const getCatego = posts.map((val) => val.category)

      //🔢 contar n de categories values + ordenar com sort()
      const counter = getCatego.sort().reduce((cont, item) => ((cont[item] = cont[item] + 1 || 1), cont), {})
      return Object.keys(counter)
    }
  },
  computed: {
    handlerFilter() {
      const producOrDevMode = location.port != ''
      const baseURL = producOrDevMode ? `index.html#/blog/${this.$route.name}` : 'https://geraldox.com/blog/advancedsearch'

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
    searchCat() {
      //console.log(this.searchCat)
    },
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
