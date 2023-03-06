<script>
import "../scss/pages/_dashboard.scss";
import axios from "axios";

export default {
  data() {
    return {
      title: "",
      description: "",
      starts: null,
      duration: null,
      genre: "",
      actors: "",
      image: null,
      ticketPrice: null,
    };
  },
  methods: {
    submit() {
      if (this.$refs.form) {
        return axios({
          method: "post",
          data: {
            title: this.title,
            description: this.description,
            starts: this.starts,
            duration: this.duration,
            genre: this.genre,
            actors: this.actors,
            image: this.image,
            ticketPrice: this.ticketPrice,
          },
          url: "http://localhost:3005/movies",
          headers: {
            "Content-Type": "application/json",
          },
        });
      }
    },
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      // var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
  },
};
</script>

<template>
  <div class="dashboard">
    <h1>DASHBOARD</h1>
    <h4>Add a movie</h4>
    <div class="form-rect">
      <form action="" method="post" ref="form" enctype="multipart/form-data">
        <input type="text" name="title" v-model="title" placeholder="Title" />
        <textarea
          name="description"
          id=""
          v-model="description"
          cols="30"
          rows="10"
          placeholder="Description"
        ></textarea>
        <input
          type="date"
          name="starts"
          v-model="starts"
          id=""
          placeholder="Starts"
        />
        <input
          type="number"
          name="duration"
          v-model="duration"
          id=""
          placeholder="Duration"
        />
        <input
          type="text"
          name="genre"
          v-model="genre"
          id=""
          placeholder="Genre"
        />
        <input
          type="text"
          name="actors"
          v-model="actors"
          id=""
          placeholder="Actors"
        />
        <input type="file" @change="onFileChange" name="image" accept="image/*" />
        <input
          type="number"
          name="ticketPrice"
          v-model="ticketPrice"
          placeholder="Ticket Price"
        />
        <input type="submit" @click.prevent="submit" name="submit" />
      </form>
    </div>
  </div>
</template>
