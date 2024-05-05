<template>
  <div>
    <h1>Hello {{msn}}</h1>
    <h2>{{subtitle}}</h2>
    <ul>
      <li v-for="(link, index) in links" :key="index">
       <a :href="link.href" target="_blank"> {{link.name}}</a>
      </li>
    </ul>

  </div>
</template>

<script>

const {ref, reactive} = Vue

const subtitle = 'List of games to play made with HTML/CSS/JavaScript'

module.exports = {
   setup() {
    const msn = ref('Games')
    const links = reactive(
      [{name: 'jogo da velha', href: 'https://jogo-da-velha-nine-ebon.vercel.app/'},
      {name: 'tic-tac-toe', href: 'https://tic-tac-toe-java-script.vercel.app/'},
      {name: 'Tic-Tac-Toe', href: 'https://geovanelelis.github.io/Tic-Tac-Toe/'},
      {name: 'Jogo da Memoria', href: 'https://dev.geraldox.com/frontend/third-parties/jogo-da-memoria-dio-master/'},
      ]
      )

    return {
      msn,
      links,
      subtitle
    }
  },
}
</script>

<style scoped>
p {
  color: rebeccapurple;
}
button{
  padding: 10px;
}
</style>
