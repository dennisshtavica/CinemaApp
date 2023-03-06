<script>
import axios from "axios"
import "../../scss/pages/_signUp.scss"

export default {
    data(){
        return{
            users: [],
            username: '',
            email: '',
            password: ''
        }
    },

    methods: {
        submit(){
            if(this.$refs.form){
                return axios({
                    method: 'post',
                    data: {
                        username: this.username,
                        email: this.email,
                        password: this.password
                    },
                    url: "http://localhost:3005/register",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then((res) => {
                    const data = res.data;
                    this.users.push(data)
                    this.$router.push("/login")
                    this.username = "",
                    this.email = "",
                    this.password = ""
                })
                .catch(err => {
                    console.log(err);
                })
            }
        }
    }
}

</script>

<template>
  <div class="formCtn">
    <form action="" method="POST" ref="form"> 
      <input type="text" v-model="username" name="username" ref="username" placeholder="Username" />
      <input type="email" v-model="email" name="email" ref="email" placeholder="Email" />
      <input type="text" v-model="password" name="password" ref="password" placeholder="Password" />
      <button type="submit" @click.prevent="submit">Sign up</button>
    </form>
  </div>
</template>
