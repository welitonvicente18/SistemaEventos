<template id="v8nq2a" lang="ts">
  <div class="home">
    <h1>Bem-vindo ao meu site</h1>
    <p>Esta é a página inicial feita com Vue.js</p>

    <button @click="mensagem">
      Clique aqui
    </button>
  </div>
</template>

<script id="w0f9j3">
export default {
  name: "Home",
  methods: {
    mensagem() {
      alert("Bem-vindo ao sistema!");
    }
  }
}
</script>

<style id="6y4d2p">
.home{
  text-align:center;
  margin-top:100px;
}

button{
  padding:10px 20px;
  background:#42b883;
  color:white;
  border:none;
  border-radius:5px;
}
</style>