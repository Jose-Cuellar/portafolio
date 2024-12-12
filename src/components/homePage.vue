<template>
  <div class="content_home">
    <h1>¡Hola, soy José Cuéllar Gutiérrez!</h1>
    <p><strong>Desarrollador de Software</strong> | Apasionado por la tecnología y la programación.</p>
    <p>Me especializo en desarrollar soluciones web, con enfoque en el desarrollo backend y frontend.</p>
    <router-link class="link_about_me" to="/sobre-mi"><p>Conoce más sobre mí</p></router-link>
    <div class="d-flex justify-content-center">
      <button
        class="btn btn-success"
        @click="btnDownload()"
      >
        Descargar CV
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homePage',

  data(){
    return{

    }
  },
  methods:{
    btnDownload(){
      console.log("cv");
    }
  }
}
</script>

<style scoped>
  .content_home{
    padding: 10% 5%;
  }
  .content_home > h1, p{
    color: white;
    text-align: center;
  }
  p{
    line-height: 25px;
  }
  .link_about_me{
    text-decoration: none;
    color: white;
    font-weight: bold;
    text-align: center;
  }
  strong {
    color: #2d87f0;
  }
  .btn-success{
    padding: 5px 30px;
  }
</style>
