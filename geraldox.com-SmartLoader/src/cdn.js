
/*
img - All objects
img.path - only path

img.a - /2023/img/
img.b - /2022/img/

By: Geraldo Costa Filho - August/2023
*/

const pathcdn = "https://gpnotes.droppages.com/geraldox.proxyfiles.com";
const amazons3 = "https://gmapdev.s3.amazonaws.com";

const img = {
  "path" : [pathcdn],
  "a": [pathcdn] + "/2023/img/",
  "b": {
    nome: [pathcdn] + "/2022/img/"
  }, 
  "s3" : {
    path: [amazons3],
    a: [amazons3] + "/assets/img/",
   
  },
}

const files = "https://gpnotes.droppages.com/geraldox.proxyfiles.com/files"


export default {img ,files};

