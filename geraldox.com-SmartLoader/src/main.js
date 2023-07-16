import router from "../src/rotas.js";
import SmartLoader from "./smartLoader.js";
SmartLoader("./src/components/ContainerVue.js");

Vue.prototype.$appName = "geraldoX";

window.onload = function () {
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
};
