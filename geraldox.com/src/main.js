import router from "../src/rotas.js";

Vue.prototype.$appName = "geraldoX";

const vm = new Vue({
  data: {
    opt: "",
  },
  el: "#app",
  template: `<App></App>`, // Parent component
  components: {
    App: httpVueLoader("./src/App.vue"),
  },
  router,
});
