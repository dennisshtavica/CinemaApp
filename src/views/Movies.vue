<script>
    import "../scss/components/_movieCard.scss"
    export default {
        data(){
            return{
                movies: [],
            }
        },
        methods: {
            async getMovies(){
                const res = await fetch("http://localhost:3005/movies");
                const finalResMovie = await res.json()
                this.movies = finalResMovie
                console.log(finalResMovie);
            },
            
        },
        mounted(){
            this.getMovies()
        }
    }

</script>


<template>
    <!-- <div v-for="movie in movies" :key="movie._id">
        <h1>{{ movie.title }}</h1>
    </div> -->
    <div>
        <div v-for="movie in movies" :key="movie._id" class="movieCard">
            <img :src="movie.image" alt="">
            <h4>{{ movie.title }}</h4>
        </div>
    </div>
</template>