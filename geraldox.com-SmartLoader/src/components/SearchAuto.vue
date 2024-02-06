<template>
  <div class="search">
    <!-- v1 starts -->
    <div v-show="v1" class="formparent">
      <form @submit.prevent="search" @input="AutoSeach">
        <input
          name=""
          type="text"
          v-model="userInput"
          placeholder="What do you need?"
          required />
        <span class="btn-close" @click="$emit('cancloseafterclick')">X</span>
        <!-- autosearch v1 for blog.vue -->
        <p v-if="autoResults">
          About: {{ autoResults.length }} results for: `{{ userInput }}`
        </p>
      </form>
    </div>

    <ul v-show="v1" class="containerResults">
      <li v-for="autosearch in autoResults" :key="autosearch.id">
        <router-link
          class="results_links"
          :to="{
            name: 'threads',
            params: { category: autosearch.category, slug: autosearch.slug },
          }"
          @click.native="
            $emit('cancloseafterclick')
            cleanInput()
          ">
          <!-- in routerLink emit a event function to parent -->
          {{ autosearch.title.substring(0, 20) }}... - {{ autosearch.data }}
        </router-link>
      </li>
      <h1>{{ Message }}</h1>
    </ul>
    <!-- v1 ends -->

    <!-- v2 starts -->
    <div v-show="v2" class="v2">
      <form @submit.prevent="search" @input="AutoSeach">
        <input
          name=""
          type="text"
          v-model="userInput"
          placeholder="What do you need?"
          required />

        <!-- autosearch v1 for blog.vue -->
        <p v-if="autoResults">
          About: {{ autoResults.length }} results for: `{{ userInput }}`
        </p>
      </form>

      <ul>
        <li v-for="autosearch in autoResults" :key="autosearch.id">
          <!-- emit a ser detectado no App.vue call fun close Modal -->
          <router-link
            class="results_links"
            :to="{
              name: 'threads',
              params: { category: autosearch.category, slug: autosearch.slug },
            }"
            @click.native="
              $emit('cancloseafterclick')
              cleanInput()
            ">
            <!-- in routerLink emit a event function to parent -->
            {{ autosearch.title.substring(0, 20) }}... - {{ autosearch.data }}
          </router-link>
        </li>
        <h1>{{ Message }}</h1>
      </ul>
    </div>
    <!-- v2 ends -->
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
    v1: Boolean, // v1 for @click show modal search, contains CSS class
    v2: Boolean, // v2 for autosearch always show input, few CSS class
  },
  methods: {
    async posts() {
      const req = await fetch('/src/db/data.json')
      const res = await req.json()
      this.blog = res.blog.posts
    },
    /* clean current last input and old results */
    cleanInput() {
      this.userInput = ''
      this.autoResults = [] //  clean
    },
    AutoSeach() {
      // check input has values >1
      if (this.userInput.length > 1) {
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

.results_links {
  display: block;
  margin-top: 10px;
  max-width: 500px;
  min-width: 320px;
  margin: 5px auto;
  text-align: left;
}
.results_links li {
  text-align: left;
  list-style: square;
  padding: 0;
  color: var(--search-links-color);
}

.results_links li a {
  color: var(--search-links-color); /* var in App */
}

.search .formparent form {
  position: fixed;
  top: 60px;
  max-width: 40%; /* same modal */
  width: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  min-height: 90px;
  background: rgba(0, 0, 0, 0.8);
  margin: 5px 0 25px;
  border-radius: 10px;
}

form input:focus {
  outline: 2px solid #05bdba;
}

.search form input[type='text'] {
  background-image: url('https://geraldox.com/src/assets/icons/searchsvg.svg');
  max-width: 100%;
  width: 100%;
  background-size: 25px;
  background-repeat: no-repeat;
  background-position-y: 2.5px;
  border: none;
  padding: 8px 10px;
  padding-inline: 25px;
  border: 1px solid #eee;
  border-radius: 6px;
}

.search .containerResults {
  margin: 50px auto 30px;
  padding: 10px;
  position: absolute;
  overscroll-behavior: smooth;
  width: 100%;
}

.btn-close {
  cursor: pointer;
  font-weight: bold;
  color: red;
  padding-inline: 10px;
  margin-block: 2.5px;
  display: flex;
  justify-content: flex-end;
}

/* for mobile */
@media screen and (max-width: 750px) {
  .search input[type='text'] {
    width: 90%;
    height: 40px;
  }

  form input[type='text'] {
    max-width: 100% !important;
    width: 100% !important;
  }
  form {
    max-width: 95% !important;
  }
}
</style>
