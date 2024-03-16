<template>
  <main class="page-wrapper">
    <section class="intro">
      <div class="intro__content">
        <div class="intro__content-img">
          <img src="https://avatars.githubusercontent.com/u/92253544?v=4" />
        </div>

        <div class="intro__content-devinfo">
          <div>
            <h1 class="name">Geraldo Costa</h1>
            <h2 class="subtitle"><i class="fa-solid fa-code"></i>Frontend Developer</h2>
          </div>
          <div class="social-icons">
            <a
              href="https://www.linkedin.com/in/geraldo-petronilo"
              target="_blank">
              <i class="icon-link fa-brands fa-linkedin"></i
            ></a>
            <a
              href="https://github.com/geraldotech"
              target="_blank"
              ><i class="icon-link fa-brands fa-github"></i
            ></a>
            <a href="#"><i class="icon-link fa-regular fa-envelope"></i></a>
            <a href="#">
              <button class="btn-about">
                <a href="#contact">Contato</a>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
    <!-- intro -->

    <!-- about -->
    <section class="about">
      <div class="about__content">
        <!--  <figure class="about__img">
          <img
            src="https://placekitten.com/600/610"
            alt="" />
        </figure> -->

        <div class="about__info">
          <h1>
            <strong>Experiência:</strong>
          </h1>
          <p>
            Com mais de 10 anos de experiência como técnico de informática, adquiri um profundo conhecimento e habilidades práticas que me permitem lidar com uma ampla gama de problemas e situações no
            campo da tecnologia da informação.
          </p>
          <h1><strong>Soft Skills:</strong></h1>
          <p>
            Além das habilidades técnicas, possuo excelentes habilidades interpessoais que me permitem comunicar de forma clara e eficaz com os clientes e colegas de trabalho. Sou capaz de entender as
            necessidades dos usuários finais e fornecer soluções que atendam às suas expectativas.
          </p>
          <h1>
            <strong>Compromisso com a excelência:</strong>
          </h1>
          <p>
            Estou comprometido em fornecer um serviço excepcional e garantir a satisfação do cliente. Estou sempre disposto a aprender e me manter atualizado com as últimas tendências e tecnologias no
            campo da informática para garantir que eu possa oferecer as melhores soluções possíveis.
          </p>
          <h1>
            <strong>Solucionador de problemas:</strong>
          </h1>
          <p>
            Tenho uma mentalidade analítica e sou capaz de identificar e resolver problemas de forma rápida e eficaz. Minha capacidade de pensar de forma criativa me permite encontrar soluções
            inovadoras para desafios técnicos complexos.
          </p>

          <h1><i class="fa-solid fa-terminal"></i><strong> Currículo:</strong></h1>
          <nav class="resume">
            <h1>
              <span class="icon-link-download">
                <a
                  href="https://gpnotes.droppages.com/geraldox.proxyfiles.com/files/geraldo_resume_ptbr.pdf"
                  target="_blank"
                  ><strong>Baixar currículo 'ptBR'</strong><i class="fa-solid fa-file-arrow-down"></i></a
              ></span>
            </h1>
            <h1>
              <span class="icon-link-download">
                <a
                  href="https://gpnotes.droppages.com/geraldox.proxyfiles.com/files/geraldo_resume_eng.pdf"
                  target="_blank"
                  ><strong>Baixar currículo 'eng'</strong><i class="fa-solid fa-file-arrow-down"></i></a
              ></span>
            </h1>
          </nav>
        </div>
      </div>
    </section>
    <!-- about -->

    <!-- PROJECTS -->
    <section
      id="projects"
      class="projects">
      <h1 class="heading after_title_section">Projetos</h1>
      <div class="slide-container swiper">
        <div class="slide-content">
          <div class="card-wrapper swiper-wrapper">
            <!-- CARD-->
            <div class="card swiper-slide">
              <div class="image-content">
                <a href="https://geraldox.com">
                  <img
                    style="background-color: #fff"
                    src="/src/assets/img/gpx-logo.svg"
                    alt="" />
                </a>
              </div>
              <div class="card-content">
                <div class="card-header">
                  <h3 class="name">
                    GPX
                  </h3>
                  <p class="description">
                    fake API, VueRouter, nested Router, named Router, v-for, Data API e muitos conceitos de manipulação de API foram usados para construir este site principalmente a parte do blog.
                  </p>
                </div>
                <div class="techs">
                  <span class="tech_icons">
                    <img
                      src="/src/assets/icons/svg/vuejs.svg"
                      title="VueJS"
                      alt="" />
                  </span>
                </div>
              </div>
            </div>
            <!-- CARD-->
            <!-- CARD-->
            <div class="card swiper-slide">
              <div class="image-content">
                <img
                  src="/src/assets/img/apple-sum.jpg"
                  alt="" />
              </div>

              <div class="card-content">
                <div class="card-header">
                  <h3 class="name">
                    <a
                      href="https://dev.geraldox.com/projects/apple-sum/"
                      target="_blank"
                      >Vamos somar</a
                    >
                  </h3>
                  <p class="description">Ajuda crianças na fase da alfabetização matemática, gerando contas aleatórias e respostas com multiplca escolha.</p>
                </div>
                <div class="techs">
                  <span class="tech_icons">
                    <img
                      src="/src/assets/icons/svg/vuejs.svg"
                      title="VueJS"
                      alt="" />
                  </span>
                </div>
              </div>
            </div>
            <!-- CARD-->
            <!-- CARD-->
            <div class="card swiper-slide">
              <div class="image-content">
                <img
                  src="/src/assets/img/moviedb.jpg"
                  alt="" />
              </div>

              <div class="card-content">
                <div class="card-header">
                  <h3 class="name">
                    <a
                      href="https://react-movie-apis.netlify.app/"
                      target="_blank">
                      The Movie DB</a
                    >
                  </h3>
                  <p class="description">Consumindo a API do The Movies Data Base para listar os 20 filmes mais populares.</p>
                </div>
                <div class="techs">
                  <span class="tech_icons">
                    <img
                      src="/src/assets/icons/svg/reactjs.svg"
                      title="React"
                      alt="" />
                  </span>
                </div>
              </div>
            </div>
            <!-- CARD-->
            <!-- CARD-->
            <div class="card swiper-slide">
              <div class="image-content">
                <img
                  loading="lazy"
                  src="https://dev.geraldox.com/projects/ShoppingCart/src/shopping.png"
                  alt="" />
              </div>

              <div class="card-content">
                <div class="card-header">
                  <h3 class="name">
                    <a
                      href="https://dev.geraldox.com/projects/shoppingcart/"
                      target="_blank"
                      >Shopping Cart</a
                    >
                  </h3>
                  <p class="description">Simulando um sistemas de compras, adicionar e remover itens ao carrinho</p>
                </div>
                <div class="techs">
                  <span class="tech_icons">
                    <img
                      src="/src/assets/icons/svg/html.svg"
                      title="HTML"
                      alt="" />
                    <img
                      src="/src/assets/icons/svg/css.svg"
                      title="CSS"
                      alt="" />
                    <img
                      src="/src/assets/icons/svg/javascript.svg"
                      title="Javascript"
                      alt="" />
                  </span>
                </div>
              </div>
            </div>
            <!-- CARD-->
            <!-- CARD-->
            <div class="card swiper-slide">
              <div class="image-content">
                <img
                  loading="lazy"
                  src="https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png"
                  alt="" />
              </div>
              <div class="card-content">
                <h3 class="name">
                  <a
                    href="https://vannlifeforfirebase.pages.dev/"
                    target="_blank"
                    >Life Vans</a
                  >
                </h3>
                <p class="description">
                  Contextualizando recursos avançados como Router, Context API, Nested Routers, Outline, link state, search Params consumindo dados do Firebase. use as credenciais configuradas no
                  miragejs: <b>g@g.com@123</b>.
                </p>
                <div class="techs">
                  <span class="tech_icons">
                    <img
                      src="/src/assets/icons/svg/reactjs.svg"
                      title="React"
                      alt="" />
                    <img
                      src="/src/assets/icons/svg/firebasevertical.svg"
                      title="Firebase"
                      alt="" />
                  </span>
                </div>
              </div>
            </div>
            <!-- CARD-->

            <!-- CARD-->
            <div class="card swiper-slide">
              <div class="image-content">
                <img
                  loading="lazy"
                  src="https://play-lh.googleusercontent.com/exNzDTL0Wnl9jFvvw6NJXSsH11lzW_N1-6DpsVsbi7jzR3TCBkVhaVV3_9IWEodNOsE=w240-h480-rw"
                  alt="pdf icon" />
              </div>
              <div class="card-content">
                <h3 class="name">
                  <a
                    href="https://geraldotech.github.io/Gerador-Etiquetas-Make/FrontVersion/"
                    target="_blank"
                    >Gerador de Etiquetas</a
                  >
                </h3>
                <p class="description">App construido para atender uma necessidade da empresa que fiz estágio</p>
                <div class="techs">
                  <span class="tech_icons">
                    <img
                      src="/src/assets/icons/svg/html.svg"
                      title="HTML"
                      alt="" />
                    <img
                      src="/src/assets/icons/svg/css.svg"
                      title="CSS"
                      alt="" />
                    <img
                      src="/src/assets/icons/svg/javascript.svg"
                      title="Javascript"
                      alt="" />
                  </span>
                </div>
              </div>
            </div>
            <!-- CARD-->
            <!-- CARD-->
            <div class="card swiper-slide">
              <div class="image-content">
                <img
                  loading="lazy"
                  src="https://gmapdev.netlify.app/projects/vivoeasy/assets/vivoeasy16034139943003.png"
                  alt="" />
              </div>
              <div class="card-content">
                <h3 class="name">
                  <a
                    href="https://gmapdev.netlify.app/projects/vivoeasy/"
                    target="_blank"
                    >Vivo Easy clone</a
                  >
                </h3>
                <p class="description">Um do clone simulando as funcionalidades do aplicativo Vivo Easy</p>
                <div class="techs">
                  <span class="tech_icons">
                    <img
                      src="/src/assets/icons/svg/html.svg"
                      title="HTML"
                      alt="" />
                    <img
                      src="/src/assets/icons/svg/css.svg"
                      title="CSS"
                      alt="" />
                    <img
                      src="/src/assets/icons/svg/javascript.svg"
                      title="Javascript"
                      alt="" />
                  </span>
                </div>
              </div>
            </div>
            <!-- CARD-->
            <!-- CARD-->
            <div class="card swiper-slide">
              <div class="image-content">
                <img
                  src="/src/assets/icons/svg/javascriptlogo.svg"
                  alt="" />
              </div>
              <div class="card-content">
                <h3 class="name">
                  <a
                    href="https://dev.geraldox.com/projects/array_input_radio_search/"
                    target="_blank"
                    >Filtro dados</a
                  >
                </h3>
                <p class="description">Filtrando dados por nome ou estado</p>
                <div class="techs">
                  <span class="tech_icons">
                    <img
                      src="/src/assets/icons/svg/html.svg"
                      title="HTML"
                      alt="" />
                    <img
                      src="/src/assets/icons/svg/css.svg"
                      title="CSS"
                      alt="" />
                    <img
                      src="/src/assets/icons/svg/javascript.svg"
                      title="Javascript"
                      alt="" />
                  </span>
                </div>
              </div>
            </div>
            <!-- CARD-->
            <!-- CARD-->
            <div class="card swiper-slide">
              <div class="image-content">
                <img
                  src="/src/assets/icons/svg/nodejslogo.svg"
                  alt="" />
              </div>
              <div class="card-content">
                <h3 class="name">
                  <a
                    href="https://expressloginway.onrender.com/"
                    target="_blank"
                    >Express session login
                  </a>
                </h3>
                <p class="description">Simulando um sistema de login, cada user tem um painel diferente</p>
                <div class="techs">
                  <span class="tech_icons">
                    <img
                      src="/src/assets/icons/svg/nodejs.svg"
                      title="NodeJS"
                      alt="" />
                  </span>
                </div>
              </div>
            </div>
            <!-- CARD-->
            <!-- CARD-->
            <div class="card swiper-slide">
              <div class="image-content">
                <img
                  src="/src/assets/img/password-128.svg"
                  alt="" />
              </div>
              <div class="card-content">
                <h3 class="name">
                  <a
                    href="https://dev.geraldox.com/projects/base64-converter"
                    target="_blank"
                    >Password generator
                  </a>
                </h3>
                <p class="description">Codificador de senhas usando a Base 64</p>
                <span class="tech_icons">
                  <img
                    src="/src/assets/icons/svg/html.svg"
                    title="HTML"
                    alt="" />
                  <img
                    src="/src/assets/icons/svg/css.svg"
                    title="CSS"
                    alt="" />
                  <img
                    src="/src/assets/icons/svg/javascript.svg"
                    title="Javascript"
                    alt="" />
                </span>
              </div>
            </div>
            <!-- CARD-->
            <!-- CARD-->
            <div class="card swiper-slide">
              <div class="image-content">
                <img
                  loading="lazy"
                  src="https://firebasemood.netlify.app/assets/images/logo.svg"
                  alt="" />
              </div>
              <div class="card-content">
                <h3 class="name">
                  <a
                    href="https://firebasemood.netlify.app/"
                    target="_blank"
                    >The Moody Zone
                  </a>
                </h3>
                <p>Understanding Feelings</p>
                <p class="description">Create Posts Read Posts Update Posts Delete Posts</p>
                <span class="tech_icons">
                  <img
                    src="/src/assets/icons/svg/html.svg"
                    title="HTML"
                    alt="" />
                  <img
                    src="/src/assets/icons/svg/css.svg"
                    title="CSS"
                    alt="" />
                  <img
                    src="/src/assets/icons/svg/javascript.svg"
                    title="Javascript"
                    alt="" />
                  <img
                    src="/src/assets/icons/svg/firebasevertical.svg"
                    title="firebase"
                    alt="" />
                </span>
              </div>
            </div>
            <!-- CARD-->
                 <!-- CARD-->
            <div class="card swiper-slide">
              <div class="image-content">
                <a href="https://dev.geraldox.com/projects/quizExpert_vanilla" target="_blank">
                  <img
                    src="/src/assets/img/Customer Survey-amico.svg"
                    alt="" />
                </a>
              </div>
              <div class="card-content">
                <div class="card-header">
                  <h3 class="name">
                    quiz Expert
                  </h3>
                  <p class="description">
                    Teste seus conhecimentos em JavaScript
                  </p>
                </div>
                <div class="techs">
                  <span class="tech_icons">
                  <img
                    src="/src/assets/icons/svg/html.svg"
                    title="HTML"
                    alt="" />
                  <img
                    src="/src/assets/icons/svg/css.svg"
                    title="CSS"
                    alt="" />
                  <img
                    src="/src/assets/icons/svg/javascript.svg"
                    title="Javascript"
                    alt="" />
                </span>
                </div>
              </div>
            </div>
            <!-- CARD-->
          </div>
        </div>
        <div class="swiper-button-next swiper-navBtn"></div>
        <div class="swiper-button-prev swiper-navBtn"></div>
        <div class="swiper-pagination"></div>
      </div>
    </section>
    <!-- PROJECTS -->

    <!-- EXPERIENCES -->
    <section id="experiences">
      <div class="experience_main">
        <h3 class="head_experience">TIMELINE</h3>
        <div class="experiences__container">
          <ul class="timeline">
            <li>
              <h3 class="heading">
                Tec de Informática autônomo <br />
                <a href="https://smartupdate.netlify.app/">Smartupdate</a>
              </h3>
              <p>
                Suporte técnico personalizado a clientes, criando soluções sob medida. Instalação, configuração e atualização de software, OS Windows / Linux , garantindo compatibilidade e segurança.
                Habilidades na montagem, manutenção, de hardware, incluindo seleção de componentes e conexões. upgrade de hardware/software Instalação de roteadores, cabeamento.
              </p>
              <span class="date">Jan 2010 - Presente</span>
              <span class="circle"></span>
            </li>
            <li>
              <h3 class="heading">Administrador de sites e Redes - autônomo</h3>
              <p>VPS cloud computing, Apache, Nginx, FTP, Squid Proxy, DNS, CMS Wordpress Linux server</p>
              <span class="date">Jul 2023 / Fev 2024</span>
              <span class="circle"></span>
            </li>
            <li>
              <h3 class="heading">
                Estágio Técnico de Suporte <br />
                Make Solutions
              </h3>
              <p>Configuração de computadores, network, softwares, manutenção preventiva, Backup do banco de dados, Tratativa de ordem de serviço CFTV, câmera IP, roteadores e switches.</p>
              <span class="date">Jan 2023 / Dez 2024</span>
              <span class="circle"></span>
            </li>
            <!--  <li>
              <h3 class="heading">Engenharia de Software</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, aliquam autem. Quia ducimus totam sunt sint facilis perferendis sapiente neque, laudantium placeat dignissimos
                repellat quae. Est aperiam aliquid doloribus voluptas!
              </p>
              <span class="date">Jan 2023 / Dez 2024</span>
              <span class="circle"></span>
            </li> -->
          </ul>
        </div>
      </div>
    </section>
    <!-- EXPERIENCES -->

    <!--  SKILLS -->
    <section id="skills">
      <div class="skills_container">
        <h1 class="heading after_title_section">Habilidades e Conhecimentos</h1>
        <div class="card--container">
          <div class="card_skill">
            <img
              src="/src/assets/icons/svg/javascript.svg"
              alt="" />
            <h3>Javascript</h3>
            <p>Linguagem em foco, a base para desenvolver sem o uso de bibliotecas e frameworks</p>
          </div>
          <div class="card_skill">
            <img
              src="/src/assets/icons/svg/html.svg"
              alt="" />
            <img
              src="/src/assets/icons/svg/css.svg"
              alt="" />
            <h3>HTLM 5 - CSS 3</h3>
            <p>Projetos base, estruturação e estilização moderna</p>
          </div>
          <div class="card_skill">
            <img
              loading="lazy"
              src="/src/assets/icons/svg/firebasevertical.svg"
              alt="" />
            <h3>Google Firebase</h3>
            <p>Banco de dados firebase authentication, e banco de dados - realtime e firestore</p>
          </div>
          <div class="card_skill">
            <img
              src="/src/assets/icons/svg/git.svg"
              alt="" />
            <img
              src="/src/assets/icons/svg/github.svg"
              alt="" />
            <h3>Git Github</h3>
            <p>Versionamento de Código, e hospedagem dos principais projetos open source</p>
          </div>
          <div class="card_skill">
            <img
              src="/src/assets/icons/svg/reactjs.svg"
              alt="" />
            <h3>ReactJS</h3>
            <p>Biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário</p>
          </div>
          <div class="card_skill">
            <img
              src="/src/assets/icons/svg/vuejs.svg"
              alt="" />
            <h3>VueJS</h3>
            <p>The Progressive JavaScript Framework building web user interfaces.</p>
          </div>
          <div class="card_skill">
            <img
              src="/src/assets/icons/svg/nodejs.svg"
              alt="" />
            <h3>NodeJS</h3>
            <p>JavaScript runtime built on Chrome's V8 JavaScript engine</p>
          </div>
          <div class="card_skill">
            <img
              src="/src/assets/icons/svg/ubuntu.svg"
              alt="" />
            <h3>Linux Services</h3>
            <p>Apache LAMP, FTP server, Squid Proxy, MySQL, DHCP, IP Tables e Shell Script</p>
          </div>
          <div class="card_skill">
            <img
              src="/src/assets/icons/svg/php.svg"
              alt="" />
            <h3>PHP</h3>
            <p>Integração com banco de dados MySQL</p>
          </div>
          <div class="card_skill">
            <img
              src="/src/assets/icons/svg/python.svg"
              alt="" />
            <h3>Python</h3>
            <p>gerar PDFs automaticamente</p>
            <p>automação e Análise de dados</p>
          </div>
        </div>
      </div>
    </section>
    <!--  SKILLS -->

    <!-- CONTACT -->
    <section id="contact">
      <div class="contact--container">
        <form
          action="#"
          @submit="handlerSubmit"
          class="contact-form">
          <h2 class="contact-title">Envie sua mensagem</h2>
          <hr />
          <input
            type="hidden"
            name="access_key"
            value="bea9b49b-5b05-4e6a-ae67-d47886aa2cd1" />
          <div class="contact-inputs-div">
            <i class="fa-solid fa-user"></i>
            <input
              type="text"
              name="name"
              v-model="name"
              placeholder="Seu nome"
              class="contact-inputs"
              required />
          </div>
          <div class="contact-inputs-div">
            <i class="fa-regular fa-envelope"></i>
            <input
              type="email"
              v-model="email"
              name="name"
              placeholder="Seu E-mail"
              class="contact-inputs"
              required />
          </div>
          <textarea
            v-model="message"
            name="message"
            placeholder="Sua Mensagem"
            class="contact-inputs-div"
            required></textarea>
          <button type="submit">
            <i class="fa-solid fa-paper-plane"></i>
            Enviar
          </button>
          <p
            class="text-base text-center text-gray-400"
            id="result"></p>
        </form>

        <div class="contact-image">
          <img
            src="/src/assets/img/api-amico.svg"
            alt="" />
        </div>
      </div>
    </section>
    <!-- CONTACT -->
  </main>
