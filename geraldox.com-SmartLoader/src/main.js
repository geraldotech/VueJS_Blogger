import router from "../src/router/index.js";
import SmartLoader from "./smartLoader.js";
SmartLoader("/src/components/ContainerVue.js", "module");
SmartLoader("/src/components/WebComponents.js", "module");

//import CDN to Vuemixin
import cdn from "/src/cdn.js"
Vue.prototype.$appName = "geraldoX";

Vue.mixin({
  created(){
    this.img = cdn.img;
    this.cdnfiles = cdn.files
  },
  data: function() {
    return {         
    }
  }
})


window.onload = function () {
  const vm = new Vue({
    data: {
      opt: "",
    },
    //el: "#app",
    template: `<App></App>`, // Parent component
    components: {
      App: httpVueLoader("/src/App.vue"),
    },
    router,
  }).$mount("#app");
};
