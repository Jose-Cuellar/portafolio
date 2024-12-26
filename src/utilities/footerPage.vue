<template>
  <footer class="content_footer">
    <span>&copy; {{ currentYear }} Portafolio de <strong>{{ personalInfo.ownerName }}.</strong> Todos los derechos reservados.</span><br>
    <span>Para mas información puedes ir a la sección de <router-link class="link_contact" to="/contacto">Contacto</router-link></span>
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
  /* background: linear-gradient(to bottom, rgba(200, 200, 200, 200), rgba(200, 200, 200, 200)); */
  backdrop-filter: blur(3px);
  position: fixed;
  padding: 15px 0px;
  color: white;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  line-height: 25px;
}
.link_contact{
  text-decoration: none;
  color: white;
  font-weight: bold;
}

@media (max-width: 768px) {
  .content_footer{
    padding: 10px;
  }
  span{
    font-size: 20px;
  }
}
</style>