</template>

<script>
module.exports = {
  metaInfo: {
    title: 'Home Page',
    titleTemplate: '%s - geraldoX',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'description',
        content: 'Threads written by Geraldo Filho',
      },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'vuejs, windows, android, linux, gmapdev' },
    ],
  },
  /* MOUNTED */
  mounted() {
    this.loadSwiperScript()
    //this.scrollToBottom()
  },
  created() {},
  beforeMount() {},
  data() {
    return {
      name: '',
      email: '',
      message: '',
    }
  },
  methods: {
    loadSwiperScript() {
      var swiper = new Swiper('.slide-content', {
        slidesPerView: 5,
        spaceBetween: 25,
        loop: false,
        centerSlide: true,
        fade: true,
        grabCursor: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          666: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
          1410: {
            slidesPerView: 4,
          },
        },
      })
    },
    scrollToBottom() {
      setTimeout(() => {
        window.scrollTo(0, document.body.scrollHeight)
      }, 500)
    },
    handlerSubmit() {
      event.preventDefault()

      const result = document.getElementById('result')

      const object = {
        name: this.name,
        email: this.email,
        message: this.message,
        access_key: 'bea9b49b-5b05-4e6a-ae67-d47886aa2cd1',
      }
      const json = JSON.stringify(object)

      result.innerHTML = 'Please wait...'

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      })
        .then(async (response) => {
          let json = await response.json()
          if (response.status == 200) {
            result.innerHTML = json.message
            result.classList.remove('text-gray-500')
            result.classList.add('text-green-500')
          } else {
            console.log(response)
            result.innerHTML = json.message
            result.classList.remove('text-gray-500')
            result.classList.add('text-red-500')
          }
        })
        .catch((error) => {
          console.log(error)
          result.innerHTML = 'Something went wrong!'
        })
        .then(function () {
          // form.reset();
          setTimeout(() => {
            console.log(`enviado!`)
            result.style.display = 'none'
          }, 3000)
        })
      event.target.reset()
    },
    // https://docs.web3forms.com/getting-started/examples/ajax-contact-form-using-javascript
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Anta&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

