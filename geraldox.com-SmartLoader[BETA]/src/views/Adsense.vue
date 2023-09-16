<template>
  <section class="ads">
    <!-- <p>Adsense here</p> -->
    <figure>
      <img
        src="https://placehold.jp/30/000c15/ffffff/500x90.png?text=ads+here"
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
  background: rgb(24, 83, 171);
  max-width: 100%;
  height: 90px;
  margin: 8px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.ads figure {
  display: inline-block;
  width: fit-content;
}
.ads img {
  width: 100%;
}
/* desktop */
@media screen and (min-width: 650px) {
  .ads {
    margin: 15px;
    background: rgb(20, 19, 19); */
  }
}
</style>
