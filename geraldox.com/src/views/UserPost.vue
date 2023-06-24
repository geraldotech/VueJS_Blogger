<template>
  <div class="blogger">
    <main>
      <div><Busca v2 /></div>
      <article v-if="blog">
        <h1>{{ blog.title }}</h1>
        <div class="blogger_card">
          <p>
            Home > <a href="#/blog">Blog</a> >
            <router-link
              class="categories"
              :to="`/categories/${blog.category}`"
              >{{ blog.category }}</router-link
            >
          </p>
          <p>
            By:<span>{{ blog.author }}</span> | Posted on: {{ blog.data }} |
            <button data="print" onclick="print()">Print</button>
          </p>
        </div>

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
/* String components templates*/
const word = "<p>Hello from String template</p>";
Vue.component("cardy", {
  template: word,
});

//ends String Components
module.exports = {
  beforeCreate() {
    // console.log(`UserPost.vue`, this.$appName);
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
    NetworkTools: httpVueLoader("../posts/NetworkTools.vue"),
  },
  methods: {
    async posts() {
      const req = await fetch("./src/db/data.json");
      const data = await req.json();
      //console.warn(data);
      this.blogPosts = data.blog.posts;
      //encontra a slug atual e verifica se esta plublicada
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
article h1 {
  text-align: left;
  font-size: 1.5rem;
  font-weight: bolder;
  color: rgb(147, 200, 245);
}
article p {
  text-align: justify;
  line-height: 1.5rem;
  margin-top: 10px;
}
.blogger {
  margin: 5px 0;
}

div.blogger_card {
  font-size: 14px;
  background: black;
  margin: 4px 0;
  padding: 2px 5px;
  border-radius: 5px 5px;
}
.blogger_card .categories {
  /*  color: rgb(212, 86, 251); */
  /*  text-transform: uppercase; */
  text-decoration: none;
  font-weight: bold;
  font-size: 0.9rem;
  text-align: left;
  text-transform: capitalize; /* first-letter maiusculo */
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
@media screen and (min-width: 992px) {
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
  article h1 {
    font-size: 2rem !important;
  }
}
</style>