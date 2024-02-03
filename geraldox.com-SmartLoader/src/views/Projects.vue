<template>
  <div>
    <h1>Portfolio</h1>
    <section class="cards">
      <div class="card" v-for="card in cards" :key="card.id">
        <!-- link inside img -->
        <h1>{{ card.title }}</h1>
        <a :href="card.link" target="_blank">
          <figure>
            <img :src="card.img" alt="card.id" />
          </figure>
        </a>
        <p class="description">{{ card.description }}</p>
        <!-- <p class="techs">&lt;{{ card.tech }}/&gt;</p> -->
        <section class="techs">
          <span
            class="techs_svg"
            :title="card.tech"
            v-html="card.techsvg[0]"></span>
          <span
            class="techs_svg"
            :title="card.tech"
            v-html="card.techsvg[1]"></span>
          <span
            class="techs_svg"
            :title="card.tech"
            v-html="card.techsvg[2]"></span>
          <span
            class="techs_svg"
            :title="card.tech"
            v-html="card.techsvg[3]"></span>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
const defaultimg = 'https://placehold.jp/150'
const base = './src/assets/img/'

const htmls = `<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M42.6669 9.80469L39.4479 45.8656L24.9784 49.877L10.5487 45.8712L7.33313 9.80469H42.6669Z" fill="#E44D26" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #e65d3a;"></path><path d="M25 46.8072L36.6921 43.5657L39.4429 12.75H25V46.8072Z" fill="#F16529" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #f27139;"></path><path d="M18.7424 21.5953H25V17.1719H13.9082L14.0141 18.3586L15.1013 30.5483H25V26.125H19.1467L18.7424 21.5953Z" fill="#EBEBEB" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #dbd8d4;"></path><path d="M19.7393 32.7656H15.2989L15.9186 39.711L24.9796 42.2264L25 42.2208V37.6186L24.9806 37.6237L20.0542 36.2935L19.7393 32.7656Z" fill="#EBEBEB" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #dbd8d4;"></path><path d="M10.6206 0H12.8685V2.22094H14.9248V0H17.1728V6.72554H14.9249V4.47343H12.8686V6.72554H10.6207V0H10.6206Z" fill="white" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #e8e6e3;"></path><path d="M20.1289 2.23029H18.15V0H24.3569V2.23029H22.3771V6.72554H20.129V2.23029H20.1289Z" fill="white" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #e8e6e3;"></path><path d="M25.342 0H27.686L29.1279 2.36315L30.5682 0H32.9131V6.72554H30.6744V3.39199L29.1279 5.7833H29.0892L27.5415 3.39199V6.72554H25.342V0Z" fill="white" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #e8e6e3;"></path><path d="M34.0318 0H36.2804V4.50246H39.4416V6.72554H34.0318V0Z" fill="white" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #e8e6e3;"></path><path d="M24.9847 30.5484H30.4317L29.9182 36.2852L24.9847 37.6168V42.2188L34.053 39.7055L34.1195 38.9582L35.159 27.3128L35.2669 26.125H24.9847V30.5484Z" fill="white" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #e8e6e3;"></path><path d="M24.9847 21.5845V21.5953H35.6694L35.7581 20.6011L35.9597 18.3586L36.0655 17.1719H24.9847V21.5845Z" fill="white" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #e8e6e3;"></path></svg>`
const css = `
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.9784 49.877L10.5487 45.8712L7.33313 9.80469H42.6669L39.4479 45.8656L24.9784 49.877Z" fill="#264DE4" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #3a86e6;"></path><path d="M36.6921 43.5657L39.4429 12.75H25V46.8072L36.6921 43.5657Z" fill="#2965F1" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #3991f2;"></path><path d="M14.7048 26.125L15.1012 30.5484H25V26.125H14.7048Z" fill="#EBEBEB" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #dbd8d4;"></path><path d="M13.9082 17.1719L14.3103 21.5953H25V17.1719H13.9082Z" fill="#EBEBEB" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #dbd8d4;"></path><path d="M25 37.6186L24.9806 37.6237L20.0542 36.2935L19.7393 32.7656H15.2989L15.9186 39.711L24.9796 42.2264L25 42.2208V37.6186Z" fill="#EBEBEB" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #dbd8d4;"></path><path d="M15.6487 0H21.0062V2.24042H17.8891V4.48084H21.0062V6.72126H15.6487V0Z" fill="white" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #e8e6e3;"></path><path d="M22.0777 0H27.4352V1.94819H24.3181V2.33783H27.4352V6.81867H22.0777V4.77307H25.1948V4.38343H22.0777V0Z" fill="white" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #e8e6e3;"></path><path d="M28.5068 0H33.8643V1.94819H30.7472V2.33783H33.8643V6.81867H28.5068V4.77307H31.6239V4.38343H28.5068V0Z" fill="white" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #e8e6e3;"></path><path d="M35.2669 26.125L36.0655 17.1719H24.9847V21.5953H31.2178L30.8153 26.125H24.9847V30.5483H30.4317L29.9182 36.2852L24.9847 37.6168V42.2188L34.053 39.7055L34.1195 38.9582L35.159 27.3128L35.2669 26.125Z" fill="white" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #e8e6e3;"></path></svg>
`

