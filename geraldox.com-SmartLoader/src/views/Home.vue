<template>
  <div class="home">
    <section>
      <h1>GERALDO PETRONILO</h1>
      <p>Developer</p>
    </section>
    <h2><code>#gmapdev</code></h2>
    <h3>Hi there 👋</h3>
    <p>I write articles about Web Development, checkout my GitHub #gmapdev</p>
    <p class="left">
      In this space I will be sharing tech related content in the subjects of
      software development, Linux, containers, and also FrontEnd, which is one
      of my favorite hobbies.
    </p>
    <p class="block">
      Open source has always taken a special place in my heart, and what I like
      the most about it is the aspect of "learning in public", essentially
      sharing what you are working on and feel excited about, since it may be
      useful for other folks even if just as an inspiration.
    </p>
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

<style>
div.home {
  font-size: 1.2rem;
  text-align: center;
  min-height: 100vh;
  padding: 2rem;
  background: hsl(204, 100%, 5%);
}
.home h2 {
  color: #05bdba;
}
/* this stlyes only work on global mode, !important dont work */
.home section {
  clear: both;
  font-family: system-ui;
  font-size: 2.6em;
  background: linear-gradient(to right, hsl(98 100% 62%), hsl(204 100% 59%));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
}

.home h3 {
  text-align: left;
}

.home .left {
  float: left;
  max-width: 48%;
  margin-block: 30px;
  text-align: justify;
}
.home .block {
  float: right;
  max-width: 48%;
  text-align: justify;
  color: #b9b3aa;
}
.home .block::first-line {
  line-height: 70px;
  color: #05bdba;
}

.home :is(.block, .left)::first-line {
  color: rebeccapurple;
}

.home .block::first-letter {
  font-size: 2.3rem;
  initial-letter: 2;
  margin-right: 0.75rem;
}

@media (max-width: 650px) {
  .home {
    padding: 4px !important;
    margin: 0;
  }
}
</style>
