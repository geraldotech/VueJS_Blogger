<template>
  <div>
    <!--  <Adsense></Adsense> -->
    <div class="blogger">
      <main>
        <!--  <div><Searchlegacy v1 /></div> -->
        <!--   <div><Searchauto v2 /></div> -->
        <article v-if="blog">
          <!-- card starts -->
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
            <h1>{{ blog.title }}</h1>
            <p class="breadcrumbs__author__date">
              By:<span>{{ blog.author }}</span> | Posted on: {{ blog.createdAt }} |
              <button
                data="print"
                title="print"
                onclick="print()">
                <i class="fa-solid fa-print"></i>
              </button>
            </p>
          </div>
          <!-- card ends -->

          <hr />
          <!-- render html from json -->
          <p v-html="blog.article"></p>

          <!-- render components -->
          <component :is="blog.component"></component>
          <!-- render SmartComponents[ContainerPosts.vue de Components] -->
          <Container></Container>
        </article>
        <div v-else>
          <h4 class="notFound">Sorry! 404 error Post Not Found, or was removed!</h4>
        </div>

        <h4 style="color: coral">{{ blog.component }}</h4>



         <component :is="importedComponent"></component> 
     
      
       

        <!-- custom html to specific slug posts -->
        <div v-if="$route.params.slug == 'speed-test'">
          <p>Hello post about speedTest</p>
        </div>
        <Sidebarbottom :allposts="GetallPosts" />
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
  async created() {
    this.posts()
    // this.tryImportComponentAuto()
    //console.log(this.$route); //currently
    // console.log(`this.router`, this.$router); //parametros e funcionalidades
    //console.log(`UserPost: root`, this.$root);
      try {
      this.importedComponent = await this.tryImportComponentAuto();
       console.log(this.importedComponent)
    } catch (error) {
      console.error('Error importing component:', error);
    } 
  },
  data() {
    return {
      blog: {},
      GetallPosts: [],
      importedComponent: 'hydratationssr'
    }
  },
  components: {
    /* BLOG  */
    Sidebarbottom: httpVueLoader('/src/components/blog/SidebarBottom.vue'),
    Sidebar: httpVueLoader('/src/components/blog/Sidebar.vue'),
    Searchlegacy: httpVueLoader('/src/components/blog/Search.vue'),
    Searchauto: httpVueLoader('../components/blog/SearchAuto.vue'),
    Adsense: httpVueLoader('../components/blog//Adsense.vue'),

    /* POSTS */
    Android: httpVueLoader('../posts/android-roo.vue'),
    Vuejs: httpVueLoader('../posts/Vuejs.vue'),
    Speedtest: httpVueLoader('../posts/Speedtest.vue'),
    NetworkTools: httpVueLoader('../posts/NetworkTools.vue'),
    Container: httpVueLoader('/src/components/ContainerPosts.vue'),
    whatsappapi: httpVueLoader('../posts/whatsappapi.vue'),
    winoffline: httpVueLoader('../posts/winoffline.vue'),
    hydratationssr: httpVueLoader('../posts/hydratationssr.vue'),
  },
  methods: {
    async posts() {
      const req = await fetch('/src/db/data.json')
      const data = await req.json()
      //console.warn(data);
      this.GetallPosts = data.blog.posts
      //encontra a slug atual e verifica se esta plublicada
      const getBlogPost = this.GetallPosts.find((post) => post.slug == this.$route.params.slug && post.published)

      this.blog = getBlogPost

      this.metaInfoInject(getBlogPost.title)
    },
    //by gmap function trata metaInfo and currently title eachPost
    metaInfoInject(currentTitle) {
      document.title = currentTitle ? `${currentTitle} - geraldoX` : '404 Page - geraldoX'
      return {
        metaInfo: {
          title: currentTitle,
          titleTemplate: '%s - geraldoX',
          meta: [
            { charset: 'utf-8' },
            {
              name: 'description',
              content: 'I write articles about Web Development, checkout my GitHub #gmapdev',
            },
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1',
            },
            { name: 'keywords', content: 'vuejs, windows, android, linux' },
          ],
        },
      }
    },
   async tryImportComponentAuto() {
      
      httpVueLoader.httpRequest = async function (url = '/src/components/posts/frontgames.vue') {
        try {
          const response = await axios.get(url)
          console.log(response.data)
         
         // await new Promise((resolve) => setTimeout(resolve, 1000))
          return response.data
        } catch (err) {
           throw new Error(error.response.status);
        }
      }
      httpVueLoader.httpRequest()
      /* end */
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
.article:first-letter,
.blogger article > p:first-letter {
  /* color: green; */
  font-size: 2.6rem;
  margin-left: 15px;
}

.blogger {
  /* margin: 5px 15px; */ /* margin do body posts, now get margin from .main parent */
}

.breadcrumbs p {
  margin: 0;
}
.breadcrumbs h1 {
  margin: 7px 0;
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
.breadcrumbs__author__date {
  font-size: 0.8rem;
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
  color: #05bdba;
  border: none;
  cursor: pointer;

  font-size: inherit;
}

/* for desktop */
@media screen and (min-width: 990px) {
  .blogger {
    display: flex;
    margin-top: 10px;
    gap: 20px;
  }
  .blogger main {
    flex: 1 0 77%;
  }
  article h1 {
    font-size: 2em;
  }
  .blogger {
    margin: 0; /* margin do body posts */
  }
}
</style>
