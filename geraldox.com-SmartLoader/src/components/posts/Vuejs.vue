<template>
  <div>
    <Mysuperhtml></Mysuperhtml>

    <component :is="Mysuperhtml"></component>

    <figure>
      <img
        class="img-flex"
        height="100px"
        loading="lazy"
        :src="`${img[2023]}/vuejs.svg`" />
    </figure>
    <p>How check Vue Version ?</p>
    <code> console.log(Vue.version)</code>
    <nav class="btnDownload">
      <a
        :href="`${cdnfiles}/vue.global_3.2.41_dev.zip`"
        target="_blank">
        <p-button
          label="VueJS 3.2.41 Dev"
          class="p-button-success"
          icon="pi pi-download"></p-button>
      </a>
    </nav>

    <hr />
    <section>
      <h1>Blog Last Features:</h1>
      <ul>
        <li>
          <router-link :to="{ name: 'search' }">Try query search params search</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'advancedsearch' }">Advanced Search Constructor</router-link>
        </li>
        <li><button @click="handlerPushRouter()">handlerPushRouter</button></li>
        <li>
          <a href="#primevue">Prime Vue Components</a>
        </li>
        <li>
          <a href="#narutoversion">Vue 2.7 naruto latest version Backported Features</a>
        </li>
      </ul>
    </section>

    <section id="narutoversion">
      <h1>
        Vue 2.7 Naruto Using
        <i
          style="color: red; font-size: 1.3rem"
          class="pi pi-bolt"></i>
      </h1>

      <div>
        <h2>Composition API - refs</h2>
        <ul>
          <li>
            <a
              href="https://blog.vuejs.org/posts/vue-2-7-naruto"
              target="_blank"
              >Vue 2.7</a
            >
          </li>
          <li>
            <a
              href="https://v2.vuejs.org/v2/guide/migration-vue-2-7"
              target="_blank"
              >migration-vue-2-7</a
            >
          </li>
        </ul>
      </div>

      <section>
        <h1>Refs</h1>

        <button @click="log">{{ msn }}</button>
      </section>

      <section>
        <h1>Increase {{ count }}</h1>
        <button @click="count++">Increase</button>
        <button @click="increaseVal">increaseVal</button>
      </section>

      <p class="text">VueJS v-bind in CSS - no working in Vue 2 CDN até o momento</p>
    </section>

    <section id="primevue">
      <h1>Prime Vue 2 Components</h1>

      <i
        class="pi pi-spin pi-spinner"
        style="font-size: 2rem"></i>

      <p-calendar
        v-model="isCalendar"
        date-Format="dd.mm.yy"></p-calendar>

      <p-button label="Primary theme Download"></p-button>
      <p-button
        label="Download"
        class="p-button-secondary"></p-button>
      <p-button
        label="success"
        class="p-button-success"></p-button>
      <p-button
        label="warning"
        class="p-button-warning"></p-button>
      <p-button
        label="danger"
        class="p-button-danger"></p-button>
      <p-button
        label="success"
        class="p-button-text"></p-button>

      <p-button
        label="Primary theme Download"
        class="p-button-success"
        icon="pi pi-download"></p-button>
    </section>

    <section>
      <h1>Menu scroll behavior test Vue Routers</h1>

      <ul>
        <li><a href="#add">#add</a></li>
        <li><router-link to="#add">/#add router-link</router-link></li>
        <li><a href="#download">Download</a></li>
        <li><a href="#javascript">JavaScript</a></li>
      </ul>
    </section>

    <div>
      <p>Testing import de webcomponents alone</p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
        Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
        took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It
        was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMak Lorem Ipsum Lorem Ipsum
        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
        1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
      </p>

      <section>
        <h2 id="add">Additional Resources</h2>

        <p>
          is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
          1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem
          Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of
          Lorem Ipsum
        </p>
        <ul>
          <li>Create an object of a corresponding type.</li>
          <li>Call a specific method on the instance.</li>
          <li>Delete the instance immediately.</li>
          <li>So the following code</li>
        </ul>
      </section>

      <section>
        <h2 id="download">Download: Resources</h2>

        <p>
          you can download here Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem natus at, officia exercitationem nam libero aspernatur. Porro laudantium corporis quos hic fuga, autem
          necessitatibus provident amet assumenda accusamus sapiente. Id.
        </p>
        <p>
          PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
          software like Aldus PageMaker including versions of
        </p>
      </section>
      <section>
        <h2 id="javascript">JavaScript</h2>

        <p>
          you can download here Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem natus at, officia exercitationem nam libero aspernatur. Porro laudantium corporis quos hic fuga, autem
          necessitatibus provident amet assumenda accusamus sapiente. Id.
        </p>
        <p>
          PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
          software like Aldus PageMaker including versions of
        </p>
      </section>
    </div>
  </div>
</template>

<script>
const { ref, onMounted, h } = Vue
module.exports = {
  setup() {
    const msn = ref('Hello From Refs')
    const count = ref(0)

    onMounted(() => {
      // console.log(`onMounted`)
    })

    function log() {
      console.log(msn.value)
    }

    function increaseVal() {
      count.value++
    }

    const Mysuperhtml = h('h1', 'title goes here')

    return {
      msn,
      log,
      count,
      increaseVal,
      Mysuperhtml,
    }
  },
  /* using options api  */
  mounted() {},

  data() {
    return {
      color: 'red',
      isCalendar: null,
    }
  },
  components: {
    'p-calendar': calendar,
    'p-button': button,
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
  margin-block: 1.5rem;
  border: 1px solid;
}

img {
  max-width: 10%;
}
ul li {
  padding: 0.7rem;
}

:target {
  scroll-margin-top: 50px;
}
</style>
