<script>

export default {
  name: "Profile",

  data() {
    return {
      user: {}
    };
  },

  methods: {
    async getUser() {
      const res = await fetch(`http://localhost:3005/users/${this.$route.params.id}`, {
        method: "get",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth")}`,
          "Content-Type": "application/json",    
        },

      });

      const data = await res.json()
      this.user = data
      console.log(this.user);
      // console.log(this.user._id);
  
    },
  },

   mounted() {
    // this.getUser(this.$route.params.id);
    this.getUser()
  },
};
</script>

<template>
  <div>
    <h1>Profile</h1>

    <div>{{ user.username }}</div>
  </div>
</template>
