import router from '../src/router/index.js'
const { createApp, ref, onMounted, reactive, defineComponent } = Vue
//import CDN to Vue Mixin
import cdn from '/src/lib/cdn.js'

/* string templates: components globais */
const MyComponentGlobal = defineComponent({
  name: 'MyComponentGlobal',
  setup() {
    const count = ref(0)
    return { count }
  },
  template: `
    <div>
      <h2>hello from component global #works #here</h2>
      <p>Contador: {{ count }}</p>
      <button @click="count++">Incrementar</button>
    </div>
  `,
})

window.onload = function () {
  const app = createApp({
    components: {
      App: Vue.defineAsyncComponent(() => loadModule('./src/App.vue', options)),
    },
    setup() {
      onMounted(() => {})
    },
    template: `<App/>`,
  })
  app.use(router)

  // injectando var globais
  const globais = {
    apiUrl: 'https://minha.api',
    tema: ref('dark'),
  }
  app.provide('globais from main.js', globais)

  // register component global
  app.component('MyComponentGlobal', MyComponentGlobal)
  app.mount('#vue')
}
