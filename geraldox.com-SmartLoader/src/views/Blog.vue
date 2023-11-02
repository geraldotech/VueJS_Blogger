<template>
  <div>
    <!--  <Adsense></Adsense> -->
    <div v-if="$route.name == `Blog Posts`" class="list-all">
      <section class="threads">
        <nav class="legacy_searchs">
          <input type="checkbox" id="showlegacy" v-model="showlegacy" />
          <label for="showlegacy">Search Legacy</label>
          <input type="checkbox" id="showautoseach" v-model="showautoseach" />
          <label for="showautoseach">Search Auto</label>
        </nav>
        <div v-show="showlegacy">
          <Searchlegacy v1 />
        </div>
        <div v-show="showautoseach">
          <Searchauto v2 />
        </div>

        <!--  -->
        <div class="map">
          <div>
            <router-link :to="{ name: `Categories Map` }"
              >Website Map:</router-link
            >
          </div>
          <label>Selecionar:</label>
          <select v-model="select" @change="changeRoute($event)">
            <option
              v-for="(itens, ind) in categorias"
              :key="itens.id"
              :value="ind">
              {{ ind.toUpperCase() }} - {{ itens }}
            </option>
          </select>
        </div>
        <h1>Threads:</h1>
        <!--  pinnedPost -->
        <section
          class="threads_list pinned"
          v-show="Object.hasOwn(pinned, 'id')">
          <p>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="r-1bwzh9t r-4qtqp9 r-yyyyoo r-10ptun7 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1janqcz">
              <g>
                <path
                  d="M7 4.5C7 3.12 8.12 2 9.5 2h5C15.88 2 17 3.12 17 4.5v5.26L20.12 16H13v5l-1 2-1-2v-5H3.88L7 9.76V4.5z"></path>
              </g>
            </svg>
            <span>Pinned:</span>
          </p>
          <p>
            <router-link
              :to="{
                name: 'threads',
                params: { category: pinned.category, slug: pinned.slug },
              }"
              >{{ pinned.title }}</router-link
            >
          </p>
          <time>{{ pinned.data }}</time>
          <p>
            <span class="cat">
              CATEGORY:
              <router-link
                class="cats"
                :to="`/categories/${pinned.category}`"
                >{{
                  pinned.category
                    ? pinned.category.toUpperCase()
                    : 'UNCATEGORIZED'
                }}</router-link
              >
            </span>
          </p>
        </section>
        <!--  pinnedPost -->
        <!--  <h1>Threads:</h1> -->

        <!--  RenderPosts -->
        <ul>
          <li v-for="artigos in opt" :key="artigos.slug" class="threads_list">
            <router-link
              :to="{
                name: 'threads',
                params: { category: artigos.category, slug: artigos.slug },
              }">
              {{ artigos.title }}</router-link
            >

            <time>{{ artigos.data }}</time>
            <!-- categories router page -->
            <div class="cat">
              CATEGORY:
              <router-link
                class="cats"
                :to="`/categories/${artigos.category}`"
                >{{
                  artigos.category
                    ? artigos.category.toUpperCase()
                    : 'UNCATEGORIZED'
                }}</router-link
              >
            </div>
            <!-- categories router page -->
            <!--    <time>{{ artigos.data }}</time> -->

            <!--    <p v-html="artigos.article ? artigos.article.substr(0, 35) : ''"></p> -->
          </li>
        </ul>
        <!--  RenderPosts -->
        <nav class="limiter">
          <p v-show="opt.length >= 10">
            <button class="limiter_btn" @click="ShowLessPosts()">
              Show Less
            </button>
          </p>
          <p class="limiter_btn">
            {{ opt.length }} of {{ AllPosts.length }} Posts
          </p>
          <button class="limiter_btn" @click="ShowAllPosts(5)">
            {{ AllPosts.length == opt.length ? '❌Nothing more' : 'Show more' }}
          </button>
        </nav>
      </section>

      <Sidebar />
    </div>
    <!--  if a rota for === entao show -->
    <div v-if="$route.name == `Categories Map`">
      <Mapas />
    </div>
  </div>
</template>

