<template>
  <div></div>
</template>
<script>
/* String templates */
Vue.component("Logitech", {
  template: `<p>Hello LogiTech Options here ContainerPosts.vue</p>`,
});
Vue.component("acer", {
  template: `<p>Hello Acer Options here  ContainerPosts.vue</p>`,
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
