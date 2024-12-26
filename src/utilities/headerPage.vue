<template>
  <header>
    <nav>
      <!-- Menú hamburguesa -->
      <div class="hamburger" @click="toggleMenu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
      
      <!-- Menú de navegación -->
      <ul :class="{ 'open': menuOpen }">
        <li 
          v-for="route in routes" 
          :key="route.id"
        >
          <router-link 
            class="route" 
            :to="route.path"
          >
            <strong @click="selectOpc()">{{ route.text }}</strong>
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { routes } from "../router/index.js";

export default {
  name: 'headerPage',
  data() {
    return {
      routes,
      menuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    selectOpc(){
      this.menuOpen = false;
    }
  }
}
</script>

<style scoped>
header {
  backdrop-filter: blur(3px);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  z-index: 10;
}
header nav {
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
}
header nav ul {
  list-style-type: none;
  margin-bottom: 0px !important;
  display: flex;
}
header nav ul li {
  display: block;
  margin: 25px;
}
header nav ul li a {
  color: #c3c3c3;
  font-size: 18px;
  text-decoration: none;
}
a:hover, .router-link-active {
  color: white;
  text-shadow: 0 0 20px rgb(255, 255, 255);
  transition: text-shadow 0.3s ease-in-out;
}
.hamburger {
  display: none;
  cursor: pointer;
  flex-direction: column;
  gap: 5px;
}
.hamburger .bar {
  width: 30px;
  height: 4px;
  background-color: #c3c3c3;
  border-radius: 5px;
}
header nav ul.open {
  display: block;
  position: absolute;
  top: 70px;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  text-align: left;
  padding: 20px;
  z-index: 1000;
}

@media (max-width: 768px) {
  header{
    text-align: left;
    padding: 20px !important;
  }
  header nav ul {
    display: none;
    flex-direction: column;
  }
  header nav ul.open {
    display: block;
  }
  .hamburger {
    display: flex;
  }
}
</style>
