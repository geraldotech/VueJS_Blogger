import cdn from '../cdn.js' //this import to use cdn links

const home2 = {
  template: `<p>VueJS Named Views from String </p>`,
}

const gdrive = {
  template: `<p>Content Google DRive </p>`,
}
const directD = {
  template: `<p>{{$route.name}} <a href="${cdn.dropfiles}/resume-2023_compressed.pdf" download>Baixar</a> </p>`,
}

const NotFound = {
  template: `<h1>404</h1>`,
}

const routes = [
  {
    path: '/',
    components: { default: httpVueLoader('./src/views/Home.vue'), yt: home2 },
    name: 'Home Page',
  },
  {
    path: '/blog',
    name: 'Blog Posts',
    component: httpVueLoader('/src/views/Blog.vue'),
    children: [
      {
        path: 'mapa',
        name: 'Categories Map',
        component: httpVueLoader('/src/views/mapa.vue'),
      },
    ],
  },
  {
    path: '/blog/:category/:slug',
    //path: "/blog/:slug",
    name: 'threads',
    component: httpVueLoader('/src/views/UserPost.vue'),
  },
  {
    path: '/categories/:category',
    component: httpVueLoader('/src/views/Categories.vue'),
  },
  {
    path: '/projects',
    component: httpVueLoader('/src/views/Projects.vue'),
    name: 'projects',
  },
  {
    path: '/about',
    component: httpVueLoader('/src/views/About.vue'),
    name: 'about',
    children: [
      { path: 'direct', name: 'r1', component: directD },
      { path: 'google-drive', name: 'r2', component: gdrive },
    ],
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = new VueRouter({
  // mode: 'history',
  routes,
})

router.beforeResolve((to, from, next) => {
  if (to) {
    NProgress.start()
    // showPinner ?
    NProgress.configure({ showSpinner: true })
  }
  next()
})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.configure({ easing: 'ease', speed: 1000 })
  NProgress.done()
})

//Pegar primeira letra da String e deixar UpperCase() by geraldoX
const DEFAULT_TITLE = 'geraldoX - '
router.afterEach((to, from) => {
  Vue.nextTick(() => {
    document.title =
      DEFAULT_TITLE +
      to.path.charAt(1).toLocaleUpperCase() +
      to.path.substring(2)
    //truque by geraldoX para melhorar o titulo da Home Page em vez de uma simples barra
    if (to.path == `/`) {
      document.title = `${DEFAULT_TITLE} Home Page`
    }
  })
})

export default router
