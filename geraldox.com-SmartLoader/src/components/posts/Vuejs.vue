<template>
  <div>
    <figure>
      <img
        class="img-flex"
        height="100px"
        loading="lazy"
        :src="`${img[2023]}/vuejs.svg`" />
    </figure>
    <p>How check Vue Version ?</p>
    <code> console.log(Vue.version);</code>
    <nav>
      <a
        class="btnDownload"
        :href="`${cdnfiles}/vue.global_3.2.41_dev.zip`"
        target="_blank"
        >VueJS 3.2.41 Dev</a
      >
    </nav>

    <hr />
    <section>
      <h1>Blog Features Beta:</h1>
      <ul>
        <li>
          <router-link :to="{ name: 'search' }">Try query search params search</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'advancedsearch' }">Advanced Search Constructor</router-link>
        </li>
        <li><button @click="handlerPushRouter()">handlerPushRouter</button></li>
      </ul>
    </section>

    <section>
      <h1>
        <a
          href="https://blog.vuejs.org/posts/vue-2-7-naruto"
          target="_blank"
          >Vue 2.7</a
        >
        Naruto Using refs
      </h1>

      <button @click="log">{{ msn }}</button>

      <h1>Increase {{ count }}</h1>
      <button @click="count++">Increase</button>
      <button @click="increaseVal">increaseVal</button>

      <h1>v-bind CSS</h1>

      <p class="text">VueJS v-bind in CSS</p>
    </section>

    <h1>Introduction to primitive wrapper types</h1>

    <a href="#add">Scroll TESTE</a>
    <div v-show="false">
      <p>Testing import de webcomponents alone</p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
        Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
        took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It
        was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
        Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
        took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It
        was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
        Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
        took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It
        was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
        Lorem Ipsum
      </p>

      <h2 id="add">Additional Resources</h2>

      <p>
        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
        1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum
        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
        1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
      </p>
      <ul>
        <li>Create an object of a corresponding type.</li>
        <li>Call a specific method on the instance.</li>
        <li>Delete the instance immediately.</li>
        <li>So the following code</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
  const theme = {
    color: 'red',
  }
const { ref, onMounted } = Vue
module.exports = {
  setup() {
    const msn = ref('Hello From Refs')
    const count = ref(0)


    onMounted(() => {
      console.log(`onMounted`)
    })

    function log() {
      console.log(msn.value)
    }

    function increaseVal() {
      count.value++
    }

    return {
      msn,
      log,
      count,
      increaseVal,
    }
  },
  /* using options api  */
  mounted() {
    console.log('mounted') //
  },

  data() {
    return {
      color: 'red',
    }
  },
  methods: {
    handlerPushRouter() {
      // https://router.vuejs.org/guide/essentials/navigation.html
      // https://v3.router.vuejs.org/guide/essentials/navigation.html
      //this.$router.push({ name: 'category', params: { category: 'android' } })
      this.$router.push({ name: 'Home Page', hash: '#contact' })
    },
  },
}
</script>
<style scoped>
.text {
  color: v-bind('theme.color');
}

code {
  color: green;
}
section {
  padding: 1rem;
  margin-block: 3rem;
}

img {
  max-width: 10%;
}
ul li {
  padding: 0.7rem;
}
</style>
