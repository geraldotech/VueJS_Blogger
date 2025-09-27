<h1>Vue.js Integration in Markdown</h1>

<p>Integração com docsify works!</p>

<div id="vue-app">

<counter></counter>

<input type="text" @input="handleChange" />

   <ul>
    <li v-for="x in 10">{{x}}</li>
   </ul>

<h2>my name is {{sayMyName}}</h2>
   <p @click="handleChange">click me {{ok}}</p>

</div>

<script type="module">
  const app = Vue.createApp({
     setup() {

      const sayMyName = Vue.ref("Dexter")

      Vue.onMounted(() => {})

      return {
      sayMyName
      }
    },
     methods: {
      handleChange(){
        alert('yes');        
      }
    }

  });

  app.component('counter', {
    data() {
      return {
        count: 0
      };
    },
    template: `<button @click="count++">You clicked me {{ count }} times.</button>`
  });

  app.mount('#vue-app');
</script>