const javascript = `<svg width="50" height="50" viewBox="0 0 38 52" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_17_154)"><path d="M38 10.0938H0L3.56241 47.2996L18.9981 51.516L34.4337 47.2996L38 10.0938Z" fill="#E6A329" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #e8ab3c;"></path><path d="M18.998 13.125V48.3631L31.5044 44.9508L34.5469 13.125H18.998Z" fill="#F1BF22" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #f2c434;"></path><path d="M28.9477 17.6875H9.71837L8.37903 31.6163L8.4066 31.5297H24.7429L24.2108 37.4231L18.9985 38.8673L13.7093 37.3998L13.3925 33.8328H8.59137L9.27627 40.9603L18.9985 43.6184L28.7252 40.9603L30.0645 26.97H12.727L12.9495 22.3087H24.9785L25.1584 24.9794H30.0002L28.9477 17.6875Z" fill="white" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #e8e6e3;"></path><path d="M19.0024 17.6875H9.71837L8.37903 31.6163L8.4066 31.5297H19.0019V26.9858H13.4032L13.6256 22.3245H19.0024V17.6875ZM13.4032 33.8352H8.59088L9.2758 40.9589L18.998 43.6142V38.8738L13.7088 37.4026L13.4032 33.8352Z" fill="#EBEBEB" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #dbd8d4;"></path><path d="M15.3031 4.60769H11.9202V6.94671H17.7245V0H15.306L15.3031 4.60769ZM26.0784 0.0372678H20.1812V2.46899C20.9687 3.22739 21.3793 3.59215 22.5392 4.69062H20.1812V6.90805H26.0779V4.69434L23.7223 2.47272H26.0803L26.0784 0.0372678Z" fill="white" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #e8e6e3;"></path></g><defs><clipPath id="clip0_17_154"><rect width="38" height="51.5176" fill="white" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #e8e6e3;"></rect></clipPath></defs></svg>`

