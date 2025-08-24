/* WELCOME TO VUEJS 3 components */
<script setup>
import { ref } from 'vue'
const foo = ref(0)

function makeFetchRequest() {
  fetch('https://api-restful-json.vercel.app/entregasuporte')
    .then((req) => {
      if (!req.ok) {
        throw new Error(`Error na requisição ${req.status}`)
      }
      return req.json()
    })
    .then((res) => {
      console.log(res)
    })
    .catch((error) => {
      console.error('Erro', error)
    }).finally(() => {
      console.log(`acabou`)
    })
}

const hello = () => {
  console.log(`click`)
}

makeFetchRequest()
</script>
<template>
  <div>
    <h1>click sobre o gato para aumentar</h1>
    <div class="flex">
      <button @click="foo++">click +</button>
      <button @click="foo--">click -</button>
    </div>

    <h1>timeline</h1>
    <figure v-if="foo <= 2">
      <img
        src="https://images.pexels.com/photos/14364551/pexels-photo-14364551.jpeg"
        alt="" />
    </figure>
    <figure v-if="foo >= 3">
      <img
        src="https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg"
        alt="" />
    </figure>

    <h1>cliques: {{ foo }}</h1>
    <h2 v-show="foo > 10">10KG de ração</h2>

    <h2 @click="hello">hello</h2>
  </div>
</template>
<style scoped>
* {
  margin: 0;
}
img {
  max-width: 100%;
  width: 100%;
}
div {
  max-width: 350px;
  border: 1px solid;
  text-align: center;
  margin: 0 auto;
}
.cursor {
  cursor: pointer;
}
.flex {
  display: flex;
  padding: 10px;
  justify-content: space-around;
}
</style>
