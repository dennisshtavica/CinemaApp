<script>
    // import MovieService from "../MovieService"
    

    // export default {
    //     data(){
    //         return {
    //             movies: [],
    //             error: ''
    //         }
    //     },
    //     async created(){
    //         try{
    //             this.movies = await MovieService.getMovies();
    //         }
    //         catch(err){
    //             this.error = err.message
    //         }
    //     }
    // }
</script>


<template>
    <div v-for="movie in movies" :key="movie._id">
        <h1>{{ movie.title }}</h1>
    </div>
</template>