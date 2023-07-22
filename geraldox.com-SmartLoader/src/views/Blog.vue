<template>
  <div>
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
          <p>All Posts:{{ opt.length }}</p>
        </div>
        <h1>Threads</h1>
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
              Category:
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
  },
  components: {
    Sidebar: httpVueLoader("../components/Sidebar.vue"),
    Search: httpVueLoader("../components/Search.vue"),
    Mapas: httpVueLoader("../views/mapa.vue"),
  },
  data() {
    return {
      opt: [],
      categorias: {},
      select: "",
      showN: {},
    };
  },
  methods: {
    async posts() {
      const req = await fetch("./src/db/data.json");
      const res = await req.json();

      //filter post published
      const blogPosts = res.blog.posts.filter((posts) => posts.published);

      // map categoris acima dos limitadores de posts splice()
      const getCatego = blogPosts.map((val) => val.category);

      //console.log([...getCatego].sort());

      //filter[antigo] remove categories duplicado e undefined itens
      const filtra = getCatego.filter(
        (val, ind) => getCatego.indexOf(val) == ind && val != undefined
      );
      //console.warn(`filtra`, filtra);

      //cat recebe categorias sem duplicados and ordenar sort()
      //this.categorias = filtra;

      //🔢 contar n de categories values + ordenar com sort()
      const counter = getCatego
        .sort()
        .reduce((cont, item) => ((cont[item] = cont[item] + 1 || 1), cont), {});

      //recebe o contador unique + contador
      this.categorias = counter;

      //🔢 Limitador de posts
      blogPosts.splice();

      //reverse render posts mais novos on top
      this.opt = blogPosts.reverse();

      //🔢 ou aqui Limitador de posts
      this.opt.splice();
    },
    changeRoute(e) {
      this.$router.push("/categories/" + e.target.value);
    },
  },
};
</script>
<style scoped>
* {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
div,
ul {
  margin-top: 10px;
}
h1 {
  margin-top: 20px;
  font-size: 1.7rem;
}
.threads {
  padding: 10px;
}

.threads a {
  text-decoration: none;
  color: #3aa4ff;
  font-weight: bold;
  font-size: 1.2rem;
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
  content: "Date: ";
}
select {
  cursor: pointer;
}

@media screen and (min-width: 650px) {
  .list-all {
    display: flex;
    width: 80%;
    padding: 50px 0;
    margin: 0 auto;
  }
  .list-all .threads {
    flex: 1 0 75%;
  }
  .sidebar {
    margin: 0 10px;
  }
  /* .sidebar {
    flex: 1;
  } */
}
</style>
