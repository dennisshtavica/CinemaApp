<script setup>
    import Sidebar from "./components/Sidebar.vue"
    import NavBar from "./components/NavBar.vue"
    import "./scss/layout/_sidebarHome.scss"
</script>

<template>
    <div class="displayViews">
        <Sidebar/>
        <NavBar/>
        <router-view></router-view>
    </div>
</template>