const reactjs = `<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25 22.1875C27.0063 22.1875 28.6328 20.561 28.6328 18.5547C28.6328 16.5483 27.0063 14.9219 25 14.9219C22.9937 14.9219 21.3672 16.5483 21.3672 18.5547C21.3672 20.561 22.9937 22.1875 25 22.1875Z" fill="#61DAFB" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #5fd9fb;"></path><path d="M25 31.9141C27.8516 34.6875 30.6641 36.3281 32.9297 36.3281C33.6719 36.3281 34.375 36.1719 34.9609 35.8203C36.9922 34.6484 37.7344 31.7188 37.0313 27.5391C36.9141 26.7969 36.7578 26.0547 36.5625 25.2734C37.3438 25.0391 38.0469 24.8047 38.75 24.5703C42.6953 23.0469 44.8828 20.9375 44.8828 18.6328C44.8828 16.2891 42.6953 14.1797 38.75 12.6953C38.0469 12.4219 37.3438 12.1875 36.5625 11.9922C36.7578 11.2109 36.9141 10.4688 37.0313 9.72656C37.6953 5.46875 36.9531 2.5 34.9219 1.32813C34.3359 0.976563 33.6328 0.820312 32.8906 0.820312C30.6641 0.820312 27.8125 2.46094 24.9609 5.23437C22.1484 2.46094 19.3359 0.820312 17.0703 0.820312C16.3281 0.820312 15.625 0.976563 15.0391 1.32813C13.0078 2.5 12.2656 5.42969 12.9688 9.60938C13.0859 10.3516 13.2422 11.0938 13.4375 11.875C12.6563 12.1094 11.9531 12.3438 11.25 12.5781C7.30469 14.1016 5.11719 16.2109 5.11719 18.5156C5.11719 20.8594 7.30469 22.9688 11.25 24.4531C11.9531 24.7266 12.6563 24.9609 13.4375 25.1563C13.2422 25.9375 13.0859 26.6797 12.9688 27.4219C12.3047 31.6016 13.0469 34.5703 15.0391 35.7031C15.625 36.0547 16.3281 36.2109 17.0703 36.2109C19.3359 36.2891 22.1484 34.6484 25 31.9141ZM22.8125 26.6406C23.5156 26.6797 24.2578 26.6797 25 26.6797C25.7422 26.6797 26.4844 26.6797 27.1875 26.6406C26.4844 27.5781 25.7422 28.4375 25 29.2578C24.2578 28.4375 23.5156 27.5781 22.8125 26.6406ZM17.9688 22.6172C18.3594 23.2813 18.7109 23.9062 19.1406 24.5312C17.9297 24.375 16.7969 24.1797 15.7031 23.9453C16.0547 22.8906 16.4453 21.7969 16.9141 20.7031C17.2266 21.3281 17.5781 21.9922 17.9688 22.6172ZM15.7031 13.2031C16.7969 12.9688 17.9297 12.7734 19.1406 12.6172C18.75 13.2422 18.3594 13.8672 17.9688 14.5313C17.5781 15.1953 17.2266 15.8203 16.9141 16.4844C16.4062 15.3516 16.0156 14.2578 15.7031 13.2031ZM17.8516 18.5547C18.3594 17.5 18.9063 16.4453 19.5313 15.3906C20.1172 14.375 20.7813 13.3594 21.4453 12.3438C22.6172 12.2656 23.7891 12.2266 25 12.2266C26.25 12.2266 27.4219 12.2656 28.5547 12.3438C29.2578 13.3594 29.8828 14.375 30.4688 15.3906C31.0938 16.4453 31.6406 17.5 32.1484 18.5547C31.6406 19.6094 31.0938 20.6641 30.4688 21.7188C29.8828 22.7344 29.2188 23.75 28.5547 24.7656C27.3828 24.8438 26.2109 24.8828 25 24.8828C23.75 24.8828 22.5781 24.8438 21.4453 24.7656C20.7422 23.75 20.1172 22.7344 19.5313 21.7188C18.9063 20.6641 18.3594 19.6094 17.8516 18.5547ZM33.125 16.4453L32.0703 14.4922C31.6797 13.8281 31.3281 13.2031 30.8984 12.5781C32.1094 12.7344 33.2422 12.9297 34.3359 13.1641C33.9844 14.2578 33.5938 15.3516 33.125 16.4453ZM33.125 20.6641C33.5938 21.7578 33.9844 22.8516 34.3359 23.9062C33.2422 24.1406 32.1094 24.3359 30.8984 24.4922C31.2891 23.8672 31.6797 23.2422 32.0703 22.5781C32.4219 21.9922 32.7734 21.3281 33.125 20.6641ZM34.0234 34.2188C33.7109 34.4141 33.3203 34.4922 32.8906 34.4922C30.9766 34.4922 28.5938 32.9297 26.25 30.5859C27.3828 29.375 28.4766 28.0078 29.5703 26.4844C31.4062 26.3281 33.1641 26.0547 34.8047 25.6641C35 26.3672 35.1172 27.0703 35.2344 27.7734C35.7812 31.0938 35.3516 33.4766 34.0234 34.2188ZM36.0547 13.6328C40.4297 14.8828 43.0469 16.7969 43.0469 18.5547C43.0469 20.0781 41.25 21.6016 38.0859 22.8125C37.4609 23.0469 36.7578 23.2812 36.0547 23.4766C35.5469 21.875 34.9219 20.2344 34.1406 18.5547C34.9219 16.875 35.5859 15.2344 36.0547 13.6328ZM32.9297 2.61719C33.3594 2.61719 33.7109 2.69531 34.0625 2.89062C35.3516 3.63281 35.8203 5.97656 35.2734 9.33594C35.1563 10 35 10.7031 34.8438 11.4453C33.2031 11.0938 31.4453 10.8203 29.6094 10.625C28.5547 9.10156 27.4219 7.73438 26.2891 6.52344C28.6328 4.21875 31.0156 2.61719 32.9297 2.61719ZM27.1875 10.4688C26.4844 10.4297 25.7422 10.4297 25 10.4297C24.2578 10.4297 23.5156 10.4297 22.8125 10.4688C23.5156 9.53125 24.2578 8.67188 25 7.85156C25.7422 8.67188 26.4844 9.57031 27.1875 10.4688ZM15.9766 2.89062C16.2891 2.69531 16.6797 2.61719 17.1094 2.61719C19.0234 2.61719 21.4062 4.17969 23.75 6.52344C22.6172 7.73438 21.5234 9.10156 20.4297 10.625C18.5937 10.7812 16.8359 11.0547 15.1953 11.4453C15 10.7422 14.8828 10.0391 14.7656 9.33594C14.2188 6.01562 14.6484 3.67188 15.9766 2.89062ZM13.9453 23.4766C9.57031 22.2266 6.95312 20.3125 6.95312 18.5547C6.95312 17.0312 8.75 15.5078 11.9141 14.2969C12.5391 14.0625 13.2422 13.8281 13.9453 13.6328C14.4531 15.2344 15.0781 16.875 15.8594 18.5547C15.0781 20.2344 14.4141 21.9141 13.9453 23.4766ZM14.7656 27.7734C14.8828 27.1094 15.0391 26.4062 15.1953 25.6641C16.8359 26.0156 18.5937 26.2891 20.4297 26.4844C21.4844 28.0078 22.6172 29.375 23.75 30.5859C21.4062 32.8906 19.0234 34.4922 17.1094 34.4922C16.6797 34.4922 16.3281 34.4141 15.9766 34.2188C14.6484 33.4766 14.2188 31.0938 14.7656 27.7734ZM13.125 43.8672C13.9844 42.8125 14.0234 41.6406 13.5547 40.4688C13.0859 39.2969 12.1094 38.75 10.8984 38.7109C9.45312 38.6719 7.96875 38.7109 6.52344 38.7109H6.25V48.8281H7.42187V45H9.25781C9.49219 45 9.6875 45.0781 9.80469 45.2734L12.1484 48.9062C12.1875 48.9844 12.3047 49.1016 12.3828 49.1016H13.9062C12.9687 47.6562 12.0703 46.2891 11.1328 44.8828C11.9531 44.7656 12.6562 44.4922 13.125 43.8672ZM7.42187 43.7891V39.9219H7.85156C8.75 39.9219 9.6875 39.8828 10.5859 39.9609C11.6406 40 12.3828 40.8203 12.3828 41.875C12.3828 42.9297 11.5234 43.75 10.4687 43.7891C9.53125 43.8281 8.59375 43.7891 7.42187 43.7891ZM22.5391 44.2969C21.9141 41.5625 19.4141 40.8594 17.5 41.7188C16.0156 42.3828 15.3516 43.6719 15.3125 45.2734C15.2734 46.4844 15.625 47.5781 16.5625 48.3984C17.6172 49.3359 18.9062 49.4531 20.2344 49.2188C20.9766 49.0625 21.6406 48.7109 22.1484 48.1641C21.9531 47.8906 21.7578 47.6172 21.5625 47.3828C20.4687 48.3203 19.2578 48.6328 17.9297 48.0078C17.0703 47.5781 16.6406 46.5234 16.5625 45.7422H22.6172V45.2344C22.6563 44.8828 22.6172 44.5703 22.5391 44.2969ZM16.6406 44.9219C16.5234 43.75 17.6953 42.5 18.9844 42.5C20.4688 42.4609 21.4063 43.3594 21.4453 44.9219H16.6406ZM28.6328 41.5234C28.0469 41.4062 27.4219 41.3672 26.8359 41.4062C25.8984 41.4844 25.0781 41.9141 24.4141 42.6172C24.6094 42.8906 24.7656 43.1641 25 43.4766C25.0781 43.3984 25.1562 43.3203 25.2344 43.2812C25.8594 42.6953 26.6016 42.3828 27.5 42.4609C28.2031 42.5 28.8672 42.7344 29.0625 43.4375C29.2188 43.9844 29.1797 44.5703 29.2188 45.1562C29.1016 45.1562 29.0625 45.1172 29.0234 45.0781C28.0859 44.2969 27.0313 44.1406 25.8984 44.4141C24.8438 44.6875 24.1797 45.5078 24.1016 46.5625C24.0234 47.7734 24.5703 48.6719 25.625 49.1016C26.2891 49.375 27.0312 49.375 27.7344 49.2188C28.2812 49.1016 28.5156 48.7891 29.2969 48.3594V48.8672H30.3906C30.3906 47.3047 30.4297 45.3906 30.3906 43.5938C30.3906 42.4609 29.7266 41.7578 28.6328 41.5234ZM29.1797 46.4453C29.1406 46.5625 29.1797 46.6797 29.1797 46.7969C29.1797 47.6172 28.9844 47.8906 28.2031 48.2031C27.6562 48.3984 27.0703 48.4766 26.4844 48.2812C25.8203 48.0859 25.3516 47.5 25.3516 46.8359C25.3125 46.1719 25.7422 45.5078 26.4062 45.3125C27.3047 45 28.125 45.1953 28.8672 45.7422C29.1016 45.9375 29.2578 46.1328 29.1797 46.4453ZM35.2734 42.5781C36.2891 42.2656 37.2266 42.4609 37.9297 43.3203L38.0469 43.3984C38.3203 43.1641 38.5547 42.9297 38.8672 42.6562C38.75 42.5391 38.7109 42.4609 38.6328 42.3438C37.5 41.1328 35.2734 40.9766 33.9063 41.9531C31.9922 43.3594 32.0313 46.0938 32.9688 47.5391C33.8672 48.9062 35.1563 49.375 36.6797 49.1797C37.5781 49.0625 38.3203 48.6328 38.9062 47.8906C38.6328 47.6562 38.3594 47.4219 38.0859 47.1484C38.0078 47.2266 37.9688 47.2656 37.9297 47.3438C36.875 48.5156 35.1172 48.3984 34.1797 47.1484C33.6328 46.4062 33.5156 45.5469 33.6719 44.6875C33.75 43.7109 34.2578 42.9297 35.2734 42.5781ZM43.3984 47.8906C43.3203 47.9297 43.2812 47.9688 43.2812 47.9688C42.9688 48.2031 42.6562 48.2422 42.3047 48.125C41.9531 47.9688 41.9141 47.6562 41.875 47.3438V42.8906C41.875 42.8125 41.875 42.9688 41.9141 42.5781H43.3984V41.4062H41.8359V39.4531H40.6641V41.5625H39.6484C39.5703 41.5625 39.4531 41.6406 39.4531 41.7188C39.4141 41.9922 39.4531 42.1875 39.4531 42.5781H40.7031V47.5781C40.7031 48.2031 40.8594 48.75 41.4062 49.0625C41.9922 49.4141 43.125 49.3359 43.6328 48.9062C43.7109 48.8672 43.75 48.7109 43.75 48.6719C43.6328 48.4375 43.5156 48.1641 43.3984 47.8906Z" fill="#61DAFB" data-darkreader-inline-fill="" style="--darkreader-inline-fill: #5fd9fb;"></path></svg>`