:root {
  --primary: #8257e5;
  --purple: #7650cf;
  --purple-disabled: #41356b;
  --secondary: #9c9487;
  --blue: #3c1691;
  --background1: #181a1b;
  --background2: #121214;
  --background3: #202024;
  --whitecolor: #fff;
  --blackcolor: #000;
  --softcolor: #e1e1e6;
  --graylite: #828282;
  --graylite2: #393d40;
  --graylite3: #d4d4d4;
  --degrade: radial-gradient(circle, rgba(45, 133, 243, 1) 0%, rgba(46, 113, 166, 1) 63%, rgba(45, 133, 243, 1) 100%);
}

strong {
  color: var(--primary);
  font-weight: bold;
}

.page-wrapper {
  color-scheme: light;
  background: var(--whitecolor);
  color: var(--whitecolor);
  padding: 0;
  margin: 0;
  min-height: 150vh;
  font-family: 'Roboto', sans-serif;
}

.fa {
  font-weight: 600;
}
/* INTRO */

.intro__content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  height: calc(100vh - 55px);
  justify-content: space-around;
  background-color: var(--whitecolor);
}

.intro__content-devinfo {
  text-align: center;
}

.intro__content-devinfo .name {
  font-size: 5em;
  font-family: 'Anta', sans-serif;
  text-transform: uppercase;
  color: var(--primary);
  margin-bottom: 8px;
}
.intro__content-devinfo .subtitle {
  color: var(--secondary);
  font-family: 'Lato', sans-serif;
  font-size: 2rem;
  margin-bottom: 50px;
  transition: 0.4s;
  &:hover {
    color: var(--blackcolor);
  }
}

