<template>
  <div class="block">
    <h1>Map: Categorias</h1>
    <p>{{ categorias }}</p>
    <ul v-for="(value, name) in categorias" :key="name">
      <li>
        <router-link :to="`/categories/${name}`"
          >{{ name }} - {{ value }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
module.exports = {
  created() {
    this.posts();
    //console.log(this.$route);
  },
  data() {
    return {
      blogPosts: [],
      categorias: {},
    };
  },
  methods: {
    async posts() {
      const req = await fetch("/src/db/data.json");
      const res = await req.json();
      this.blogPosts = res.blog.posts;

      //categorias only
      const getCatego = this.blogPosts.map((val) => val.category);
      //filter remove duplicado e undefined itens
      /*  const UniqueCats = getCatego.filter(
        (val, ind) => getCatego.indexOf(val) == ind && val != undefined
      ); */

      //console.log(`Unique values`, UniqueCats);
      //return valores unicos
      //this.categorias = UniqueCats.sort();
      //contar n de categories values
      const counter = getCatego
        .sort()
        .reduce((cont, item) => ((cont[item] = cont[item] + 1 || 1), cont), {});
      // console.log(`counter`, counter);
      //return valores unicos + n de posts com determinada categoria
      this.categorias = counter;
    },
  },
};
</script>
<style scoped>
div {
  max-width: 800px;
  margin: 0 auto;
}
div,
ul {
  margin-top: 10px;
  padding: 10px;
}

li {
  border-bottom: 2px solid green;
}

a {
  text-decoration: none;
  color: #3aa4ff;
  font-size: 1.4rem;
  font-weight: bold;
}
h1 {
  font-size: 1.7rem;
  margin-top: 15px;
}
</style>
