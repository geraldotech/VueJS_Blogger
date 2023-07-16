/*
Container Components.js
*/
const postone = `<p>Hello from Imported String template.js 'myrtx'</p>`;
Vue.component("myrtx", {
  template: postone,
});

Vue.component("mydell", {
  template: `
  <div>
  <p>Hello from Imported String template.js 'mydell'
  <figure>
    <img src="https://pbs.twimg.com/profile_images/1374017695394492418/TmjT0iyJ_400x400.jpg" style="max-width:20%;" alt="dell logo" />
  </figure>
  </p>
  </div>
  `,
});

const test = `script loaded`;
