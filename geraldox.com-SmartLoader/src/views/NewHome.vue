<template>
  <main class="page-wrapper">
    <section class="intro">
      <div class="intro__content">
        <div class="intro__content-img">
          <img src="https://picsum.photos/500/500" />
        </div>

        <div class="intro__content-devinfo">
          <div>
            <h1 class="name">Geraldo Costa</h1>
            <h2 class="subtitle">Front End Developer</h2>
          </div>
          <div class="social-icons">
            <a href="#linkedin"> <i class="icon-link fa-brands fa-linkedin"></i> </a>
            <a href="#"><i class="icon-link fa-brands fa-github"></i></a>
            <a href="#"><i class="icon-link fa-regular fa-envelope"></i></a>
            <a href="#"><i class="icon-link fa-brands fa-linkedin"></i></a>
            <a href="#"><i class="icon-link fa-brands fa-instagram"></i></a>
            <a href="#">
              <button class="btn-about">Contato</button>
            </a>
          </div>
        </div>
      </div>
    </section>
    <!-- intro -->

    <!-- about -->
    <section class="about">
      <div class="about__content">
        <figure class="about__img">
          <img
            src="https://placekitten.com/600/610"
            alt="" />
        </figure>

        <div class="about__info">
          <h1>Geraldo Costa</h1>
          <p><strong>Software Developer</strong></p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum nihil fuga quisquam pariatur quis cumque laborum, qui quae, totam maxime distinctio et a animi architecto incidunt
            voluptatibus tenetur optio. Corporis autem optio, dolores maiores, accusamus cum voluptatem qui doloremque quaerat eveniet voluptatum sequi fuga, tenetur unde deleniti sunt perspiciatis
            fugit!
          </p>

          <p><strong>Soft Skills: </strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, autem?</p>
        </div>
      </div>
    </section>
    <!-- about -->

    <!-- PROJECTS -->
    <section
      id="projects"
      class="projects">
      <h1>Projetos Desenvolvidos</h1>

      <div class="slide-container swiper">
        <div class="slide-content">
          <div class="card-wrapper swiper-wrapper">
            <!-- CARD-->
            <div class="card swiper-slide">
              <div class="image-content">
                <img
                  src="https://placekitten.com/600/610"
                  alt="" />
              </div>

              <div class="card-content">
                <h3 class="name">Cat</h3>
                <p class="description">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla asperiores maiores, laborum autem culpa iure pariatur harum et! Expedita cumque voluptatum vero quidem quasi fugiat
                  perspiciatis illum quia maiores omnis!
                </p>
                <a href="#">
                  <button class="button">Ver mais</button>
                </a>
              </div>
            </div>
            <!-- CARD-->
            <!-- CARD-->
            <div class="card swiper-slide">
              <div class="image-content">
                <img
                  src="https://placekitten.com/600/610"
                  alt="" />
              </div>

              <div class="card-content">
                <h3 class="name">Cat</h3>
                <p class="description">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla asperiores maiores, laborum autem culpa iure pariatur harum et! Expedita cumque voluptatum vero quidem quasi fugiat
                  perspiciatis illum quia maiores omnis!
                </p>
                <a href="#">
                  <button class="button">Ver mais</button>
                </a>
              </div>
            </div>
            <!-- CARD-->
            <!-- CARD-->
            <div class="card swiper-slide">
              <div class="image-content">
                <img
                  src="https://placekitten.com/600/610"
                  alt="" />
              </div>

              <div class="card-content">
                <h3 class="name">Cat</h3>
                <p class="description">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla asperiores maiores, laborum autem culpa iure pariatur harum et! Expedita cumque voluptatum vero quidem quasi fugiat
                  perspiciatis illum quia maiores omnis!
                </p>
                <a href="#">
                  <button class="button">Ver mais</button>
                </a>
              </div>
            </div>
            <!-- CARD-->
          </div>
        </div>
        <div class="swiper-button-next swiper-navBtn"></div>
        <div class="swiper-button-prev swiper-navBtn"></div>
        <div class="swiper-pagination">xx</div>
      </div>
    </section>
    <!-- PROJECTS -->
  </main>
</template>

<script>
module.exports = {}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Anta&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

:root {
  --primary: #8257e5;
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
  box-shadow: border-box;
  min-height: 150vh;
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
}

/* ABOUT START */
.about {
  background: var(--background1);
  padding: 3em;
  width: 100vw;
  color: var(--softcolor);
}

.about__content {
  display: flex;
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
/* ABOUT ENDS */

/* PROJECTS */

.projects {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #121214;
  text-align: center;
}

.slide-container {
  display: flex;
  justify-content: space-around;
  max-width: 1444px;
  width: 90%;
  height: 90%;
  align-items: center;
}

.slide-content {
  margin: 60px 20px;
  overflow: hidden;
  height: 90%;
  width: 92%;
  padding: 10px 20px 20px;
}
.card {
  display: flex;
  flex-direction: column;
  background-color: #202024;
  height: 100%;
  border-radius: 14px;
}

.image-content {
  display: flex;
  justify-content: center;
  align-content: center;
  height: 50%;
  border-radius: 12px;
  background-color: var(--primary);
}

.image-content img {
  width: 92%;
  height: 92%;
  object-fit: cover;
  border-radius: 8px;
}

.description {
  font-family: 'Poppins', sans-serif;
  margin: 10px 0;
  color: #e1e1e6;
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
}

.button {
  border: none;
  font-size: 16px;
  color: var(--corBranco);
  padding: 8px 16px;
  background-image: linear-gradient(to right top, #4f08ae, #4e1699, #4b1e85, #472471, #42285e);
  border-radius: 6px;
  margin: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
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
