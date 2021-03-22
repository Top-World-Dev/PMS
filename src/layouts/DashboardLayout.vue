<template>
    <div>
        <div id="nav">
            <dashboard-navigation></dashboard-navigation>
        </div>
        <b-container fluid class="mt-5">
            <router-view />
        </b-container>
    </div>
</template>

<script>
import DashboardNavigation from "../components/DashboardNavigation.vue";

export default {
    components: {DashboardNavigation}
}
</script>


<style scoped>
#dashboard {
    display: flex;
    padding: 0px !important;
    margin: 0px !important;
    flex-direction: row;
    flex-wrap: wrap;
}
aside {
    min-width: 13%;
    margin-right: 1%;
    display: flex;
    flex-direction: column;
    height: 100vh;
    z-index: 999999;
    border-right: 1px solid #17a2b8;
    
}

.navigation-item {
    align-content: center;
    justify-content: center;
    padding: 7px;
    background: rgb(15, 15, 15);
    color: cornsilk;
    transition: 0.3s;
    cursor: pointer;
}

.navigation-item:first-child {
    display: flex;
    margin-bottom: 1rem;
    border: none !important;
    font-size: 18pt;
    padding: 0.5rem 1rem;
    min-height: 56px;
}

.navigation-item:hover:first-child {
 background: chocolate;
color: #ffffff;
}
.navigation-item:hover {
    background: rgb(29, 29, 29);
}

</style>