const home = () => loadModule('/src/views/Home.vue', options)
const about = () => loadModule('../src/views/About.vue', options)
const blog = () => loadModule('../src/components/blog/Blog.vue', options)
const mapa = () => loadModule('../src/components/blog/mapa.vue', options)
const routersearch = () => loadModule('/src/components/blog/Routersearch.vue', options)
const advancedSearch = () => loadModule('/src/components/blog/AdvancedSearch.vue', options)
const categories = () => loadModule('/src/components/blog/Categories.vue', options)
const singlePost = () => loadModule('/src/components/blog/singlePost.vue', options)
const notFound = { template: "<h1 style='color:red'>Not Found</h1>" }

// from https://github.com/FranckFreiburger/vue3-sfc-loader/discussions/172
function load(path) {
  return window['vue3-sfc-loader'].loadModule(path, options)
}

const routes = [
  { path: '/', component: home },

  { path: '/:pathMatch(.*)*', name: 'NotFound', component: notFound },
  { path: '/about', component: about },
  {
    path: '/blog',
    name: 'Blog Posts',
    component: blog,
    children: [
      {
        path: 'mapa',
        name: 'categoriesMap',
        component: mapa,
      },
      {
        path: 'search', // search?name=geraldo
        name: 'search',
        component: routersearch,
      },
      {
        path: 'advancedsearch', // advancedsearch?name=geraldo
        name: 'advancedsearch',
        component: advancedSearch,
      },
      /* DYNAMIC ROUTER :anything below must be in the end */
      /* TO SEND PARAMS IN ROUTER USE path */
      {
        path: ':category',
        name: 'category',
        component: categories,
      },
      {
        path: ':category/:slug+',
        name: 'threads',
        component: singlePost,
      },
    ],
  },
]

const router = VueRouter.createRouter({
  //importe para criar o: #/
  history: VueRouter.createWebHashHistory(),
  //history: VueRouter.createWebHistory(), // remove !# porém bugou carregar componentes.vue
  routes
})

export default router
