const Home = () => loadModule('/src/views/Home.vue', options)
const About = () => loadModule('../src/views/About.vue', options)
const Blog = () => loadModule('../src/components/blog/Blog.vue', options)
const Mapa = () => loadModule('../src/components/blog/mapa.vue', options)
const Routersearch = () => loadModule('/src/components/blog/Routersearch.vue',options)
const AdvancedSearch = () => loadModule('/src/components/blog/AdvancedSearch.vue',options)
const Categories = () => loadModule('/src/components/blog/Categories.vue',options)
const UserPost = () => loadModule('/src/components/blog/UserPost.vue',options)
const Testeold = () => loadModule('../src/views/testold.vue', options)
//const TesteNew = () => loadModule('../src/views/testnew.vue', options)

const NotFound = { template: "<h1 style='color:red'>Not Found</h1>" }

// from https://github.com/FranckFreiburger/vue3-sfc-loader/discussions/172
function load(path) {
  return window['vue3-sfc-loader'].loadModule(path, options)
}

const routes = [
  { path: '/', component: Home },

  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  { path: '/about', component: About },
  {
    path: '/blog',
    name: 'Blog Posts',
    component: Blog,
    children: [
      {
        path: 'mapa',
        name: 'categoriesMap',
        component: Mapa,
      },
      {
        path: 'search', // search?name=geraldo
        name: 'search',
        component: Routersearch,
      },
      {
        path: 'advancedsearch', // advancedsearch?name=geraldo
        name: 'advancedsearch',
        component: AdvancedSearch,
      },
      /* DYNAMIC ROUTER :anything below must be in the end */
      /* TO SEND PARAMS IN ROUTER USE path */
      {
        path: ':category',
        name: 'category',
        component: Categories,
      },
      {
        path: ':category/:slug+',
        name: 'threads',
        component: UserPost,
      },
    ],
  },
]

const router = VueRouter.createRouter({
  //importe para criar o: #/
  history: VueRouter.createWebHashHistory(),
  //history: VueRouter.createWebHistory(), // remove !# porém bugou carregar componentes.vue
  routes,
})

// Rotas const para que createapp
//const appR = Vue.createApp({});

// Routers

//appR.use(router);
//appR.mount("#rotas"); //deve ser o ultimo apos o mount(router)
//Vue.createApp().use(router).mount(rotas); //inline fuck yeah!!

export default router
