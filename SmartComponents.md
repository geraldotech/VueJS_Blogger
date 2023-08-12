<h1 align="center">Smart Components</h1>

Evita a poluição do **data.json, String components** no **UserPost.vue** e demasiada criação de components para conteúdos simples no VueJS Blog CDN.

- [SmartJS_Loader](#SmartJS_Loader)
  - Suporte a importação de arquivos JavaScript
- [ContainerPosts.vue](#ContainerPostsvue)
- [WebComponents(Vanilla)](https://github.com/geraldotech/DevMap/tree/main/JavaScript/assets/thread/Web-Components)

&nbsp;

&nbsp;

&nbsp;

- Um Component que comporta vários components filhos para pequenos artigos

# [SmartJS_Loader](https://github.com/geraldotech/DevMap/tree/main/Vue/SmartJS_Loader)

- Alternative for this error:
  ```js
  [Vue warn]: Failed to resolve async component: function() {
  Cannot use import statement outside a module
  ```

1. `main.js` import and call the function:

```js
import SmartLoader from "./smartLoader.js";
SmartLoader("./src/components/BlogPostsVue.js");
```

2. `BlogPostsVue.js` deve ser estruturado usando o `Vue.components`, por isso essa importação transparente funciona tão bem.

```js
/* Container Components.js */
const postone = `<p>Hello from Imported String template.js 'myrtx'</p>`;
Vue.component("myrtx", {
  template: postone,
});

const test = `script loaded`;

// db/data.json
 "component": "mydell",
```

3. `BlogPosts.vue` testar usando **mounted() Lifecycle Hooks** com uma string chamada `test` que deixei no final do script.

```js
   mounted() {
    console.log(test);
  },
```

4. Done! O resto continuna igual, declarar o nome do component no `db.json`

<hr>

# ContainerPosts.vue

1. Create a component `ContainerPosts.vue` e register childrens Globally

```javascript
<template>
  <div></div>
</template>
<script>
/* Register JS Objects = String templates */

//Logitech Components
Vue.component("Logitech", {
  template: `<p>Hello LogiTech Options here</p>`,
});
//Acer Component
Vue.component("acer", {
  template: `<p>Hello Acer Options here</p>`,
});

const sam = `
      <main>
        <p>Samsung template</p>
      </main>
   `;

Vue.component("sammy", {
  template: sam,
});

module.exports = {};
</script>

```

2. Call the Components in `UserPost.vue`:

   - > `Container: httpVueLoader("../components/ContainerPosts.vue"),`
   - > `<Container></Container>`

3. Done

## Components + Vue Extends

```js
/* Vue.extend */
const Perfil = Vue.extend({
  template: `<p>Hello from extends</p>`,
  data() {
    return {};
  },
});

/* Calctdownload Component */
Vue.component("Calctdownload", {
  name: "CalcDownload",
  data() {
    return {
      title: `Velocidade da conexão em KB /8 para encontrar a taxa de transmissão exe:`,
    };
  },
  template: `  
<div class="containerPost">
 <link rel="stylesheet" href="/src/styles/ContainerPosts.css">
<article>
<p>{{title}}</p>
<figure>
<img  src="https://tm.ibxk.com.br/2023/07/12/12184831616476.jpg" />
</figure>
<!-- 
Using Vue extends Components 
-->
<Novo></Novo>
</article>
</div>
`,
  components: {
    Novo: Perfil,
  },
});
```

## Semantic template+CSS

> div > article{class}

```js
<div class="containerPost">
  <article class="acer">
    <p>Hello Acer Options here:</p>
    <hr>
    <select @change=opcoes($event) v-model="opt">
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
    </select>
    <p>Escolheu:  {{opt}}</p>
  </article>
</div>
```

- ### Global and parent div > article{class}?

  > only works in global mode

  ```css
  <style>
  /* parent class */
  .containerPost {
    border: 1px solid red;
    padding: 10px;
  }
  /* child class */
  .containerPost .acer {
    background: red;
  }
  </style>
  ```

- ### External Styles

  - Overwrite the global `<styles></styles>`
  - É possível ter styles adicionais, adicionar dentro de cada div:
    - `<link rel="stylesheet" href="/src/styles/ContainerPosts.css">`
  - Cada component deve importar o `stylesheet` se assim desejar.
  - Usar com cuidado por ser um modo Global, emcapsular `containerPost article{class}? {...}`
