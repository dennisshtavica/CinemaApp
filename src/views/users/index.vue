<script>
// import axios from "axios";
import "../../scss/pages/_usersTable.scss";

export default {
  data() {
    return {
      listUsers: [],
    };
  },
  methods: {
    async getData() {
      // const token = window.localStorage.getItem("auth");
      // return axios({
      //   method: "get",
      //   url: "http://localhost:3005/users",
      //   headers: {
      //     // Authorization: `Bearer ${token}`,
      //     "Content-Type": "application/json",
      //   },
      // }).then((res) => {
      //   this.listUsers = res;
      //   // this.current_user = res.data.current_user
      //   console.log(res);
      // });
      const res = await fetch("http://localhost:3005/users", {
        method: "get",
        headers: {
          Authorization: `Bearer ${localStorage.getItem('auth')}`, 
          "Content-Type": "application/json",
        },
      });
      const finalRes = await res.json();
      this.listUsers = finalRes;
      // this.user = finalRes;
      console.log(finalRes);
      // console.log(this.user);
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<template>
  <div class="usersTable">
    <h1>Users Table</h1>

    <!-- <h4 v-if="user">Hi {{ user[0].username }}</h4>
    <h4 v-if="!user">You are not logged in</h4> -->

    <div class="flexUsers">
      <div class="usernameDiv">
        <h3>Username</h3>
        <div v-for="user in listUsers" :key="user._id">
          <p>{{ user.username }}</p>
        </div>
      </div>
      <div>
        <h3>Email</h3>
        <div v-for="user in listUsers" :key="user._id">
          <p>{{ user.email }}</p>
        </div>
      </div>
    </div>

    <!-- <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in listUsers" :key="user._id">
          <td class="usernameRow">{{ user.username }}</td>
          <td class="emailRow">{{ user.email }}</td>
          <td>
            <a href="{{ `users/${user._id}/_method=DELETE` }}">Delete</a>
          </td>
        </tr>
      </tbody>
    </table> -->
  </div>
</template>
