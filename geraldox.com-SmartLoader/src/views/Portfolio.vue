<template>
  <div>
    <h1 class="portfolio">Portfolio</h1>
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
        <p class="techs">&lt; {{ card.tech }} /&gt;</p>
      </div>
    </section>
  </div>
</template>

<script>
const defaultimg = 'https://placehold.jp/150'
const base = './src/assets/img/'
module.exports = {
  data() {
    return {
      cards: [
        {
          id: 1,
          title: 'Somando com maças',
          description:
            'Continhas de soma com maças para ajudar crianças na fase de alfebetização',
          img: './src/assets/img/apple-sum.jpg',
          link: 'https://dev.geraldox.com/projects/apple-sum/',
          tech: 'VueJS 3',
        },
        {
          id: 2,
          title: 'Check IP and VPN',
          description:
            'Verifique a mudança de IP a cada 10 segundos e se consta como VPN',
          img: 'https://www.dir-tech.com/wp-content/uploads/2023/01/Generateur-adresses-IPv4-1-1024x576.jpg',
          link: 'https://dev.geraldox.com/projects/checkvpn/',
          tech: 'HTML, CSS, JAVASCRIPT',
        },
        {
          id: 3,
          title: 'Vanilla Quiz',
          description: 'Pequeno projeto contextualizando um simples quiz',
          img: base + 'vanilla-quiz.png',
          link: 'https://dev.geraldox.com/projects/quiz_js/index.html',
          tech: 'HTML, CSS, JAVASCRIPT',
        },
        {
          id: 4,
          title: 'Node Express session login page',
          description:
            'Simulando um sistema de login, cada user tem um painel diferente',
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/885px-Node.js_logo.svg.png',
          link: 'https://expressloginway.onrender.com',
          tech: 'NodeJS',
        },
        {
          id: 5,
          title: 'VueJS Blogger',
          description: 'Consumindo uma API Fake, filter, find, render posts',
          img: 'https://gifdb.com/images/high/tom-and-jerry-ping-pong-bounce-loop-6z19kkg1gqzhjby0.gif',
          link: 'https://bing.com',
          tech: 'VueJS',
        },
        {
          id: 6,
          title: 'React Movies API',
          description: 'Consumindo uma api do The Movies Data Base',
          img: defaultimg,
          link: 'https://bing.com',
          tech: 'ReactJS',
        },
        {
          id: 7,
          title: 'Fazendo filtro em um Array',
          description: 'Consumindo uma api do The Movies Data Base',
          img: defaultimg,
          link: 'https://dev.geraldox.com/projects/array_input_radio_search/',
          tech: 'HTML, CSS, JavaScript',
        },
        {
          id: 8,
          title: 'Fazendo filtro em um Array',
          description: 'Consumindo uma api do The Movies Data Base',
          img: defaultimg,
          link: 'https://dev.geraldox.com/projects/array_input_radio_search/',
          tech: 'HTML, CSS, JavaScript',
        },
      ],
    }
  },
}
</script>

<style scoped>
.portfolio {
  text-align: center;
  margin-block: 20px;
}
.cards:has(.card:hover) .card:not(:hover) {
  opacity: 0.6;
  scale: 0.98;
}
.cards {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(160px, 1fr)
  ); /* auto responsive */
  border: 1px solid;
  grid-gap: 1rem;
  padding: 10px;
  justify-items: center;
  max-width: 50rem;
  margin: 0 auto;
}
.card h1 {
  color: rebeccapurple;
  padding: 0;
  margin: 0;
  text-align: center;
}
.card {
  border-top: 8px solid #05bdba;
  border-radius: 10px;
  background: rgb(11, 15, 20);
  max-width: 250px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
}
.card a {
  flex: 1;
  align-self: center;
}

.cards img {
  max-width: 80%;
}
.card .description {
  text-align: left;
  text-wrap: wrap;
  font-size: 0.9rem;
}

.techs {
  font-size: 0.8rem;
  font-weight: bold;
  color: #05bdba;
  margin-block: 10px;
}

figure:has(img) {
  margin-block: 10px;
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
