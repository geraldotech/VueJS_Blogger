<template>
  <div>
    <h2>gmapdev blog</h2>
    <p>I write articles about Web Development, checkout my GitHub #gmapdev</p>
  </div>
</template>

<script>
module.exports = {
  metaInfo: {
    title: 'Home Page',
    titleTemplate: '%s - geraldoX',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'description',
        content:
          'I write articles about Web Development, checkout my GitHub #gmapdev',
      },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'vuejs, windows, android, linux' },
    ],
  },
}
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
