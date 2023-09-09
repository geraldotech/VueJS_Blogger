<template>
  <div class="whatsappApi">
    <p>
      Você sabia que o WhatsApp permite que você inicie conversas sem criar
      contatos?
    </p>
    <form>
      <label for="num">Número com DDD:</label>
      <input type="text" v-model="userNumber" id="num" />
      <label for="tex">Mensagem inicial (opcional): </label>
      <input type="text" v-model="userText" id="tex" />
    </form>
    <nav v-if="userNumber.length">
      <a
        class=""
        :href="`https://api.whatsapp.com/send?phone=55${userNumber}&text=${userText}`"
        target="_blank"
        title="click to open"
        >https://api.whatsapp.com/send?phone=55{{ userNumber }}&{{
          userText
        }}</a
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
.whatsappApi p {
  margin-top: 30px;
}
.whatsappApi input,
label {
  font-size: 1rem;
}

.whatsappApi nav a {
  background: seagreen;
  text-decoration: none;
  color: white;
  max-width: 100%;
}

.whatsappApi form {
  margin: 10px auto;
  text-align: left;
  display: block;
  padding: 10px 5px;
}
.whatsappApi input {
  display: block;
  margin: 10px 0;
  height: 40px;
  width: 80%;
  padding: 8px;
  outline: none;
  border: 2px solid black;
  border-radius: 10px;
}
.whatsappApi input:focus {
  border: 2px solid dodgerblue;
}
</style>
