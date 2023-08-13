<template>
  <div>
    <Adsense></Adsense>
    <div v-if="$route.name == `Blog Posts`" class="list-all">
      <section class="threads">
        <p><Search v1 /></p>
        <div class="map">
          <h1>Map:</h1>
          <div>
            <router-link :to="{ name: `Categories Map` }"
              >Mapa de categorias</router-link
            >
          </div>
          <label>Selecionar:</label>
          <select v-model="select" @change="changeRoute($event)">
            <option
              v-for="(itens, ind) in categorias"
              :key="itens.id"
              :value="ind"
            >
              {{ ind.toUpperCase() }} - {{ itens }}
            </option>
          </select>
        </div>
        <h1>Threads:</h1>
        <ul>
          <li v-for="artigos in opt" :key="artigos.slug">
            <router-link
              :to="{
                name: 'threads',
                params: { category: artigos.category, slug: artigos.slug },
              }"
            >
              {{ artigos.title }}</router-link
            >
            <!-- categories router page -->
            <div class="cat">
              CATEGORY:
              <router-link
                class="cats"
                :to="`/categories/${artigos.category}`"
                >{{
                  artigos.category
                    ? artigos.category.toUpperCase()
                    : "UNCATEGORIZED"
                }}</router-link
              >
            </div>
            <time>{{ artigos.data }}</time>
            <!--    <p v-html="artigos.article ? artigos.article.substr(0, 35) : ''"></p> -->
            <div></div>
          </li>
        </ul>
        <nav class="limiter">
          <p v-show="opt.length >= 10">
            <button @click="ShowLessPosts()">Show Less</button>
          </p>
          <p>Showing:{{ opt.length }} of {{ AllPosts.length }} Posts.</p>
          <button @click="ShowAllPosts(5)">
            {{ AllPosts.length == opt.length ? "Nothing more" : "Show more" }}
          </button>
        </nav>
      </section>

      <p><Sidebar /></p>
    </div>
    <div v-if="$route.name == `Categories Map`">
      <Mapas />
    </div>
  </div>
</template>

<script>
module.exports = {
  created() {
    this.posts();
    // this.showDom();
  },
  components: {
    Sidebar: httpVueLoader("../components/Sidebar.vue"),
    Search: httpVueLoader("../components/Search.vue"),
    Mapas: httpVueLoader("../views/mapa.vue"),
    Adsense: httpVueLoader("../views/Adsense.vue"),
  },
  data() {
    return {
      opt: [],
      categorias: {},
      select: "",
      AllPosts: {},
      numero: 10,
    };
  },
  methods: {
    async posts() {
      const req = await fetch("./src/db/data.json");
      const res = await req.json();

      //filter post published
      const blogPosts = res.blog.posts.filter((posts) => posts.published);
      // console.log(blogPosts);

      // map categoris acima dos limitadores de posts splice()
      const getCatego = blogPosts.map((val) => val.category);

      //console.log([...getCatego].sort());

      //🔢 contar n de categories values + ordenar com sort()
      const counter = getCatego
        .sort()
        .reduce((cont, item) => ((cont[item] = cont[item] + 1 || 1), cont), {});

      //recebe o contador unique + contador
      this.categorias = counter;

      //🔢 Limitador de posts, lembrando this methods changes the original array
      blogPosts.splice();

      //thos AllPosts a ser usado no length and pelo @click show all posts
      this.AllPosts = blogPosts;

      //recebe os posts com limitador opcional
      this.opt = this.GetBlogPosts(this.numero);
    },
    changeRoute(e) {
      this.$router.push("/categories/" + e.target.value);
    },
    GetBlogPosts(n) {
      return this.AllPosts.filter((posts) => posts.published)
        .reverse() //reverse depois limiter
        .slice(0, n);
    },
    ShowAllPosts(e) {
      //onclick shoow +1 posts
      this.numero = this.numero + 5;
      return (this.opt = this.GetBlogPosts(this.numero));
    },
    ShowLessPosts() {
      //number = 5 minimo posts
      return (this.opt = this.GetBlogPosts((this.numero = 5)));
    },
  },
};
</script>
<style scoped>
* {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
/* div,
ul {
  margin-top: 5px;
} */
h1 {
  margin-top: 20px;
  font-size: 1.7rem;
}
.threads {
  padding: 10px;
}

.threads a {
  text-decoration: none;
  color: rgb(52, 71, 99);
  font-weight: bold;
  font-size: 1.2rem;
}

.threads a:hover {
  color: rgb(68, 186, 246);
}

.threads li {
  border-bottom: 2px solid green;
  margin: 20px 0;
}

.threads .cats {
  font-size: 0.7rem;
  color: rgb(131, 4, 170);
}

.threads ul li {
  list-style: none;
}
.threads .cat {
  font-size: 0.7rem;
}

.limiter button {
  cursor: pointer;
  text-align: center;
  font-size: 16px;
  background: #0044b3;
  padding: 5px 10px;
  border: none;
  opacity: 0.8;
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
  content: "DATE: ";
}
select {
  cursor: pointer;
}

/* desktop */
@media screen and (min-width: 650px) {
  .list-all {
    display: flex;
    width: 80%;
    padding: 10px 0;
    margin: 0 auto;
  }
  .list-all .threads {
    flex: 1 0 75%;
  }
  .sidebar {
    margin: 0 10px;
  }
}
</style>
