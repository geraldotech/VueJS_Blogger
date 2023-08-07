
const pathcdn = "https://gpnotes.droppages.com/geraldox.proxyfiles.com";
const amazons3 = "https://gmapdev.s3.amazonaws.com";

const img = {
  "a": [pathcdn] + "/2023/img/",
  "b": {
    nome: [pathcdn] + "/2022/img/"
  }, 
  "s4" : [amazons3],
  "s3" : {
    path: [amazons3],
    a: [amazons3] + "/2023/media/img/",
    b: [amazons3] + "/assets/img/",
  },

}
/*
Compatible with:
#######################################

- ContainerVue.js
- WebComponents.js

eg:

console.log(img.a + "wallpaper.jpg")
console.log(`${img.s3.b}nitro.png`)

*/
export default img;

