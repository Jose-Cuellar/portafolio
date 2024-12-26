import { createRouter, /*createWebHistory, */ createWebHashHistory } from 'vue-router';
import homePage from '../components/homePage.vue';
import aboutMePage from '../components/aboutMePage.vue';
import projectsPage from '../components/projectsPage.vue';
import skillsPage from '../components/skillsPage.vue';
import contactPage from '../components/contactPage.vue';

export const routes = [
  {
    id: 1,
    path: '/',
    name: 'homePage',
    text: 'Inicio',
    component: homePage
  },
  {
    id: 2,
    path: '/sobre-mi',
    name: 'aboutMePage',
    text: 'Sobre mí',
    component: aboutMePage
  },
  {
    id: 3,
    path: '/proyectos',
    name: 'projectsPage',
    text: 'Proyectos',
    component: projectsPage
  },
  {
    id: 4,
    path: '/habilidades',
    name: 'skillsPage',
    text: 'Habilidades',
    component: skillsPage
  },
  {
    id: 5,
    path: '/contacto',
    name: 'contactPage',
    text: 'Contacto',
    component: contactPage
  }
];

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(),
  routes
});

export default router;

