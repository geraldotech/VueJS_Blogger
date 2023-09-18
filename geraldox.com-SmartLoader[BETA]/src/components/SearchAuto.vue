<template>
  <div class="search">
    <form @submit.prevent="search" @input="AutoSeach">
      <input
        name=""
        type="text"
        v-model="userInput"
        placeholder="search for posts"
        required
      />
    </form>

    <!-- autosearch v1 for blog.vue -->

    <p v-if="autoResults">
      About: {{ autoResults.length }} results for `{{ userInput }}`
    </p>
    <ul
      v-for="autoposts in autoResults"
      :key="autoposts.id"
      class="results_links"
    >
      <li v-show="v1">
        <p>showing v1</p>
        <router-link
          :to="{
            name: 'threads',
            params: { category: autoposts.category, slug: autoposts.slug },
          }"
        >
          {{ autoposts.title }} - {{ autoposts.data }}</router-link
        >
      </li>
      <!-- autosearch v2 for UserPost.vue starts -->
      <li v-show="v2">
        <p>showing v2</p>
        <button
          class="btnv2"
          @click="ClicktoRouterPush(autoposts.category, autoposts.slug)"
        >
          {{ autoposts.title }} - {{ autoposts.data }}
        </button>
      </li>
    </ul>

    <!--  autosearch ends -->

    <!-- <testing push> -->
    <!--  <a href="" @click.prevent="NewWay">TEST ROUTER</a>
    <router-link to="/blog/windows/test-alove-webcomponents"
      >Router About</router-link
    >
    <a @click="$router.back()">Back now</a> -->
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
      res: '',
    }
  },
  props: {
    v1: Boolean, //for blog-list_posts
    v2: Boolean, //inside blog_post
  },
  methods: {
    async posts() {
      const req = await fetch('/src/db/data.json')
      const res = await req.json()
      this.blog = res.blog.posts
    },
    ClicktoRouterPush(ca, sl) {
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
    },
    AutoSeach() {
      const Search = this.blog.filter((val) =>
        val.title.toUpperCase().includes(this.userInput.toUpperCase())
      )

      if (this.userInput.length) {
        Search != '' ? (this.autoResults = Search) : Search
        return
      }
      this.autoResults = ''
    },
    NewWay() {
      console.log(`ss`)
      this.$router.go({
        path: '/blog/windows/test-alove-webcomponents',
        to: '/blog/windows/test-alove-webcomponents',
      })
      /*   this.$router.push({
        //path: '/blog/windows/test-alove-webcomponents',
        to: '/blog/windows/test-alove-webcomponents',
      }) */
    },
  },
}
</script>
/* Global styles for this component */
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
