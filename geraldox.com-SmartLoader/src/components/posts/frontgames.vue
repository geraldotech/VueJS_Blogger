<template>
  <div>
    <h1>Hello {{msn}}</h1>
    <p>List of games to play made with HTML/CSS/JavaScript</p>

  </div>
</template>

<script>
  //import {ref} from 'Vue'
module.exports = {
   setup() {
    const msn = Vue.ref('Games')

    return {
      msn
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
