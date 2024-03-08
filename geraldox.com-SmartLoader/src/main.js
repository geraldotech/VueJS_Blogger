import router from '../src/router/index.js'
import SmartLoader from './lib/smartLoader.js'
SmartLoader('/src/components/posts/ContainerVue.js', 'module')
SmartLoader('/src/components/posts/WebComponents.js', 'module')
// Standalone WebComponents
SmartLoader('/src/components/posts/externo.js', 'module')
/* snippet-x library */
SmartLoader('/src/lib/snippet-x.js')


//import CDN to Vue Mixin
import cdn from '/src/lib/cdn.js'

// Assim todos os Components.vue podem usar a CDN diretamente das variaveis Globais:
Vue.mixin({
  created() {
    this.img = cdn.img // optei usar o same str //
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

