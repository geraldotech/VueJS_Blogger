<template>
  <div>
    <section class="about">
      <h1>Resume</h1>
      <h4 id="write">Bem vindo ao meu site!</h4>

      <article class="about__content">
        <div class="about_avatar is-loading">
          <figure>
            <img src="" id="gitavatar2" alt="git avatar" />
          </figure>
        </div>

        <p>
          Atualmente cursando Sistemas de Informação, com previsão de conclusão
          em Jul/2025. Durante todos esses anos, desde 2009 meus estudos
          autodidatas me levaram a aprender muita coisa sobre técnologia, deste
          a instalação de configuração de Windows até lógica de programação.
          Aliando toda base que tenho com o curso em andamento, sinto que estou
          apto para entrar na área de desenvolvimento. Minha maior motivação é
          de construir aplicações do zero, transformando ideias em código. Com
          mais de 10 anos de experiência em Linux Ubuntu Server, instalação de
          serviços como: Apache, Proxy, WordPress, FTP, LAMPP, MySQL e DHCP.
        </p>
      </article>

      <div class="about_links">
        <h2>Download Currículo:</h2>
        <router-link :to="{ name: 'r1' }">{Server 1}</router-link> |
        <router-link :to="{ name: 'r2' }">{Server 2 - OneDrive}</router-link>
        <router-view></router-view>
      </div>
    </section>

    <section class="skills">
      <h1>Skills</h1>
      <main class="technologies">
        <article class="skills_content">
          <h2>Front-end</h2>
          <ul>
            <li>HTML</li>
            <li>
              <dl>
                <dt>CSS</dt>
                <dd>Bootstrap</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt>JavaScript</dt>
                <dd>NodeJS</dd>
                <dd>React > Next</dd>
                <dd>Vue</dd>
                <dd>Typescript <code> {on going}</code></dd>
              </dl>
            </li>
            <li>Git/Github</li>
          </ul>
        </article>
        <span class="line"></span>
        <article>
          <h2>Back-end</h2>
          <ul>
            <li>Python</li>
            <li>MySQL</li>
            <li>PHP</li>
            <li>
              <dl>Cloud</dl>
              <dd>Amazon AWS</dd>
              <dd>Digital Ocean</dd>
            </li>
            <li>
              <dd>Apache LAMP</dd>
              <dd>FTP server</dd>
              <dl>Linux Server</dl>
              <dd>Nginx</dd>
              <dd>Squid Proxy</dd>
              <dd>Wordpress</dd>
            </li>
          </ul>
        </article>
      </main>
    </section>

    <section class="social_icons">
      <a
        href="https://github.com/geraldotech"
        target="_blank"
        rel="noopener noreferrer">
        <img
          src="https://geraldotech.github.io/easy-portfolio/assets/img/github.svg"
          alt="" />
        <p>GitHub</p>
      </a>
      <a
        href="https://www.linkedin.com/in/geraldo-petronilo"
        target="_blank"
        rel="noopener noreferrer">
        <img
          src="https://geraldotech.github.io/easy-portfolio/assets/img/linkedin.svg"
          alt="" />
        <p>LinkedIn</p>
      </a>
      <a
        href="https://www.youtube.com/channel/UCbJcYWtA3rdogh9X3K2dPEg"
        target="_blank"
        rel="noopener noreferrer">
        <img
          src="https://geraldotech.github.io/easy-portfolio/assets/img/youtube.svg"
          alt="" />
        <p>Youtube</p>
      </a>
    </section>
  </div>
</template>

<script>
module.exports = {
  metaInfo: {
    title: 'About',
    titleTemplate: '%s - geraldoX',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'description',
        content:
          ' Atualmente cursando Sistemas de Informação pela Estácio, com previsão de conclusão em Dez/2025. Meus estudos autodidatas me levaram a aprender',
      },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'vuejs, windows, android, gmapdev' },
    ],
  },
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
        const TagAvatar = document.getElementById('gitavatar2')
        if (TagAvatar) {
          //evita erros no console caso esteja em pagina que não tem a tag
          TagAvatar.src = img.avatar_url
        }
      }
    },
  },
}
</script>

<style scoped>
code {
  font-size: 12px;
}

h1 {
  text-align: center;
  width: 100%;
  margin: 20px auto;
  border-bottom: 2px solid transparent;
  border-image: linear-gradient(
    0.25turn,
    rgba(255, 249, 34),
    #05bdba,
    rgba(56, 2, 155, 0)
  );
  border-image-slice: 1;
}

h1:first-of-type {
  font-size: 2em;
}

h2 {
  /*  border-bottom: 1px solid #05bdba; */
  border-bottom: 2px solid transparent;
  border-image: linear-gradient(
    0.25turn,
    rgba(255, 249, 34),
    #05bdba,
    rgba(56, 2, 155, 0)
  );
  border-image-slice: 1;
  display: inline-block;
  margin-top: 10px;
}

.about .about_avatar img {
  width: 100%;
  border-radius: 50%;
}

.about_avatar figure {
  border-radius: 50%;
  border: 2px solid dodgerblue;
  clip-path: circle();
  width: 150px;
  height: 150px;
  margin-top: 10px;
}

/* skeleton */
.is-loading figure {
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  border-radius: 5px;
  background-size: 200% 100%;
  animation: 1.5s shine linear infinite;
  border-radius: 50%;
  border: 2px solid dodgerblue;
  width: 150px;
  height: 150px;
  margin-top: 10px;
}
@keyframes shine {
  to {
    background-position-x: -250%;
  }
}
.is-loading p {
  padding: 20px;
  width: 250px;
  height: 250px;
}

.about .about_links {
  padding-top: 40px;
  margin-bottom: 20px;
  text-align: center;
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
  background: hsl(204, 100%, 5%);
  margin-top: 50px;
  padding: 15px;
  margin: 20px auto;
  border-radius: 5px;
}

.skills dd {
  margin-left: 10px;
}
.skills ul li {
  padding: 5px;
}

.skills_content {
  align-content: center;
  flex-direction: column;
}

.technologies {
  display: flex;
  justify-content: space-evenly;
  max-width: 600px;
  margin: auto;
  width: 100%;
}

.technologies > :first-child {
  align-self: flex-start;
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

.about__content p:first-letter {
  /* color: green; */
  font-size: 2.6rem;
  margin-left: 15px;
}

.about__content p {
  text-align: justify;
}

.social_icons img {
  width: 45px;
  height: 45px;
}

.social_icons {
  display: flex;
  margin-top: 150px;
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
  text-decoration: underline rgb(0, 54, 143) 2px;
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

.line {
  border: 0.5px solid transparent;
  border-image: linear-gradient(
    0.55turn,
    rgba(255, 249, 34),
    #05bdba,
    rgba(56, 2, 155, 0)
  );
  border-image-slice: 1;
}

. {
  flex-direction: column;
}

/* for DESKTOP  */
@media screen and (min-width: 650px) {
  .about_title {
    color: dodgerblue;
    font-style: italic;
  }
  .about_links p {
    width: 50%;
  }
  .about_avatar.is-loading {
    align-self: flex-start;
  }
  .about__content {
    display: flex;
    justify-content: space-evenly;
    max-width: 850px;
    margin: 20px auto;
  }

  .about__content p {
    text-align: justify;
    line-height: 1.5rem;
    animation: animacao ease 5s;
    max-width: 400px;
  }
}
</style>
