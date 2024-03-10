import cdn from '../lib/cdn.js' //this import to use cdn links

const Home = httpVueLoader('/src/views/Home.vue')
const HomeOld = httpVueLoader('/src/views/HomeOld.vue')
const About = httpVueLoader('/src/views/About.vue')
const Politica = httpVueLoader('./src/views/Politicaprivacidade.vue')
const Projects = httpVueLoader('/src/views/Projects.vue')
const Blog = httpVueLoader('/src/components/blog/Blog.vue')
const Mapa = httpVueLoader('/src/components/blog/mapa.vue')
const UserPost = httpVueLoader('/src/components/blog/UserPost.vue')
const Categories = httpVueLoader('/src/components/blog/Categories.vue')
const Routersearch = httpVueLoader('/src/components/blog/Routersearch.vue')
const AdvancedSearch = httpVueLoader('/src/components/blog/AdvancedSearch.vue')

const homeBottom = {
  template: `<p>Powered by <i class="fa-brands fa-vuejs"></i></p>`,
}

const gdrive = {
  template: `<p><a href="https://1drv.ms/b/s!Aol5qLKOISMzgaAfdSoD5CJOgE5sHg?e=98NxhY" target="_blank">Português - {OneDrive}</a></p>`,
}
const Resume = {
  // need route name ?{{$route.name}}
  template: `<p><a href="${cdn.dropfiles}/geraldo_resume_ptbr.pdf" target="_blank">Português</a>  - <a href="${cdn.dropfiles}/geraldo_resume_eng.pdf"  target="_blank">English</a></p>`,
}

const NotFound = {
  template: `<h1>404</h1>`,
}

const routes = [
  {
    path: '/',
    components: { default: Home, homeBottom: homeBottom },
    name: 'Home Page',
  },
  {
    path: '/homeold',
    components: { default: HomeOld },
    name: 'OldHome',
  },
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
  {
    path: '/projects',
    component: Projects,
    name: 'projects',
  },
  {
    path: '/projects2',
    component: httpVueLoader('/src/views/Projects_old.vue'),
    name: '',
  },
  {
    path: '/about',
    component: About,
    name: 'about',
    children: [
      { path: 'resume', name: 'r1', component: Resume },
      { path: 'resume-server2', name: 'r2', component: gdrive },
    ],
  },
  {
    path: '/politica-privacidade',
    component: Politica,
    name: '',
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

// CHECK is deploy or production environment - by GMAP
// if has any por like localhost:5000 / 192.168.0.1:4434 return true and apply hash

const producOrDevMode = location.port != ''
//OLD const producOrDevMode = location.hostname.includes('127.0.0.1')

const router = new VueRouter({
  mode: producOrDevMode ? '' : 'history',
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
