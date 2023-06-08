<template>
  <div class="blogger">
    <main>
      <div><Busca v2 /></div>
      <article v-if="blog">
        <h1>{{ blog.title }}</h1>
        <p class="author">
          By:<span>{{ blog.author }}</span> | Posted on: {{ blog.data }} |
          <router-link
            class="categories"
            :to="`/categories/${blog.category}`"
            >{{ blog.category }}</router-link
          >
          | <button data="print" onclick="print()">Print</button>
        </p>

        <hr />
        <!-- render html from json -->
        <p v-html="blog.article"></p>
        <!--   render components -->
        <component :is="blog.component"></component>
      </article>
      <div v-else>
        <h4 class="notFound">
          Sorry! 404 error Post Not Found, or was removed!
        </h4>
      </div>
      <!-- custom html to specific slug posts -->
      <div v-if="$route.params.slug == 'speed-test'">
        <p>Hello post about speedTest</p>
      </div>
    </main>
    <Sidebar />
  </div>
</template>
<script>
/* String components*/
const word = "<p>Hello from String template</p>";
Vue.component("cardy", {
  template: word,
});

module.exports = {
  beforeCreate() {
    console.log(this.$appName);
  },
  created() {
    this.posts();
    //console.log(this.$route); //currently
    //console.log(this.$router); //parametros e funcionalidades
  },
  data() {
    return {
      blog: {},
    };
  },
  components: {
    Sidebar: httpVueLoader("../components/Sidebar.vue"),
    Busca: httpVueLoader("../components/Search.vue"),
    Android: httpVueLoader("../posts/android-roo.vue"),
    Vuejs: httpVueLoader("../posts/Vuejs.vue"),
    Speedtest: httpVueLoader("../posts/Speedtest.vue"),
  },
  methods: {
    async posts() {
      const req = await fetch("./src/db/data.json");
      const data = await req.json();
      //console.warn(data);
      this.blogPosts = data.blog.posts;
      //find currently router slug and check if is published ?
      const getBlogPost = this.blogPosts.find(
        (post) => post.slug == this.$route.params.slug && post.published
      );
      // console.log(`getBlogPost`, getBlogPost);
      this.blog = getBlogPost;
    },
  },
};
</script>
<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
main {
  padding: 10px;
  min-height: 50vh;
}
article h1 {
  text-align: left;
  font-size: 2em;
  font-weight: bolder;
  color: rgb(147, 200, 245);
}
article p {
  text-align: justify;
  line-height: 1.5rem;
  margin-top: 15px;
}
.blogger {
  margin: 20px 0;
}

p.author {
  font-size: 14px;
  background: black;
  margin: 10px 0;
  padding: 10px 5px;
  border-radius: 5px 5px;
}
.author .categories {
  color: rgb(212, 86, 251);
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.7rem;
}
div img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
}
figure:has(figcaption) {
  text-align: center;
  color: white;
}
div:has(img) {
  margin: 0 auto;
  padding: 10px;
}
h2 {
  padding: 10px 0;
}
h1 {
  font-size: 1.7rem;
}
ul {
  margin-top: 20px;
  padding-left: 15px;
}
h4.notFound {
  text-align: center;
}
button[data*="print"] {
  background: none;
  padding: 0px 15px;
  border: 1px solid dodgerblue;
  cursor: pointer;
  margin-bottom: 5px;
}

/* for desktop */
@media screen and (min-width: 600px) {
  .blogger {
    display: flex;
    padding: 25px;
  }
  .blogger main {
    flex: 1 0 77%;
  }
  .img-flex {
    width: 100%;
    margin: 0 auto;
  }
}
</style>