<template>
<v-app id="inspire">
    <v-navigation-drawer fixed v-model="drawer" temporary app>
        <v-list dense>
            <router-link to="/listofdays" class="side_bar_link">
                <v-list-tile>
                    <v-list-tile-action>
                        <v-icon>home</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>List Of Days</v-list-tile-content>
                </v-list-tile>
            </router-link>
            <router-link to="/meals" class="side_bar_link">
                <v-list-tile>
                    <v-list-tile-action>
                        <v-icon>key</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>Meals</v-list-tile-content>
                </v-list-tile>
            </router-link>
            <router-link to="/users" class="side_bar_link">
                <v-list-tile>
                    <v-list-tile-action>
                        <v-icon>mdi-account</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>Users</v-list-tile-content>
                </v-list-tile>
            </router-link>
            <router-link to="/options" class="side_bar_link">
                <v-list-tile>
                    <v-list-tile-action>
                        <v-icon>mdi-wrench</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>Options</v-list-tile-content>
                </v-list-tile>
            </router-link>
        </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" fixed app>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-btn flat to="/listofdays" v-if="isLoggedIn">Home</v-btn>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat to="/login" v-if="!isLoggedIn">Login</v-btn>
            <v-btn flat v-if="isLoggedIn" @click="logout">Logout</v-btn>
        </v-toolbar-items>
        <v-spacer />
    </v-toolbar>
    <v-content>
        <v-container fluid>
            <div id="app">
                <router-view />
            </div>
        </v-container>
    </v-content>
</v-app>
</template>

<script>
import router from './router';
import './assets/stylesheets/main.css';

export default {
    data: () => ({
        drawer: false,
        isLoggedIn: !!localStorage.getItem('user'),
    }),
    methods: {
        async logout() {
            await localStorage.removeItem('user');
            router.push({
                name: 'Login'
            });
        }
    }
};
</script>
