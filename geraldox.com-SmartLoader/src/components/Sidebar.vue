<template>
  <div class="sidebar">
    <section class="content">
      <h2>Sidebar</h2>
      <!--   <p class="search"><Search /></p> -->
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,
        deleniti?
      </p>
      <ul>
        <li><a href="http://geraldox.com">Home</a></li>
        <li><a href="http://geraldox.com/#/projects">Projects</a></li>
      </ul>
      <div>
        <img
          src="https://images.unsplash.com/photo-1536412597336-ade7b523ecfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt=""
        />
      </div>
    </section>
  </div>
</template>
<script>
module.exports = {
  data() {
    return {};
  },
  components: {
    Search: httpVueLoader("../components/Search.vue"),
  },
};
</script>
<style scoped>
.sidebar {
  text-align: justify;
  margin-top: 15px;
}
.sidebar .content {
  padding: 2px;
}

.sidebar .content p {
  margin-top: 5px;
  font-size: 14px;
}

.sidebar h2 {
  text-align: center;
  border-bottom: 2px solid red;
  padding-bottom: 3.5px;
}

.sidebar div img {
  width: 100%;
  border-radius: 10px 10px;
}

ul li {
  padding: 0;
  margin-left: 10%;
  line-height: 1.5rem;
  text-align: left;
}

ul {
  text-align: center;
  /*  padding-left: 0;  */ /*  remove all padding left */
}

/* mobile */
@media screen and (max-width: 600px) {
  .sidebar {
    padding: 0 20px;
  }
  .sidebar div img {
    display: block;
    max-width: 60%;
    margin: auto;
  }
  .sidebar ul {
    text-align: center;
  }
}
/* table */
@media (max-width: 990px) {
  .sidebar div img {
    display: block;
    max-width: 300px;
    width: 100%;
    margin: auto;
  }
}
</style>
