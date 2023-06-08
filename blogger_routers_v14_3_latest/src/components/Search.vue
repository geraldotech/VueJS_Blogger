<template>
  <div class="search">
    <form @submit.prevent="search">
      <input
        name=""
        type="text"
        v-model="info"
        placeholder="Search box"
        required
      />
      <input type="submit" value="Search" />
    </form>

    <p>{{ res }}</p>
    <ul v-for="items in results" :key="items.id" class="results_links">
      <li v-show="v1">
        <router-link
          :to="{
            name: 'threads',
            params: { category: items.category, slug: items.slug },
          }"
        >
          {{ items.title }} - {{ items.data }}</router-link
        >
      </li>
      <li v-show="v2">
        <button class="btn" @click="clica(items.category, items.slug)">
          {{ items.title }} - {{ items.data }}
        </button>
      </li>
    </ul>
  </div>
</template>
<script>
module.exports = {
  created() {
    this.posts();
  },
  data() {
    return {
      info: "",
      blog: [],
      results: "",
      res: "",
    };
  },
  props: {
    v1: Boolean, //for blog-list_posts
    v2: Boolean, //inside blog_post
  },
  methods: {
    async posts() {
      const req = await fetch("./src/db/data.json");
      const res = await req.json();
      console.log(res);
      this.blog = res.blog.posts;
    },
    search: function () {
      //faz a busca, compara os valores em maiusculas
      const busca = this.blog.filter((val) =>
        val.title.toUpperCase().includes(this.info.toUpperCase())
      );
      //console.warn(busca.length ? busca : "404");

      this.results = busca;
      //busca.length ? (this.results = busca) : this.not == true;
      if (!this.results.length) {
        this.res = "We are sorry, 404";
      } else {
        this.res = `Showing ${this.results.length} results for "${this.info}"`;
      }
    },
    clica(ca, sl) {
      this.$router.push({
        name: "threads",
        params: { category: ca, slug: sl },
      });
      /*  this.$router.go({
        name: "threads",
        params: { category: "android", slug: "post-one" },
      }); */
      // this.$router.go({ path: "/blog/android/post-one" });

      this.$router.go({
        name: "threads",
        params: { category: ca, slug: sl },
      });
    },
  },
};
</script>
/* global styles for this component */
<style scoped>
.search {
  border-bottom: 2px solid red;
  border-bottom-width: 10%;
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serifs;
  margin: 30px 0;
}

.search p {
  color: rgb(129, 247, 148);
  margin: 15px 0;
}
.search li {
  text-align: left;
  list-style-type: square;
}

.search li a {
  color: rgb(207, 40, 199);
  font-size: 1.2rem;
}
.search li {
  border-bottom: none;
}
.search button {
  text-align: left;
  cursor: pointer;
  background: none;
  color: rgb(207, 40, 199);
  outline: none;
  border: none;
  margin: 10px 0;
  font-size: 1.2rem;
  font-weight: bold;
}
.search button:hover {
  text-decoration: underline coral;
}
.results_links {
  margin-top: 5px;
  max-width: 400px;
  min-width: 320px;
  margin: 0 auto;
}
.results_links li {
  text-align: left;
  list-style: none;
}
input {
  font-size: 1.2rem;
}
input[type="submit"] {
  cursor: pointer;
  padding: 0 15px;
}
input[type="text"] {
  width: 50%;
}
/* for mobile */
@media screen and (max-width: 550px) {
  input[type="text"] {
    width: 70% !important;
  }
}
</style>

