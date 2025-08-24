<script setup>
import Sidebar from '/src/components/blog/Sidebar.vue'
/* WELCOME TO VUEJS 3 components
 usando setup no script é mais pratico ainda */
import { ref, watch, onMounted, defineComponent } from 'vue'
const foo = ref(0)

const MyComponentLocal = defineComponent({
  name: 'MyComponentLocal',
  setup() {
    const count = ref(0)
    return { count }
  },
  template: `
    <div>
      <h2>Componente local</h2>
      <p>Contador: {{ count }}</p>
      <button @click="count++">Incrementar</button>
    </div>
  `,
})

onMounted(() => {})
</script>
<template>
  <div>
    <MyComponentLocal/>
    <p>1 - Primeiro baixe o Handle</p>
    <nav>
      <a
        href="https://learn.microsoft.com/pt-br/sysinternals/downloads/handle"
        target="_blank"
        class="btnDownload"
        >Download</a
      >
    </nav>
    <p>2 - Type "handle.exe" (without quotes) and press Enter.</p>

    <figure>
      <img
        src="${cdn.img[2023]}/handle-process.jpg"
        alt="handle process"
        class="img-flex" />
    </figure>

    <p>3 - Use "taskkill /PID " (without quotes) and press Enter for each process.</p>
  </div>
</template>
<style scoped>
* {
  margin: 0;
}
img {
  max-width: 100%;
  width: 100%;
}
div {
  max-width: 350px;
  border: 1px solid;
  text-align: center;
  margin: 0 auto;
}
.cursor {
  cursor: pointer;
}
.flex {
  display: flex;
  padding: 10px;
  justify-content: space-around;
}
</style>
