<template>
  <header>
    <nav>
      <ul>
        <li 
          v-for="route in routes" 
          :key="route.id"
        >
          <router-link 
            class="route" 
            :to="route.path"
          >
            <strong>{{ route.text }}</strong>
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

  data(){
    return {
      routes
    }
  },
  mounted(){
    // console.log(JSON.stringify(routes));
  }
}
</script>

<style scoped>
header {
  /* background-color: #32435f; */
  padding: 20px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  /* z-index: 1000; */
  text-align: center;
  /* border-bottom: 1px solid white; */
}
header nav ul {
  list-style-type: none;
}
header nav ul li {
  display: inline;
  margin: 25px;
}
header nav ul li a {
  color: white;
  text-decoration: none;
  padding: 20px;
}
a:hover, .router-link-active{
  border-bottom: 2px solid white;
  color: white;
}
</style>