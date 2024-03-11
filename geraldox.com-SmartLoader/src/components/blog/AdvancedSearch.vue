<template>
  <div>
    <section>
      <h1>Advanced Search Constructor</h1>
      <label for="opt">Category:</label>
      <select
        id="opt"
        v-model="searchCat">
        <option
          name="all"
          value="all"
          selected>
          All Categories
        </option>
        <option
          v-for="cat in getCategories(allPosts)"
          :value="cat"
          :key="cat.id">
          {{ cat.split('')[0].toUpperCase() + cat.slice(1) }}
        </option>
      </select>
     <div class="inputs">
       <input
        type="search"
        v-model="searchTitle"
        placeholder="type 2 characters a key..."
        @keyup.enter="navigateToHandlerFilter"
        required />
      <input
        type="button"
        value="Search"
        @click="navigateToHandlerFilter" />
     </div>
    </section>

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
  created() {},
  mounted() {
    console.log(document.title)
    this.fetchData()
    /*     console.log(this.$route.query.category ?? null)
    console.log(this.$route.query.hasOwnProperty('category')) */
  },
  data() {
    return {
      searchCat: 'all',
      searchTitle: '',
      filteredPosts: '',
      allPosts: [],
    }
  },
  methods: {
    /* === filter category and titles === */
    performFilter() {
      const getCatandTitlePosts = this.allPosts.filter((post) => post.category == this.$route.query?.category && post.title.toLowerCase().includes(this.$route.query.title))

      return (this.filteredPosts = getCatandTitlePosts)
    },
    /* === filter onclick by category and title */
    navigateToHandlerFilter() {
      /* void return all posts if empy */
      if (this.searchTitle.length < 2) {
        return alert('type anything')
      }

      // This will also update the URL without reloading the page.
      window.history.pushState({}, '', this.builtUrlParams)

      if (this.searchCat == 'all') {
        const handleFilterAll = this.allPosts.filter((post) => post.title.toLowerCase().includes(this.searchTitle.toLowerCase()))
        return (this.filteredPosts = handleFilterAll)
      }
      /* IF SEARCH CAT SEARCH BY CAT AND TITLE ELSE SEARCH ALL CATEGORIOS BY TITLE */
      const handleFilter = this.allPosts.filter((post) => post.category == this.searchCat && post.title.toLowerCase().includes(this.searchTitle.toLowerCase()))

      return (this.filteredPosts = handleFilter)
      //: post.title.toLowerCase().includes(this.$route.query.title)
    },
    fetchData() {
      axios
        .get(API)
        .then(
          (response) => {
            this.allPosts = response.data?.blog.posts // get all categorios
            this.performFilter()
          }
          //console.log(response.data.blog.posts)
        )
        .catch((error) => {
          console.error('Error fetching data:', error)
        })
    },
    getCategories(posts) {
      const getCatego = posts.map((val) => val.category)

      //🔢 contar n de categories values + ordenar com sort()
      const counter = getCatego.sort().reduce((cont, item) => ((cont[item] = cont[item] + 1 || 1), cont), {})
      return Object.keys(counter)
    },
  },
  computed: {
    builtUrlParams() {
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
ul,
section {
  padding: 1.5rem;
}
section {
  text-align: center;
  & h1 {
    margin-block: 1rem;
  }
  .inputs{
    margin-top: 1rem;
  }
}

ul li {
  padding-block: 0.5rem;
}
input,
select {
  padding: 0.2rem;
}
</style>
