<script>
import NavBar from "../components/NavBar.vue"
import Movies from "./Movies.vue"

export default{
    components: {
        NavBar,
        Movies
    }
}
</script>


<template>
    <div>
        <NavBar/>
        <Movies/>
    </div>
</template>