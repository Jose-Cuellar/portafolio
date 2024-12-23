(function(){"use strict";var a={695:function(a,g,e){var I=e(5130),A=e(6768);function n(a,g,e,I,n,C){const o=(0,A.g2)("headerPage"),t=(0,A.g2)("router-view"),r=(0,A.g2)("footerPage");return(0,A.uX)(),(0,A.CE)(A.FK,null,[(0,A.bF)(o),(0,A.bF)(t),(0,A.bF)(r)],64)}var C=e(4232);function o(a,g,e,I,n,o){const t=(0,A.g2)("router-link");return(0,A.uX)(),(0,A.CE)("header",null,[(0,A.Lk)("nav",null,[(0,A.Lk)("div",{class:"hamburger",onClick:g[0]||(g[0]=(...a)=>o.toggleMenu&&o.toggleMenu(...a))},g[1]||(g[1]=[(0,A.Lk)("span",{class:"bar"},null,-1),(0,A.Lk)("span",{class:"bar"},null,-1),(0,A.Lk)("span",{class:"bar"},null,-1)])),(0,A.Lk)("ul",{class:(0,C.C4)({open:n.menuOpen})},[((0,A.uX)(!0),(0,A.CE)(A.FK,null,(0,A.pI)(n.routes,(a=>((0,A.uX)(),(0,A.CE)("li",{key:a.id},[(0,A.bF)(t,{class:"route",to:a.path},{default:(0,A.k6)((()=>[(0,A.Lk)("strong",null,(0,C.v_)(a.text),1)])),_:2},1032,["to"])])))),128))],2)])])}var t=e(1387);const r={class:"content_home"},s={class:"d-flex justify-content-center"};function l(a,g,e,I,n,C){const o=(0,A.g2)("router-link");return(0,A.uX)(),(0,A.CE)("div",r,[g[2]||(g[2]=(0,A.Lk)("h1",null,"¡Hola, soy José Cuéllar Gutiérrez!",-1)),g[3]||(g[3]=(0,A.Lk)("p",null,[(0,A.Lk)("strong",null,"Desarrollador de Software"),(0,A.eW)(" | Apasionado por la tecnología y la programación.")],-1)),g[4]||(g[4]=(0,A.Lk)("p",null,"Me especializo en desarrollar soluciones web, con enfoque en el desarrollo backend y frontend.",-1)),(0,A.bF)(o,{class:"link_about_me",to:"/sobre-mi"},{default:(0,A.k6)((()=>g[1]||(g[1]=[(0,A.Lk)("p",null,"Conoce más sobre mí",-1)]))),_:1}),(0,A.Lk)("div",s,[(0,A.Lk)("button",{class:"btn btn-success",onClick:g[0]||(g[0]=a=>C.btnDownload())}," Descargar CV ")])])}var i={name:"homePage",data(){return{}},methods:{btnDownload(){const a=document.createElement("a");a.href="https://jose-cuellar.github.io/portafolio/cv/CV%20-%20Jos%C3%A9%20Cu%C3%A9llar.pdf",a.download="CV-JoséCuéllar.pdf",a.click()}}},c=e(1241);const u=(0,c.A)(i,[["render",l],["__scopeId","data-v-5abf6b81"]]);var d=u;const p={class:"component_about"};function f(a,g,e,I,n,o){return(0,A.uX)(),(0,A.CE)("div",p,[g[2]||(g[2]=(0,A.Lk)("h1",null,"Sobre mí",-1)),(0,A.Lk)("p",null,[g[0]||(g[0]=(0,A.eW)("¡Hola! Soy ")),g[1]||(g[1]=(0,A.Lk)("strong",null,"José Cuéllar Gutiérrez",-1)),(0,A.eW)(", tengo "+(0,C.v_)(n.age)+" años, de los cuales llevo "+(0,C.v_)(n.yearsOfExperience)+" como Desarrollador de Software. ",1)]),g[3]||(g[3]=(0,A.Fv)("<p data-v-5b1ba5f2> Me especializo en el desarrollo web como desarrollador <strong data-v-5b1ba5f2>backend</strong> con <strong data-v-5b1ba5f2>Laravel</strong>. Sin embargo, mi interés por el desarrollo <strong data-v-5b1ba5f2>frontend</strong> es también fuerte, y disfruto trabajar con tecnologías como <strong data-v-5b1ba5f2>Bootstrap</strong>, <strong data-v-5b1ba5f2>Tailwind CSS</strong>, <strong data-v-5b1ba5f2>Vue.js</strong> y <strong data-v-5b1ba5f2>React.js</strong> para crear interfaces interactivas y modernas que brinden una excelente experiencia al usuario. </p><p data-v-5b1ba5f2> Siempre busco aprender y mejorar en cada proyecto que emprendo. Además, valoro mucho el compartir mis conocimientos con mis compañeros. Soy de los que disfrutan ofrecer explicaciones detalladas y claras para asegurar que todos comprendan el proceso de desarrollo, desde la planificación hasta la implementación. </p><p data-v-5b1ba5f2> Mi objetivo es seguir construyendo proyectos de alta calidad y perfeccionar mis habilidades, tanto en el <strong data-v-5b1ba5f2>backend</strong> como en el <strong data-v-5b1ba5f2>frontend</strong>. Creo que la clave para un buen desarrollo es la <strong data-v-5b1ba5f2>colaboración</strong>, y siempre trato de aportar mi experiencia para generar soluciones eficientes, tanto a nivel técnico como de equipo. </p>",3))])}var m={name:"aboutMePage",data(){return{age:null,yearsOfExperience:null}},methods:{getBirthday(){const a=new Date(1998,3,3),g=new Date;this.age=g.getFullYear()-a.getFullYear();const e=g.getMonth(),I=g.getDate(),A=a.getMonth(),n=a.getDate();(e<A||e===A&&I<n)&&this.age--},getWorkStartDate(){const a=new Date(2019,7,7),g=new Date;this.yearsOfExperience=g.getFullYear()-a.getFullYear();const e=g.getMonth(),I=g.getDate(),A=a.getMonth(),n=a.getDate();(e<A||e===A&&I<n)&&this.yearsOfExperience--}},mounted(){this.getBirthday(),this.getWorkStartDate()}};const b=(0,c.A)(m,[["render",f],["__scopeId","data-v-5b1ba5f2"]]);var h=b;const v={class:"content_projects"},k={class:"projects_content"},L=["src"],y={class:"link"},E=["href"],j={class:"technologies",title:"Tecnologías utilizadas"},w=["title"];function P(a,g,e,I,n,o){const t=(0,A.g2)("center");return(0,A.uX)(),(0,A.CE)("div",v,[g[1]||(g[1]=(0,A.Lk)("h1",null,"Mi trabajo",-1)),g[2]||(g[2]=(0,A.Lk)("p",null,"Una colección de proyectos en los que he trabajado.",-1)),(0,A.Lk)("div",k,[((0,A.uX)(!0),(0,A.CE)(A.FK,null,(0,A.pI)(n.projects,(a=>((0,A.uX)(),(0,A.CE)("div",{key:a.id,class:"all_projects"},[(0,A.bF)(t,null,{default:(0,A.k6)((()=>[(0,A.Lk)("img",{src:a.image,alt:"project image",class:"project_image"},null,8,L)])),_:2},1024),(0,A.Lk)("h3",null,[(0,A.Lk)("strong",null,(0,C.v_)(a.title),1)]),(0,A.Lk)("p",null,(0,C.v_)(a.description),1),(0,A.Lk)("div",y,[(0,A.Lk)("a",{href:a.link,target:"_blank"},g[0]||(g[0]=[(0,A.Lk)("span",{class:"fa-solid fa-globe"},null,-1)]),8,E)]),(0,A.Lk)("div",j,[((0,A.uX)(!0),(0,A.CE)(A.FK,null,(0,A.pI)(a.tecnologies,((a,g)=>((0,A.uX)(),(0,A.CE)("div",{key:g,class:"technology-icon",title:a.name},[(0,A.Lk)("span",{class:(0,C.C4)(a.icon)},null,2)],8,w)))),128))])])))),128))])])}var R=e.p+"img/subastala.29f7d0b9.png",Y=e.p+"img/klappme.321abdfc.png",Z=e.p+"img/tarkus.7bf037d4.png",S="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAABYCAYAAAB/Nds3AAAAiXpUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHjaVY7dDcMwCITfmaIj8OfDjFNFiZQNOn5xbKn19wB3CB3Q+bkveg2EnbxFRwJceHrqu0TniTGLsoxedbK6SSktuzyZToHswf5bdOeNZui4wiPQcODQStfT7KliTM/WCBuv5N9FLGX7vPX9AH0B9cQs6tHqmbIAAAoEaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA0LjQuMC1FeGl2MiI+CiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICBleGlmOlBpeGVsWERpbWVuc2lvbj0iMzEwIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iODgiCiAgIHRpZmY6SW1hZ2VXaWR0aD0iMzEwIgogICB0aWZmOkltYWdlSGVpZ2h0PSI4OCIKICAgdGlmZjpPcmllbnRhdGlvbj0iMSIvPgogPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg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",O=e.p+"img/havoline.0d09f39b.png",W={name:"projectsPage",data(){return{subastala:R,klappme:Y,tarkus:Z,okan:S,havoline:O,projects:[{id:1,image:R,title:"Subastala",description:"Este proyecto fue desarrollado para subastas inmobiliarias en línea, permitiendo a los usuarios registrarse de manera segura e ingresar a la plataforma para publicar su apartamento, casa o lote. Una vez publicado, el inmueble puede recibir ofertas de diferentes usuarios, y al llegar a la fecha programada por el propietario, se realiza la subasta en vivo. Los usuarios que hayan realizado ofertas inicialmente podrán aumentar su puja durante la subasta.",link:"https://www.subasta.la/",tecnologies:[{name:"Angular",icon:"fa-brands fa-angular"},{name:"Python",icon:"fa-brands fa-python"}]},{id:2,image:Y,title:"Klappme",description:"Este proyecto se desarrolló después de la pandemia. La idea surgió como una ayuda para las personas emprendedoras que querían mostrar al mundo los productos que ofrecen mediante su emprendimiento.",link:"https://www.klappme.co/",tecnologies:[{name:"Bootstrap",icon:"fa-brands fa-bootstrap"},{name:"Wordpress",icon:"fa-brands fa-wordpress"},{name:"Php",icon:"fa-brands fa-php"}]},{id:3,image:Z,title:"Tarkus",description:"Este proyecto consiste en el desarrollo de una plataforma web para un laboratorio de cannabis medicinal, cuyo objetivo es facilitar el acceso a la información sobre los productos y tratamientos que ofrece, así como permitir el agendamiento de citas virtuales con médicos especializados en el área.",link:"https://tarkuslab.com/",tecnologies:[{name:"Bootstrap",icon:"fa-brands fa-bootstrap"},{name:"Wordpress",icon:"fa-brands fa-wordpress"},{name:"Php",icon:"fa-brands fa-php"}]},{id:4,image:S,title:"Okan",description:"Este proyecto es una iniciativa interna de la empresa BRM S.A. destinada a centralizar la información de sus colaboradores. A través de esta plataforma, cada empleado podrá acceder a los aplicativos disponibles para él, así como consultar sus datos personales y laborales.",link:"https://apps.okan.tools/",tecnologies:[{name:"Vuejs",icon:"fa-brands fa-vuejs"},{name:"Wordpress",icon:"fa-brands fa-wordpress"},{name:"Php",icon:"fa-brands fa-php"}]},{id:5,image:O,title:"Havoline",description:"Este proyecto fue desarrollado con el objetivo de fidelizar a los usuarios. La plataforma permite a los usuarios registrarse e ingresar de manera segura. Una vez dentro, pueden inscribir los códigos encontrados en las etiquetas de los productos 4T. Estos códigos otorgan puntos que los usuarios pueden redimir por productos exclusivos disponibles en el catálogo de la plataforma.",link:"https://havolinemotoclub.com/",tecnologies:[{name:"Vuejs",icon:"fa-brands fa-vuejs"},{name:"Laravel",icon:"fa-brands fa-laravel"}]}]}}};const F=(0,c.A)(W,[["render",P],["__scopeId","data-v-6a52034e"]]);var D=F;const x={class:"content_skills"},B={class:"skills"},G={class:"title_language"};function N(a,g,e,I,n,o){return(0,A.uX)(),(0,A.CE)("div",x,[g[0]||(g[0]=(0,A.Lk)("h1",null,"Habilidades",-1)),(0,A.Lk)("div",B,[((0,A.uX)(!0),(0,A.CE)(A.FK,null,(0,A.pI)(n.skills,(a=>((0,A.uX)(),(0,A.CE)("div",{key:a.id,class:"languages"},[(0,A.Lk)("span",null,[(0,A.Lk)("strong",null,(0,C.v_)(a.title),1)]),(0,A.Lk)("ul",null,[((0,A.uX)(!0),(0,A.CE)(A.FK,null,(0,A.pI)(a.languages,(a=>((0,A.uX)(),(0,A.CE)("li",{key:a.id},[(0,A.Lk)("span",G,(0,C.v_)(a.name),1),(0,A.Lk)("ul",null,[((0,A.uX)(!0),(0,A.CE)(A.FK,null,(0,A.pI)(a.langs,(a=>((0,A.uX)(),(0,A.CE)("li",{key:a.id},[(0,A.Lk)("span",{class:(0,C.C4)(a.icon)},null,2),(0,A.eW)(" "+(0,C.v_)(a.name),1)])))),128))])])))),128))])])))),128))])])}var X={name:"skillsPage",data(){return{skills:[{title:"Frontend",languages:[{name:"JavaScript",langs:[{id:1,icon:"fa-brands fa-vuejs",name:"Vuejs"},{id:2,icon:"fa-brands fa-react",name:"Reactjs"},{id:3,icon:"fa-brands fa-js",name:"TypeScript"},{id:4,icon:"fa-brands fa-js",name:"Ajax"},{id:5,icon:"fa-brands fa-js",name:"jQuery"}]},{name:"Bootstrap",langs:[{id:1,icon:"fa-brands fa-html5",name:"HTML5"},{id:2,icon:"fa-brands fa-css3",name:"CSS"}]}]},{title:"Backend",languages:[{name:"PHP",langs:[{id:1,icon:"fa-brands fa-laravel",name:"Laravel"},{id:2,icon:"fa-brands fa-wordpress",name:"WordPress"}]},{name:"Python",langs:[{id:1,icon:"fa-brands fa-python",name:"Flask"},{id:2,icon:"fa-brands fa-python",name:"Django"}]},{name:"Java",langs:[{id:1,icon:"fa-brands fa-java",name:"Spring Boot"}]}]},{title:"CRM",languages:[{name:"Salesforce",langs:[{id:1,icon:"fa-regular fa-database",name:"SOQL"},{id:2,icon:"fa-brands fa-salesforce",name:"Apex"},{id:3,icon:"fa-brands fa-java",name:"Java"}]}]},{title:"Control de Versiones",languages:[{name:"GitHub, Gitlab, Bitbucket",langs:[{id:1,icon:"fa-regular fa-terminal",name:"Interfaz de la línea de comandos"}]}]}]}}};const V=(0,c.A)(X,[["render",N],["__scopeId","data-v-0a70a25f"]]);var M=V;const H={class:"content_contact"},T={class:"info_contact"},J=["href"],z=["href"],K=["href"];function U(a,g,e,I,n,o){return(0,A.uX)(),(0,A.CE)("div",H,[g[6]||(g[6]=(0,A.Lk)("h1",null,"Información de contacto",-1)),(0,A.Lk)("div",T,[(0,A.Lk)("ul",null,[(0,A.Lk)("li",null,[(0,A.Lk)("a",{href:n.personalInfo.githubProfile,target:"_blank","aria-label":"GitHub"},g[0]||(g[0]=[(0,A.Lk)("span",{class:"fa-brands fa-github"},null,-1),(0,A.eW)(" "),(0,A.Lk)("span",null,"GitHub",-1)]),8,J)]),(0,A.Lk)("li",null,[(0,A.Lk)("a",{href:n.personalInfo.linkedinProfile,target:"_blank","aria-label":"LinkedIn"},g[1]||(g[1]=[(0,A.Lk)("span",{style:{color:"#0e76a8"},class:"fa-brands fa-linkedin"},null,-1),(0,A.eW)(" "),(0,A.Lk)("span",null,"LinkedIn",-1)]),8,z)]),(0,A.Lk)("li",null,[(0,A.Lk)("a",{href:n.personalInfo.LinkWhatsApp,target:"_blank","aria-label":"WhatsApp"},[g[2]||(g[2]=(0,A.Lk)("span",{style:{color:"#25d366"},class:"fa-brands fa-whatsapp"},null,-1)),g[3]||(g[3]=(0,A.eW)(" ")),(0,A.Lk)("span",null,(0,C.v_)(n.personalInfo.phoneNumber),1)],8,K)]),(0,A.Lk)("li",null,[g[4]||(g[4]=(0,A.Lk)("span",{class:"fa-solid fa-envelope"},null,-1)),g[5]||(g[5]=(0,A.eW)(" ")),(0,A.Lk)("span",null,(0,C.v_)(n.personalInfo.personalEmail),1)])])])])}var q={name:"contactPage",data(){return{personalInfo:{ownerName:"José Cuéllar Gutiérrez",phoneNumber:"+57 3143814971",LinkWhatsApp:"https://api.whatsapp.com/send?phone=+573143814971&text=Hola,%20nos%20interesa%20tú%20perfil%20para%20una%20vacante.",personalEmail:"jucuellar4@gmail.com",linkedinProfile:"https://www.linkedin.com/in/jose-cuellar-gutierrez-2603b31a7/",githubProfile:"https://github.com/Jose-Cuellar"},currentDate:null,currentYear:null}},methods:{getCurrentYear(){this.currentDate=new Date,this.currentYear=this.currentDate.getFullYear()}},mounted(){this.getCurrentYear()}};const _=(0,c.A)(q,[["render",U],["__scopeId","data-v-19f5f746"]]);var Q=_;const $=[{id:1,path:"/",name:"homePage",text:"Inicio",component:d},{id:2,path:"/sobre-mi",name:"aboutMePage",text:"Sobre mí",component:h},{id:3,path:"/proyectos",name:"projectsPage",text:"Proyectos",component:D},{id:4,path:"/habilidades",name:"skillsPage",text:"Habilidades",component:M},{id:5,path:"/contacto",name:"contactPage",text:"Contacto",component:Q}],aa=(0,t.aE)({history:(0,t.LA)("/portafolio/"),routes:$});var ga=aa,ea={name:"headerPage",data(){return{routes:$,menuOpen:!1}},methods:{toggleMenu(){this.menuOpen=!this.menuOpen}}};const Ia=(0,c.A)(ea,[["render",o],["__scopeId","data-v-2e95bd79"]]);var Aa=Ia;const na={class:"content_footer"};function Ca(a,g,e,I,n,o){const t=(0,A.g2)("router-link");return(0,A.uX)(),(0,A.CE)("footer",na,[(0,A.Lk)("span",null,[(0,A.eW)("© "+(0,C.v_)(n.currentYear)+" Portafolio de ",1),(0,A.Lk)("strong",null,(0,C.v_)(n.personalInfo.ownerName)+".",1),g[0]||(g[0]=(0,A.eW)(" Todos los derechos reservados."))]),g[3]||(g[3]=(0,A.Lk)("br",null,null,-1)),(0,A.Lk)("span",null,[g[2]||(g[2]=(0,A.eW)("Para mas información puedes ir a la sección de ")),(0,A.bF)(t,{class:"link_contact",to:"/contacto"},{default:(0,A.k6)((()=>g[1]||(g[1]=[(0,A.eW)("Contacto")]))),_:1})])])}var oa={name:"footerPage",data(){return{personalInfo:{ownerName:"José Cuéllar Gutiérrez"},currentDate:null,currentYear:null}},methods:{getCurrentYear(){this.currentDate=new Date,this.currentYear=this.currentDate.getFullYear()}},mounted(){this.getCurrentYear()}};const ta=(0,c.A)(oa,[["render",Ca],["__scopeId","data-v-44ef2e5d"]]);var ra=ta,sa={name:"App",components:{headerPage:Aa,footerPage:ra}};const la=(0,c.A)(sa,[["render",n]]);var ia=la;e(8077);(0,I.Ef)(ia).use(ga).mount("#app")}},g={};function e(I){var A=g[I];if(void 0!==A)return A.exports;var n=g[I]={exports:{}};return a[I].call(n.exports,n,n.exports,e),n.exports}e.m=a,function(){var a=[];e.O=function(g,I,A,n){if(!I){var C=1/0;for(s=0;s<a.length;s++){I=a[s][0],A=a[s][1],n=a[s][2];for(var o=!0,t=0;t<I.length;t++)(!1&n||C>=n)&&Object.keys(e.O).every((function(a){return e.O[a](I[t])}))?I.splice(t--,1):(o=!1,n<C&&(C=n));if(o){a.splice(s--,1);var r=A();void 0!==r&&(g=r)}}return g}n=n||0;for(var s=a.length;s>0&&a[s-1][2]>n;s--)a[s]=a[s-1];a[s]=[I,A,n]}}(),function(){e.n=function(a){var g=a&&a.__esModule?function(){return a["default"]}:function(){return a};return e.d(g,{a:g}),g}}(),function(){e.d=function(a,g){for(var I in g)e.o(g,I)&&!e.o(a,I)&&Object.defineProperty(a,I,{enumerable:!0,get:g[I]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){e.o=function(a,g){return Object.prototype.hasOwnProperty.call(a,g)}}(),function(){e.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}}(),function(){e.p="/portafolio/"}(),function(){var a={524:0};e.O.j=function(g){return 0===a[g]};var g=function(g,I){var A,n,C=I[0],o=I[1],t=I[2],r=0;if(C.some((function(g){return 0!==a[g]}))){for(A in o)e.o(o,A)&&(e.m[A]=o[A]);if(t)var s=t(e)}for(g&&g(I);r<C.length;r++)n=C[r],e.o(a,n)&&a[n]&&a[n][0](),a[n]=0;return e.O(s)},I=self["webpackChunkportafolio"]=self["webpackChunkportafolio"]||[];I.forEach(g.bind(null,0)),I.push=g.bind(null,I.push.bind(I))}();var I=e.O(void 0,[504],(function(){return e(695)}));I=e.O(I)})();
//# sourceMappingURL=app.bc9688a9.js.map