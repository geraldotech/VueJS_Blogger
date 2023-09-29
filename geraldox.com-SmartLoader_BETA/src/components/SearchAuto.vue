<template>
  <div class="search">
    <form @submit.prevent="search" @input="AutoSeach">
      <input
        name=""
        type="text"
        v-model="userInput"
        placeholder="Search"
        required
      />
    </form>

    <!-- autosearch v1 for blog.vue -->
    <p v-if="autoResults">
      About: {{ autoResults.length }} results for `{{ userInput }}`
    </p>
    <ul v-show="v1" class="containerResults">
      <li v-for="autosearch in autoResults" :key="autosearch.id">
        <router-link
          class="results_links"
          :to="{
            name: 'threads',
            params: { category: autosearch.category, slug: autosearch.slug },
          }"
        >
          {{ autosearch.title.substring(0, 20) }}... - {{ autosearch.data }}
        </router-link>
      </li>
    </ul>

    <!--  autosearch ends -->
    <h1>{{ Message }}</h1>
  </div>
</template>
<script>
module.exports = {
  created() {
    this.posts()
  },
  data() {
    return {
      userInput: '',
      blog: [],
      results: '',
      autoResults: '',
      Message: '',
    }
  },
  props: {
    v1: Boolean, // v1 for blog.vue
  },
  methods: {
    async posts() {
      const req = await fetch('/src/db/data.json')
      const res = await req.json()
      this.blog = res.blog.posts
    },
    AutoSeach() {
      // check input has values
      if (this.userInput.length) {
        const Search = this.blog.filter((val) =>
          val.title.toUpperCase().includes(this.userInput.toUpperCase())
        )
        this.autoResults = Search

        if (!this.autoResults.length) {
          this.Message = 'Not Found'
          this.autoResults = []
        } else {
          this.Message = ''
        }
      }
      // !this.userInput.length
      if (!this.userInput.length) {
        this.Message = '' // clean
        this.autoResults = [] //  clean
      }
      /*  console.warn('input vazia?', !this.userInput.length) //true
      console.warn('input igual a 0?', this.userInput.length == 0) //true
      console.warn('input has  length a 0?', this.userInput.length) //true */
    },
  },
  computed: {},
}
</script>
<style scoped>
.search {
  border-bottom-width: 10%;
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serifs;
}

.search p {
  color: rgb(129, 247, 148);
  margin: 15px 0;
}

.search li {
  text-align: left;
  list-style-type: none;
}

.search li a {
  color: var(--search-links-color); /* var in App.vue */
  font-size: 1.2rem;
}
.search li {
  border-bottom: none;
  margin: 10px 0;
}

.search form {
  margin: 25px 0 25px;
}

.results_links {
  display: block;
  margin-top: 5px;
  max-width: 500px;
  min-width: 320px;
  margin: 5px auto;
  text-align: left;
}
.results_links li {
  text-align: left;
  list-style: square;
  padding: 0;
  color: var(--links-color);
}

.results_links li a {
  color: var(--links-color);
}

form input {
  padding: 8px 10px;
  border: 1px solid #eee;
  border-radius: 6px;
}

form input:focus {
  outline: 2px solid #05bdba;
}

input[type='text'] {
  width: 50%;
}

.search .containerResults {
  max-width: 400px;
  margin: 20px auto 30px;
  padding: 0;
}

/* for mobile */
@media screen and (max-width: 550px) {
  .search input[type='text'] {
    width: 80%;
  }
}
</style>
