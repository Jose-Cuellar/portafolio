<template>

  <div class="component_about">
    <h1>Sobre mí</h1>
    <p>MI nonbre es José Cuéllar Gutiérrez, tengo {{ age }} años, de los cuales llevo {{ yearsOfExperience }} como Desarrollador de Software.</p>
    <p>Me especializo en desarrollar soluciones web y aplicaciones innovadoras para mejorar la experiencia de los usuarios.</p>
  </div>

</template>

<script>
export default {
  name: 'aboutMePage',

  data(){
    return{
      age: null,
      yearsOfExperience: null
    };
  },
  methods:{
    getBirthday(){
      const fechaNacimiento = new Date(1998, 3, 3);
      const fechaActual = new Date();
      this.age = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
      const mesActual = fechaActual.getMonth();
      const diaActual = fechaActual.getDate();
      const mesNacimiento = fechaNacimiento.getMonth();
      const diaNacimiento = fechaNacimiento.getDate();

      if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
        this.age--;
      }
    },
    getWorkStartDate(){
      const fechaInicioTrabajo = new Date(2019, 7, 7);
      const fechaActual = new Date();
      this.yearsOfExperience = fechaActual.getFullYear() - fechaInicioTrabajo.getFullYear();
      const mesActual = fechaActual.getMonth();
      const diaActual = fechaActual.getDate();
      const mesInicio = fechaInicioTrabajo.getMonth();
      const diaInicio = fechaInicioTrabajo.getDate();

      if (mesActual < mesInicio || (mesActual === mesInicio && diaActual < diaInicio)) {
        this.yearsOfExperience--;
      }
    }
  },
  mounted(){
    this.getBirthday();
    this.getWorkStartDate();
  }
}
</script>

<style scoped>
  .component_about{
    padding: 8% 5%;
  }
  h1{
    color: white;
    text-align: center;
  }
  p {
    color: white;
  }
</style>