<script>
module.exports = {
  metaInfo: {
    title: 'Blog',
    titleTemplate: '%s - geraldox',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'description',
        content: 'Threads written by Geraldo Filho',
      },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'vuejs, windows, android, linux' },
    ],
  },
  created() {
    this.posts()
  },
  mounted() {},
  components: {
    Sidebar: httpVueLoader('../components/Sidebar.vue'),
    Searchlegacy: httpVueLoader('../components/Search.vue'),
    Searchauto: httpVueLoader('../components/SearchAuto.vue'),
    Mapas: httpVueLoader('../views/mapa.vue'),
    Adsense: httpVueLoader('../views/Adsense.vue'),
  },
  data() {
    return {
      opt: [],
      categorias: {},
      select: '',
      AllPosts: {},
      numero: 10,
      pinned: {},
      showlegacy: '',
      showautoseach: '',
    }
  },
  methods: {
    async posts() {
      const req = await fetch('./src/db/data.json')
      const res = await req.json()

      // Pinned receive all posts
      this.FindPinned(res.blog.posts)

      //filter post published && exclude pinned posts from the main list
      const blogPosts = res.blog.posts.filter(
        (posts) => posts.published && !Object.keys(posts).includes('pinned')
      )
      // console.log(blogPosts);

      // map categoris acima dos limitadores de posts splice()
      const getCatego = blogPosts.map((val) => val.category)

      //console.log([...getCatego].sort());

      //🔢 contar n de categories values + ordenar com sort()
      const counter = getCatego
        .sort()
        .reduce((cont, item) => ((cont[item] = cont[item] + 1 || 1), cont), {})

      //recebe o contador unique + contador
      this.categorias = counter

      //🔢 Limitador de posts, lembrando this methods changes the original array
      blogPosts.splice()

      //thos AllPosts a ser usado no length and pelo @click show all posts
      this.AllPosts = blogPosts

      //recebe os posts com limitador opcional
      this.opt = this.GetBlogPosts(this.numero)
    },
    changeRoute(e) {
      this.$router.push('/categories/' + e.target.value)
    },
    GetBlogPosts(n) {
      return this.AllPosts.filter((posts) => posts.published)
        .reverse() //reverse depois limiter
        .slice(0, n)
    },
    ShowAllPosts(e) {
      //onclick shoow +1 posts
      this.numero = this.numero + 5
      return (this.opt = this.GetBlogPosts(this.numero))
    },
    ShowLessPosts() {
      //number = 5 minimo posts
      return (this.opt = this.GetBlogPosts((this.numero = 10)))
    },
    FindPinned(arr) {
      // find obj has pinned property
      const findPinned = arr.find(
        (post) => post.published && post.hasOwnProperty('pinned')
      )

      // check if Pinned  exists
      !findPinned ? false : (this.pinned = findPinned)
    },
  },
}
</script>
<style scoped>
* {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
h1 {
  margin-top: 20px;
  font-size: 1.7rem;
}
.threads {
  /*  padding: 10px; */
}

.threads_list {
  line-height: 1.5rem;
  /* background: #222; */
  background: #0e1319;
  padding: 10px;
  animation: PostIntro ease 3s;
  /*   border: 2px solid rgb(0, 54, 143); */
  border-top: 2px solid #05bdba;
  box-shadow: 0 0 10px rgb(0, 0, 0);
  border-radius: 10px;
}

.threads_list:hover {
  background: rgb(26, 28, 29, 0.7);
}

@keyframes PostIntro {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.threads a {
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-weight: bold;
  font-size: 1.2rem;
}

.threads a:hover {
  color: rgb(68, 186, 246);
}

.threads li {
  margin: 20px 0;
}

.threads .cats {
  font-size: 0.7rem;
  color: #05bdba;
}

.threads ul li {
  list-style: none;
}
.threads .cat {
  font-size: 0.7rem;
}

.limiter {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.limiter p:nth-child(2) {
  text-align: center;
}

.limiter button {
  cursor: pointer;
  text-align: center;
  background: #0044b3;
  padding: 5px 8px;
  border: none;
  opacity: 0.8;
  border-radius: 5px;
}
/* set font-size for all childrens */
.limiter_btn {
  font-size: 14px;
}

.limiter button:hover {
  opacity: 1;
}
.sidebar img {
  width: 100%;
}

.map p {
  padding: 10px 0;
}
.map select {
  margin-top: 10px;
}
.map h1 {
  margin-bottom: 10px;
}

time {
  font-family: sans-serif;
  display: block;
  font-size: 12px;
}
time::before {
  content: 'DATE: ';
}
select {
  cursor: pointer;
}

svg {
  width: 16px;
}

.pinned {
  margin-top: 15px;
  line-height: 1.5rem;
}

.legacy_searchs {
  margin-block: 15px;
  margin-bottom: 20px;
}
.legacy_searchs label {
  cursor: pointer;
}

/* desktop */
@media screen and (min-width: 650px) {
  .list-all {
    display: flex;
    width: 100%;
    padding: 10px 0;
    gap: 20px;
  }
  .list-all .threads {
    flex: 1 0 75%;
  }

  .limiter {
    font-size: 20px;
  }
}
</style>
