<template>
<v-app id="inspire">
    <v-main>
        <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="8" md="4">
                    <v-card class="elevation-12">
                        <v-toolbar color="primary" dark flat>
                            <v-toolbar-title>Login form</v-toolbar-title>
                            <v-spacer></v-spacer>
                        </v-toolbar>
                        <v-card-text>
                            <v-form>
                                <v-text-field label="Username" v-model="username" prepend-icon="mdi-account" type="text" :rules="generalRules"></v-text-field>
                                <v-text-field label="Password" v-model="password" prepend-icon="mdi-lock" type="password" :rules="generalRules"></v-text-field>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn @click="submit" color="primary">Login</v-btn>
                        </v-card-actions>
                    </v-card>
                    <v-spacer></v-spacer>
                    <v-row align="center" justify="center">
                        <blockquote class="blockquote">Don't have an account?</blockquote>
                        <v-spacer></v-spacer>
                        <router-link to="/register">
                            <v-btn color="primary" dark>Register</v-btn>
                        </router-link>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</v-app>
</template>

<script>
import {
    login
} from '@/api';

export default {
    data() {
        return {
            username: '',
            password: '',
            generalRules: [
                v => !!v || 'This value is required',
            ],
        };
    },
    methods: {
        async submit() {
            await login({
                username: this.username,
                password: this.password,
            });
        },
        // clear() {
        //     this.$refs.form.reset();
        // },
    },
    components: {}
};
</script>
