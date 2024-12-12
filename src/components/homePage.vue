<template>
  <div class="content_home">
    <h1>¡Hola, soy José Cuéllar Gutiérrez!</h1>
    <p>Desarrollador de Software | Apasionado por la tecnología y la programación.</p>
    <p>Me especializo en desarrollar soluciones web y aplicaciones innovadoras para mejorar la experiencia de los usuarios.</p>
    <router-link class="link_about_me" to="/sobre-mi">Conoce más sobre mí</router-link>
  </div>
</template>

<script>
export default {
  name: 'homePage'
}
</script>

<style scoped>
  .content_home{
    padding: 8% 5%;
  }
  h1, p{
    color: white;
  }
  p{
    line-height: 25px;
  }
  .link_about_me{
    text-decoration: none;
    color: white;
    font-weight: bold;
  }
</style>