const nodejsicon = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 32 32" preserveAspectRatio="xMidYMid" fill="#8cc84b"><path d="M14.656.427c.8-.453 1.82-.455 2.6 0L29.2 7.16c.747.42 1.247 1.253 1.24 2.114v13.5c.005.897-.544 1.748-1.332 2.16l-11.88 6.702a2.6 2.6 0 0 1-2.639-.073l-3.565-2.06c-.243-.145-.516-.26-.688-.495.152-.204.422-.23.642-.32.496-.158.95-.4 1.406-.656.115-.08.256-.05.366.022l3.04 1.758c.217.125.437-.04.623-.145l11.665-6.583c.144-.07.224-.222.212-.38V9.334c.016-.18-.087-.344-.25-.417L16.19 2.244a.41.41 0 0 0-.465-.001L3.892 8.93c-.16.073-.27.235-.25.415v13.37c-.014.158.07.307.215.375l3.162 1.785c.594.32 1.323.5 1.977.265a1.5 1.5 0 0 0 .971-1.409l.003-13.29c-.014-.197.172-.36.363-.34h1.52c.2-.005.357.207.33.405L12.18 23.88c.001 1.188-.487 2.48-1.586 3.063-1.354.7-3.028.553-4.366-.12l-3.4-1.88c-.8-.4-1.337-1.264-1.332-2.16v-13.5a2.46 2.46 0 0 1 1.282-2.141L14.656.427zM18.1 9.785c1.727-.1 3.576-.066 5.13.785 1.203.652 1.87 2.02 1.892 3.358-.034.18-.222.28-.394.267-.5-.001-1.002.007-1.504-.003-.213.008-.336-.188-.363-.376-.144-.64-.493-1.273-1.095-1.582-.924-.463-1.996-.44-3.004-.43-.736.04-1.527.103-2.15.535-.48.328-.624 1-.453 1.522.16.383.603.506.964.62 2.082.544 4.287.5 6.33 1.207.845.292 1.672.86 1.962 1.745.378 1.186.213 2.604-.63 3.556-.684.784-1.68 1.2-2.675 1.442-1.323.295-2.695.302-4.038.17-1.263-.144-2.577-.476-3.552-1.336-.834-.724-1.24-1.852-1.2-2.94.01-.184.193-.312.37-.297h1.5c.202-.014.35.16.36.35.093.6.322 1.25.854 1.6 1.026.662 2.313.616 3.487.635.973-.043 2.065-.056 2.86-.7.42-.367.543-.98.43-1.508-.123-.446-.6-.653-1-.8-2.055-.65-4.285-.414-6.32-1.15-.826-.292-1.625-.844-1.942-1.693-.443-1.2-.24-2.687.693-3.607.9-.915 2.22-1.268 3.47-1.394z"/></svg>`