.intro__content-img img {
  width: 100%;
  height: auto;
  width: 300px;
  transition: transform 0.6s;
  &:hover {
    transform: rotate(1deg);
  }
}

/* ICONS */
.social-icons {
  display: flex;
  justify-content: center;
  gap: 1em;
  a {
    text-decoration: none;
  }
}

.social-icons .icon-link {
  font-size: 2rem;
  color: var(--primary);
  border: 2px solid var(--graylite3);
  border-radius: 10px;
  padding: 2px 6px;
  transition: border 0.3s;
  &:hover {
    border: 2px solid var(--primary);
    transform: scale(1.08);
    transition: 0.4s;
    cursor: pointer;
  }
}

.icon-link-download {
  color: var(--primary);
  border-radius: 10px;
  padding: 5px 10px;
  transition: border 0.3s;
  & a {
    text-decoration: none;
  }
  & i {
    font-size: 1.5rem;
    color: rgb(195, 13, 13);
    padding: 2px 6px;
    transition: border 0.3s;
  }
  &:hover {
    border: 2px solid var(--primary);
    transform: scale(1.08);
    transition: 0.4s;
    cursor: pointer;
    text-decoration: none;
  }
  & strong:hover {
    color: var(--whitecolor);
  }
  & strong:hover + i {
    color: red;
  }
}

