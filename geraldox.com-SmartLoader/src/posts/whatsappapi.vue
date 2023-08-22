<template>
  <div class="whatsappApi">
    <p>With this link you can start a conversation directly</p>
    <form>
      <label for="num">Número com DDD:</label>
      <input type="number" v-model="userNumber" id="num" />
      <label for="tex">Mensagem: </label>
      <input type="text" v-model="userText" id="tex" />
    </form>
    <nav v-if="userNumber.length">
      <a
        class=""
        :href="`https://api.whatsapp.com/send?phone=55${userNumber}&text=${userText}`"
        target="_blank"
        >https://api.whatsapp.com/send?phone=55{{ userNumber }}</a
      >
    </nav>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
      userNumber: "",
      userText: "",
    };
  },
};
</script>

<style scoped>
.whatsappApi input,
label {
  font-size: 1rem;
}

.whatsappApi a {
  background: seagreen;
  text-decoration: none;
  color: white;
}

.whatsappApi form {
  margin: 30px auto;
  text-align: left;
  display: block;
  padding: 20px;
}
.whatsappApi input {
  display: block;
  margin: 10px 0;
  height: 40px;
  width: 40%;
}
</style>
