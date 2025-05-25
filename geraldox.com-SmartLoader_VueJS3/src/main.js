import router from '../src/router/index.js'

const { createApp, ref, onMounted, defineCustomElement, reactive } = Vue

const app = createApp({
  components: {
    App: Vue.defineAsyncComponent(() => loadModule('./src/App.vue', options)),
  },
  setup() {},
  template: `<App/>`,
})


app.use(router)
app.mount('#app')
