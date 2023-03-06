<script>
// import { mapGetters } from "vuex";
import "../scss/components/_authBtns.scss";
import "../scss/layout/_navbar.scss";

export default {
  name: "NavBar",

  data() {
    return {
       isLogged: this.checkIfIsLogged()
    };
  },
  // created() {
  //   this.$bus.$on("logged", () => {
  //     this.isLogged = this.checkIfIsLogged();
  //   });
  // },

  methods: {
    logout(){
      window.localStorage.removeItem("auth")
      this.isLogged = this.checkIfIsLogged();
      this.$router.push("/")
    },

    checkIfIsLogged() {
      let token = window.localStorage.getItem("auth")
      if (token) {
        return true;
      } else {
        return false;
      }
    },
  },

  // computed: {
  //   ...mapGetters({
  //     user: "user"
  //   })
  // }
};
</script>

<template>
  <header>
    <div class="filterGenres">
      <input type="text" />
    </div>

    <div class="navLink">
      <div v-if="isLogged === true">
        <div class="authLogIn">
          <!-- <router-link to="/users/logout"> Logout </router-link> -->
          <div @click.prevent="logout">Logout</div>
        </div>
        <!-- <div style="color: white">{{ user.username }}</div> -->
      </div>

      <div v-if="isLogged === false">
        <div class="authSignUp">
          <router-link to="/signUp"> Sign up </router-link>
        </div>
        <div class="authLogIn">
          <router-link to="/login"> Log in </router-link>
        </div>
      </div>
    </div>
  </header>
</template>
