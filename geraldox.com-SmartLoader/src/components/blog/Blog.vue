<template>
  <div>
    <!--  <Adsense></Adsense> -->
    <div
      v-if="$route.name == 'Blog Posts'"
      class="list-all">
      <section class="threads">
        <nav
          class="legacy_searchs"
          v-show="false">
          <input
            type="checkbox"
            id="showlegacy"
            v-model="showlegacy" />
          <label for="showlegacy">Search Legacy</label>
          <input
            type="checkbox"
            id="showautoseach"
            v-model="showautoseach" />
          <label for="showautoseach">Search Auto</label>
        </nav>
        <div v-show="showlegacy">
          <Searchlegacy v1 />
        </div>
        <div v-show="showautoseach">
          <Searchauto v2 />
        </div>

        <div
          class="map"
          v-show="false">
          <div>
            <router-link :to="{ name: 'categoriesMap' }">Website Map:</router-link>
          </div>
          <label>Selecionar:</label>
          <select
            v-model="select"
            @change="selectCategoryHandler($event)">
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
          class="thread-item pinned"
          v-show="Object.hasOwn(pinned, 'id')">
          <p>
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              fill="#fff"
              class="r-1bwzh9t r-4qtqp9 r-yyyyoo r-10ptun7 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1janqcz">
              <g>
                <path d="M7 4.5C7 3.12 8.12 2 9.5 2h5C15.88 2 17 3.12 17 4.5v5.26L20.12 16H13v5l-1 2-1-2v-5H3.88L7 9.76V4.5z"></path>
              </g>
            </svg>
            <span>Pinned:</span>
          </p>
          <p>
            <router-link
              :to="{
                name: 'threads',
                params: { category: pinned.category ?? true, slug: pinned.slug ?? true },
              }"
              >{{ pinned.title }}</router-link
            >
          </p>
          <time>{{ pinned.createdAt }}</time>
          <p>
            <span class="cat">
              CATEGORY:
              <router-link
                class="cats"
                :to="{ name: 'category', params: { category: pinned.category ?? 'x' } }"
                >{{ pinned.category ? pinned.category.toUpperCase() : 'UNCATEGORIZED' }}</router-link
              >
            </span>
          </p>
        </section>
        <!--  pinnedPost -->
        <!--  RenderPosts -->
        <ul class="threads-container grid">
          <li
            v-for="artigos in opt"
            :key="artigos.slug"
            class="thread-item">
            <router-link
              :to="{
                name: 'threads',
                params: { category: artigos.category, slug: artigos.slug },
              }">
              {{ artigos.title.slice(0, 30) + '...' }}</router-link
            >

            <time>{{ artigos.createdAt }}</time>
            <!-- categories router page -->
            <div class="cat">
              CATEGORY:
              <router-link
                class="cats"
                :to="{
                  name: 'category',
                  params: { category: artigos.category },
                }"
                >{{ artigos.category ? artigos.category.toUpperCase() : 'UNCATEGORIZED' }}</router-link
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
            <button
              class="limiter_btn"
              @click="ShowLessPosts()">
              Show Less
            </button>
          </p>
          <p class="limiter_btn">{{ opt.length }} of {{ AllPosts.length }} Posts</p>
          <button
            class="limiter_btn"
            @click="ShowAllPosts(5)">
            {{ AllPosts.length == opt.length ? '❌Nothing more' : 'Show more' }}
          </button>
        </nav>
      </section>

      <Sidebar
        :categorias="categorias"
        @selectcategory="selectCategoryHandler" />
    </div>

    <!-- For Nested Routers -->

      <router-view></router-view>
    <keep-alive>
    </keep-alive>
  </div>
</template>

