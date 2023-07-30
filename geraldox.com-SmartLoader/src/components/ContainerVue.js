/* Container Components.js */
const superNintendo = `
<div class="containerPost">
<article>
<ul>
<li>Alien 3</li>
<li>Alien vs Predator</li>
<li>Bike Make From Mars</li>
<li>Choplifter 3</li>
<li>Cold Shadow</li>
<li>Contra 3 The Alien Wars</li>
<li>Donkey Kong Country 2</li>
<li>Donkey Kong Country 3</li>
<li>Kyle Petty's No Fear Racing</li>
<li>Mario All Stars</li>
<li>Mario World</li>
<li>Mega Man X</li>
<li>Megaman X 3</li>
<li>Metal Warriors</li>
<li>Mortal Kombat 3 (E) (Beta)</li>
<li>Phantom 2040</li>
<li>Radical Rex</li>
<li>Rockn Roll Racing</li>
<li>Sonic Wings</li>
<li>Spark World (Japan)</li>
<li>Street Fighter Alpha 2 (E) [!]</li>
<li>Sunset Riders</li>
<li>Super Borberman 5</li>
<li>Top Gear</li>
<li>Top Gear 3000 (E)</li>
<li>Wolverine</li>
<li>Yoshi Island</li>
</ul>
</article>
</div>
`;
Vue.component("supergames", {
  template: superNintendo,
});

Vue.component("mydell", {
  template: `
  <div>
  <p>Hello from Imported String template.js 'mydell'
  <figure>
    <img class="img-flex" src="https://pbs.twimg.com/profile_images/1374017695394492418/TmjT0iyJ_400x400.jpg" style="width:100%;" alt="dell logo" />
  </figure>
  </p>
  </div>
  `,
});

const test = `script loaded`;

// Web Components
const template1 = document.createElement("template");
template1.innerHTML = `
<style>
label{
  color: red;
  display: block;
  padding: 10px 0;
}
.des{
  color: green;
}

</style>
<label>
<input type="checkbox" />
checkbox
</label>
`;
class TodoItem extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template1.content.cloneNode(true));
  }
}
customElements.define("todo-item", TodoItem);

// Vanilla Web Components [Beta]

class Maceio extends HTMLElement {
  constructor() {
    const template = document.createElement("template");
    template.innerHTML = `
<style>
  main{
  padding: 5px;
  }
  h1{
    color: blue;
  }
</style>
<main>
<h1>Maceió</h1>
</main>
`;
    super();
    this.attachShadow({ mode: "open" }).append(
      template.content.cloneNode(true)
    );
  }
  test() {
    console.log(`click here`);
  }
}
customElements.define("maceio-al", Maceio);
