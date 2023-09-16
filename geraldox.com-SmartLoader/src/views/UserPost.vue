<template>
  <div>
    <Adsense></Adsense>
    <div class="blogger">
      <main>
        <div><Busca v2 /></div>
        <article v-if="blog">
          <h1>{{ blog.title }}</h1>
          <div class="breadcrumbs">
            <p>
              Home >
              <!--
                link definido manualmente substituido por router-link dynamic <a href="/blog">Blog</a> -->
              <router-link :to="{ name: 'Blog Posts' }">Blog</router-link>
              >
              <router-link
                class="categories"
                :to="`/categories/${blog.category}`"
                >{{ blog.category }}</router-link
              >
            </p>
            <p>
              By:<span>{{ blog.author }}</span> | Posted on: {{ blog.data }} |
              <button data="print" onclick="print()">PRINT</button>
            </p>
          </div>
          <hr />
          <!-- render html from json -->
          <p v-html="blog.article"></p>
          <!-- render components -->
          <component :is="blog.component"></component>
          <!-- render SmartComponents[ContainerPosts.vue de Components] -->
          <Container></Container>
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
  </div>
</template>
<script>
/*start String components templates*/
const word = '<p>Hello from String template</p>'
Vue.component('cardy', {
  template: word,
})

//ends String Components
module.exports = {
  name: 'BlogPosts',
  mounted() {
    //console.log(test);
  },
  beforeCreate() {
    // console.log(`UserPost.vue`, this.$appName);
  },
  created() {
    this.posts()
    //console.log(this.$route); //currently
    // console.log(`this.router`, this.$router); //parametros e funcionalidades
    //console.log(`UserPost: root`, this.$root);
  },
  data() {
    return {
      blog: {},
    }
  },
  components: {
    Sidebar: httpVueLoader('/src/components/Sidebar.vue'),
    Busca: httpVueLoader('/src/components/Search.vue'),
    Android: httpVueLoader('../posts/android-roo.vue'),
    Vuejs: httpVueLoader('../posts/Vuejs.vue'),
    Speedtest: httpVueLoader('../posts/Speedtest.vue'),
    NetworkTools: httpVueLoader('../posts/NetworkTools.vue'),
    Container: httpVueLoader('/src/components/ContainerPosts.vue'),
    Adsense: httpVueLoader('../views/Adsense.vue'),
    whatsappapi: httpVueLoader('../posts/whatsappapi.vue'),
  },
  methods: {
    async posts() {
      const req = await fetch('/src/db/data.json')
      const data = await req.json()
      //console.warn(data);
      this.blogPosts = data.blog.posts
      //encontra a slug atual e verifica se esta plublicada
      const getBlogPost = this.blogPosts.find(
        (post) => post.slug == this.$route.params.slug && post.published
      )
      // console.log(`getBlogPost`, getBlogPost);
      this.blog = getBlogPost
    },
  },
}
</script>
<style>
article h1 {
  text-align: left;
  font-size: 1.5rem;
  font-weight: bolder;
}
article p {
  text-align: justify;
  line-height: 1.5rem;
  margin-top: 10px;
}
.blogger {
  margin: 5px 15px; /* margin do body posts */
}

div.breadcrumbs {
  font-size: 12px;
  margin: 4px 0;
  border-radius: 5px 5px;
  font-weight: bold;
  text-transform: uppercase;
}
.breadcrumbs .categories {
  /*  color: rgb(212, 86, 251); */
  /*  text-transform: uppercase; */
  text-decoration: none;
  text-align: left;
  text-transform: uppercase; /* first-letter maiusculo */
}
.breadcrumbs a {
  text-decoration: none;
}

.blogger h2 {
  padding: 10px 0;
}
.blogger ul {
  margin-top: 20px;
  padding-left: 15px;
}
h4.notFound {
  text-align: center;
}
button[data*='print'] {
  background: none;
  padding: 0px 15px;
  border: 1px solid dodgerblue;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 5px;
}

/* for desktop */
@media screen and (min-width: 990px) {
  .blogger {
    display: flex;
    padding: 25px;
    gap: 20px;
  }
  .blogger main {
    flex: 1 0 77%;
  }
  article h1 {
    font-size: 2em;
  }
}
</style>
