<template>
    <Sidebar />
    <router-view></router-view>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";

export default {
    name: "App",
    components: { Sidebar },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    display: flex;
}
.main {
    flex-grow: 1;
    margin: 0;
}
.pill {
    background-color: #0062ffcf;
    color: white;
    margin-right: 5px;
    padding: 1px 10px;
    border-radius: 10px;
    font-size: 12px;
    font-weight: bold;
}

@media only screen and (max-width: 1024px) {
    .pill {
        display: inline-block;
        width: fit-content;
        margin-bottom: 5px;
    }
}

@media only screen and (max-width: 768px) {
    #app {
        flex-direction: column;
    }
}
</style>
