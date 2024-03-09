/* Use SmartLoader to import this file in VueJS CDN projects 
 Container JavaScript with VueComponents  
 */

import cdn from '/src/lib/cdn.js'

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
`
Vue.component('supergames', {
  template: superNintendo,
})

Vue.component('mydell', {
  template: `
  <div>
  <p>Hello from Imported String template.js 'mydell'
  <figure>
    <img class="img-flex" src="https://pbs.twimg.com/profile_images/1374017695394492418/TmjT0iyJ_400x400.jpg"  alt="dell logo" />
  </figure>
  </p>
  </div>
  `,
})

//console.log('script loaded in ContainerVue.js')
