<template>
<v-app id="inspire">
    <v-card class="mx-auto" height="100%" width="300">
        <v-navigation-drawer fixed v-model="drawer" temporary absolute dark src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg" width="100%" permanent>
            <v-list>
                <router-link v-bind:to=" {name:'Tables' }" class="side_bar_link">
                    <v-list-item link>
                        <v-list-item-icon>
                            <v-icon>home</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>Home</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </router-link>
                <router-link v-bind:to="{ name: 'Meals' }" class="side_bar_link">
                    <v-list-item link>
                        <v-list-item-icon>
                            <v-icon>mdi-key</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>Meals</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </router-link>
                <router-link v-bind:to="{ name: 'Users' }" class="side_bar_link">
                    <v-list-item link>
                        <v-list-item-icon>
                            <v-icon>mdi-account</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>Users</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </router-link>
                <router-link v-bind:to="{ name: 'Options' }" class="side_bar_link">
                    <v-list-item link>
                        <v-list-item-icon>
                            <v-icon>mdi-wrench</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>Options</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </router-link>
            </v-list>
        </v-navigation-drawer>
    </v-card>
    <v-toolbar color="indigo" dark fixed app>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-btn flat v-bind:to="{ name: 'ListOfDays' }" v-if="isLoggedIn" @click="fetchMeals">Home</v-btn>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat :to="{ name:'Login' }" v-if="!isLoggedIn">Login</v-btn>
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
//import './assets/stylesheets/main.css';

export default {
    data() {
        return {
            drawer: false,
        }
    },
    props: {
        source: String,
    },

};
</script>
