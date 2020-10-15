<template>
<v-app id="inspire">
    <v-row justify="center">
        <v-card width="600px" height="570px">
            <v-toolbar color="primary" dark flat>
                <v-toolbar-title>User Profile</v-toolbar-title>
                <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field label="Name*" v-model="name" :rules="generalRules" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label="Username*" v-model="username" :rules="generalRules" required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label="Password*" type="password" v-model="password" :rules="generalRules" required></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-select :items="['regular', 'user manager', 'admin',]" label="Role*" v-model="role" :rules="generalRules" required></v-select>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-text-field label="Daily Calorie Limit*" v-model="dailyCalorieLimit" :rules="generalRules" required></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
                <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <!--v-btn @click="clear" color="warning">Clear
                </v-btn!-->
                <v-btn @click="submit" color="primary">Register
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-row>
</v-app>
</template>

<script>
import {
    register
} from '@/api';

export default {
    data() {
        return {
            name: '',
            username: '',
            password: '',
            role: '',
            dailyCalorieLimit: '',
            generalRules: [
                v => !!v || 'This area is required',
            ],
        };
    },
    methods: {
        async submit() {
            const {
                data,
                error
            } = await register({
                name: this.name,
                username: this.username,
                password: this.password,
                role: this.role,
                dailyCalorieLimit: this.dailyCalorieLimit,
            });
            if (error) {
                // hatayı handle et
                return;
            }
            if (data) {
                // data'dan tokeni alıp local storage'a koy
                // route'u ana sayfaya yonlendir
                // gerekiyorsa store'u doldur
            }
        },
        // clear() {
        //     this.$refs.form.reset();
        // },
    },
    components: {}
};
</script>