.resume {
  text-align: left;
}
.resume h1 {
  margin-block: 1rem;
}

.social-icons .btn-about {
  background-color: var(--primary);
  color: var(--whitecolor);
  border: 2px solid transparent;
  border-radius: 0.5em;
  padding: 10px 28px;
  font-size: 1rem;
  font-weight: bold;
  font-family: 'Lato', sans-serif;
  transition: background-color 0.3s, color 0.3s;
  &:hover {
    transform: scale(1.08);
    background-color: var(--graylite2);
    color: var(--whitecolor);
    border: 2px solid var(--primary);
    cursor: pointer;
    transition: 0.5s;
  }
  & a {
    text-decoration: none;
    color: var(--whitecolor);
  }
}

/* ABOUT START */
.about {
  background: var(--background1);
  padding: 3em;
  color: var(--softcolor);
  @media (max-width: 500px) {
    padding: 0;
    .about__content {
      padding: 10px;
    }
  }
}

.about__content {
  /*  display: flex; */
  justify-content: space-between;
  align-content: center;
  flex-wrap: wrap;
  gap: 10px;
  border-radius: 8px;
  max-width: 999px;
  margin: auto;
  padding: 40px;
  background-color: var(--background3);
}

.about__content:hover {
  box-shadow: 0 0 1.5px 1.5px var(--primary);
  transition: all 1s ease;
}

