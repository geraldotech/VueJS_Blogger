<template>
  <section class="ads">
    <!-- <p>Adsense here</p> -->
    <figure>
      <img
        src="https://placehold.jp/30/000c15/ffffff/500x100.png?text=ads+here"
        alt="ads"
      />
    </figure>
  </section>
</template>
<script>
module.exports = {}
</script>
<style scoped>
/* mobile first */

.ads {
  /* background: rgb(24, 83, 171); */
  max-width: 100%;
  height: 90px;
  margin: 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
figure {
  display: inline-block;
  width: fit-content;
}
img {
  width: 100%;
}
/* desktop */
@media screen and (min-width: 650px) {
  .ads {
    max-width: 80%;
    margin: 5px auto;
    /* background: rgb(20, 19, 19); */
  }
}
</style>