const vuejss = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 95.625 85" fill="#fff" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round"><use xlink:href="#A" x="2.813" y="2.5"/><symbol id="A" overflow="visible"><g stroke="none"><path d="M45 48.696L17.308 0H0l45 80L90 0H72.692L45 48.696" fill="#4dba87"/><path d="M45 19.13L34.616 0H17.308L45 48.696 72.693 0H55.385L45 19.13" fill="#435466"/></g></symbol></svg>`

module.exports = {
  data() {
    return {
      cards: [
        {
          id: 1,
          title: 'Somando maças',
          description: 'Somando maças ajudar crianças na fase de alfabetização',
          img: './src/assets/img/apple-sum.jpg',
          link: 'https://dev.geraldox.com/projects/apple-sum/',
          tech: 'VueJS',
          techsvg: [vuejss],
        },
        {
          id: 2,
          title: 'Check IP and VPN',
          description:
            'Verifique o IP a cada 10 segundos e saiba se está usando VPN',
          img: 'https://www.dir-tech.com/wp-content/uploads/2023/01/Generateur-adresses-IPv4-1-1024x576.jpg',
          link: 'https://dev.geraldox.com/projects/checkvpn/',
          tech: 'HTML, CSS, JAVASCRIPT',
          techsvg: [htmls, css, javascript],
        },
        {
          id: 3,
          title: 'Vanilla Quiz',
          description: 'Pequeno projeto contextualizando um simples quiz',
          img: base + 'vanilla-quiz.png',
          link: 'https://dev.geraldox.com/projects/quiz_js/index.html',
          tech: 'HTML, CSS, JAVASCRIPT',
          techsvg: [htmls, css, javascript],
        },
        {
          id: 5,
          title: 'VueJS Blogger',
          description:
            'Consumindo uma API Fake, filter, find, render posts,é o portótipo desse site',
          /*  img: base + 'vuejs-blogger.jpg', */
          img: 'https://img.icons8.com/external-wanicon-flat-wanicon/256/external-blogger-influencer-marketing-wanicon-flat-wanicon.png',
          link: 'https://blogger-router.netlify.app',
          tech: 'VueJS',
          techsvg: [vuejss],
        },
        {
          id: 6,
          title: 'Movies API',
          description: 'Consumindo uma api do The Movies Data Base',
          img: base + 'moviedb.jpg',
          link: 'https://react-movie-apis.netlify.app',
          tech: 'ReactJS',
          techsvg: [reactjs],
        },
        {
          id: 4,
          title: 'Express session login',
          description:
            'Simulando um sistema de login, cada user tem um painel diferente',
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png',
          link: 'https://expressloginway.onrender.com',
          tech: 'NodeJS',
          techsvg: [nodejsicon],
        },
        {
          id: 7,
          title: 'Filtro dados',
          description: 'Filtrando dados por nome ou estado',
          img: defaultimg,
          link: 'https://dev.geraldox.com/projects/array_input_radio_search/',
          tech: 'HTML, CSS, JavaScript',
          techsvg: [htmls, css, javascript],
        },
        {
          id: 8,
          title: 'Gerador de Etiquetas',
          description:
            'App construido para atender uma necessidade da empresa que fiz estágio',
          img: 'https://play-lh.googleusercontent.com/exNzDTL0Wnl9jFvvw6NJXSsH11lzW_N1-6DpsVsbi7jzR3TCBkVhaVV3_9IWEodNOsE=w240-h480-rw',
          link: 'https://geraldotech.github.io/Gerador-Etiquetas-Make/FrontVersion/',
          tech: 'HTML, CSS, JavaScript',
          techsvg: [htmls, css, javascript],
        },
        {
          id: 9,
          title: 'Password generator',
          description: 'Codificador de senhas usando a Base 64',
          img: base + 'password-128.svg',
          link: 'https://dev.geraldox.com/projects/base64-converter/base64-converter-2',
          tech: 'HTML, CSS, JavaScript',
          techsvg: [htmls, css, javascript],
        },
        {
          id: 10,
          title: 'Shopping Cart',
          description: 'Simulando um sistemas de compras ',
          img: 'https://dev.geraldox.com/projects/ShoppingCart/src/shopping.png',
          link: 'https://dev.geraldox.com/projects/ShoppingCart/',
          tech: 'HTML, CSS, JavaScript',
          techsvg: [htmls, css, javascript],
        },
        {
          id: 10,
          title: 'Vivo Easy clone',
          description: 'Clone do aplicativo Vivo Easy',
          img: 'https://gmapdev.netlify.app/projects/vivoeasy/assets/vivoeasy16034139943003.png',
          link: 'https://gmapdev.netlify.app/projects/vivoeasy',
          tech: 'HTML, CSS, JavaScript',
          techsvg: [htmls, css, javascript],
        },
      ],
    }
  },
}
</script>