.about__img {
  max-width: 300px;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
}
.about__img img {
  border-radius: 10px;
}

.about__info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  flex: 0 1 50%;
}

.about__info p {
  font-size: 1rem;
  line-height: 1.5;
}

.about__info h1 {
  align-self: flex-start;
}

/* ABOUT ENDS */

/* PROJECTS */

.projects {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: var(--background2);
  text-align: center;
}

.projects .heading {
  font-family: 'Anta', sans-serif;
  font-size: 2.5em;
  position: relative;
}

.slide-container {
  display: flex;
  justify-content: space-around;
  max-width: 1444px;
  width: 90%;
  height: 80%;
  align-items: center;
}

.slide-content {
  margin: 60px 20px;
  overflow: hidden;
  height: 90%;
  width: 92%;
  padding: 10px 20px 20px;
  /* only for desktops */
  @media (min-width: 500px) {
    height: 70%;
    width: 70%;
  }
}
.card {
  display: flex;
  flex-direction: column;
  background-color: #202024;
  height: 100%;
  border-radius: 14px;
}

.card-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: -webkit-fill-available;
}
.card-content h3:has(a) a {
  text-decoration: none;
  color: var(--purple);
}
.card-content h3 > a:hover {
  color: purple;
}

.card-content .name {
  color: var(--primary);
  margin-top: 20px;
  font-size: 1.5em;
}

.image-content {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 50%;
  border-radius: 12px;
  background-color: var(--primary);
}

