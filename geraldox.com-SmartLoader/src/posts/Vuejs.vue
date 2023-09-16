<template>
  <div>
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
  </div>
</template>
<script>
module.exports = {}
</script>
<style scoped>
code {
  color: green;
}
</style>
