<template>

  <div class="component_about">
    <h1>Sobre mí</h1>
    <p>¡Hola! Soy <strong>José Cuéllar Gutiérrez</strong>, tengo {{ age }} años, de los cuales llevo 
      {{ yearsOfExperience }} como Desarrollador de Software.
    </p>
    <p>
      Me especializo en el desarrollo web como desarrollador <strong>backend</strong> con <strong>Laravel</strong>. 
      Sin embargo, mi interés por el desarrollo <strong>frontend</strong> es también fuerte, 
      y disfruto trabajar con tecnologías como <strong>Bootstrap</strong>, <strong>Tailwind CSS</strong>, <strong>Vue.js</strong> y <strong>React.js</strong> 
      para crear interfaces interactivas y modernas que brinden una excelente experiencia al usuario.
    </p>
    <p>
      Siempre busco aprender y mejorar en cada proyecto que emprendo. 
      Además, valoro mucho el compartir mis conocimientos con mis compañeros. 
      Soy de los que disfrutan ofrecer explicaciones detalladas y claras para asegurar 
      que todos comprendan el proceso de desarrollo, desde la planificación hasta la implementación.
    </p>
    <p>
      Mi objetivo es seguir construyendo proyectos de alta calidad y perfeccionar mis habilidades, 
      tanto en el <strong>backend</strong> como en el <strong>frontend</strong>. Creo que la clave para un buen desarrollo 
      es la <strong>colaboración</strong>, y siempre trato de aportar mi experiencia para generar soluciones eficientes, 
      tanto a nivel técnico como de equipo.
    </p>
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
    padding: 10% 5%;
  }
  h1, p{
    color: white;
  }
  .component_about {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 1.6;
    color: #333;
    text-align: justify;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }
  .component_about strong {
    color: #2d87f0;
    font-weight: bold;
  }
  .component_about p {
    margin-bottom: 20px;
  }
  .component_about h2 {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #111;
  }
  .component_about p {
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
  body.dark-mode .component_about {
    color: #f5f5f5;
  }
</style>