.image-content img {
  height: 92%;
  /*  object-fit: cover; */
  border-radius: 8px;
}
.image-content img:hover {
  transform: scale(1.1);
  transition: all 1s ease;
}

.description {
  font-family: 'Poppins', sans-serif;
  color: var(--softcolor);
  font-size: 0.9rem;
  text-align: justify;
  line-height: 1.5;
  padding: 0.5rem;
}

.projects__button {
  border: none;
  font-size: 16px;
  color: var(--whitecolor);
  padding: 8px 16px;
  background-image: linear-gradient(to right top, #4f08ae, #4e1699, #4b1e85, #472471, #42285e);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tech_icons img {
  display: inline;
  width: 32px;
  height: 32px;
  cursor: pointer;
}

.projects a > img {
  width: 65%;
}

.projects a:has(img) {
  display: flex;
  justify-content: center;
}

/* PROJECT ENDS */

/* EXPERIENCES START */

.experience_main {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: var(--background2);
  display: grid;
  place-items: center;
  padding: 80px 0px 160px 0; /* this padding - testar no main section */
}

.experience_main .head_experience {
  font-size: 2.5em;
  color: var(--softcolor);
  position: relative;
  xmargin-bottom: 50px;
  font-weight: 500;
  font-family: 'Anta', sans-serif;
}

.experience_main .head_experience::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 3px;
  left: 50%;
  bottom: -5px;
  transform: translateX(-50%);
  background-image: linear-gradient(to right, rgba(91, 14, 216, 0.767), rgba(238, 12, 200, 0.747));
}

.experiences__container {
  width: 70%;
  height: 100%;
  margin: auto 0;
  position: relative;
  padding-top: 0px;
  margin-top: 100px;
  z-index: 2;
}
.experiences__container ul {
  list-style-type: none;
}

.experiences__container ul.timeline::after {
  content: '  ';
  width: 2px;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 0;
  background-image: linear-gradient(to bottom, rgba(91, 14, 216, 0.767), rgba(238, 12, 200, 0.747));
}

.experiences__container ul.timeline li {
  width: 50%;
  height: auto;
  padding: 15px 20px;
  background-color: #202024;
  border-radius: 8px;
  box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.218);
  position: relative;
  margin-bottom: 30px;
  z-index: 99;
}

.experiences__container .heading {
  font-size: 1.3rem;
  color: var(--primary);
  font-family: 'Roboto', sans-serif;
}

.experiences__container .heading > a {
  color: dodgerblue;
}

.experiences__container ul.timeline li:nth-child(4) {
  margin-bottom: 0;
}

.experiences__container ul.timeline li .circle {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #671b857a;
  top: 0;
  display: grid;
  place-items: center;
}

.circle::after {
  content: ' ';
  width: 12px;
  height: 12px;
  background-color: var(--primary);
  border-radius: 50%;
}

ul.timeline li:nth-child(odd) .circle {
  transform: translate(50%, -50%);
  right: -30px;
}

ul.timeline li:nth-child(even) .circle {
  transform: translate(-50%, -50%);
  left: -30px;
}

ul.timeline li .date {
  position: absolute;
  width: 280px;
  height: 33px;
  background-color: #8257e5;
  border-radius: 6px;
  top: -45px;
  left: 0;
  display: grid;
  place-items: center;
  color: var(--whitecolor);
  font-size: 16px;
  transition: all 0.3s ease;
  box-shadow: var(--degrade);
}

.experiences__container ul.timeline li:nth-child(odd) {
  float: left;
  clear: right;
  text-align: right;
  z-index: inherit;
  transform: translateX(-30px);
}
.experiences__container ul.timeline li:nth-child(even) {
  float: right;
  clear: left;
  transform: translateX(30px);
}

.experiences__container ul.timeline li p {
  margin: 10px 0;
  color: var(--softcolor);
  font-size: 1rem;
  line-height: 1.5;
  text-align: justify;
}

ul li:nth-child(odd) .date {
  right: 20px;
}

.experiences__container ul.timeline li {
  transition: transform 0.9s ease, box-shadow 0.9s ease;
}

.experiences__container ul.timeline li:hover {
  transform: scale(1.05);
  border: 2px solid #8257e5;
}

@media only screen and (max-width: 798px) {
  .experiences__container {
    width: 70%;
    height: auto;
    transform: translateX(0.8rem);
  }

  .experiences__container ul.timeline li {
    width: 100%;
    float: none;
    clear: none;
    margin-bottom: 80px;
  }
  .experiences__container ul.timeline::after {
    left: -40px;
  }

  .experiences__container ul.timeline li .circle {
    left: -40px;
    transform: translate(-50%, -50%);
  }

  .experiences__container ul.timeline li {
    transition: none; /* Remover a transição em dispositivos móveis */
  }

  .experiences__container ul.timeline li:nth-child(odd) {
    transform: translateX(0px);
    text-align: left;
  }
  .experiences__container ul.timeline li:nth-child(even) {
    transform: translateX(0px);
  }
}

/* EXPERIENCES ENDS */

