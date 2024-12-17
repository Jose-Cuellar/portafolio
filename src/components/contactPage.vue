<template>
  <div class="content_contact">
    <h1>Información de contacto</h1>
    <div class="info_contact">
      <ul>
        <li>
          <a 
            :href="personalInfo.githubProfile" 
            target="_blank" 
            aria-label="GitHub"
          >
            <span class="fa-brands fa-github"></span>&nbsp;<span>GitHub</span>
          </a>
        </li>
        <li>
          <a 
            :href="personalInfo.linkedinProfile" 
            target="_blank" 
            aria-label="LinkedIn"
          >
            <span style="color:#0e76a8;" class="fa-brands fa-linkedin"></span>&nbsp;<span>LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            :href="personalInfo.LinkWhatsApp" 
            target="_blank" 
            aria-label="WhatsApp"
          >
            <span style="color:#25d366;" class="fa-brands fa-whatsapp"></span>&nbsp;<span>{{ personalInfo.phoneNumber }}</span>
          </a>
        </li>
        <li>
          <span class="fa-solid fa-envelope"></span>&nbsp;<span>{{ personalInfo.personalEmail }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'contactPage',

  data(){
    return{
      personalInfo: {
        ownerName: "José Cuéllar Gutiérrez",
        phoneNumber: "+57 3143814971",
        LinkWhatsApp: "https://api.whatsapp.com/send?phone=+573143814971&text=Hola,%20nos%20interesa%20tú%20perfil%20para%20una%20vacante.",
        personalEmail: "jucuellar4@gmail.com",
        linkedinProfile: "https://www.linkedin.com/in/jose-cuellar-gutierrez-2603b31a7/",
        githubProfile: "https://github.com/Jose-Cuellar",
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
  .content_contact{
    padding: 10% 5%;
  }
  h1{
    color: white;
    text-align: center;
    font-weight: bold;
  }
  .info_contact{
    display: grid;
    justify-content: center;
    padding: 25px 0px;
    font-size: 18px;
  }
  ul {
    list-style-type: none;
  }
  ul li {
    display: inline;
    margin: 10px;
  }
  ul li a {
    color: white;
    text-decoration: none;
  }
  span, strong {
    color: white;
  }
</style>
