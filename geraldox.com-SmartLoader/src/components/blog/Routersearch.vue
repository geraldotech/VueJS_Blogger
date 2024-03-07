<template>
  <div>
    <h1>Router Search, and using axios to fetch data</h1>
    <h2>Example how to use query params you can direct in get:</h2>

    <p><strong>blog/search?category=android</strong> <a href="https://geraldox.com/blog/search?category=android">click</a></p>
   <!--  <p>{{ getPostsFromCategory }}</p> -->

    <h2>Fecth post.id <a href="https://geraldox.com/blog/search?postid=2">click</a></h2>
    <strong>this.$route.query.postid</strong>
    <!--    <p>{{ filteredData }}</p> -->
    <h2>Multiple queries category and id</h2>
    <p>
      <strong>/blog/search?category=android&id=4</strong>
    </p>
    <!--  <p>{{ getPostMultipleQueries }}</p> -->
  </div>
</template>

<script>
/* TESTING .. because this is a nested router */
const database = '../src/db/data.json'
/*

  Vue3 add query:
  https://v3.router.vuejs.org/guide/essentials/navigation.html


  get query:   <p>{{ $route.query }}</p>
*/
module.exports = {
  created() {
   /// console.log(this.$route)
  },
  mounted() {
    /* EXAMPLE 1 */

    /*  axios.get('./src/db/data.json').then(
      (response) =>
        //console.log(response.data.blog.posts)
        setTimeout(() => {
          this.allposts = response.data?.blog.posts
          this.state = true
        }, 1000)
    ).catch(error => {
          console.error('Error fetching data:', error);
        }); */

    /* EXAMPLE 2 */
    //this.fetchData()

    /* CAN CALL DIRECT OU CALL A FN */
   this.fetchNative()
  },
  data() {
    return {
      allposts: null,
      state: false,

      categoryRes: [],
      filteredData: [],
    }
  },
  methods: {
    /* === USE method to fetch and another to filter data  === */
    fetchData() {
      axios
        .get('/src/db/data.json')
        .then((response) => {
          this.rawData = response.data?.blog.posts
          this.handlerFilterfromFN()
        })
        .catch((error) => {
          console.error('Error fetching data:', error)
        })
    },
    handlerFilterfromFN() {
      // console.log(this.$route.query.postid)
      this.filteredData = this.rawData.filter((post) => post.id == this.$route.query.postid)
    },
    async fetchNative() {
      await new Promise((response) => setTimeout(response, 2000))

      try {
        const req = await fetch(database)
        const data = await req.json()
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    },
  },
  /* === USE computed to get posts  === */
  computed: {
    getPostsFromCategory() {
      // no forget pust ? to void error

      if (this.state) {
        //console.warn(this.allposts)
        //console.log(this.$route.query.category ?? 'no category')
        return this.allposts?.filter((post) => post.category == this.$route.query.category)
      }
      return 'Loading...'

      /* 
     if(this.$route.query?.category && this.allposts){
      const posts = this.allposts?.filter((post) => post.category === this.$route.query.category)
      return (this.categoryRes = posts)
      }
      return 'no data in category params'  */
    },
    getPostMultipleQueries() {
      return this.allposts?.filter((post) => post.id === +this.$route.query.id)
    },
  },
}
</script>

<style scoped>
div,
p {
  padding: 0.8rem;
}

strong {
  color: dodgerblue;
}

h2 {
  margin-block: 10px;
  border-bottom: 2px solid red;
}
</style>
