<template>
<nav>
    <div id="app">
        <div id="logout">
            <v-btn color="red" to="/login" v-if="isLoggedIn" @click="logout" small>
                <v-icon>mdi-close-circle</v-icon>
            </v-btn>
        </div>
        <div id="header">
            <router-link to="/meals">Meals</router-link><span> | </span>
            <router-link to="/listofdays">List Of Days</router-link><span v-if="user.role == 'admin' || user.role == 'user manager' "> | </span>
            <router-link v-if="user.role == 'admin' || user.role == 'user manager' " to="/users">Users</router-link>
        </div>
        <div id="user">
            <router-link to="/password">{{user.name}}</router-link>
        </div>
    </div>
</nav>
</template>

<script>
export default {
    data: () => ({}),

    computed: {
        user() {
            return this.$store.getters.user;
        },
        isLoggedIn() {
            return this.$store.getters.isLoggedIn;
        }
    },
    methods: {
        async logout() {
            this.$store.commit('LOGOUT');
        }
    }
}
</script>

<style lang="scss" scoped>
#header {
    width: 450px;
    text-align: left;
    float: left;
}

#user {
    width: 200px;
    float: left;
    text-align: center;
}

#logout {
    width: 50px;
    text-align: right;
    float: right;
}
</style>
