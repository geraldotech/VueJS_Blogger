import router from "../src/router/index.js";
import SmartLoader from "./smartLoader.js";
SmartLoader("/src/components/ContainerVue.js", "module");
SmartLoader("/src/components/WebComponents.js", "module");


Vue.prototype.$appName = "geraldoX";

Vue.mixin({
  
  data: function() {
    const pathcdn = "https://gpnotes.droppages.com/geraldox.proxyfiles.com";
    return {
      imgmix:'https://gpnotes.droppages.com/geraldox.proxyfiles.com/2022/img',
      imgx: "https://gmapdev.s3.amazonaws.com" + "/assets/img/"      
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
