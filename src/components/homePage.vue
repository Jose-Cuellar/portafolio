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
    btnDownload() {
      const link = document.createElement('a');
      link.href = "https://jose-cuellar.github.io/portafolio/cv/CV%20-%20Jos%C3%A9%20Cu%C3%A9llar.pdf";
      link.download = "CV-JoséCuéllar.pdf";
      link.click();
    }
  }
}
</script>

<style scoped>
  .content_home{
    padding: 10% 5%;
  }
  h1{
    color: white;
    text-align: center;
    font-weight: bold;
  }
  p{
    color: white;
    text-align: center;
    line-height: 25px;
  }
  .link_about_me{
    /* text-decoration: none; */
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

  @media (max-width: 768px) {
    .content_home{
      padding: 30% 5%;
    }
    h1{
      font-size: 32px;
    }
    p, .btn-success{
      font-size: 20px;
    }
  }
</style>
