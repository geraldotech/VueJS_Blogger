# Blog JSON

### This project:

- VueJS 2.7.13
- http-vue-loader
  - No node.js environment, no build step, thanks [FranckFreiburger](https://github.com/FranckFreiburger/http-vue-loader)
- vue-router 3.0.2
- Fake {API}
- Styles:

  - CSS Mobile First
  - Use `class='img-flex'` for big img special in Container Components
  - CSS Global `class='btnDownload'` for button downloads e.g: `<nav><a href="#">button downloads</a></nav>`

  > Thanks [https://www.storyblok.com/tp/vue-dynamic-component-from-json](https://www.storyblok.com/tp/vue-dynamic-component-from-json)

- Components

  - ➡️`db.json` Tiny posts? You can use `article obj` in Fake {API}

    > e.g: writing html in JSON using single quotes using CSS class:

    ```php

    <div id='speed'>Test</div>
    <div class='abc'>Test</div>

    <figure>
      <img src='https://adaway.org/assets/img/adaway.png' alt='adway logo' />
    </figure>
    ```

  - ➡️`VueJS{Native components}` define component in `db.json` so create and import it in `UserPost.vue`

    - Also supports String Components direct in `UserPost.vue` [not good practice]

  - ➡️`ContainerPosts.vue`

    - register childrens components Globally, imported by UserPost.vue [read more](https://github.com/geraldotech/VueJS_Blogger/blob/main/ContainerPosts.md)

  - ➡️`SmartComponents: plugin`

    - imports a **ContainerPosts.js** with your Vue childComponents
      [read more](https://github.com/geraldotech/VueJS_Blogger/blob/main/SmartComponents.md)
    - imports a **Vanilla Web Components** support CSS scoped [read more](https://github.com/geraldotech/DevMap/tree/main/JavaScript/assets/thread/Web-Components)

  <hr>

### Changes and Features:

- 03.12.2023

  - When empty you can use `article` to document updated article

- 19.11.2023

  - new class `main-post` for min-height on mini articles inside `data.json`, to keep bottom in footer

- 06.11.2023

  - Snippet-x library by #gmap

- 27.10.2023

  - disabled Adsense Component for get Google Approved
  - Add search icon

- vue-meta pages:

  - Home ok
  - Projects ok
  - About ok
  - Blog ok

- Beta News **12/10/2023** + vue-meta:

- New Component `SidebarBottom.vue` by props:

  - Related Posts Block

- `router/index.js`

  - add scroll behavior, always go to top when click ocorre prox footer

  ```js
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { x: 0, y: 0, behavior: 'smooth' }
  },
  ```

  - scrollBehavior simulate the "scroll to anchor" behavior working nice on .vue components when click, but when page loaded with hash still don't work.

  ```js
  if (to.hash) {
    return {
      el: to.hash,
      // , offset: { x: 0, y: 10 }
    }
  }
  ```

- Fixed Vue Router bug with Search with v2, now using only v1 [more here](https://github.com/geraldotech/DevMap/blob/main/Vue/VueRouter.md#vue-change-url-but-not-change-router-view)

- 19.9.2023 **Major Update**

  - Standalone WebComponents[Test]
    - Create a `.js` file with WebComponents, and import in `main.js`
  - N Progress
  - Pin and unpin a featured blog post
    - Make one post Featured Post Set `"pinned": ""` in fake API.
  - Categories.vue
    - fix post by `reverse()`
    - add `{{artigos.data}}`
  - New Components: **SearchAuto.vue**
  - improved `.btndownload`

- 9.9.2023

  - CSS Enhanced
    - container `flex-direction` column keeps footer bottom
    - `list-all: width: 100%`
    - `min-height: 100dvh`

- 13.08.2023

  - CSS Enhanced
  - new component `Adsense`

- 12.08.2023

  - Load more posts @click in `Blog.vue`

- 06.08.2023

  - CDN IMG Links before in `main.js` import object `import cdn from "/src/cdn.js";`

    - Support:
    - `ContainerVue.js`
    - `WebComponents.js`:
    - `Components.vue` - ncessary adicionar um Vue Mixin no mainjs, veja mais em _ContainerPost.vue_

      > how use in this js templates:

    ```js
    // path current year
    // where cdn is a custom name of import
    // import cdn from './cdn.js'
    <img src="${cdn.img[2023]}/desativando-modo-turbo.jpg" alt="drop"
    // fullpath + manual
    <img src="${cdn.img.path}/2023/img/desativando-modo-turbo.jpg" alt="drop"
    //Amazon S3
     <img src="${cdn.img.s3[2023]}/offline.jpg" alt="" />
    ```

    - `ContainerPost.vue`

      - Usando Vue.mixin no `main.js` import the file `/src/cdn.js`:

    ```js
    Vue.mixin({
      created() {
        this.img = cdn.img // optei usar o same str
        this.cdnfiles = cdn.dropfiles // poderia ser diferente
      },
      data: function () {
        return {}
      },
    })
    ```

    - `created() { this.img = cdn.img;}` onde `this.cdn` é o novo object que recebe o valor do obj `cdn.img` importada.
      `this.cdnfiles = cdn.files` onde cnd.files agora tem o valor de cdn.files

    ```js
       // Component.vue - ncessary bing the src
         <img :src="`${img[2023]}/vuejs.png`" />\
    ```

  - <ins>SmartLoader now support: `type: module`</inst>

- 05.08.2023

  - created `WebComponents.js` [Vanilla] e import it using `SmartLoader`
  - delete files folder, files moved to CDN
  - `routas.js` now is `router> index.js`

- 29.07.2023

  - CSS changes:
    - <del>blogger_card</del> to **<ins>breadcrumbs</ins>**
    - text-transform uppercase
    - header background
    - figure margin

- 22.07.2023
  - Add temporally wat to styles children in **SmartComponents**
  - Add Vue.extends
- 19.07.2023

  - HTML 5 + Netlify redirect working nice, only a error on console, but working... [history-pushstate-and-single-page-apps](https://docs.netlify.com/routing/redirects/rewrites-proxies/#history-pushstate-and-single-page-apps)

- 18.07.2023

  - Documentar HTML 5 History modo on Netlify
  - Nem sempre que funciona no localhost vai funcionar no Netlify

  ```js
  - if main.js is in index.html
  ./src/assets/img/android.png" = domain.com/blog/src/assets => error
  /src/assets/img/android.png" = domain/src/assets => success
  ```

- 15.16/07/2023 - Introducing `SmartComponents` .js and .vue

  - CSS Fixed bugs

- 28.06
  - Add table media queries

<details>
<summary>25.06.2023</summary>

- New blogger_card

</details>

<details>
<summary>01.06.2023 a 02.06.2023</summary>

- `rotas.js` improved o title das rotas
- Added Menu background, position sticky and top:0
- Improved several CSS rules in About, App and Projects

</details>

<details>
<summary>29.05.2023 a 31.05.2023 - Own version</summary>
- Fazendo own version this website for geraldox.com

- Changed maps categories domain https://geraldox.netlify.app/#/mapa to http://mysuperdomain/#/blog/mapa

  - rotas deleted:

  ```js
    {
    path: "/mapa/",
    component: httpVueLoader("./src/views/mapa.vue"),
    name: "Categories Map1",
  },
  ```

  and Added in /blog a children:

  ```js
   children: [
      {
        path: "mapa",
        name: "Categories Map",
        component: httpVueLoader("./src/views/mapa.vue"),
      },
    ],

    // Blog.vue added  conditions:

     <div v-if="$route.name == `Blog Posts`" class="list-all">
    //only render threads and select menu cat
     </div>
    <div v-if="$route.name == `Categories Map`"
    //only render Mapa.vue content
    </div>

    # removed unused line:
      {
    path: "/footer",
    name: `footer`,
    component: httpVueLoader("./src/views/Footer.vue"),
  },

  ```

  - Create file only for router `rotas.js`, so `main.js` now is type module
  - Blog.vue removed unsed `const blogPostsProp`
  - Create About Page and moved youtube subrouter for this new page

- UserPost.vue main removed `padding: 5px; min-height: 50vh; and .blogger changed to margin: 5px 0;`
- Created About.vue added Git Avatar from fetch, Social Icons, typerWriter
- Add favicon in `index.html`
- Projects Name from list now is `sort()`
</details>

<details>
<summary>23.02.2023</summary>

- v-if/v-else caso tenha conteúdo
- Nested Routers
- Named Routers
- Named Views
</details>

<details>
<summary>25.02.2023</summary>

- Load Router from Strings, Components
- ### select router-link

- [https://stackoverflow.com/questions/70846740/how-to-use-router-link-inside-of-select-option-dropdown-in-vuejs](https://stackoverflow.com/questions/70846740/how-to-use-router-link-inside-of-select-option-dropdown-in-vuejs)
- [https://codesandbox.io/s/vue-select-dropdown-route-forked-3dld4?file=/src/components/HelloWorld.vue](https://codesandbox.io/s/vue-select-dropdown-route-forked-3dld4?file=/src/components/HelloWorld.vue)

</details>

<details>
<summary>26.02.2023</summary>

- ### Adicionado categorias e uma page de map

> > mapear todas as categories, remover itens duplicados e descartar os undefined

```js
//start categorias categorias only
const getCatego = this.opt.map((val) => val.category)

//filter remove duplicado e undefined itens
const filtra = getCatego.filter(
  (val, ind) => getCatego.indexOf(val) == ind && val != undefined
)
//catategories by sort()
this.categorias = filtra.sort()
```

- ### slug/blog/cat/

### show slug + id url

```js
  {
    path: "/blog/:slug/:id",
    component: httpVueLoader("./src/views/UserPost.vue"),

  },
const getBlogPost = this.blogPosts.find(
        (post) => this.$route.params.slug == post.slug
      );


//blogger list all posts
  <router-link :to="`/blog/${artigos.slug}/${artigos.id}`">{{
          artigos.title
        }}</router-link>
```

- Custom Page tags

  - ### Custom Categories Pages

  ```js
  <div v-if="$route.params.category.includes('ndroid')">
    <img src="./src/assets/img/android.png" alt="android" />
  </div>
  ```

</details>

<details>
<summary>v11 28.02.2023</summary>

- Adicionado `resumo` em Blog.vue, torna o texto do `article` uma description
- Reviewd Search component by router.push and router.go

```js
this.$router.push({
  name: 'threads',
  params: { category: ca, slug: sl },
})
this.$router.go({
  name: 'threads',
  params: { category: ca, slug: sl },
})
```

- Alterado padding mobile first UserPost and User
</details>

#### v12 01.03.2023

- Adicionado props em Search to `v-show...`, now has two types of Search links

#### v13 02.03.2023

- CSS changed
- form required

<details>
<summary>v14 09.03.2023</summary>

- Moved components for posts to /posts/mycomponent.vue
- Enhanced CSS for Desktop
- Support String Components, checkout example
- New Search Component in Blog Page
- Search a post by Title, show numbers results

</details>

<details>
<summary>v14.3 22.04.2023</summary>

- fixed some const names
- blog.vue commented .sidebar flex: 1
- `sidebar.vue` removed
  .sidebar div img {
  padding: 10px;
  }
- better CSS sidebar width

```js
<p v-html="artigos.article ? artigos.article.substr(0, 35) : ''"></p>
```

</details>

# Snippets:

### filter() requer v-for:

```js

 <div v-for="todos in results" :key="todos.id">
        <h1>{{ todos.title }}</h1>
        <p class="author">
          By:<span>{{ todos.author }}</span> | Posted on: {{ todos.data }}
        </p>

        <article>
          <p v-html="todos.article"></p>
        </article>
  </div>
```

### find() não requer v-for, para renderizar chamar por `obj.item`, v-if serve para evitar erros ao renderizar o que não foi encontrado, pelo contrário chama o v-else

```js
  <article v-if="blog">
          <h1>{{ blog.title }}</h1>
          <p class="author">
            By:<span>{{ blog.author }}</span> | Posted on: {{ blog.data }}
          </p>
          <hr />
          <p v-html="blog.article"></p>
          <div>Post {{ $route.params }}</div>
          <div>Post.id {{ $route.params.slug }}</div>
    </article>
  <div v-else>Not Found!</div>
```

### support v-if route-params

```js
<div v-if="$route.params.slug == 'post-one'">
  <p>Hello post:one</p>
</div>
```

### Get route.params

```js
<div>Post {{ $route.params }}</div>
<div>Post.slug {{ $route.params.slug }}</div>
```

### find must comparar o post.id post.published ? e post.slug

```js
 {
    path: "/blog/:id/:slug",
    component: httpVueLoader("./src/views/UserPost.vue"),
  },


const getBlogPost = this.blogPosts.find(
        (post) =>
          post.id == this.$route.params.id &&
          post.published &&
          post.slug == this.$route.params.slug
      );
```
