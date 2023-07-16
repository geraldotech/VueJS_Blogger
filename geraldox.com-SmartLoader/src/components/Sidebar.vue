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

      <figure>
        <img
          src="https://1.bp.blogspot.com/-qyLZHjnUXzE/UBF2SVg6vNI/AAAAAAAABZ4/l4bm9FvHts0/s1600/395840.jpg"
          alt="fix logo"
        />
      </figure>
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

.sidebar figure img {
  /* width: 100%;
  max-width: 50%; */
  border-radius: 10px 10px;
  margin: 15px auto;
  padding: 5px;
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
    margin: auto;
  }
  .sidebar ul {
    text-align: center;
  }
  figure img,
  div img {
    width: 50%;
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
    max-width: 300px;
    width: 100%;
    margin: auto;
  }
  .sidebar figure:has(img) {
    text-align: center;
    margin: auto;
  }
}
</style>
