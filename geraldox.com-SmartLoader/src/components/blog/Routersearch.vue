<template>
  <div>
    <h1>Router Search</h1>
    <ul>
      <li>query params you can direct in get (url)</li>
      <li>axios to fetch data</li>
      <li>Testar individualmente</li>
    </ul>

    <h2>computed wait fetch and change state to return something</h2>
    <p><strong>blog/search?category=android</strong> <a href="https://geraldox.com/blog/search?category=android">click</a></p>
    <h3>{{ getPostsFromCategory }}</h3>

    

    <h2>method return a postid</h2>
    <p><strong>this.$route.query.postid</strong> Fecth post.id <a href="https://geraldox.com/blog/search?postid=2">click</a></p>

    <h3>{{ findById }}</h3>

<section>
      <h2>Search Constructor - Advanced Search</h2>
      <label for="opt">Escolha a categoria::</label>
      <select
        name=""
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

      <h2>
        <a :href="handlerFilter">{{ handlerFilter }}</a>
      </h2>
   

    <h2>Multiple queries category and title includes</h2>
    <p>Abre a possibilidade de compartilhar o link com alguém que vai receber os resultados na busca</p>
    <p><strong>/blog/search?category=network&title=ssl</strong> <a href="https://geraldox.com/blog/search?category=network&title=test">click</a></p>
    <h3>{{ getPostMultipleQueries }}</h3>

     </section>
  </div>
</template>

<script>
/* TESTING .. because this is a nested router */
const API = '../src/db/data.json'
/*

  Vue3 add query:
  https://v3.router.vuejs.org/guide/essentials/navigation.html


  get query:   <p>{{ $route.query }}</p>
*/
module.exports = {
  created() {
    console.log(this.$route)
  },
  mounted() {
    /* EXAMPLE 1 */

    axios
      .get(API)
      .then((response) =>
        //console.log(response.data.blog.posts)
        setTimeout(() => {
          this.allposts = response.data?.blog.posts
          this.state = true
        }, 2000)
      )
      .catch((error) => {
        console.error('Error fetching data:', error)
      })

    /* EXAMPLE 2 */
    this.fetchData()

    /* CAN CALL DIRECT OU CALL A FN */
    // this.fetchNative()
  },
  data() {
    return {
      allposts: null,
      state: false,
      rawData: [],
      categoryRes: [],
      findById: null,
      searchTitle: '',
      searchCat: null,
    }
  },
  methods: {
    /* === USE method to fetch and another to filter data  === */
    fetchData() {
      axios
        .get(API)
        .then((response) => {
          this.rawData = response.data?.blog.posts
          this.handlerFilterfromFN()
        })
        .catch((error) => {
          console.error('Error fetching data:', error)
        })
    },
    handlerFilterfromFN() {
      const postsById = this.rawData.find((post) => post.id == this.$route.query.postid)
      return (this.findById = postsById ?? '404 no POST')
    },
    async fetchNative() {
      await new Promise((response) => setTimeout(response, 2000))
      try {
        const req = await fetch(API)
        const data = await req.json()
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    },
    navigateToHandlerFilter() {
      window.location.href = this.handlerFilter
    },
  },

  /* === USE computed to get posts  === */
  computed: {
    getPostsFromCategory() {
      if (this.state) {
        //console.log(this.$route.query.category ?? 'no category')
        const postsByCategory = this.allposts?.filter((post) => post.category == this.$route.query.category)
        if (!postsByCategory.length) {
          return 'Nada encontrado!'
        }
        return postsByCategory
      }
      return 'Loading...'
    },
    getPostMultipleQueries() {
      return this.rawData?.filter((post) => post.category === this.$route.query.category && post.title.toLowerCase().includes(this.$route.query.title))
    },
    handlerFilter() {
      const producOrDevMode = location.port != ''
      const baseURL = producOrDevMode ? 'index.html#/blog/search' : 'https://geraldox.com/blog/search'

      const queryParams = {
        category: this.searchCat,
        title: this.searchTitle,
      }

      const queryParamsDone = new URLSearchParams(queryParams).toString()
      return `${baseURL}?${queryParamsDone}`
    },
  },
}
</script>

<style scoped>
div,
p {
  padding: 0.8rem;
}

strong {
  color: dodgerblue;
}

h2 {
  margin-block: 10px;
  border-bottom: 2px solid red;
}
ul {
  padding: 1rem;
}

h3 {
  color: #05bdba;
  font-family: monospace;
}

section {
  background-color: #333;
  padding: 1rem;
}
</style>
