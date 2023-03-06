<script>
import Sidebar from "./components/Sidebar.vue";
// import NavBar from "./components/NavBar.vue";
import "./scss/layout/_sidebarHome.scss";
import "./scss/layout/_headerMovies.scss";

export default {
  components: {
    Sidebar,
    // NavBar,
  },

};
</script>

<template>
  <div class="displayViews">
    <div class="sideBarCtn">
      <Sidebar />
    </div>
    <div class="headerMoviesCtn">
      <!-- <NavBar /> -->
      <router-view></router-view>
    </div>
  </div>
</template>
