<template>
  <section class="ads">
    <p>Adsense here</p>
  </section>
</template>
<script>
module.exports = {};
</script>
<style>
.ads {
  background: rgb(24, 83, 171);
  max-width: 100%;
  height: 60px;
  margin: 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (min-width: 650px) {
  .ads {
    max-width: 100%;
    background: rgb(20, 19, 19);
  }
}
</style>
