<template>
  <div></div>
</template>
<script>
/* String templates */
Vue.component("Logitech", {
  template: `<p>Hello LogiTech Options here</p>`,
});
Vue.component("acer", {
  template: `<p>Hello Acer Options here</p>`,
});

const sam = `
      <main>
        <p>Samsung template</p>
      </main>
   `;

Vue.component("sammy", {
  template: sam,
});

module.exports = {};
</script>
