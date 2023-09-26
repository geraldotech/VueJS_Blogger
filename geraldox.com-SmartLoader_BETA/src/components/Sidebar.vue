<template>
  <div class="sidebar">
    <section class="content">
      <!--   <p class="search"><Search /></p> -->
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,
        deleniti?
      </p>
      <ul>
        <li><a href="http://geraldox.com">Home</a></li>
        <li><a href="http://geraldox.com/projects">Projects</a></li>
        <li><a href="http://geraldox.com/about">About</a></li>
      </ul>

      <figure>
        <img
          class="img-flex"
          src="https://1.bp.blogspot.com/-qyLZHjnUXzE/UBF2SVg6vNI/AAAAAAAABZ4/l4bm9FvHts0/s1600/395840.jpg"
          alt="fix logo"
        />
      </figure>

      <h2>Archives</h2>
      <div class="archive">
        <select>
          <option value="1">2008</option>
          <option value="1">2009</option>
          <option value="1">2010</option>
        </select>
      </div>
    </section>
  </div>
</template>
<script>
module.exports = {
  data() {
    return {}
  },
  components: {
    Search: httpVueLoader('../components/Search.vue'),
  },
}
</script>
<style scoped>
.sidebar {
  text-align: justify;
  margin-top: 15px;
}
.sidebar .content {
  padding: 5px;
}

.sidebar .content p {
  margin-top: 5px;
  font-size: 14px;
}
.content ul {
  margin-top: 15px;
}
.content ul a {
  line-height: 2rem;
}

.sidebar h2 {
  text-align: center;
  padding: 0;
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
  }
}
</style>
