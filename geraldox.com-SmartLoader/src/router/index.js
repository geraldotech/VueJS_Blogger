import cdn from '../cdn.js' //this import to use cdn links

const home2 = {
  template: `<p>VueJS Named Views from String </p>`,
}

const gdrive = {
  template: `<p>Content Google Drive </p>`,
}
const Resume = {
  // need route name ?{{$route.name}}
  template: `<p><a href="${cdn.dropfiles}/geraldo_resume_ptbr.pdf" target="_blank">PTBR</a> - <a href="${cdn.dropfiles}/geraldo_resume_eng.pdf"  target="_blank">English</a></p>`,
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
    path: '/blog/:category/:slug+',
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
    path: '/projects2',
    component: httpVueLoader('/src/views/Projects_old.vue'),
    name: '',
  },
  {
    path: '/about',
    component: httpVueLoader('/src/views/About.vue'),
    name: 'about',
    children: [
      { path: 'resume', name: 'r1', component: Resume },
      { path: 'google-drive', name: 'r2', component: gdrive },
    ],
  },
  {
    path: '/politica-privacidade',
    component: httpVueLoader('./src/views/Politicaprivacidade.vue'),
    name: '',
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      console.log(`tohash`, to.hash)
      return {
        selector: to.hash,
        // offset: { x: 0, y: 10 },
      }
    }
    return { x: 0, y: 0, behavior: 'smooth' } // always scroll to top - working mesmo desativado no desktop, problema ocorre no mobile
  },
})

router.beforeResolve((to, from, next) => {
  if (to) {
    // showPinner ?
    NProgress.configure({ showSpinner: false })
    NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.configure({ easing: 'ease', speed: 1000, showSpinner: false })
  NProgress.done()
})

//Pegar primeira letra da String e deixar UpperCase() by geraldoX
/* const DEFAULT_TITLE = 'geraldoX - '
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
}) */

export default router
