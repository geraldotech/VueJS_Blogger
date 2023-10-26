const youtube = {
  template: `<div class="block">
  <p>Youtube > Youtube Page</p>
  <router-link :to="{name:'r1'}">Music</router-link>
  <router-link :to="{name:'r2'}">Films</router-link>
<router-view></router-view>
  </div>
`,
};
const home2 = {
  template: `<p>VueJS Named Views from String </p>`,
};
const Sidebar = {
  template: `<p>Mysidebar</p>`,
};

const musica = {
  template: `<p>Content musicas </p>`,
};
const filmes = {
  template: `<p>Content filmes  {{$route.name}}</p>`,
};

const routes = [
  {
    path: "/",
    components: { default: httpVueLoader("./src/views/Home.vue"), yt: home2 },
    name: "Home Page",
  },
  {
    path: "/youtube",
    component: youtube,
    name: "Youtube Page",
    children: [
      { path: "music", name: "r1", component: musica },
      { path: "movie", name: "r2", component: filmes },
    ],
  },
  {
    path: "/footer",
    name: `footer`,
    component: httpVueLoader("./src/Footer.vue"),
  },
  {
    path: "/blog",
    name: "Blog Posts",
    component: httpVueLoader("./src/views/Blog.vue"),
  },
  {
    path: "/blog/:category/:slug",
    name: "threads",
    component: httpVueLoader("./src/views/UserPost.vue"),
  },
  {
    path: "/mapa/",
    component: httpVueLoader("./src/views/mapa.vue"),
    name: "Categories Map",
  },
  {
    path: "/categories/:category",
    component: httpVueLoader("./src/views/Categories.vue"),
  },
];

const router = new VueRouter({
  routes,
});

const DEFAULT_TITLE = "geraldoX - ";
router.afterEach((to, from) => {
  Vue.nextTick(() => {
    document.title = DEFAULT_TITLE + to.path;
  });
});

Vue.prototype.$appName = "geraldoX";

const vm = new Vue({
  data: {
    opt: "",
  },
  el: "#app",
  router,
  template: `<App></App>`, //component pai
  components: {
    App: httpVueLoader("./src/App.vue"),
  },
});