/* SKILLS */

.skills_container {
  background-color: var(--blackcolor);
  padding: 100px 9%;
  padding-bottom: 100px;
  height: 100%;
}

.skills_container .heading {
  text-align: center;

  color: var(--softcolor);
  text-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  font-size: 2.5em;
  font-family: 'Anta', sans-serif;
  letter-spacing: 1px;
  position: relative;
  width: fit-content;
  margin: auto;
}

.skills_container .card--container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 15px;
  padding-block: 60px;

  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}

.skills_container .card--container .card_skill {
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background-color: var(--background3);
  text-align: center;
  padding: 15px 10px;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease;
}

.skills_container .card--container .card_skill img {
  height: 60px;
  color: var(--primary);
}

.skills_container .card--container .card_skill h3 {
  color: var(--softcolor);
  font-size: 1.2rem;
  padding: 10px 0;
}

.skills_container .card--container .card_skill p {
  color: var(--softcolor);
  font-size: 1rem;
  line-height: 1.8;
  text-align: center;
}
.skills_container .card--container .card_skill:hover {
  background-color: var(--blackcolor);
  /*  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3); */
  transform: scale(1.03);
  /* border: 1.5px solid #7401e1; */
  box-shadow: 0 0 1.2px 1.2px #7401e1;
}

.skills_container .card--container .card_skill:hover h3 {
  color: var(--primary);
  transition: color 0.3s ease;
}
.skills_container .card--container .card_skill:hover p {
  color: var(--whitecolor);
  transition: color 0.3s ease;
}

@media (max-width: 768px) {
  .skills_container {
    padding: 12px;
  }
}

/* SKILLS ENDS */

/* CONTACT */
#contact {
  height: auto;
  background-color: var(--background2);
  font-family: 'Lato', sans-serif;
  @media (max-width: 500px) {
    padding-block: 10vh;
  }
}

.contact--container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: space-between;
  justify-content: space-around;
  padding: 100px 80px;
  gap: 2rem;
  @media (max-width: 500px) {
    padding: 0.5rem;
  }
}
.contact-form {
  background-color: var(--background3);
  padding: 40px;
  display: flex;
  max-width: 500px;
  width: 100%;
  flex-direction: column;
  align-items: start;
  gap: 1.25rem;
  border-radius: 12px;
  margin: 0;
  margin-left: 0;
  @media (max-width: 500px) {
    padding: 1rem;
    width: 100%;
  }
}

.contact--container .contact-title {
  font-weight: 600;
  color: var(--softcolor);
  font-size: 2rem;
  margin-bottom: 2px;

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
}

.contact-form hr {
  border: none;
  width: 120px;
  height: 5px;
  background-color: #7650cf;
  border-radius: 10px;
  margin-bottom: 20px;
}

.contact-form i {
  color: var(--primary);
}

.contact-inputs-div {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  max-width: 400px;
  width: 100%;
  height: 50px;
  border: none;
  outline: none;
  padding-left: 25px;
  font-weight: 500;
  border-radius: 8px;
  background-color: var(--background1);
}
.contact-inputs-div:focus-within {
  border: 3px solid var(--primary);
}

.contact-inputs-div::placeholder {
  color: #5e5e5e;
}

.contact-form textarea::placeholder {
  font-weight: 500;
}

.contact-form textarea {
  max-width: 400px;
  padding-top: 1rem;
  border-radius: 8px;
  color: var(--whitecolor);
  font-family: inherit;
}

.contact-inputs {
  background: transparent;
  display: flex;
  color: #e1e1e6;
  font-weight: 500;
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  font-family: inherit;
}

.contact-form button[type='submit'] {
  display: flex;
  align-items: center;
  align-self: center;
  padding: 15px 30px;
  color: var(--softcolor);
  gap: 1rem;
  border: none;
  border-radius: 8px;
  background-color: var(--purple-disabled);
  cursor: pointer;
}
.contact-form button[type='submit']:hover {
  background-color: var(--purple);
  transition: background-color 350ms ease;
}

.contact-form:hover {
  box-shadow: 0 0 2px 2px var(--primary);
}

.contact-image img {
  width: 100%;
}

/* CONTACT  ENDS*/

.after_title_section::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 3px;
  left: 50%;
  bottom: -5px;
  transform: translateX(-50%);
  background-image: linear-gradient(to right, rgba(91, 14, 216, 0.767), rgba(238, 12, 200, 0.747));
}

/* MOBILE */
@media screen and (max-width: 1180px) {
  .intro {
    width: 100%;
    height: 100vh;
    padding: 60px 20px;
  }

  .intro__content-devinfo {
    display: flex;
    flex-direction: column;
  }
  .intro__content-devinfo .name {
    font-size: 3.5em;
  }
  .social-icons {
    flex-wrap: wrap;
    flex: 1 50%; /* 2 ícones por linha */
    max-width: none;
    align-content: center;
  }

  .about__content {
    flex-direction: column;
    align-content: center;
  }
}
</style>
