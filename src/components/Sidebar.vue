<script>
import "../scss/layout/_sidebar.scss";
import "../scss/abstracts/_variables.scss";

export default {

  data() {
    return {
      user: {},
    };
  },

  methods: {
    async showProfile() {
      const userId = this.$route.params.id; // get user ID from authentication token
      const response = await fetch(`http://localhost:3005/users/${userId}`, {
        method: "get",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth")}`,
          "Content-Type": "application/json",
        },
      });
      const user = await response.json();
      this.user = user;
    },
  },

  mounted(){
    this.showProfile()
  }
};
</script>

<template>
  <section class="sidebar">
    <img src="../assets/images/CinemaApp.svg" class="logo" alt="" />
    <div class="sidebar-nav">
      <div class="sidebar-links">
        <router-link to="/dashboard">
          <img src="../assets/images/dashboards.png" alt="" />
          Dashboard
        </router-link>
      </div>
      <div class="sidebar-links">
        <router-link to="/">
          <img src="../assets/images/popcorn.png" alt="" />
          Movies
        </router-link>
      </div>
      <div class="sidebar-links">
        <router-link to="/users">
          <img src="../assets/images/group.png" alt="" />
          Users
        </router-link>
      </div>
      <div class="sidebar-links" style="color: white">
        <!-- <button @click="showProfile">Profile</button> -->
        <!-- <router-link :to="`/users/`">Profile</router-link> -->
        <!-- <router-link :to="{name: 'Profile', params: {id: userId}}">Profile</router-link> -->
        <!-- <router-link v-if="userId !== null && userId !== undefined" :to="{ name: 'Profile', params: { id: currentUser } }">View Profile</router-link> -->
        <router-link :to="'/users/' + user._id">Profile</router-link>
      </div>
    </div>
  </section>
</template>
