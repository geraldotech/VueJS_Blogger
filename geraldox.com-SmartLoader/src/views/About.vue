<template>
  <div>
    <section class="about">
      <div class="about_avatar">
        <img src="" id="gitavatar" alt="giv avatar" />
      </div>

      <h1>Resume</h1>
      <h4 id="write">Bem vindo ao meu site!</h4>

      <div class="about_links">
        <router-link :to="{ name: 'r1' }">Direct Download</router-link>
        <router-link :to="{ name: 'r2' }">Google Drive</router-link>
        <router-view></router-view>
      </div>
    </section>
    <article>
      <p>
        Atualmente cursando Sistemas de Informação pela Estácio, com previsão de
        conclusão em Dez/2025. Meus estudos autodidatas me levaram a aprender
        lógica de programação, HTML, CSS e JavaScript. Aliando toda base que
        tenho com o curso em andamento, não deixo perder o foco no hard skills
        afim de dominar perfeitamente às habilidades necessárias para ser um
        profissional competente. Meu objetivo é ingressar na área de
        desenvolvimento a nível JR, para que eu possa aplicar meus hards skills
        assim adquirindo experiências. Me considero um profissional
        <strong>"career builder"</strong>, sempre orientado a resultados. Minha
        maior motivação é de construir aplicações do zero, transformando ideias
        em código. Com mais de 10 anos de experiência em Linux Ubuntu Server,
        instalação de serviços como: Apache, Proxy, WordPress, FTP, LAMPP, MySQL
        e DHCP.
      </p>
    </article>
    <section class="social_icons">
      <a
        href="https://github.com/geraldotech"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://geraldotech.github.io/easy-portfolio/assets/img/github.svg"
          alt=""
        />
        <p>GitHub</p>
      </a>
      <a
        href="https://www.linkedin.com/in/geraldo-petronilo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://geraldotech.github.io/easy-portfolio/assets/img/linkedin.svg"
          alt=""
        />
        <p>LinkedIn</p>
      </a>
      <a
        href="https://www.youtube.com/channel/UCbJcYWtA3rdogh9X3K2dPEg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://geraldotech.github.io/easy-portfolio/assets/img/youtube.svg"
          alt=""
        />
        <p>Youtube</p>
      </a>
    </section>
  </div>
</template>

<script>
module.exports = {
  mounted() {
    this.montado()
  },
  methods: {
    montado() {
      function typerWriter(el) {
        const txtarr = el.innerHTML.split('')
        el.innerHTML = ``
        txtarr.forEach((letra, i) => {
          setTimeout(() => (el.innerHTML += letra), 90 * i)
        })
      }
      const write = document.querySelector('#write')
      typerWriter(write)

      //gitavatar
      const api = 'https://api.github.com/users/geraldotech'
      async function getGibData(url) {
        const res = await fetch(url)
        const data = await res.json()
        //console.log(data.avatar_url);
        showimg(data)
      }
      getGibData(api)

      function showimg(img) {
        //select img tag
        const TagAvatar = document.getElementById('gitavatar')
        if (TagAvatar) {
          //evita erros caso esteja em pagina que não tem a tag
          TagAvatar.src = img.avatar_url
        }
      }
    },
  },
}
</script>

<style scoped>
.about {
  text-align: center;
}

.about .about_avatar img {
  border-radius: 50%;
  border: 2px solid green;
  width: 100%;
  width: 150px;
  margin-top: 10px;
}
.about h1 {
  font-size: 2em;
  margin: 20px 0;
}
.about .about_links {
  padding-top: 40px;
  margin-bottom: 20px;
}

.about_links a {
  font-weight: bold;
  text-decoration: none;
  margin: 10px 10px;
  border-radius: 5px;
  padding: 8px;
  background: black;
}

.about_links p {
  background: purple;
  margin-top: 50px;
  padding: 15px;
  margin: 20px auto;
  border-radius: 5px;
}

article p {
  text-align: justify;
  margin: 0 10px;
  line-height: 1.5rem;
  animation: animacao ease 5s;
}

@keyframes animacao {
  0% {
    opacity: 0;
    /* font-size: 3rem; */
  }
  100% {
    opacity: 1;
    font-size: 1rem;
  }
}

article p:first-letter {
  color: green;
  font-size: 2.6rem;
}

.social_icons img {
  width: 45px;
  height: 45px;
}

.social_icons {
  display: flex;
  margin-top: 200px;
  justify-content: center;
}
.social_icons a {
  margin: 10px;
  text-align: center;
  text-decoration: none;
  color: dodgerblue;
}

/* typerWriter */
h4::after {
  content: '|';
  opacity: 1;
  margin-left: 5px;
  display: inline-block;
  animation: blink 0.7s infinite;
}
h4 {
  text-decoration: underline blue dashed 1px;
  font-size: 1.5em;
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
#write {
  text-align: center;
}

/* for desktop */
@media screen and (min-width: 550px) {
  .about_title {
    color: dodgerblue;
    font-style: italic;
  }
  .about_links p {
    width: 50%;
  }
}
</style>
