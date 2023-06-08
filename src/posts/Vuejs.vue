<template>
  <div>
    <p>How check Vue Version ? <code> console.log(Vue.version);</code></p>
    <input type="number" v-model="num" placeholder="5 + 5 ?" />
    <div v-show="num == 10" class="link">
      <ul>
        <li>
          <a href="../src/files/vue.global.zip" download>VueJS 3.2.41 Dev</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
module.exports = {
  data() {
    return {
      num: ``,
    };
  },
};
</script>
<style scoped>
</style>