<style scoped>
figure:has(img) img {
  max-width: 80%;
}

h1:nth-child(1) {
  text-align: center;
  font-size: 1.5em;
  margin-block: 20px;
}

.cards:has(.card:hover) .card:not(:hover) {
  opacity: 0.6;
  scale: 0.98;
}
.cards {
  display: grid;
  /* auto responsive */
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  grid-gap: 1rem;
  justify-items: center;
  max-width: 75rem;
  margin: 0 auto;
}
.card h1 {
  color: rebeccapurple;
  padding: 0;
  margin: 0;
  text-align: center;
}
.card {
  border-top: 2px solid #05bdba;
  border-radius: 10px;
  background: rgb(11, 15, 20);
  max-width: 260px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
}

.card a {
  /*   flex: 1; */
  align-self: center;
}

/* .cards img {
  max-width: 80%;
} */
.card .description {
  font-size: 0.8rem;
  text-wrap: balance;
  text-align: center;
}

.card img:hover {
  transform: scale(1.1);
  transition: all 800ms ease-in-out;
}

.techs {
  /* font-size: 0.7rem;
  font-weight: bold;
  color: #05bdba; */
  margin-top: 8px;
  display: flex;
}

figure:has(img) {
  margin-block: 10px;
}

svg {
  width: 30px;
  height: 30px;
  cursor: pointer;
}

@media (max-width: 500px) {
  .techs {
    font-size: 0.7rem !important;
  }
  h1 {
    text-align: center;
  }
}
</style>
