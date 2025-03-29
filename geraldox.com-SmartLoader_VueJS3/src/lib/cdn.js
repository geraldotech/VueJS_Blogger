/*  CDN for static img files in VueJS CDN Blogger */
/* By: Geraldo Costa Filho - August/2023 */

const pathdropimg = 'https://gpnotes.droppages.com/geraldox.proxyfiles.com'
const amazons3 = 'https://gmapdev.s3.amazonaws.com'
const dropfiles = 'https://gpnotes.droppages.com/geraldox.proxyfiles.com/files'

const img = {
  path: [pathdropimg],
  2024: [pathdropimg] + '/2024/img',
  2023: [pathdropimg] + '/2023/img',
  2022: [pathdropimg] + '/2022/img',
  others: {
    nome: [pathdropimg] + '/2022/img/',
  },
  s3: {
    path: [amazons3],
    2023: [amazons3] + '/blogcdn/2023',
  },
}

export default { img, dropfiles }

/*
 *
 * ➡️ img.path returns  Full Path » https://gpnotes.droppages.com/geraldox.proxyfiles.com
 *
 * ➡️ img[2013] »  {Full Path} + /2023/img/
 *
 * ➡️ img.s3[2023] »  /2023/assets/img
 *
 *
 */
