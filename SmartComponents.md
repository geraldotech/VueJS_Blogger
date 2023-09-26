<h1 align="center">Smart Components</h1>

# SmartJS Loader Library

O plugin [SmartJS_Loader](https://github.com/geraldotech/DevMap/tree/main/Vue/SmartJS_Loader) adiciona suporte a importação de _.js_ podendo comportar vários components filhos com isso você pode usar:

- [ContainerPosts.js](#ContainerPostsjs)
- [Vanila WebComponents.js](https://github.com/geraldotech/DevMap/tree/main/JavaScript/assets/thread/Web-Components)

evitando assim a poluição do **data.json, String components** no **UserPost.vue** e demasiada criação de components no VueJS Blog CDN.

&nbsp;
&nbsp;
&nbsp;

#

# ContainerPostsjs

- Alternative for this error:

```js
  [Vue warn]: Failed to resolve async component: function() {
  Cannot use import statement outside a module
```

1. `main.js` import and call the function:

```js
import SmartLoader from './smartLoader.js'
SmartLoader('./src/components/ContainerVue.js')
```

2. Os components registrados no `ContainerVue.js` deve ser estruturado usando o `Vue.components`, por isso essa importação transparente funciona tão bem.

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

3. `UserPosts.vue` testar usando **mounted() Lifecycle Hooks** com uma string chamada `test` que deixei no final do script.

```js
   mounted() {
    console.log(test);
  },
```

4. Done! O resto continuna igual, declarar o nome do component no `db.json`
