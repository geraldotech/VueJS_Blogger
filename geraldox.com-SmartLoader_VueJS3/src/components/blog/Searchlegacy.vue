<script>
import { ref, onMounted, computed } from 'vue'

export default {
  props: {
    v1: {
      type: Boolean,
    },
    v2: {
      type: Boolean,
    },
  },
  setup(props, { emit }) {
    const userInput = ref([])
    const blog = ref([])
    const results = ref('')
    const res = ref('')

    const posts = async () => {
      const req = await fetch('/src/db/data.json')
      const res = await req.json()
      blog.value = res.blog.posts
    }

    function search() {
      //faz a busca, compara os valores em maiusculas
      const busca = blog.value.filter((val) => val.title.toUpperCase().includes(userInput.value.toUpperCase()))
      //console.warn(busca.length ? busca : "404");

      results.value = busca
      //busca.length ? (this.results = busca) : this.not == true;
      if (!results.value.length) {
        res.value = 'We are sorry, 404'
      } else {
        res.value = `Showing ${results.value.length} results for "${userInput.value}"`
      }
    }

    function onClickSearch() {
      
      this.$router.push({
        name: 'threads',
        params: { category: ca, slug: sl },
      })
      /*  this.$router.go({
        name: "threads",
        params: { category: "android", slug: "post-one" },
      }); */
      // this.$router.go({ path: "/blog/android/post-one" });
      this.$router.go({
        name: 'threads',
        params: { category: ca, slug: sl },
      })
    }

    const findedResults = computed(() => {
      return results.value.length > 0
    })

    onMounted(() => {
      posts()
    })

    return { userInput, search, findedResults, onClickSearch, results, res }
  },
}
</script>
<template>
  <div class="search">
    <form @submit.prevent="search">
      <input
        name=""
        type="text"
        v-model="userInput"
        placeholder="search for posts"
        required />
      <input
        type="submit"
        value="Search" />
    </form>
    <!--  usar v-if with computed -->
    <p
      class="resultsok"
      v-if="findedResults">
      Encontrei {{ results.length }} para: `{{ userInput }}`
    </p>

    <p>{{ res }}</p>

    <ul
      v-for="items in results"
      :key="items.id"
      class="results_links">
      <li v-show="v1">
        <router-link
          :to="{
            name: 'threads',
            params: { category: items.category, slug: items.slug },
          }">
          {{ items.title }} - {{ items.data }}</router-link
        >
      </li>
      <li v-show="v2">
        <button
          class="btnv2"
          @click="onClickSearch(items.category, items.slug)">
          {{ items.title }} - {{ items.data }}
        </button>
      </li>
    </ul>
  </div>
</template>

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
.search .resultsok {
  color: #0044b3;
}
.search li {
  text-align: left;
  list-style-type: square;
}

button.btn,
.search li a {
  color: var(--links-color); /* var in App.vue */
  font-size: 1.2rem;
}
.search li {
  border-bottom: none;
}
.search button {
  text-align: left;
  cursor: pointer;
  background: none;
  outline: none;
  border: none;
  margin: 10px 0;
  font-size: 14px;
  font-weight: bold;
  color: var(--links-color);
}
.search .btnv2:hover {
  color: rgb(68, 186, 246);
}

.search input[type='submit'] {
  cursor: pointer;
  text-align: center;
  font-size: 16px;
  background: #0044b3;
  padding: 5px 10px;
  border: none;
  opacity: 0.8;
}

.results_links {
  margin-top: 5px;
  max-width: 500px;
  min-width: 320px;
  margin: 0 auto;
  text-align: center;
  background: rgb(0, 54, 143);
  border: 1px solid;
}
.results_links li {
  text-align: left;
  list-style: none;
  padding: 0;
  color: var(--links-color);
}

.results_links li a {
  color: var(--links-color);
}

form input {
  padding: 5px;
}
input[type='submit'] {
  cursor: pointer;
}
input[type='text'] {
  width: 50%;
}

/* for mobile */
@media screen and (max-width: 550px) {
  .search input[type='text'] {
    width: 70% !important;
  }
}
</style>
