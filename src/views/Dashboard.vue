<script setup>
    import "../scss/pages/_dashboard.scss"
</script>

<template>
    <div class="dashboard">
        <h1>DASHBOARD</h1>
        <h4>Add a movie</h4>
        <div class="form-rect">
            <form action="/createMovie" method="post">
                <input type="text" name="title" value="" placeholder="Title">
                <textarea name="description" id="" cols="30" rows="10" placeholder="Description"></textarea>
                <input type="text" name="starts" id="" placeholder="Starts">
                <input type="text" name="duration" id="" placeholder="Duration">
                <input type="text" name="genre" id="" placeholder="Genre">
                <input type="text" name="actors" id="" placeholder="Actors">
                <input type="submit" name="submit">
            </form>
        </div>
    </div>
</template>
