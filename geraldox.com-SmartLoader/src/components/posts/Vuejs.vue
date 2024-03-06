<template>
  <div>
      <button @click="handlerPushRouter()">handlerPushRouter</button>

      <p>Try query search params in <a href="https://geraldox.com/blog/search?category=android"></a> </p>
    <figure>
      <img class="img-flex" loading="lazy" :src="`${img[2023]}/vuejs.svg`" />
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
    <h1>Introduction to primitive wrapper types</h1>

    <a href="#add">Scroll TESTE</a>

    <p>Testing import de webcomponents alone</p>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem Ipsum
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem Ipsum
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem Ipsum
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem Ipsum
    </p>

    <h2 id="add">Additional Resources</h2>

    <p>
      is simply dummy text of the printing and typesetting industry. Lorem Ipsum
      has been the industry's standard dummy text ever since the 1500s, when an
      unknown printer took a galley of type and scrambled it to make a type
      specimen book. It has survived not only five centuries, but also the leap
      into electronic typesetting, remaining essentially unchanged. It was
      popularised in the 1960s with the release of Letraset sheets containing
      Lorem Ipsum passages, and more recently with desktop publishing software
      like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is
      simply dummy text of the printing and typesetting industry. Lorem Ipsum
      has been the industry's standard dummy text ever since the 1500s, when an
      unknown printer took a galley of type and scrambled it to make a type
      specimen book. It has survived not only five centuries, but also the leap
      into electronic typesetting, remaining essentially unchanged. It was
      popularised in the 1960s with the release of Letraset sheets containing
      Lorem Ipsum passages, and more recently with desktop publishing software
      like Aldus PageMaker including versions of Lorem Ipsum
    </p>
    <ul>
      <li>Create an object of a corresponding type.</li>
      <li>Call a specific method on the instance.</li>
      <li>Delete the instance immediately.</li>
      <li>So the following code</li>
    </ul>
  </div>
</template>
<script>
module.exports = {
  data(){
    return{}
  },
  methods:{
    handlerPushRouter(){

      // https://router.vuejs.org/guide/essentials/navigation.html
      // https://v3.router.vuejs.org/guide/essentials/navigation.html
      //this.$router.push({ name: 'category', params: { category: 'android' } })
      this.$router.push({ name: 'Home Page',   hash: '#contact' })
    }
  }
}
</script>
<style scoped>
code {
  color: green;
}
</style>
