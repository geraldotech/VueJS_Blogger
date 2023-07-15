/*
Container Components.js
*/
const postone = `<p>Hello from Imported String template.js 'myrtx'</p>`;
Vue.component("myrtx", {
  template: postone,
});

Vue.component("mydell", {
  template: `<p>Hello from Imported String template.js 'mydell'</p>`,
});

const test = `script loaded`;
