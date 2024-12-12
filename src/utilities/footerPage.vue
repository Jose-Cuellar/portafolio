<template>
  <footer class="content_footer">
    <p>&copy; {{ currentYear }} Portafolio de <strong>{{ personalInfo.ownerName }}.</strong> Todos los derechos reservados.</p>
    <p>Para mas información puedes ir a la sección de <router-link class="link_contact" to="/contacto">Contacto</router-link></p>
  </footer>
</template>

<script>
export default {
  name: 'footerPage',

  data(){
    return{
      personalInfo:{
        ownerName: "José Cuéllar Gutiérrez",
      },
      currentDate: null,
      currentYear: null
    };
  },
  methods:{
    getCurrentYear(){
      this.currentDate = new Date();
      this.currentYear = this.currentDate.getFullYear();
    }
  },
  mounted(){
    this.getCurrentYear();
  }
}
</script>

<style scoped>
.content_footer {
  /* background-color: #32435f; */
  color: white;
  padding: 15px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  text-align: center;
  line-height: 25px;
  /* border-top: 1px solid white; */
}
.link_contact{
  text-decoration: none;
  color: white;
  font-weight: bold;
}
</style>