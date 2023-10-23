import router from '../src/router/index.js'
import SmartLoader from './smartLoader.js'
SmartLoader('/src/components/ContainerVue.js', 'module')
SmartLoader('/src/components/WebComponents.js', 'module')
// Standalone WebComponents
SmartLoader('/src/components/externo.js', 'module')

//import CDN to Vuemixin
import cdn from '/src/cdn.js'

// Assim todos os Components.vue podem usar a CDN diretamente das variaveis Globais:
Vue.mixin({
  created() {
    this.img = cdn.img // optei usar o same str
    this.cdnfiles = cdn.dropfiles // poderia ser diferente
  },
  data: function () {
    return {}
  },
})

Vue.prototype.$appName = 'geraldoX'
window.onload = function () {
  const vm = new Vue({
    data: {
      opt: '',
    },
    //el: "#app",
    template: `<App></App>`, // Parent component
    components: {
      App: httpVueLoader('/src/App.vue'),
    },
    router,
  }).$mount('#app')
}
