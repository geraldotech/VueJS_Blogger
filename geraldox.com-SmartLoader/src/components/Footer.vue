<template>
  <footer>
    <p>Copyright &copy; 2023 GMAPDEV</p>
    <a href="#top">Back to top</a> |
    <router-link to="/politica-privacidade"
      >Politica de Privacidade
    </router-link>
  </footer>
</template>

<script>
module.exports = {}
</script>

<style scoped>
footer {
  max-width: 90rem;
  min-width: 200px;
  margin: auto;
  background: rgb(20, 19, 19);
  padding: 20px;
  text-align: center;
  color: rgb(158, 149, 137);
  font-size: 13px;
  width: 100%;
  height: 100px;
}

footer p {
  margin-bottom: 10px;
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
