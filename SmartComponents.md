### 🙌Duas opções para evitar a poluição do **data.json, String components** no **UserPost.vue** e demasiada criação de components para conteúdos simples no VueJS Blog CDN.

### Usando '[SmartJS_Loader](https://github.com/geraldotech/DevMap/tree/main/Vue/SmartJS_Loader)' vai permitir a importação de arquivos JavaScript.

- Alternative for this error:
  ```js
  [Vue warn]: Failed to resolve async component: function() {
  Cannot use import statement outside a module
  ```

1. No `main.js` import and call:

```js
import SmartLoader from "./smartLoader.js";
SmartLoader("./src/components/BlogPostsVue.js");
```

2. O arquivo `BlogPostsVue.js` deve ser estruturado usando o `Vue.components`, por isso essa importação transparente funciona tão bem.

```js
Vue.component("mydell", {
  template: `<p>Hello from Imported String template.js 'mydell'</p>`,
});

//db
 "component": "mydell",
```

3. BlogPosts testar usando **mounted hook** com uma string chamada `test` que deixei no final do arquivo.

```js
   mounted() {
    console.log(test);
  },
```

4. Done! O resto continuna igual, declarar o nome do component no `db.json`

### ContainerPosts.vue de Components

> Um Component que armazena vários components filhos para pequenos artigos

1. Create file like `ContainerPosts.vue` e fazer os components da forma usual.

```javascript
<template>
  <div></div>
</template>
<script>
/* String templates */
Vue.component("Logitech", {
  template: `<p>Hello LogiTech Options here</p>`,
});
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
