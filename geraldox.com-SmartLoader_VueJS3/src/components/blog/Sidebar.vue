<template>
  <div class="sidebar">
    <section class="content">
      <!--   <p class="search"><Search /></p> -->
      <h2>About this Site:</h2>
      <p>
        In this space I will be sharing tech related content in the subjects of
        software development, Linux, containers, and also FrontEnd, which is one
        of my favorite hobbies.
      </p>
      <h3>Table of Contents</h3>
    <div class="map">
          <div>
            <router-link :to="{ name: 'categoriesMap' }">Website Map:</router-link>
          </div>
          <select
            v-model="select"
            @change="selectCategoryHandler($event)">
          <option value="" disabled>Categoria</option>
            <option
              v-for="(itens, ind) in categorias"
              :key="itens.id"
              :value="ind">
              {{ ind.toUpperCase() }} - {{ itens }}
            </option>
          </select>
        </div>
      <ul>
        <li><a href="http://geraldox.com">Home</a></li>
      </ul>

      <figure>
        <img
          class="img-flex"
          src="/src/assets/img/pairprogramming-amico.svg"
          alt="fix logo" />
      </figure>

      <h2>Archives</h2>
      <div class="archive">
        <select v-model="select">
          <option value=""></option>
          <option value="1">2008</option>
          <option value="2">2009</option>
          <option value="3">2010</option>
        </select>
        <p></p>
        <nav v-show="select">
          <a href="" class="btnDownload">{{ select }}</a>
        </nav>
      </div>
    </section>
  </div>
</template>
<script>
module.exports = {
  props:{
    categorias:{
      type: null
    },
  },
  data() {
    return {}
  },
  components: {
    Search: Vue.defineAsyncComponent(() => loadModule('../components/Search.vue', options))
  },
  data() {
    return {
      select: '',
    }
  },
  methods: {
    selectCategoryHandler(){
      /* Sendo eventname + event from select to parent */
      this.$emit('selectcategory', event)
    }
  }
}
</script>
<style scoped>

.sidebar {
  margin-top: 15px;
}
.sidebar .content {
  padding: 5px;
}

.sidebar .content p {
  margin-top: 5px;
  font-size: 14px;
  color: #e8e6e3;
  text-wrap: balance;
}
.content ul {
  margin-top: 15px;
}
.content ul a {
  line-height: 2rem;
}

.sidebar h2, h3 {
  text-align: center;
  padding: 0;
  margin-block: 15px;
}

.sidebar figure img {
  width: 100%;
  border-radius: 10px 10px;
  margin: 15px auto;
  padding: 5px;
}

.sidebar ul li {
  padding: 0;
  margin-left: 10%;
  line-height: 1.5rem;
  text-align: left;
  list-style: none;
}

.sidebar ul {
  text-align: center;
  /*  padding-left: 0;  */ /*  remove all padding left */
}

.archive {
  text-align: center;
}

.sidebar select {
  text-align: center;
  width: 70%;
  margin: 10px auto;
  padding: 5px 0;
}

/* mobile */
@media screen and (max-width: 600px) {
  .sidebar {
    border-top: 2px solid;
    margin-top: 50px !important;
    padding: 0 20px;
  }
  .sidebar div img {
    margin: auto;
  }
  .sidebar ul {
    text-align: center;
  }
  figure:has(img) {
    text-align: center;
    margin: auto;
  }
}
/* table */
@media (max-width: 990px) {
  .sidebar div img {
    display: block;
    max-width: 100px;
    width: 100%;
    margin: auto;
  }
  .sidebar figure:has(img) {
    text-align: center;
    margin: auto;
    max-width: 400px;
  }
}

.map{
  text-align: center;
  background: #333;
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

</style>
