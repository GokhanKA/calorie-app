<template>
<nav class="navbar navbar-light">
    <div class="container" id="app">
        <div id="nav">
            <router-link to="/meals">Meals</router-link> |
            <router-link to="/listofdays">ListOfDays</router-link> |
            <router-link to="/users">Users</router-link>
        </div>
        <div>
            <v-btn to="/login" v-if="isLoggedIn" @click="logout" color="error">
                <v-icon>mdi-off</v-icon>
            </v-btn>
        </div>
        <router-view />
    </div>
</nav>
</template>

<script>
export default {
    data: () => ({
        isLoggedIn: !!localStorage.getItem('user'),
    }),
    methods: {
        async logout() {
            await localStorage.removeItem('user');
        }
    },
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
