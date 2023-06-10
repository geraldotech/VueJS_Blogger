<template>
  <footer>
    <p>geraldoX.com - &copy; 2023</p>
  </footer>
</template>

<script>
module.exports = {};
</script>

<style>
footer {
  max-width: 75rem;
  min-width: 200px;
  margin: auto;
  background: rgb(20, 19, 19);
  padding: 10px;
  text-align: center;
}

/* for mobile */
@media screen and (max-width: 650px) {
  footer {
    background: rgb(29, 27, 27);
    text-align: center;
    color: dodgerblue;
  }
}
</style>