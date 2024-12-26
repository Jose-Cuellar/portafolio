<template>
  <div class="content_skills">
    <h1>Habilidades</h1>
    <div class="skills">
      <div
        v-for="skill in skills" :key="skill.id"
        class="languages"
      >
        <span><strong>{{ skill.title }}</strong></span>
        <ul>
          <li
            v-for="language in skill.languages" :key="language.id"
          >
            <span class="title_language">{{ language.name }}</span>
            <ul>
              <li
                v-for="lang in language.langs" :key="lang.id"
              >
                <span :class="lang.icon"></span>
                {{ lang.name }}
              </li>
            </ul>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'skillsPage',

  data(){
    return{
      skills: [
        // Lenguajes front
        {
          title: "Frontend",
          languages: [
            {
              name: "JavaScript",
              langs: [
                {
                  id: 1,
                  icon: "fa-brands fa-vuejs",
                  name: "Vuejs"
                },
                {
                  id: 2,
                  icon: "fa-brands fa-react",
                  name: "Reactjs"
                },
                {
                  id: 3,
                  icon: "fa-brands fa-js",
                  name: "TypeScript"
                },
                {
                  id: 4,
                  icon: "fa-brands fa-js",
                  name: "Ajax"
                },
                {
                  id: 5,
                  icon: "fa-brands fa-js",
                  name: "jQuery"
                }
              ]
            },
            {
              name: "Bootstrap",
              langs: [
                {
                  id: 1,
                  icon: "fa-brands fa-html5",
                  name: "HTML5"
                },
                {
                  id: 2,
                  icon: "fa-brands fa-css3",
                  name: "CSS"
                }
              ]
            }
          ]
        },

        // Lenguajes back
        {
          title: "Backend",
          languages: [
            {
              name: "PHP",
              langs: [
                {
                  id: 1,
                  icon: "fa-brands fa-laravel",
                  name: "Laravel"
                },
                {
                  id: 2,
                  icon: "fa-brands fa-wordpress",
                  name: "WordPress"
                }
              ]
            },
            {
              name: "Python",
              langs: [
                {
                  id: 1,
                  icon: "fa-brands fa-python",
                  name: "Flask"
                },
                {
                  id: 2,
                  icon: "fa-brands fa-python",
                  name: "Django"
                }
              ]
            },
            {
              name: "Java",
              langs: [
                {
                  id: 1,
                  icon: "fa-brands fa-java",
                  name: "Spring Boot"
                }
              ]
            }
          ]
        },

        // Crm
        {
          title: "CRM",
          languages: [
            {
              name: "Salesforce",
              langs: [
                {
                  id: 1,
                  icon: "fa-regular fa-database",
                  name: "SOQL"
                },
                {
                  id: 2,
                  icon: "fa-brands fa-salesforce",
                  name: "Apex"
                },
                {
                  id: 3,
                  icon: "fa-brands fa-java",
                  name: "Java"
                }
              ]
            },
          ]
        },

        // Control de versiones
        {
          title: "Control de Versiones",
          languages: [
            {
              name: "GitHub, Gitlab, Bitbucket",
              langs: [
                {
                  id: 1,
                  icon: "fa-regular fa-terminal",
                  name: "Interfaz de la línea de comandos"
                }
              ]
            },
          ]
        }
      ],
    };
  },
}
</script>

<style scoped>
  .content_skills{
    padding: 10% 5%;
  }
  h1{
    color: white;
    text-align: center;
    font-weight: bold;
  }
  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 30px;
    background-color: #f4f4f4;
    border-radius: 15px;
  }
  .skills > .languages {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .skills > .languages:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
  .skills .languages span strong {
    font-size: 1.5rem;
    color: #2980b9;
  }
  .title_language{
    color: #2980b9 !important;
  }
  .skills .languages span {
    font-size: 1.2rem;
    font-weight: bold;
    color: #2c3e50;
    display: block;
    margin-bottom: 10px;
  }
  .skills .languages ul {
    list-style-type: none;
    padding-left: 0;
  }
  .skills .languages ul li {
    font-size: 1rem;
    color: #555;
    padding: 5px 0;
    border-bottom: 1px solid #e0e0e0;
  }
  .skills .languages ul li:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    .content_skills{
      padding: 30% 5%;
    }
    h1{
      font-size: 32px;
    }
    .skills {
      display: block;
    }
    .skills .languages{
      margin: 20px 0px;
    }
  }
</style>
