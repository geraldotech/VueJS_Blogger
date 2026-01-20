<script setup>
import { onMounted, ref, watch, defineProps } from 'vue'
defineProps({
  v1: {
    type: Boolean,
    // required: true
  },
  v2: {
    type: Boolean,
    // required: true
  },
})

const blog = ref([])
const userInput = ref('')
const results = ref('')
const autoResults = ref([])
const message = ref('')

async function posts() {
  const req = await fetch('/src/db/data.json')
  const res = await req.json()
  blog.value = res.blog.posts
}
/* clean current last input and old results */
function cleanInput() {
  userInput.value = ''
  autoResults.value = [] //  clean
}
/**
 * @see DO SEARCH
 * @author GeraldoDev
 * @since Jan, 20, 2026
 * @return posts published == true e que include o criterio de busca
 * Fast filter for published posts whose titles include the current query
 */
function autoSearch() {
  const userQuery = (userInput.value || '').trim()
  if (userQuery.length <= 1) {
    message.value = '' // clean
    autoResults.value = [] //  clean
    return
  }

  //  autoResults.value = blog.value.filter((val) => val.title.toUpperCase().includes(userInput.value.toUpperCase()) && val.published)

  /**
   * Hoist the normalized query once (const query = ...) instead of recalculating it for every item, so there’s less string work and fewer temporary objects.
  
   * Using a simple for loop plus a preallocated matches array is cheaper than filter because filter creates a new array internally and still runs through every item with a callback invocation per element.
   * In your case the loop lets you short-circuit cheap checks (if (!post.published) continue) without additional callback overhead.
   */
  const query = userQuery.toUpperCase()
  const matches = []

  for (const post of blog.value) {
    if (!post.published) continue
    const title = (post.title || '').toUpperCase()
    if (title.includes(query)) matches.push(post)
  }

  autoResults.value = matches
  message.value = matches.length ? '' : 'Not Found'
}

onMounted(() => {
  posts()
})
</script>
<template>
  <div class="search">
    <!-- v1 starts -->
    <!-- autosearch v1 for blog.vue -->
    <div
      v-show="v1"
      class="formparent">
      <form
        @submit.prevent="search"
        @input="autoSearch">
        <input
          type="text"
          v-model="userInput"
          placeholder="What do you need?"
          required />
        <span
          class="btn-close"
          @click="$emit('cancloseafterclick')"
          >X</span
        >
        <!-- addto -->
        <p v-if="autoResults.length > 1">About: {{ autoResults.length }} results for: `{{ userInput }}`</p>
      </form>
    </div>

    <!-- in routerLink emit a event function to parent -->
<!--     <ul
      v-show="v1"
      class="containerResults">
      <li
        v-for="autosearch in autoResults"
        :key="autosearch.id">
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
          {{ autosearch.title.substring(0, 30) }}... - {{ autosearch.data }}
        </router-link>
      </li>
      <h1>{{ message }}</h1>
    </ul> 
    <!-- v1 ends -->

    <!-- v2 starts -->
    <div
      v-show="v2"
      class="v2">
      <form
        @submit.prevent="search"
        @input="autoSearch">
        <input
          name=""
          type="text"
          v-model="userInput"
          placeholder="What do you need?"
          required />

        <!-- autosearch v1 for blog.vue -->
        <p v-if="autoResults.length">About: {{ autoResults.length }} results for: `{{ userInput }}`</p>
      </form>

      <ul>
        <li
          v-for="autosearch in autoResults"
          :key="autosearch.id">
          <!-- emit a ser detectado no App.vue call fun close Modal -->
          <router-link
            class="results_links"
            :to="{
              name: 'threads',
              params: { category: autosearch.category, slug: autosearch.slug },
            }"
            @click.native="$emit('cancloseafterclick'), cleanInput()">
            <!-- 
              @click.native="
              $emit('cancloseafterclick')
              cleanInput()
            "
             -->
            <!-- in routerLink emit a event function to parent -->
            {{ autosearch.title.substring(0, 20) }}... - {{ autosearch.data }}
          </router-link>
        </li>
        <h1>{{ message }}</h1>
      </ul>
    </div>
    <!-- v2 ends -->
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

.search .formparent {
  position: relative;
}

.search .formparent form {
  position: absolute;
  top: 13px;
  max-width: 100%; /* same modal */
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
  background-color: #333;
  border-radius: 6px;
  color: #fff;
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
    height: 40px;
  }

  form input[type='text'] {
    max-width: 100% !important;
    width: 100% !important;
  }
  form {
    max-width: 100% !important;
  }
}
</style>
