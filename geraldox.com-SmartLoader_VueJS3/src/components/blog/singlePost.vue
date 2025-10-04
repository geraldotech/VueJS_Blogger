<script>
import { onMounted, ref, watch } from 'vue'
import Sidebar from '/src/components/blog/Sidebar.vue'
export default {
  name: 'singlePost',
  components: {
    /* === BLOG PARTIALS ===  */
    Sidebarbottom: Vue.defineAsyncComponent(() => loadModule('/src/components/blog/SidebarBottom.vue', options)),
    Searchlegacy: Vue.defineAsyncComponent(() => loadModule('/src/components/blog/Search.vue', options)),
    Searchauto: Vue.defineAsyncComponent(() => loadModule('/src/components/blog/SearchAuto.vue', options)),
    Adsense: Vue.defineAsyncComponent(() => loadModule('/src/components/blog/Adsense.vue', options)),
    Sidebar: Sidebar,
  },

  setup(props, { emit }) {
    const allPosts = ref([])
    const post = ref({})
    const categorias = ref('')
    const dynamicComponent = ref(null)
    const dynamicImportStatus = ref(null)
    const content = ref([])

    // Router
    const useRouter = VueRouter.useRouter()
    // Route
    const useRoute = VueRouter.useRoute()

    /* FUNCTIONS */
    // Emitting an event to the parent component
    const emitEvent = () => {
      emit('someEvent', 'Data from BlogPosts component')
    }

    function selectCategoryHandler(e) {
      useRouter.push({
        name: 'category',
        params: { category: e.target.value },
      })
    }

    /* FETCH POSTS MARKDOWN */
    if (useRoute.params.slug[0]) {
      console.log(`useRoute.params.slug[0]`, useRoute.params.slug)
      fetch(`/src/components/posts_md/${useRoute.params.slug[0]}.md`)
        .then((res) => {
          //          console.log(`res`, res)
          if (!res.ok) {
            throw new Error(`Erro na requisicao post md file: ${res.status}`)
          }
          return res.text()
        })
        .then((md) => {
          console.log('================>', md)
          content.value = marked.parse(md)
        })
    }

    /** FETCH ALL POSTS
     * @param - GET ALL POSTS, AND USE FIND TO GET THE CURRENT POST BY SLUG
     * @param - DYNAMIC IMPORT COMPONENTS IF POST HAS component key
     */
    async function fetchPost() {
      // fetch all posts
      const req = await fetch('/src/db/data.json')
      const data = await req.json()
      allPosts.value = data.blog.posts
      // fnid a slug atual e verifica se esta plublicada
      const getBlogPost = allPosts.value.find((post) => post.slug == useRoute.params.slug && post.published)
      post.value = getBlogPost

      /* Dynamic apply metaInfo */
      metaInfoInject(getBlogPost.title)

      /* Dynamic Import Components */
      checkComponentData()

      /* Sidebar props... */
      const getCatego = allPosts?.value.map((val) => val.category)

      //🔢 contar n de categories values + ordenar com sort()
      const counter = getCatego.sort().reduce((cont, item) => ((cont[item] = cont[item] + 1 || 1), cont), {})

      //🔢 recebe o contador unique + contador
      categorias.value = counter
    }

    function metaInfoInject(currentTitle) {
      document.title = currentTitle ? `${currentTitle} - geraldoX` : '404 Page - geraldoX'
      return {
        metaInfo: {
          title: currentTitle,
          titleTemplate: '%s - geraldoX',
          meta: [
            { charset: 'utf-8' },
            {
              name: 'description',
              content: 'I write articles about Web Development, checkout my GitHub #gmapdev',
            },
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1',
            },
            { name: 'keywords', content: 'vuejs, windows, android, linux' },
          ],
        },
      }
    }

    function checkComponentData() {
      // se n tem return false
      if (!post.value.component) {
        return {
          status: false,
        }
      }
      // call dynamic
      getDynamicComponent()
    }

    /**
     * dynamic imports components
     */
    function getDynamicComponent() {
      const isComponentAvaivable = componentExists()

      if (isComponentAvaivable) {
        dynamicComponent.value = Vue.defineAsyncComponent(() => loadModule(isComponentAvaivable.component, options)) // Load the component using your custom loader
        dynamicImportStatus.value = isComponentAvaivable.status // dynamicImportStatus get status if component exists
      }
      /*  return {
        component: `/src/components/posts/${this.post.component}.vue`,
      } */
    }

    /**
     * constructor component object for VueLoader
     */
    function componentExists() {
      const exists = `/src/components/posts/${post.value.component}.vue`

      if (exists) {
        return {
          component: `/src/components/posts/${post.value.component}.vue`,
          status: true, // extra status because component exists
        }
      }
      return false
    }

    /* === docsify === */
    const containerId = 'docsify-root'

    function ensureCss(href) {
      if (!document.querySelector(`link[rel="stylesheet"][href="${href}"]`)) {
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = href
        document.head.appendChild(link)
      }
    }
    /* === docsify === */
    function loadScriptOnce(src) {
      return new Promise((resolve, reject) => {
        if (window.__docsifyLoaded) return resolve()
        const s = document.createElement('script')
        s.src = src
        s.onload = () => {
          window.__docsifyLoaded = true
          resolve()
        }
        s.onerror = reject
        document.body.appendChild(s)
      })
    }

    // pega SOMENTE o último segmento do slug
    function getSlugLastSegment() {
      const slug = route.params?.slug
      if (!slug) return '' // cai no README.md
      if (Array.isArray(slug)) return slug.filter(Boolean).at(-1) || ''
      return String(slug).split('/').filter(Boolean).pop() || ''
    }

    // empurra o Docsify pra rota desejada
    function setDocByPath(path) {
      const target = '#/' + (path || '') // docsify adiciona ".md"
      if (location.hash !== target) location.hash = target
      else if (window.$docsify?.router) window.$docsify.router.go(target)
    }

    onMounted(async () => {
      fetchPost()
      // console.log('=>>', useRoute.params.slug)

      /* === docsify === */
      // 1) CSS do tema
      // ensureCss('//cdn.jsdelivr.net/npm/docsify/themes/vue.css')

      // 2) Config precisa existir ANTES do script carregar
      window.$docsify = {
        el: `#${containerId}`,
        // name: 'Minha Docs',
        basePath: '/components/blog/posts_md/',
        homepage: '/docs/README.md', // coloque seus .md em public/docs
      }

      // 3) Carrega script do Docsify (apenas uma vez)
     // await loadScriptOnce('//cdn.jsdelivr.net/npm/docsify@4')

    //  setDocByPath(getSlugLastSegment())
    })

    return {
      emitEvent,
      selectCategoryHandler,
      allPosts,
      post,
      categorias,
      dynamicComponent,
      content,
    }
  },
}
</script>
<template>
  <div>
    <!--  <Adsense></Adsense> -->
    <div class="single_post">
      <main>
        <!--  <div><Searchlegacy v1 /></div> -->
        <!--   <div><Searchauto v2 /></div> -->
        <article v-if="post">
          <!-- card starts -->
          <div class="breadcrumbs">
            <p>
              Home >
              <!--
                link definido manualmente substituido por router-link dynamic <a href="/blog">Blog</a> -->
              <router-link :to="{ name: 'Blog Posts' }">Blog</router-link>
              >
              <router-link
                class="categories"
                :to="{ name: 'category', params: { category: post.category ?? true } }"
                >{{ post.category }}</router-link
              >
            </p>
            <h1>{{ post.title }}</h1>
            <p class="breadcrumbs__author__date">
              By:<span>{{ post.author }}</span> | Posted on: {{ post.createdAt }} |
              <button
                data="print"
                title="print"
                onclick="print()">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="#05bdba">
                  <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                  <path
                    d="M128 0C92.7 0 64 28.7 64 64v96h64V64H354.7L384 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0H128zM384 352v32 64H128V384 368 352H384zm64 32h32c17.7 0 32-14.3 32-32V256c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32H64v64c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V384zM432 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
                </svg>
              </button>
            </p>
          </div>
          <!-- card ends -->

          <hr />
          <!-- render html from json -->
          <p v-html="post.article"></p>

          <!-- render components -->
          <!-- v1 se comentar vai quebrar o WebComponents.js e importacao de nomes, but se nao comentar duplica o content
         
            Duas Alternativas para TENTATIVA DE TRATAR O COMPOMENT DUPLICADO WHEN DYNAMIC IS TRUE
            - setado um state DYNAMIC IMPORT SUCCESS? so native post.component is not rendered 
           -->
          <!--   <h2>Is a Dynamic Component Import or manual import?{{ dynamicImportStatus ? 'Dynamic' : 'Not Dynamic' }}</h2> -->
          <component :is="post.component"></component>

          <!-- dynamic imports components -->
          <component :is="dynamicComponent"></component>

          <!-- markdown files -->
          <div v-html="content"></div>

          <!-- docsify md files -->
          <div
            data-app
            id="docsify-root">
            Please wait...
          </div>
        </article>
        <div v-else>
          <h4 class="notFound">Sorry! 404 error Post Not Found, or was removed!</h4>
        </div>

        <!-- custom html to specific slug posts -->
        <div v-if="$route.params.slug == 'speed-test'">
          <p>Hello post about speedTest</p>
        </div>
        <Sidebarbottom :allposts="allPosts" />
      </main>
      <Sidebar
        :categorias="categorias"
        @selectcategory="selectCategoryHandler" />
    </div>
  </div>
</template>

<style>
#docsify-root {
  width: 200px;
}
article h1 {
  text-align: left;
  font-size: 1.5rem;
  font-weight: bolder;
}
article p {
  line-height: 1.5rem;
  margin-top: 10px;
}
.breadcrumbs {
  color: coral;
}

.breadcrumbs p {
  margin: 0;
}
.breadcrumbs h1 {
  margin: 7px 0;
}
div.breadcrumbs {
  font-size: 12px;
  margin: 4px 0;
  border-radius: 5px 5px;
  font-weight: bold;
  text-transform: uppercase;
}
.breadcrumbs .categories {
  /*  color: rgb(212, 86, 251); */
  /*  text-transform: uppercase; */
  text-decoration: none;
  text-align: left;
  text-transform: uppercase; /* first-letter maiusculo */
}
.breadcrumbs__author__date {
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}
.breadcrumbs a {
  text-decoration: none;
}
h4.notFound {
  text-align: center;
}
button[data*='print'] {
  background: none;
  border: none;
  cursor: pointer;
}

button[data*='print'] svg {
  color: #05bdba;
}
</style>
