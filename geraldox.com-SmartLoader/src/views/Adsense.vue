<template>
  <section class="ads">
    <!-- <p>Adsense here</p> -->
    <figure>
      <img
        src="https://placehold.jp/30/161a49/ffffff/500x90.png?text=ads+here"
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
  /* background: #072757; */
  opacity: 1;
  max-width: 100%;
  height: 90px;
  margin: 8px auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  /*  background-image: linear-gradient(to right, #072757, #0e1319); */
  background: #161a49;
}
.ads figure {
  display: inline-block;
  width: fit-content;
}
.ads img {
  width: 100%;
  animation: lead 4s ease;
}

@keyframes lead {
  10% {
    opacity: 0.1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
/* desktop */
@media screen and (min-width: 650px) {
  .ads {
    margin: 15px;
    max-width: 80%;
  }
}
</style>
