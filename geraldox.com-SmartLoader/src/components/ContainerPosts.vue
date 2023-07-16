<template>
  <div></div>
</template>

<script>
/* String templates */
Vue.component("Calc-tempo-download", {
  template: `
<div>
<p>Velocidade da conexão em KB /8 para encontrar a taxa de transmissão exe:</p>
<figure>
<img src="http://via.placeholder.com/500x200" />
<img src="./src/assets/img/kevin-canlas-cFFEeHNZEqw-unsplash.jpg" />
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

</div>
`,
});
Vue.component("Acer", {
  data() {
    return {
      test: "Testando Components data()",
      opt: "",
    };
  },
  methods: {
    opcoes(e) {
      console.log(`mudando`, e.target.value);
    },
  },
  template: `<div>
  <style>
  p{
    color: coral;
  }
  </style>
    <p>Hello Acer Options here</p>
    <p>{{test}}</p>
    <hr>
    <select @change=opcoes($event) v-model="opt">
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
    </select>
    <p>Escolheu:  {{opt}}</p>
    </div>
  `,
});

const sam = `
      <main>
        <p class="sam">Samsung template</p>
      </main>
   `;

Vue.component("sammy", {
  template: sam,
});

module.exports = {
  name: "Container",
};
</script>
<style scoped></style>
