<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <headerPage />
  <router-view></router-view>
  <footerPage />
</template>

<script>
import headerPage from './utilities/headerPage.vue';
import footerPage from './utilities/footerPage.vue';

export default {
  name: 'App',
  components: {
    headerPage,
    footerPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("./assets/imagenes/fondo.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 100vh;
}
* {
  padding: 0;
  margin: 0;
}
</style>
