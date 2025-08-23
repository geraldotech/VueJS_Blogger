<template>
  <div>
    <div id="profile"></div>
  </div>
</template>

<script>
/* Vue.extend */
const Perfil = {
  template: `<p>Hello from extends</p>`,
}

/* Calctdownload Component */
app.component({
  data() {
    return {
      title: `Velocidade da conexão em KB /8 para encontrar a taxa de transmissão exe:`,
    }
  },
  template: `
<div class="containerPost">
 <link rel="stylesheet" href="/src/styles/ContainerPosts.css">
<article>  

<p>{{title}}</p>
<figure>
<img  src="https://tm.ibxk.com.br/2023/07/12/12184831616476.jpg" />
</figure>
<figure>
<img class="img-flex" src="https://img.ibxk.com.br/2023/07/14/kaspersky-14151807453341.jpg" />
</figure>
<ul>
  <li>300 /8 = 37,8Kbps</li>
  <li>600 /8 = 75 Kbps</li>
</ul>
<h3 style="margin: 20px 0">Exemplo 1: Arquivos de 15MB em um enlace de 600KB ?
</h3>

<p>600Kb = 75Kbps</p>
<p>15MB.100 = 15000  /75 = 200 segundos</p>
<p>200segundos  /60: 3,3 minutos</p>
<p style="color: dodgerblue; font-weight: bold">o tempo de estimado para download é de 3,3 minutos</p>

<h3 style="margin: 20px 0">Exemplo 2: Arquivos de 80MB em um enlace de 600KB ?</h3>
<p>600Kb = 75Kbps</p>
<p>80MB.100 = 80000  /75  = 1066,6 segundos</p>
<p>1066,66 segundos /60 = 17,7 minutos</p>

<p style="color: dodgerblue; font-weight: bold">o tempo estimado para download é de 17,7 minutos</p>

<p>Outros casos de largura de banda </p>
<p>1MB (Megabits) = 1000 (KB) /8 = 125Kbps</p>
<p>5MB (Megabits) = 5000 (KB) /8 = 625Kbps</p>
<p>10MB (Megabits) = 10000 (KB) /8 = 1250Kbps</p>
<p>OBS: Apartir de 1MB multiplica-se por 1000 Enlace de 5MB*1000 = 5000Kb</p>
<!-- Vue extends Components -->

<Novo></Novo>
</article>
</div>
`,
  components: {
    Novo: Perfil,
  },
})

//Acer Component
app.component('acer', {
  data() {
    return {
      opt: '',
    }
  },
  methods: {},
  template: `
  <div class="containerPost">
   <link rel="stylesheet" href="src/styles/ContainerPosts.css">
    <article class="acer">
<p>Hello Acer Options here:</p>
    <hr>
    <select v-model="opt">
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
    </select>
    <p>Escolheu:  {{opt}}</p>
    </article>
    </div>
  `,
})

const sam = `
      <main>
        <p class="sam">Samsung template</p>
      </main>
   `
app.component('sammy', {
  template: sam,
})

module.exports = {
  name: 'Container',
  data() {
    return {}
  },
}
</script>

<style>
/* parent class */
.containerPost {
  padding: 10px;
}
.containerPost .acer {
  color: blue;
}
</style>
