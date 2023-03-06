<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async submit() {
      return axios({
        method: "post",
        data: {
          email: this.email,
          password: this.password,
        },
        headers: {
          "Content-Type": "application/json"
        },
        url: "http://localhost:3005/login",
      }).then((res) => {
        window.localStorage.setItem("auth", res.data.token)
        this.$router.push("/")
        console.log(res);
      });
    },
  },
};
</script>

<template>
  <div>
    <form action="" method="post" ref="form">
      <input type="email" v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Password" />
      <button type="submit" @click.prevent="submit">Log in</button>
    </form>
  </div>
</template>
