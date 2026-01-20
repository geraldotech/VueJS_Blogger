<template>
  <div>
    <div id="profile"></div>
  </div>
</template>

<script>
/* Vue.extend */
const Perfil = {
  template: `<p>Hello from extends</p>`,
}


//Acer Component
app.component('acer', {
  data() {
    return {
      opt: '',
    }
  },
  methods: {},
  template: `
  <div class="containerPost">
   <link rel="stylesheet" href="src/styles/ContainerPosts.css">
    <article class="acer">
<p>Hello Acer Options here:</p>
    <hr>
    <select v-model="opt">
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
    </select>
    <p>Escolheu:  {{opt}}</p>
    </article>
    </div>
  `,
})

const sam = `
      <main>
        <p class="sam">Samsung template</p>
      </main>
   `
app.component('sammy', {
  template: sam,
})

module.exports = {
  name: 'Container',
  data() {
    return {}
  },
}
</script>

<style>
/* parent class */
.containerPost {
  padding: 10px;
}
.containerPost .acer {
  color: blue;
}
</style>
