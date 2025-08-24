<script setup>
import Sidebar from '/src/components/blog/Sidebar.vue'
/* WELCOME TO VUEJS 3 components
 usando setup no script é mais pratico ainda */
import { ref, watch, onMounted, defineComponent } from 'vue'
const foo = ref(0)

onMounted(() => {})
</script>
<template>
  <div>
    <p>Set wallpaper per monitor:</p>

    <form class="clipboard">
      <input
        disabled
        type="text"
        value="shell:::{ED834ED6-4B5A-4bfe-8F11-A626DCB6A921} -Microsoft. Personalization\pageWallpaper" />
      <span id="copiado"></span>
    </form>
    <nav>
      <a
        href="https://winaero.com/how-to-set-wallpaper-per-monitor-in-windows-11/"
        target="_blank"
        >Ref</a
      >
    </nav>
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
