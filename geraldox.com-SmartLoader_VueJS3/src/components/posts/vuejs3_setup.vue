<script setup>
/* VUEJS 3 components usando setup no script (mais pratico) */
import { ref, watch, onMounted, defineComponent, inject } from 'vue'
import sidebar from '/src/components/blog/Sidebar.vue'

const foo = ref(0)
const title = "setup script"

// lendo variaveis glovais
const globais = inject('globais')
console.log('globais', globais)

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
    })
    .finally(() => {})
}

/* string templates: locais registrar componentes localmente com defineComponent */
const MyComponentLocal = defineComponent({
  name: 'MyComponentLocal',
  setup() {
    const count = ref(0)
    return { count }
  },
  template: `
    <div>
      <h2>hello com Componente #local</h2>
      <p>Contador: {{ count }}</p>
      <button @click="count++">Incrementar</button>
    </div>
    <style>
    div{
    color: blue;
    }
    </style>
  `,
})

const hello = () => {
  console.log(`click`)
}

onMounted(() => {
  makeFetchRequest()
})
</script>
<template>
  <div>
    <div class="flex">
      <button @click="foo--">click -</button>
      <button @click="foo++">click +</button>
    </div>

    <h1>{{title}}</h1>
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

    <h2 @click="hello">hello click me</h2>

    <h1>Local component</h1>
    <MyComponentLocal />

    <h1>global component</h1>
    <MyComponentGlobal />

    <h1>sidebar</h1>
    <sidebar />
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
