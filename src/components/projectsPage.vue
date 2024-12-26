<template>
  <div class="content_projects">
    <h1>Mi trabajo</h1>
    <p>Una colección de proyectos en los que he trabajado.</p>
    
    <div class="projects_content">
      <div 
        v-for="project in projects"
        :key="project.id"
        class="all_projects"
      >
        <center>
          <img
            :src="project.image"
            alt="project image"
            class="project_image"
          >
        </center>
        <h3>
          <strong>{{ project.title }}</strong>
        </h3>
        <p>
          {{ project.description }}
        </p>
        <div class="link">
          <a
            :href="project.link"
            target="_blank"
          >
            <span class="fa-solid fa-globe"></span>
          </a>
        </div>
        <div class="technologies" title="Tecnologías utilizadas">
          <div 
            v-for="(icon, iconIndex) in project.tecnologies" 
            :key="iconIndex" 
            class="technology-icon"
            :title="icon.name"
          >
            <span :class="icon.icon"></span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import subastala from "../assets/imagenes/projects/subastala.png";
import klappme from "../assets/imagenes/projects/klappme.png";
import tarkus from "../assets/imagenes/projects/tarkus.png";
import okan from "../assets/imagenes/projects/okan.png";
import havoline from "../assets/imagenes/projects/havoline.png";

export default {
  name: 'projectsPage',

  data(){
    return{
      subastala: subastala,
      klappme: klappme,
      tarkus: tarkus,
      okan: okan,
      havoline: havoline,

      projects:[
        {
          id: 1,
          image: subastala,
          title: "Subastala",
          description: "Este proyecto fue desarrollado para subastas inmobiliarias en línea, permitiendo a los usuarios registrarse de manera segura e ingresar a la plataforma para publicar su apartamento, casa o lote. Una vez publicado, el inmueble puede recibir ofertas de diferentes usuarios, y al llegar a la fecha programada por el propietario, se realiza la subasta en vivo. Los usuarios que hayan realizado ofertas inicialmente podrán aumentar su puja durante la subasta.",
          link: "https://www.subasta.la/",
          tecnologies: [
            {
              name: "Angular",
              icon: "fa-brands fa-angular"
            },
            {
              name: "Python",
              icon: "fa-brands fa-python"
            }
          ]
        },
        {
          id: 2,
          image: klappme,
          title: "Klappme",
          description: "Este proyecto se desarrolló después de la pandemia. La idea surgió como una ayuda para las personas emprendedoras que querían mostrar al mundo los productos que ofrecen mediante su emprendimiento.",
          link: "https://www.klappme.co/",
          tecnologies: [
            {
              name: "Bootstrap",
              icon: "fa-brands fa-bootstrap"
            },
            {
              name: "Wordpress",
              icon: "fa-brands fa-wordpress"
            },
            {
              name: "Php",
              icon: "fa-brands fa-php"
            }
          ]
        },
        {
          id: 3,
          image: tarkus,
          title: "Tarkus",
          description: "Este proyecto consiste en el desarrollo de una plataforma web para un laboratorio de cannabis medicinal, cuyo objetivo es facilitar el acceso a la información sobre los productos y tratamientos que ofrece, así como permitir el agendamiento de citas virtuales con médicos especializados en el área.",
          link: "https://tarkuslab.com/",
          tecnologies: [
            {
              name: "Bootstrap",
              icon: "fa-brands fa-bootstrap"
            },
            {
              name: "Wordpress",
              icon: "fa-brands fa-wordpress"
            },
            {
              name: "Php",
              icon: "fa-brands fa-php"
            }
          ]
        },
        {
          id: 4,
          image: okan,
          title: "Okan",
          description: "Este proyecto es una iniciativa interna de la empresa BRM S.A. destinada a centralizar la información de sus colaboradores. A través de esta plataforma, cada empleado podrá acceder a los aplicativos disponibles para él, así como consultar sus datos personales y laborales.",
          link: "https://apps.okan.tools/",
          tecnologies: [
            {
              name: "Vuejs",
              icon: "fa-brands fa-vuejs"
            },
            {
              name: "Wordpress",
              icon: "fa-brands fa-wordpress"
            },
            {
              name: "Php",
              icon: "fa-brands fa-php"
            }
          ]
        },
        {
          id: 5,
          image: havoline,
          title: "Havoline",
          description: "Este proyecto fue desarrollado con el objetivo de fidelizar a los usuarios. La plataforma permite a los usuarios registrarse e ingresar de manera segura. Una vez dentro, pueden inscribir los códigos encontrados en las etiquetas de los productos 4T. Estos códigos otorgan puntos que los usuarios pueden redimir por productos exclusivos disponibles en el catálogo de la plataforma.",
          link: "https://havolinemotoclub.com/",
          tecnologies: [
            {
              name: "Vuejs",
              icon: "fa-brands fa-vuejs"
            },
            {
              name: "Laravel",
              icon: "fa-brands fa-laravel"
            }
          ]
        },
      ]
    };
  }
}
</script>

<style scoped>
  .content_projects{
    padding: 10% 5%;
  }
  h1{
    text-align: center;
    color: white;
    font-weight: bold;
  }
  .content_projects > p{
    text-align: center;
    color: white;
  }
  .projects_content{
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(3, 1fr);
    padding: 20px 0px;
  }
  .all_projects{
    position: relative;
    padding: 10px;
    border-radius: 10px;
    background-color: white;
  }
  .all_projects > p{
    text-align: justify;
    margin-bottom: 3rem;
  }
  .all_projects > h3, p{
    color: #242424;;
  }
  .project_image{
    width: 100%;
    height: 100px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 10px;
    box-shadow: 0px 0px 10px black;
  }
  .link {
    position: absolute;
    bottom: 10px;
    left: 10px;
    font-size: 24px;
    color: #007bff;
  }
  .link:hover {
    cursor: pointer;
    color: #0056b3;
  }
  .technologies {
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    cursor: pointer;
    bottom: 10px;
    right: 10px;
  }
  .technology-icon span {
    font-size: 30px;
    color: #007bff;
  }

  @media (max-width: 768px) {
    .content_projects{
      padding: 30% 5%;
    }
    h1{
      font-size: 32px;
    }
    .content_projects > p{
      font-size: 20px;
    }
    .projects_content{
      display: block;
    }
    .all_projects{
      margin: 20px 0px;
    }
  }
</style>
