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
  background: linear-gradient(to bottom, rgba(200, 200, 200, 0.9), rgba(200, 200, 200, 0.9));
  padding: 15px 0px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  /* border-bottom: 1px solid white; */
}
header nav ul {
  list-style-type: none;
  margin-bottom: 0px !important;
}
header nav ul li {
  display: inline;
  margin: 25px;
}
header nav ul li a {
  color: #1E2A47;
  text-decoration: none;
}
a:hover, .router-link-active{
  border-bottom: 2px solid #1E2A47;
}
</style>