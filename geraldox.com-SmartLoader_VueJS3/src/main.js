import router from '../src/router/index.js'
const { createApp, ref, onMounted, reactive } = Vue
//import CDN to Vue Mixin
import cdn from '/src/lib/cdn.js'

window.onload = function () {
const app = createApp({
  components: {
    App: Vue.defineAsyncComponent(() => loadModule('./src/App.vue', options)),
  },
  setup() {},
  template: `<App/>`,
})
app.use(router)
app.mount('#app')
}