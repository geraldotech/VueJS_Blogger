<template>
  <div class="category">
    <h1>
      Category: {{ $route.params.category }}
      <div v-if="$route.params.category.includes('ndroid')">
        <div class="cat-banner">
          <img src="./src/assets/img/android.png" alt="android" />
        </div>
      </div>
      <router-link to="/blog">voltar para Blog</router-link>
    </h1>
    <ul v-for="artigos in opt" :key="artigos.slug">
      <li>
        <router-link :to="`/blog/${artigos.category}/${artigos.slug}`">{{
          artigos.slug
        }}</router-link>
        <div></div>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
module.exports = {
  created() {
    this.posts();
    console.log(this.$route);
  },
  data() {
    return {
      opt: "",
    };
  },
  methods: {
    async posts() {
      const req = await fetch("../src/db/data.json");
      const res = await req.json();
      //filter post published
      this.blogPosts = res.blog.posts;
      const getBlogPost = this.blogPosts.filter(
        (post) => this.$route.params.category == post.category
      );
      //console.log(publicados);
      //reverse render posts mais novos on top
      this.opt = getBlogPost;
      //limitador
      //this.opt.splice(0, 2);
    },
  },
};
</script>
<style scoped>
.category {
  text-align: center;
}
div,
ul {
  margin: 10px 0;
}
h1 {
  margin-top: 20px;
}
a {
  text-decoration: none;
  color: #3aa4ff;
  font-size: 1rem;
  font-weight: bold;
}
h1 {
  font-size: 1.5rem;
  margin: 20px 0;
}
li {
  border-bottom: 2px solid green;
  padding: 0;
  list-style: none;
}

div img {
  width: 100%;
  display: block;
  margin: auto;
}
</style>
