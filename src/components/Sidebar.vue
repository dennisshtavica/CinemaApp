<script setup>
  import "../scss/layout/_sidebar.scss";
  import "../scss/abstracts/_variables.scss";
</script>

<template>
  <section class="sidebar">
    <img src="../assets/images/CinemaApp.svg" alt="" />
    <div class="sidebar-nav">
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/movies">Movies</router-link>
    </div>
  </section>
</template>
