const pathdropimg = "https://gpnotes.droppages.com/geraldox.proxyfiles.com";
const amazons3 = "https://gmapdev.s3.amazonaws.com";

const img = {
  path: [pathdropimg],
  2023: [pathdropimg] + "/2023/img/",
  b: {
    nome: [pathdropimg] + "/2022/img/",
  },
  s3: {
    path: [amazons3],
    a: [amazons3] + "/assets/img/",
  },
};

const dropfiles = "https://gpnotes.droppages.com/geraldox.proxyfiles.com/files";

export default { img, dropfiles };

/*
 *
 * ➡️ img.pathdrop returns All objects » https://gpnotes.droppages.com/geraldox.proxyfiles.com
 *
 * ➡️ img[2013] » {pathdrop}/2023/img/
 *
 * ➡️ img.s3[2023] »  /2023/assets/img
 *
 *
 * By: Geraldo Costa Filho - August/2023
 */
