<template>
<nav>
    <v-app class="container" id="app">
        <Header id="nav" />
        <router-view />
        <Footer />
    </v-app>
</nav>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';

export default {
    components: {
        Header,
        Footer,
    }
}
</script>

<style lang="scss">
#app {
    text-align: center;
    background-image: "./assets/background.jpg";
    font-family: Avenir, Helvetica, Arial, sans-serif;
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
