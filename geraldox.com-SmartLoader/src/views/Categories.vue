<template>
  <div class="category">
    <div>
      <Adsense />
    </div>
    <h1>
      Category: <code>`{{ $route.params.category }}`</code>
      <div v-if="$route.params.category.includes('ndroid')">
        <div class="cat-banner">
          <img src="/src/assets/img/android.png" alt="android" />
        </div>
      </div>
    </h1>
    <router-link :to="{ name: 'Blog Posts' }">voltar para Blog</router-link>
    <ul class="listPosts">
      <li v-for="(artigos, index) in opt" :key="artigos.id">
        <router-link :to="{ name: 'threads', params: { slug: artigos.slug } }"
          >{{ index + 1 }} - {{ artigos.title }} -
          {{ artigos.data }}</router-link
        >
        <!--   <router-link :to="`/blog/${artigos.category}/${artigos.slug}`">{{
          artigos.slug
        }}</router-link> -->
        <!--  <div></div> -->
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
module.exports = {
  created() {
    this.posts()
    // console.log(this.$route);
  },
  data() {
    return {
      opt: '',
    }
  },
  components: {
    Adsense: httpVueLoader('../views/Adsense.vue'),
  },
  methods: {
    async posts() {
      const req = await fetch('/src/db/data.json')
      const res = await req.json()
      //filter post published
      this.blogPosts = res.blog.posts
      const getBlogPost = this.blogPosts
        .filter((post) => this.$route.params.category == post.category)
        .reverse()
      //console.log(publicados);
      //reverse render posts mais novos on top
      this.opt = getBlogPost
      getBlogPost.forEach((val, ind) => {
        // console.log(ind)
      })
      //limitador
      //this.opt.splice(0, 2);
    },
  },
}
</script>
<style scoped>
.category {
  text-align: center;
}
.category .listPosts {
  margin: 15px 20px;
  max-width: 600px;
  text-align: left;
  padding: 15px 0;
}
.category .listPosts {
  /*  line-height: 3rem; */
}
.category .listPosts a {
  display: block;
  padding: 10px 0;
}
.category code {
  color: seagreen;
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
  border-bottom: 2px solid rgb(0, 54, 143);
  padding: 0;
  list-style: none;
}

div img {
  width: 100%;
  display: block;
  margin: auto;
}
</style>
