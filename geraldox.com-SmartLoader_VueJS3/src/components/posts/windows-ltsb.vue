<script>
import { onMounted, ref, watch } from 'vue'

export default {
  emits: ['apisize', 'algumEvento3'],
  setup(props, { emit }) {
    const sizeAPI = ref(0)
    const apisize = ref(0)
    const test = ref(0)

    const triggerEvent = () => {
      emit('algumEvento3', sizeAPI) // Emit on button click
    }

    function buscaDados() {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((json) => (apisize.value = json.length))
    }
    const onClick = () => {
      test.value++
    }

    onMounted(() => {
      console.log(`montado`)
      setTimeout(() => buscaDados(), 2000)

      // emit('algumEvento3', sizeAPI.value) // emit apos montar
    })

    watch(test, () => {
      console.log(`test mudou`)
    })

    watch(apisize, () => {
      console.log(`apisize mudou`)
      emit('apisize', apisize.value) // emit apos mudanca
    })

    return {
      triggerEvent,
      apisize,
      test, onClick
    }
  },
}
</script>
<template>
  <div>
    <h1>Windows LTBS</h1>
    <button @click="onClick">onClick me</button>
    <p>{{test}}</p>
  </div>
</template>