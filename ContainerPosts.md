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
    return {}
  },
})

/* Calctdownload Component */
Vue.component('Calctdownload', {
  name: 'CalcDownload',
  data() {
    return {
      title: `Velocidade da conexão em KB /8 para encontrar a taxa de transmissão exe:`,
    }
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
})
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
