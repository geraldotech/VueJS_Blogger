<template>
  <div>
    <h2>gmapdev blog</h2>
    <p>I write articles about Web Development, checkout my GitHub #gmapdev</p>
  </div>
</template>

<script>
module.exports = {
  head: {
    title: {
      inner: "Home Page",
      separator: "-",
      complement: "gmapdev",
      meta: [
        {
          name: "description",
          content: "I write articles about Web Development, checkout",
        },
      ],
    },
    link: [
      {
        rel: "canonical",
        href: "https://geraldox.com/",
        id: "canonical",
      },
    ],
  },
};
</script>

<style scoped>
div {
  font-size: 1.2rem;
  text-align: center;
  min-height: 80vh;
  margin-top: 20px;
  line-height: 4rem;
}
</style>