<script>
module.exports = {
  /*   metaInfo: {
    // title: 'Blog Posts',
    title: 'dynamicTitle',
    titleTemplate: '%s - geraldoX',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'description',
        content: 'Threads written by Geraldo Filho',
      },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'vuejs, windows, android, linux, gmapdev' },
    ],
  }, */
  created() {
    //this.setTitleAuto('Blog')
     this.posts() // teste no mobile, in created is more faster than mounted hook to show posts
  },
  mounted() {
    /* set dynamic titles and category params title, if undefined return '' */
    this.setTitleAuto(this.$route?.name ?? '' + ' - ' + this.$route.params?.category ?? '')
   
  },
  components: {
    Sidebar: httpVueLoader('/src/components/blog/Sidebar.vue'),
    Searchlegacy: httpVueLoader('/src/components/blog/Search.vue'),
    Searchauto: httpVueLoader('/src/components/blog/SearchAuto.vue'),
    Mapas: httpVueLoader('/src/components/blog/mapa.vue'),
    Adsense: httpVueLoader('/src/components/blog/Adsense.vue'),
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
      dynamicTitle: 'Blog',
    }
  },
  methods: {
    async posts() {
      const req = await fetch('/src/db/data.json')
      const res = await req.json()

      // Pinned receive all posts
      this.FindPinned(res.blog.posts)
      //setTimeout(  , 1000)

      //filter post published && exclude pinned posts from the main list
      const blogPosts = res.blog.posts.filter((posts) => posts.published && !Object.keys(posts).includes('pinned'))
      // console.log(blogPosts);

      // map categoris acima dos limitadores de posts splice()
      const getCatego = blogPosts.map((val) => val.category)

      //console.log([...getCatego].sort());

      //🔢 contar n de categories values + ordenar com sort()
      const counter = getCatego.sort().reduce((cont, item) => ((cont[item] = cont[item] + 1 || 1), cont), {})

      //recebe o contador unique + contador
      this.categorias = counter

      //🔢 Limitador de posts, lembrando this methods changes the original array
      blogPosts.splice()

      //thos AllPosts a ser usado no length and pelo @click show all posts
      this.AllPosts = blogPosts

      //🔢 recebe os posts com limitador opcional
      this.opt = this.GetBlogPosts(this.numero)
    },

    /* ===  */
    selectCategoryHandler(e) {
      this.$router.push({ name: 'category', params: { category: e.target.value } })
    },
    GetBlogPosts(n) {
      return this.AllPosts.filter((posts) => posts.published)
        .reverse() //reverse depois limiter
        .slice(0, n)
    },
    ShowAllPosts(e) {
      //onclick show +1 posts
      this.numero = this.numero + 4
      return (this.opt = this.GetBlogPosts(this.numero))
    },
    ShowLessPosts() {
      //number = 5 minimo posts
      return (this.opt = this.GetBlogPosts((this.numero = 10)))
    },
    FindPinned(arr) {
      // find obj has pinned property
      const findPinned = arr.find((post) => post.published && post.hasOwnProperty('pinned'))

      // check if Pinned  exists
      !findPinned ? false : (this.pinned = findPinned)
    },
    setTitleAuto(current, manual) {
      document.title = current + ' - geraldoX'
    },
  },
}
</script>
<style scoped>
* {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

/* 
avoidcall h1 direct here for nesting itens not get this styles

h1 {  ❌
 
}
*/
.threads h1 {
  margin-top: 20px;
  font-size: 1.7rem;
}
.threads {
  /*  padding: 10px; */
}

.thread-item {
  line-height: 1.5rem;
  /* background: #222; */
  background: #0e1319;
  padding: 10px;
  animation: PostIntro ease 1s;
  /*   border: 2px solid rgb(0, 54, 143); */
  border-top: 2px solid #05bdba;
  box-shadow: 0 0 10px rgb(0, 0, 0);
  border-radius: 10px;
}

.thread-item:hover {
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

/* 
to remove grid just remove .grid class in multiple class on html

*/
.threads-container .thread-item {
  margin: 20px 0;
}
.threads-container.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5rem;
  margin-block: 1rem;

  & .thread-item {
    margin: 0;
  }
}

/* 
remove:
.thread-item   margin: 20px 0px;

*/

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
  color: #fff;
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

time {
  font-family: sans-serif;
  display: block;
  font-size: 12px;
}
time::before {
  content: '|';
  margin-right: 2px;
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
