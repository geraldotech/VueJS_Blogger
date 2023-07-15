import router from "../src/rotas.js";
import SmartLoader from "./smartLoader.js";
SmartLoader("./src/components/BlogPostsVue.js");
//SmartLoader("https://unpkg.com/vue-router@3.0.2/dist/vue-router.js");

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
