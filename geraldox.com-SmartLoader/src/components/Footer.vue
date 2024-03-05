<template>
  <footer>
    <router-link to="/politica-privacidade">Politica de Privacidade </router-link>
    |
    <router-link to="/about">About </router-link> |

    <a
      href="#top"
      class="backtop"
      ><svg
        class="with-icon_icon__MHUeb"
        data-testid="geist-icon"
        fill="none"
        height="24"
        width="24"
        shape-rendering="geometricPrecision"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        style="color: currentcolor; width: 40px; height: 40px">
        <circle
          cx="12"
          cy="12"
          r="10"></circle>
        <path d="M16 12l-4-4-4 4"></path>
        <path d="M12 16V8"></path></svg
    ></a>
    <p>Make by Geraldo Costa - copyright &copy; 2024 GMAPDEV</p>
  </footer>
</template>

<script>
module.exports = {}
</script>

<style>
footer {
  max-width: auto;
  min-width: 200px;
  margin: auto;
  background: rgb(34, 34, 34);
  padding: 20px;
  text-align: center;
  color: rgb(158, 149, 137);
  font-size: 13px;
  width: 100%;
  height: 100px;
}

footer p {
  margin-block: 20px;
}

.backtop {
  position: fixed;
  bottom: 40px;
  right: 50px;
  animation: appear 1ms ease-in-out both;
  animation-timeline: scroll();
}

.backtop::after {
  content: '';
}

.backtop svg {
  width: 40px;
}

@keyframes appear {
  from {
    visibility: hidden;
    opacity: 0;
  }
  to {
    visibility: visible;
    opacity: 1;
  }
}

/* for mobile */
@media screen and (max-width: 650px) {
  footer {
    background: rgb(29, 27, 27);
    text-align: center;
    color: dodgerblue;
  }
  .backtop {
    right: 0 !important;
  }
}
</style>
